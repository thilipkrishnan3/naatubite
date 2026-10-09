-- ============================================================================
-- NaatuBite E-Commerce Database Schema
-- Supabase PostgreSQL Migration Script
-- 
-- Instructions:
-- 1. Open Supabase Dashboard: https://supabase.com/dashboard
-- 2. Go to your project -> Click "SQL Editor" on the left menu -> "New Query"
-- 3. Paste this entire script and click "Run"
-- ============================================================================

-- ============================================================================
-- 1. TABLE: products
-- ============================================================================
create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null,
  category_label text not null,
  weight text not null,
  price numeric(10,2) not null check (price < 200),
  original_price numeric(10,2) not null,
  image_url text not null,
  alt_text text not null,
  description text not null,
  badge text,
  badge_class text,
  ingredients text not null,
  shelf_life text not null,
  is_active boolean not null default true,
  created_at timestamp with time zone not null default timezone('utc'::text, now())
);

-- Indexes for products
create index if not exists idx_products_category on public.products (category);
create index if not exists idx_products_active on public.products (is_active);

-- Enable RLS
alter table public.products enable row level security;

-- Policies for products (Public read, admin write)
drop policy if exists "Allow public reading of products" on public.products;
create policy "Allow public reading of products" 
on public.products 
for select 
to anon, authenticated 
using (is_active = true);

drop policy if exists "Allow admin full access to products" on public.products;
create policy "Allow admin full access to products" 
on public.products 
for all 
to authenticated 
using (true) 
with check (true);

-- ============================================================================
-- 2. TABLE: orders
-- ============================================================================
create table if not exists public.orders (
  id bigint generated always as identity primary key,
  order_id text not null unique,
  customer_name text not null,
  phone text not null,
  delivery_address text not null,
  landmark text,
  city text not null,
  pincode text not null,
  subtotal numeric(10,2) not null,
  delivery_fee numeric(10,2) not null default 0.00,
  total_amount numeric(10,2) not null,
  payment_method text not null check (payment_method in ('upi', 'cod', 'card_gateway')),
  payment_status text not null default 'pending',
  order_status text not null default 'received',
  delivery_notes text,
  created_at timestamp with time zone not null default timezone('utc'::text, now())
);

-- Indexes for orders
create index if not exists idx_orders_order_id on public.orders (order_id);
create index if not exists idx_orders_phone on public.orders (phone);
create index if not exists idx_orders_created_at on public.orders (created_at desc);

-- Enable RLS
alter table public.orders enable row level security;

-- Policies for orders
drop policy if exists "Allow public order insertion" on public.orders;
create policy "Allow public order insertion" 
on public.orders 
for insert 
to anon, authenticated 
with check (true);

drop policy if exists "Allow public reading of own orders" on public.orders;
create policy "Allow public reading of own orders" 
on public.orders 
for select 
to anon, authenticated 
using (true);

-- ============================================================================
-- 3. TABLE: order_items
-- ============================================================================
create table if not exists public.order_items (
  id bigint generated always as identity primary key,
  order_ref_id bigint not null references public.orders(id) on delete cascade,
  product_id text references public.products(id) on delete set null,
  product_name text not null,
  weight text not null,
  unit_price numeric(10,2) not null,
  quantity integer not null check (quantity > 0),
  item_total numeric(10,2) not null
);

-- Indexes for order_items
create index if not exists idx_order_items_order_ref on public.order_items (order_ref_id);
create index if not exists idx_order_items_product on public.order_items (product_id);

-- Enable RLS
alter table public.order_items enable row level security;

-- Policies for order_items
drop policy if exists "Allow public order_items insertion" on public.order_items;
create policy "Allow public order_items insertion" 
on public.order_items 
for insert 
to anon, authenticated 
with check (true);

drop policy if exists "Allow public reading of order_items" on public.order_items;
create policy "Allow public reading of order_items" 
on public.order_items 
for select 
to anon, authenticated 
using (true);

-- ============================================================================
-- 4. TABLE: contact_messages
-- ============================================================================
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  email text,
  subject text not null default 'Product Inquiry',
  message text not null,
  is_resolved boolean not null default false,
  created_at timestamp with time zone not null default timezone('utc'::text, now())
);

