-- Run this in the same Supabase project used by D:\vextron.
-- It lets only profiles whose role is 'admin' read the safe profile rows
-- needed by the owner dashboard.

alter table public.profiles enable row level security;

drop policy if exists "Admins can read dashboard profiles." on public.profiles;
create policy "Admins can read dashboard profiles."
on public.profiles
for select
to authenticated
using (
  exists (
    select 1
    from public.profiles admin_profile
    where admin_profile.id = (select auth.uid())
      and admin_profile.role = 'admin'
  )
);

-- After running this, make your owner account admin:
-- update public.profiles
-- set role = 'admin'
-- where email = 'YOUR_OWNER_EMAIL@example.com';
