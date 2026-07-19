-- Run this in the Supabase SQL editor.
-- It stores only safe account profile data. Do not store trading account passwords,
-- broker credentials, card data, bank data, or identity documents here.

create table if not exists public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    email text not null,
    full_name text,
    phone text,
    contact_handle text,
    selected_plan text not null default 'none'
        check (selected_plan in ('none', 'basic', 'pro', 'elite')),
    risk_agreement boolean not null default false,
    risk_agreement_at timestamptz,
    role text not null default 'member'
        check (role in ('member', 'admin')),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.profiles
    add column if not exists full_name text,
    add column if not exists phone text,
    add column if not exists contact_handle text,
    add column if not exists risk_agreement boolean not null default false,
    add column if not exists risk_agreement_at timestamptz;

alter table public.profiles enable row level security;

drop policy if exists "Users can read their own profile." on public.profiles;
create policy "Users can read their own profile."
on public.profiles
for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id);

drop policy if exists "Users can update safe fields on their own profile." on public.profiles;
create policy "Users can update safe fields on their own profile."
on public.profiles
for update
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id)
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.profiles (
        id,
        email,
        full_name,
        phone,
        contact_handle,
        selected_plan,
        risk_agreement,
        risk_agreement_at
    )
    values (
        new.id,
        new.email,
        nullif(new.raw_user_meta_data ->> 'full_name', ''),
        nullif(new.raw_user_meta_data ->> 'phone', ''),
        nullif(new.raw_user_meta_data ->> 'contact_handle', ''),
        coalesce(nullif(new.raw_user_meta_data ->> 'selected_plan', ''), 'none'),
        coalesce((new.raw_user_meta_data ->> 'risk_agreement')::boolean, false),
        nullif(new.raw_user_meta_data ->> 'risk_agreement_at', '')::timestamptz
    )
    on conflict (id) do update
    set
        email = excluded.email,
        full_name = excluded.full_name,
        phone = excluded.phone,
        contact_handle = excluded.contact_handle,
        selected_plan = excluded.selected_plan,
        risk_agreement = excluded.risk_agreement,
        risk_agreement_at = excluded.risk_agreement_at,
        updated_at = now();

    return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