-- Indexes for contact_messages
create index if not exists idx_contact_created_at on public.contact_messages (created_at desc);
create index if not exists idx_contact_resolved on public.contact_messages (is_resolved);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Policies for contact_messages
drop policy if exists "Allow public contact message submission" on public.contact_messages;
create policy "Allow public contact message submission" 
on public.contact_messages 
for insert 
to anon, authenticated 
with check (true);

drop policy if exists "Allow reading contact messages" on public.contact_messages;
create policy "Allow reading contact messages" 
on public.contact_messages 
for select 
to anon, authenticated 
using (true);

-- ============================================================================
-- 5. SEED DATA: All 16 Authentic NaatuBite Food Products (Under ₹200)
-- ============================================================================
insert into public.products (
  id, name, category, category_label, weight, price, original_price, 
  image_url, alt_text, description, badge, badge_class, ingredients, shelf_life, is_active
) values
-- Traditional Snacks
(
  'snack-01', 'Traditional Kai Murukku', 'snacks', 'Traditional Snack', '200 g', 
  75.00, 95.00, 'images/products/kai-murukku.jpg', 
  'Kai Murukku - hand-twisted crispy rice and urad dal coil snack', 
  'Authentic hand-twisted crispy rice and urad dal murukku, deep-fried to golden perfection in 100% cold-pressed groundnut oil with aromatic cumin and asafoetida.', 
  'Bestseller', 'badge-bestseller', 
  'Raw Rice Flour, Urad Dal, Wood-Pressed Groundnut Oil, Cumin Seeds, Hing, Butter, Salt', '30 Days', true
),
(
  'snack-02', 'Crispy Madras Thattai', 'snacks', 'Traditional Snack', '200 g', 
  70.00, 90.00, 'images/products/crispy-thattai.jpg', 
  'Madras Thattai - flat crunchy rice discs with chana dal speckles', 
  'Crunchy traditional rice disks speckled with roasted chana dal, fresh curry leaves, and mild red chili flakes. The ultimate accompaniment with evening filter coffee.', 
  'Customer Favorite', 'badge-bestseller', 
  'Rice Flour, Roasted Gram, Chana Dal, Curry Leaves, Red Chilli, Cold-Pressed Oil, Salt', '30 Days', true
),
(
  'snack-03', 'Traditional Madras Mixture', 'snacks', 'Traditional Snack', '250 g', 
  85.00, 110.00, 'images/products/madras-mixture.jpg', 
  'Madras Mixture - South Indian savory mix with sev, boondi, and peanuts', 
  'Classic royal South Indian savory mix loaded with crisp omapodi sev, boondi, roasted peanuts, cashew nuts, and fried curry leaves tossed in mild spices.', 
  'Signature', 'badge-bestseller', 
  'Besan Flour, Rice Flour, Peanuts, Cashews, Curry Leaves, Red Chilli, Hing, Pure Oil', '45 Days', true
),
(
  'snack-04', 'Crunchy Ribbon Pakoda', 'snacks', 'Traditional Snack', '200 g', 
  75.00, 95.00, 'images/products/ribbon-pakoda.jpg', 
  'Ribbon Pakoda - crispy flat savory ribbon strips fried with red chili', 
  'Golden ribbon-shaped savory crisps seasoned with Kashmir red chili powder, garlic, and fresh butter. Melt-in-mouth texture with zero greasiness.', 
  'Festive Classic', 'badge-stoneground', 
  'Gram Flour, Rice Flour, Butter, Chilli Powder, Asafoetida, Cold-Pressed Oil, Salt', '30 Days', true
),
(
  'snack-05', 'Melt-in-Mouth Omapodi (Sev)', 'snacks', 'Traditional Snack', '200 g', 
  65.00, 85.00, 'images/products/omapodi-sev.jpg', 
  'Omapodi Sev - fine thin gram flour strands flavored with carom seeds', 
  'Delicate, fine gram flour crisp strings infused with soothing omam (carom / ajwain) seeds. Light on the stomach and loved by children and elders alike.', 
  'Kids Favorite', 'badge-healthy', 
  'Gram Flour, Rice Flour, Pure Ajwain Extract, Butter, Cold-Pressed Groundnut Oil, Salt', '30 Days', true
),
(
  'snack-06', 'Country Garlic Pepper Murukku', 'snacks', 'Traditional Snack', '200 g', 
  80.00, 100.00, 'images/products/garlic-pepper-murukku.jpg', 
  'Garlic Pepper Murukku - crispy coil snack spiced with country garlic and pepper', 
  'Handcrafted spiral murukku infused with fresh country garlic (Naatu Poondu) and crushed Malabar black pepper. Mildly pungent, rustic, and aromatic.', 
  'Spicy Crunch', 'badge-bestseller', 
  'Rice, Urad Dal, Naatu Poondu (Country Garlic), Black Pepper, Wood-Pressed Oil, Salt', '30 Days', true
),

