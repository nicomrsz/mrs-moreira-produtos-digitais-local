-- MRS MOREIRA store foundation. Run in the Supabase SQL editor.
create extension if not exists pgcrypto;

create table if not exists public.admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'admin' check (role in ('admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null,
  summary text not null default '',
  description text not null default '',
  image_url text,
  benefits jsonb not null default '[]'::jsonb,
  includes jsonb not null default '[]'::jsonb,
  delivery text not null default '',
  price_cents integer check (price_cents is null or price_cents >= 0),
  available boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  product_id uuid not null references public.products(id),
  product_snapshot jsonb not null,
  buyer_name text not null,
  buyer_email text not null,
  buyer_details jsonb not null default '{}'::jsonb,
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'BRL',
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled', 'refunded')),
  provider text not null default 'mercadopago',
  provider_payment_id text,
  provider_preference_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  provider text not null,
  provider_event_id text,
  provider_payment_id text,
  status text not null,
  amount_cents integer,
  raw_event jsonb,
  processed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (provider, provider_event_id)
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists orders_status_idx on public.orders (status);
create index if not exists payments_order_id_idx on public.payments (order_id);

alter table public.admin_profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.payments enable row level security;

-- Public storefront can only read products explicitly published as available.
create policy "Public can read available products" on public.products
  for select to anon, authenticated using (available = true and price_cents is not null);

-- Authenticated administrators can manage the catalog and inspect sales.
create policy "Admins manage products" on public.products
  for all to authenticated
  using (exists (select 1 from public.admin_profiles a where a.user_id = auth.uid() and a.role = 'admin'))
  with check (exists (select 1 from public.admin_profiles a where a.user_id = auth.uid() and a.role = 'admin'));

create policy "Users read own admin profile" on public.admin_profiles
  for select to authenticated using (user_id = auth.uid());

create policy "Admins read orders" on public.orders
  for select to authenticated
  using (exists (select 1 from public.admin_profiles a where a.user_id = auth.uid() and a.role = 'admin'));

create policy "Admins read payments" on public.payments
  for select to authenticated
  using (exists (select 1 from public.admin_profiles a where a.user_id = auth.uid() and a.role = 'admin'));

-- Do not add public INSERT/UPDATE policies to orders or payments.
-- Checkout and webhook handlers must use the service-role key on the server,
-- validate the product price from the database, and process webhook events idempotently.
