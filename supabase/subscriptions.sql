create table if not exists public.subscriptions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles(id) on delete cascade,
    paddle_subscription_id text,
    paddle_customer_id text,
    paddle_transaction_id text,
    plan text not null default 'none'
        check (plan in ('none', 'basic', 'pro', 'elite')),
    billing_period text
        check (billing_period in ('monthly', 'yearly')),
    status text not null default 'unknown',
    event_type text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (user_id)
);

alter table public.subscriptions enable row level security;

drop policy if exists "Users can read their own subscription." on public.subscriptions;
create policy "Users can read their own subscription."
on public.subscriptions
for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);