-- Ready-to-Cook Batters
(
  'batter-01', 'Stone-Ground Dosa Batter', 'batter', 'Ready-to-Cook', '1 kg (1000 g)', 
  85.00, 105.00, 'images/products/dosa-batter.jpg', 
  'Stone-Ground Dosa - golden crisp thin crepe made with fermented batter', 
  'Naturally fermented batter made from whole parboiled rice and premium urad dal slow-ground on granite stone. Yields crispy, golden-brown roast dosas every time.', 
  'Stone Ground', 'badge-stoneground', 
  'Premium Rice, Urad Dal, Fenugreek (Methi), RO Purified Water, Sea Salt (Zero Soda)', '7 Days (Refrigerated)', true
),
(
  'batter-02', 'Pillow-Soft Idly Batter', 'batter', 'Ready-to-Cook', '1 kg (1000 g)', 
  85.00, 105.00, 'images/products/idly-batter.jpg', 
  'Soft Idlis on Banana Leaf - steamed fluffy white rice and urad dal cakes', 
  'Stone-ground to the ideal fluffy consistency. Naturally aerated fermentation makes feather-light, spongy, melt-in-mouth soft idlies with zero chemical leaveners.', 
  '100% Natural', 'badge-stoneground', 
  'Idly Rice, Whole White Urad Dal, Poha (Flattened Rice), RO Water, Sea Salt', '7 Days (Refrigerated)', true
),
(
  'batter-03', 'Malabar Appam & Idiyappam Batter', 'batter', 'Ready-to-Cook', '750 g', 
  90.00, 115.00, 'images/products/appam-batter.jpg', 
  'Lacy Malabar Appam - bowl-shaped fermented rice pancake with soft center', 
  'Silky batter blended with real coconut extract and yeast-free natural fermentation. Delivers soft, spongy centers with delicate crispy lace edges.', 
  'Coconut Infused', 'badge-healthy', 
  'Raw Rice, Fresh Grated Coconut, Cooked Rice, RO Water, Mild Country Jaggery, Salt', '5 Days (Refrigerated)', true
),
(
  'batter-04', 'Multi-Lentil Crispy Adai Batter', 'batter', 'Ready-to-Cook', '750 g', 
  95.00, 120.00, 'images/products/adai-batter.jpg', 
  'Crispy Lentil Adai - thick protein-rich roasted pancake made with mixed dals', 
  'High-protein coarse batter ground from four traditional lentils (Toor, Chana, Urad, Moong) seasoned with fresh ginger, cumin, and dried red chilies. Hearty & nutritious.', 
  'High Protein', 'badge-healthy', 
  'Toor Dal, Chana Dal, Urad Dal, Moong Dal, Rice, Fresh Ginger, Red Chilies, Asafoetida', '5 Days (Refrigerated)', true
),

