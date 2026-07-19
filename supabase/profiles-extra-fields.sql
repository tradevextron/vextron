-- Run this in Supabase SQL editor if the profiles table already exists.
-- It adds the extra Get Started fields and refreshes the signup trigger.

alter table public.profiles
    add column if not exists full_name text,
    add column if not exists phone text,
    add column if not exists contact_handle text,
    add column if not exists risk_agreement boolean not null default false,
    add column if not exists risk_agreement_at timestamptz;

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