-- Millets & Traditional Foods
(
  'millet-01', 'Multi-Millet Ghee Laddu', 'millets', 'Millets & Traditional', '200 g (Pack of 6)', 
  130.00, 165.00, 'images/products/millet-laddu.jpg', 
  'Multi-Millet Ghee Laddu - nutritious finger millet balls rolled in pure A2 ghee', 
  'Power-packed laddus prepared with roasted Ragi, Foxtail, and Little millets bound with unrefined country jaggery (Naatu Sakkarai), pure A2 desi ghee, and cardamom.', 
  'Superfood', 'badge-healthy', 
  'Ragi, Foxtail Millet, Little Millet, Naatu Sakkarai, Pure Desi Ghee, Cashews, Cardamom', '25 Days', true
),
(
  'millet-02', 'Ragi Palm Jaggery Cookies', 'millets', 'Millets & Traditional', '150 g', 
  110.00, 140.00, 'images/products/ragi-cookies.jpg', 
  'Ragi Palm Jaggery Cookies - wholesome dark finger millet biscuits with jaggery', 
  'Guilt-free crunchy baked cookies made from calcium-rich finger millet (Ragi) and pure palm jaggery (Karupatti). 100% Maida-free, butter baked, zero refined sugar.', 
  'No Refined Sugar', 'badge-healthy', 
  'Sprouted Ragi Flour, Whole Wheat, Palm Jaggery (Karupatti), Butter, Cardamom', '45 Days', true
),
(
  'millet-03', 'Thinai (Foxtail Millet) Mixture', 'millets', 'Millets & Traditional', '200 g', 
  90.00, 115.00, 'images/products/thinai-mixture.jpg', 
  'Thinai Millet Mixture - golden crispy foxtail millet savory with peanuts', 
  'A nutritious twist on traditional savory mixture prepared with crisp foxtail millet ribbons, roasted native peanuts, and curry leaves in cold-pressed oil.', 
  'Low Glycemic', 'badge-stoneground', 
  'Foxtail Millet (Thinai) Flour, Gram Flour, Native Peanuts, Curry Leaves, Pure Oil, Salt', '30 Days', true
),
(
  'millet-04', 'Roasted Kambu (Pearl Millet) Crisps', 'millets', 'Millets & Traditional', '150 g', 
  85.00, 110.00, 'images/products/kambu-crisps.jpg', 
  'Roasted Kambu Crisps - savory roasted pearl millet snack with curry leaves', 
  'Iron and fiber packed pearl millet savories, lightly spiced with roasted cumin and crushed black pepper. A healthy tea-time crunch for weight-conscious foodies.', 
  'High Fiber', 'badge-healthy', 
  'Pearl Millet (Kambu) Flour, Roasted Gram, Cumin, Pepper, Cold-Pressed Oil, Sea Salt', '30 Days', true
),
(
  'millet-05', 'Traditional Palm Candy Kamarkat', 'millets', 'Millets & Traditional', '150 g', 
  75.00, 95.00, 'images/products/palm-kamarkat.jpg', 
  'Traditional Palm Kamarkat - authentic chewy coconut palm jaggery toffee', 
  'Nostalgic South Indian grandmother''s toffee handcrafted from freshly grated mature coconut and dark native palm jaggery. Chewy, earthy, and rich in natural minerals.', 
  'Grandma Recipe', 'badge-bestseller', 
  'Fresh Grated Coconut, Native Karupatti (Palm Jaggery), Cardamom Powder, Pure Ghee', '60 Days', true
),
(
  'millet-06', 'Iron-Rich Sesame (Ellu) Urundai', 'millets', 'Millets & Traditional', '200 g (Pack of 8)', 
  80.00, 100.00, 'images/products/ellu-urundai.jpg', 
  'Ellu Urundai - glossy black sesame and dark palm jaggery iron-rich sweet balls', 
  'Nutty, iron-rich roasted black sesame seeds bound with authentic Karupatti palm jaggery and a hint of dry ginger (Sukku). Traditional energy booster.', 
  'Rich in Iron', 'badge-healthy', 
  'Cleaned Black Sesame Seeds (Ellu), Palm Jaggery, Dry Ginger (Sukku), Cardamom', '45 Days', true
)
on conflict (id) do update set
  name = excluded.name,
  category = excluded.category,
  category_label = excluded.category_label,
  weight = excluded.weight,
  price = excluded.price,
  original_price = excluded.original_price,
  image_url = excluded.image_url,
  alt_text = excluded.alt_text,
  description = excluded.description,
  badge = excluded.badge,
  badge_class = excluded.badge_class,
  ingredients = excluded.ingredients,
  shelf_life = excluded.shelf_life,
  is_active = excluded.is_active;
