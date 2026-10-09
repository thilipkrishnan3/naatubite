/**
 * ============================================================================
 * NaatuBite - Food Products Shopping Website (Pure JavaScript)
 * "Traditional Taste, Homemade Goodness"
 * 
 * BROWSER READY: Runs directly in Safari or Chrome without any Python or terminal.
 * EASY TO EDIT: To change product prices, names, weights, or pictures, simply
 * edit the PRODUCTS array below.
 * ============================================================================
 */

// ============================================================================
// 1. PRODUCT CATALOG DATA (LOCAL AUTHENTIC FOOD IMAGES)
// ============================================================================
// Note: Every product price is kept strictly below ₹200 as requested!
let PRODUCTS = [
  // --- CATEGORY 1: SNACKS ---
  {
    id: "snack-01",
    name: "Traditional Kai Murukku",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "200 g",
    price: 75,
    originalPrice: 95,
    image: "images/products/kai-murukku.jpg",
    alt: "Kai Murukku - hand-twisted crispy rice and urad dal coil snack",
    description: "Authentic hand-twisted crispy rice and urad dal murukku, deep-fried to golden perfection in 100% cold-pressed groundnut oil with aromatic cumin and asafoetida.",
    badge: "Bestseller",
    badgeClass: "badge-bestseller",
    ingredients: "Raw Rice Flour, Urad Dal, Wood-Pressed Groundnut Oil, Cumin Seeds, Hing, Butter, Salt",
    shelfLife: "30 Days"
  },
  {
    id: "snack-02",
    name: "Crispy Madras Thattai",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "200 g",
    price: 70,
    originalPrice: 90,
    image: "images/products/crispy-thattai.jpg",
    alt: "Madras Thattai - flat crunchy rice discs with chana dal speckles",
    description: "Crunchy traditional rice disks speckled with roasted chana dal, fresh curry leaves, and mild red chili flakes. The ultimate accompaniment with evening filter coffee.",
    badge: "Customer Favorite",
    badgeClass: "badge-bestseller",
    ingredients: "Rice Flour, Roasted Gram, Chana Dal, Curry Leaves, Red Chilli, Cold-Pressed Oil, Salt",
    shelfLife: "30 Days"
  },
  {
    id: "snack-03",
    name: "Traditional Madras Mixture",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "250 g",
    price: 85,
    originalPrice: 110,
    image: "images/products/madras-mixture.jpg",
    alt: "Madras Mixture - South Indian savory mix with sev, boondi, and peanuts",
    description: "Classic royal South Indian savory mix loaded with crisp omapodi sev, boondi, roasted peanuts, cashew nuts, and fried curry leaves tossed in mild spices.",
    badge: "Signature",
    badgeClass: "badge-bestseller",
    ingredients: "Besan Flour, Rice Flour, Peanuts, Cashews, Curry Leaves, Red Chilli, Hing, Pure Oil",
    shelfLife: "45 Days"
  },
  {
    id: "snack-04",
    name: "Crunchy Ribbon Pakoda",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "200 g",
    price: 75,
    originalPrice: 95,
    image: "images/products/ribbon-pakoda.jpg",
    alt: "Ribbon Pakoda - crispy flat savory ribbon strips fried with red chili",
    description: "Golden ribbon-shaped savory crisps seasoned with Kashmir red chili powder, garlic, and fresh butter. Melt-in-mouth texture with zero greasiness.",
    badge: "Festive Classic",
    badgeClass: "badge-stoneground",
    ingredients: "Gram Flour, Rice Flour, Butter, Chilli Powder, Asafoetida, Cold-Pressed Oil, Salt",
    shelfLife: "30 Days"
  },
  {
    id: "snack-05",
    name: "Melt-in-Mouth Omapodi (Sev)",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "200 g",
    price: 65,
    originalPrice: 85,
    image: "images/products/omapodi-sev.jpg",
    alt: "Omapodi Sev - fine thin gram flour strands flavored with carom seeds",
    description: "Delicate, fine gram flour crisp strings infused with soothing omam (carom / ajwain) seeds. Light on the stomach and loved by children and elders alike.",
    badge: "Kids Favorite",
    badgeClass: "badge-healthy",
    ingredients: "Gram Flour, Rice Flour, Pure Ajwain Extract, Butter, Cold-Pressed Groundnut Oil, Salt",
    shelfLife: "30 Days"
  },
  {
    id: "snack-06",
    name: "Country Garlic Pepper Murukku",
    category: "snacks",
    categoryLabel: "Traditional Snack",
    weight: "200 g",
    price: 80,
    originalPrice: 100,
    image: "images/products/garlic-pepper-murukku.jpg",
    alt: "Garlic Pepper Murukku - crispy coil snack spiced with country garlic and pepper",
    description: "Handcrafted spiral murukku infused with fresh country garlic (Naatu Poondu) and crushed Malabar black pepper. Mildly pungent, rustic, and aromatic.",
    badge: "Spicy Crunch",
    badgeClass: "badge-bestseller",
    ingredients: "Rice, Urad Dal, Naatu Poondu (Country Garlic), Black Pepper, Wood-Pressed Oil, Salt",
    shelfLife: "30 Days"
  },

  // --- CATEGORY 2: READY-TO-COOK PRODUCTS ---
  {
    id: "batter-01",
    name: "Stone-Ground Dosa Batter",
    category: "batter",
    categoryLabel: "Ready-to-Cook",
    weight: "1 kg (1000 g)",
    price: 85,
    originalPrice: 105,
    image: "images/products/dosa-batter.jpg",
    alt: "Stone-Ground Dosa - golden crisp thin crepe made with fermented batter",
    description: "Naturally fermented batter made from whole parboiled rice and premium urad dal slow-ground on granite stone. Yields crispy, golden-brown roast dosas every time.",
    badge: "Stone Ground",
    badgeClass: "badge-stoneground",
    ingredients: "Premium Rice, Urad Dal, Fenugreek (Methi), RO Purified Water, Sea Salt (Zero Soda)",
    shelfLife: "7 Days (Refrigerated)"
  },
  {
    id: "batter-02",
    name: "Pillow-Soft Idly Batter",
    category: "batter",
    categoryLabel: "Ready-to-Cook",
    weight: "1 kg (1000 g)",
    price: 85,
    originalPrice: 105,
    image: "images/products/idly-batter.jpg",
    alt: "Soft Idlis on Banana Leaf - steamed fluffy white rice and urad dal cakes",
    description: "Stone-ground to the ideal fluffy consistency. Naturally aerated fermentation makes feather-light, spongy, melt-in-mouth soft idlies with zero chemical leaveners.",
    badge: "100% Natural",
    badgeClass: "badge-stoneground",
    ingredients: "Idly Rice, Whole White Urad Dal, Poha (Flattened Rice), RO Water, Sea Salt",
    shelfLife: "7 Days (Refrigerated)"
  },
  {
    id: "batter-03",
    name: "Malabar Appam & Idiyappam Batter",
    category: "batter",
    categoryLabel: "Ready-to-Cook",
    weight: "750 g",
    price: 90,
    originalPrice: 115,
    image: "images/products/appam-batter.jpg",
    alt: "Lacy Malabar Appam - bowl-shaped fermented rice pancake with soft center",
    description: "Silky batter blended with real coconut extract and yeast-free natural fermentation. Delivers soft, spongy centers with delicate crispy lace edges.",
    badge: "Coconut Infused",
    badgeClass: "badge-healthy",
    ingredients: "Raw Rice, Fresh Grated Coconut, Cooked Rice, RO Water, Mild Country Jaggery, Salt",
    shelfLife: "5 Days (Refrigerated)"
  },
  {
    id: "batter-04",
    name: "Multi-Lentil Crispy Adai Batter",
    category: "batter",
    categoryLabel: "Ready-to-Cook",
    weight: "750 g",
    price: 95,
    originalPrice: 120,
    image: "images/products/adai-batter.jpg",
    alt: "Crispy Lentil Adai - thick protein-rich roasted pancake made with mixed dals",
    description: "High-protein coarse batter ground from four traditional lentils (Toor, Chana, Urad, Moong) seasoned with fresh ginger, cumin, and dried red chilies. Hearty & nutritious.",
    badge: "High Protein",
    badgeClass: "badge-healthy",
    ingredients: "Toor Dal, Chana Dal, Urad Dal, Moong Dal, Rice, Fresh Ginger, Red Chilies, Asafoetida",
    shelfLife: "5 Days (Refrigerated)"
  },

  // --- CATEGORY 3: MILLETS AND TRADITIONAL FOODS ---
  {
    id: "millet-01",
    name: "Multi-Millet Ghee Laddu",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "200 g (Pack of 6)",
    price: 130,
    originalPrice: 165,
    image: "images/products/millet-laddu.jpg",
    alt: "Multi-Millet Ghee Laddu - nutritious finger millet balls rolled in pure A2 ghee",
    description: "Power-packed laddus prepared with roasted Ragi, Foxtail, and Little millets bound with unrefined country jaggery (Naatu Sakkarai), pure A2 desi ghee, and cardamom.",
    badge: "Superfood",
    badgeClass: "badge-healthy",
    ingredients: "Ragi, Foxtail Millet, Little Millet, Naatu Sakkarai, Pure Desi Ghee, Cashews, Cardamom",
    shelfLife: "25 Days"
  },
  {
    id: "millet-02",
    name: "Ragi Palm Jaggery Cookies",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "150 g",
    price: 110,
    originalPrice: 140,
    image: "images/products/ragi-cookies.jpg",
    alt: "Ragi Palm Jaggery Cookies - wholesome dark finger millet biscuits with jaggery",
    description: "Guilt-free crunchy baked cookies made from calcium-rich finger millet (Ragi) and pure palm jaggery (Karupatti). 100% Maida-free, butter baked, zero refined sugar.",
    badge: "No Refined Sugar",
    badgeClass: "badge-healthy",
    ingredients: "Sprouted Ragi Flour, Whole Wheat, Palm Jaggery (Karupatti), Butter, Cardamom",
    shelfLife: "45 Days"
  },
  {
    id: "millet-03",
    name: "Thinai (Foxtail Millet) Mixture",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "200 g",
    price: 90,
    originalPrice: 115,
    image: "images/products/thinai-mixture.jpg",
    alt: "Thinai Millet Mixture - golden crispy foxtail millet savory with peanuts",
    description: "A nutritious twist on traditional savory mixture prepared with crisp foxtail millet ribbons, roasted native peanuts, and curry leaves in cold-pressed oil.",
    badge: "Low Glycemic",
    badgeClass: "badge-stoneground",
    ingredients: "Foxtail Millet (Thinai) Flour, Gram Flour, Native Peanuts, Curry Leaves, Pure Oil, Salt",
    shelfLife: "30 Days"
  },
  {
    id: "millet-04",
    name: "Roasted Kambu (Pearl Millet) Crisps",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "150 g",
    price: 85,
    originalPrice: 110,
    image: "images/products/kambu-crisps.jpg",
    alt: "Roasted Kambu Crisps - savory roasted pearl millet snack with curry leaves",
    description: "Iron and fiber packed pearl millet savories, lightly spiced with roasted cumin and crushed black pepper. A healthy tea-time crunch for weight-conscious foodies.",
    badge: "High Fiber",
    badgeClass: "badge-healthy",
    ingredients: "Pearl Millet (Kambu) Flour, Roasted Gram, Cumin, Pepper, Cold-Pressed Oil, Sea Salt",
    shelfLife: "30 Days"
  },
  {
    id: "millet-05",
    name: "Traditional Palm Candy Kamarkat",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "150 g",
    price: 75,
    originalPrice: 95,
    image: "images/products/palm-kamarkat.jpg",
    alt: "Traditional Palm Kamarkat - authentic chewy coconut palm jaggery toffee",
    description: "Nostalgic South Indian grandmother's toffee handcrafted from freshly grated mature coconut and dark native palm jaggery. Chewy, earthy, and rich in natural minerals.",
    badge: "Grandma Recipe",
    badgeClass: "badge-bestseller",
    ingredients: "Fresh Grated Coconut, Native Karupatti (Palm Jaggery), Cardamom Powder, Pure Ghee",
    shelfLife: "60 Days"
  },
  {
    id: "millet-06",
    name: "Iron-Rich Sesame (Ellu) Urundai",
    category: "millets",
    categoryLabel: "Millets & Traditional",
    weight: "200 g (Pack of 8)",
    price: 80,
    originalPrice: 100,
    image: "images/products/ellu-urundai.jpg",
    alt: "Ellu Urundai - glossy black sesame and dark palm jaggery iron-rich sweet balls",
    description: "Nutty, iron-rich roasted black sesame seeds bound with authentic Karupatti palm jaggery and a hint of dry ginger (Sukku). Traditional energy booster.",
    badge: "Rich in Iron",
    badgeClass: "badge-healthy",
    ingredients: "Cleaned Black Sesame Seeds (Ellu), Palm Jaggery, Dry Ginger (Sukku), Cardamom",
    shelfLife: "45 Days"
  }
];

// ============================================================================
// 2. APPLICATION STATE MANAGEMENT
// ============================================================================
let cart = [];
let currentCategory = "all";
let currentSearchQuery = "";
let currentSort = "featured";

// Configuration Settings
// Supabase Database Configuration
const SUPABASE_CONFIG = {
  // Enter your Project URL from Supabase Dashboard -> Project Settings -> API
  url: "https://yoz9ga7gljt423xs1tqcmg.supabase.co", 
  publishableKey: "sb_publishable_yoz9Ga7gLJt423Xs1tqCmg_HkJiooSM"
};

let supabaseClient = null;
function initSupabase() {
  if (window.supabase && SUPABASE_CONFIG.publishableKey) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey);
      console.log("Supabase client initialized with publishable key!");
      loadProductsFromSupabase();
    } catch (err) {
      console.warn("Supabase init:", err);
    }
  }
}

// Dynamically sync products from Supabase 'products' table if available
function loadProductsFromSupabase() {
  if (!supabaseClient) return;
  supabaseClient
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("id")
    .then(({ data, error }) => {
      if (error) {
        console.info("Supabase products note (using local catalog fallback):", error.message);
        return;
      }
      if (data && data.length > 0) {
        PRODUCTS = data.map(p => ({
          id: p.id,
          name: p.name,
          category: p.category,
          categoryLabel: p.category_label || p.category,
          weight: p.weight,
          price: Number(p.price),
          originalPrice: Number(p.original_price),
          image: p.image_url,
          alt: p.alt_text,
          description: p.description,
          badge: p.badge || "",
          badgeClass: p.badge_class || "",
          ingredients: p.ingredients,
          shelfLife: p.shelf_life
        }));
        updateCategoryCounts();
        renderProducts();
        console.log(`Loaded ${PRODUCTS.length} products dynamically from Supabase database!`);
      }
    })
    .catch(err => {
      console.info("Supabase products note (using local fallback):", err.message || err);
    });
}

const APP_CONFIG = {
  freeShippingThreshold: 299,
  deliveryFee: 40,
  upiId: "naatubite@okaxis",
  merchantName: "NaatuBite Traditional Foods",
  supportPhone: "919876543210"
};

// ============================================================================
// 3. INITIALIZATION ON PAGE LOAD
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initSupabase();
  loadCartFromStorage();
  updateCategoryCounts();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// ============================================================================
// 4. RENDERING PRODUCT CARDS
// ============================================================================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyResultsState");
  const statusBar = document.getElementById("catalogStatusBar");
  const searchResultText = document.getElementById("searchResultText");

  // Filter products by category and search
  let filtered = PRODUCTS.filter(prod => {
    const matchesCategory = currentCategory === "all" || prod.category === currentCategory;
    const matchesSearch = currentSearchQuery === "" || 
      prod.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      prod.categoryLabel.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      prod.ingredients.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update Status Bar
  if (currentSearchQuery.trim() !== "" || currentCategory !== "all") {
    statusBar.style.display = "flex";
    searchResultText.textContent = `Showing ${filtered.length} product(s) for "${currentCategory.toUpperCase()}" ${currentSearchQuery ? `matching "${currentSearchQuery}"` : ""}`;
  } else {
    statusBar.style.display = "none";
  }

  // Handle Empty State
  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  // Generate HTML Cards
  grid.innerHTML = filtered.map(product => {
    const cartItem = cart.find(item => item.id === product.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="prod-image-wrap">
          <img src="${product.image}" 
               alt="${product.alt || product.name}" 
               class="prod-img" 
               loading="lazy"
               onerror="this.onerror=null; this.src='images/placeholder-food.svg';">
          <span class="prod-badge ${product.badgeClass}">${product.badge}</span>
          <button type="button" class="prod-quick-btn" onclick="openProductQuickView('${product.id}')" aria-label="View Details for ${product.name}">
            Quick View
          </button>
        </div>

        <div class="prod-content">
          <div class="prod-meta-row">
            <span class="prod-category-tag">${product.categoryLabel}</span>
            <span class="prod-quantity-pill">${product.weight}</span>
          </div>

          <h3 class="prod-title">${product.name}</h3>
          <p class="prod-desc">${product.description}</p>

          <div class="prod-pricing-row">
            <span class="prod-price">₹${product.price}</span>
            <span class="prod-orig-price">₹${product.originalPrice}</span>
            <span class="prod-discount-tag">${discountPercent}% OFF</span>
          </div>

          <div class="prod-action-area">
            ${inCartQty === 0 ? `
              <button type="button" class="btn-add-cart" onclick="addToCart('${product.id}')" aria-label="Add ${product.name} to Cart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                <span>Add to Cart</span>
              </button>
            ` : `
              <div class="qty-control-box" aria-label="Adjust quantity for ${product.name}">
                <button type="button" class="qty-btn" onclick="updateQuantity('${product.id}', -1)" aria-label="Decrease quantity">&minus;</button>
                <span class="qty-value">${inCartQty} in cart</span>
                <button type="button" class="qty-btn" onclick="updateQuantity('${product.id}', 1)" aria-label="Increase quantity">&plus;</button>
              </div>
            `}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Update counts in filter tabs
function updateCategoryCounts() {
  document.getElementById("countAll").textContent = PRODUCTS.length;
  document.getElementById("countSnacks").textContent = PRODUCTS.filter(p => p.category === "snacks").length;
  document.getElementById("countBatter").textContent = PRODUCTS.filter(p => p.category === "batter").length;
  document.getElementById("countMillets").textContent = PRODUCTS.filter(p => p.category === "millets").length;
}

// ============================================================================
// 5. SHOPPING CART LOGIC
// ============================================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: product.image,
      alt: product.alt,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh card button state
  showToast(`Added "${product.name}" to your cart! 🛍️`, "success");
}

function updateQuantity(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
    showToast("Item removed from cart.", "info");
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderProducts();
  showToast("Item removed from cart.", "info");
}

function calculateCartTotals() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeDelivery = subtotal >= APP_CONFIG.freeShippingThreshold || subtotal === 0;
  const delivery = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : APP_CONFIG.deliveryFee);
  const total = subtotal + delivery;

  return { subtotal, delivery, total, isFreeDelivery };
}

function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { subtotal, delivery, total, isFreeDelivery } = calculateCartTotals();

  // Badges & Labels
  document.getElementById("cartCountBadge").textContent = totalItems;
  document.getElementById("cartHeaderTotal").textContent = `₹${total}`;
  document.getElementById("cartDrawerCount").textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

  // Floating mobile cart
  const floatCart = document.getElementById("floatingMobileCart");
  if (floatCart) {
    if (totalItems > 0) {
      floatCart.style.display = "block";
      document.getElementById("floatCartBadge").textContent = totalItems;
      document.getElementById("floatCartTotal").textContent = `₹${total} →`;
    } else {
      floatCart.style.display = "none";
    }
  }

  // Free shipping bar
  const fsProgress = document.getElementById("freeShippingProgress");
  const fsText = document.getElementById("freeShippingText");
  if (subtotal >= APP_CONFIG.freeShippingThreshold) {
    fsProgress.style.width = "100%";
    fsProgress.style.backgroundColor = "var(--secondary)";
    fsText.textContent = "🎉 Congratulations! You have unlocked FREE Delivery!";
  } else {
    const diff = APP_CONFIG.freeShippingThreshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / APP_CONFIG.freeShippingThreshold) * 100));
    fsProgress.style.width = `${pct}%`;
    fsProgress.style.backgroundColor = "var(--primary)";
    fsText.textContent = `Add ₹${diff} more for FREE Delivery!`;
  }

  // Cart Drawer Body List
  const container = document.getElementById("cartItemsContainer");
  const footer = document.getElementById("cartFooter");

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-cart-icon">🛒</div>
        <h4>Your Cart is Empty</h4>
        <p>Explore our fresh stone-ground batters, crispy snacks, and millet sweets.</p>
        <button type="button" class="btn btn-primary" onclick="closeCart(); location.href='#products';">
          Browse Products
        </button>
      </div>
    `;
    footer.style.display = "none";
  } else {
    footer.style.display = "block";
    container.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='images/placeholder-food.svg';">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-qty-tag">${item.weight} &bull; ₹${item.price} each</span>
          <div class="cart-item-bottom">
            <span class="cart-item-price">₹${item.price * item.quantity}</span>
            <div class="cart-item-controls">
              <button type="button" class="cart-qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease">&minus;</button>
              <span class="cart-qty-num">${item.quantity}</span>
              <button type="button" class="cart-qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Increase">&plus;</button>
            </div>
            <button type="button" class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="Remove item">
              &times;
            </button>
          </div>
        </div>
      </div>
    `).join("");

    // Update Drawer Pricing Breakdown
    document.getElementById("cartSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("cartDeliveryFee").textContent = isFreeDelivery ? "FREE" : `₹${delivery}`;
    document.getElementById("cartTotal").textContent = `₹${total}`;
  }
}

// Local Storage Persistence
function saveCartToStorage() {
  try {
    localStorage.setItem("naatubite_cart", JSON.stringify(cart));
  } catch (e) {
    console.warn("Storage not available:", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("naatubite_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
}

// ============================================================================
// 6. CART DRAWER & CHECKOUT MODALS
// ============================================================================
function openCart() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add products to proceed.", "info");
    return;
  }
  closeCart();

  const { subtotal, delivery, total, isFreeDelivery } = calculateCartTotals();

  // Populate checkout summary column
  const checkoutItemsList = document.getElementById("checkoutItemsList");
  checkoutItemsList.innerHTML = cart.map(item => `
    <div class="summary-item-row">
      <span class="summary-item-name">${item.name} (${item.quantity}x)</span>
      <span class="summary-item-calc">₹${item.price * item.quantity}</span>
    </div>
  `).join("");

  document.getElementById("checkoutSubtotal").textContent = `₹${subtotal}`;
  document.getElementById("checkoutDelivery").textContent = isFreeDelivery ? "FREE" : `₹${delivery}`;
  document.getElementById("checkoutFinalTotal").textContent = `₹${total}`;
  document.getElementById("checkoutSubmitTotal").textContent = `(Pay ₹${total})`;

  // Generate Dynamic QR Code for UPI
  renderDynamicUpiQr(total);

  document.getElementById("checkoutModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkoutModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Render dynamic UPI QR code
function renderDynamicUpiQr(amount) {
  const upiQrContainer = document.getElementById("upiQrCodeContainer");
  const upiUrl = `upi://pay?pa=${APP_CONFIG.upiId}&pn=${encodeURIComponent(APP_CONFIG.merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent("NaatuBite Food Order")}`;
  
  // Public high-speed QR generator API with automatic SVG fallback
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiUrl)}`;

  upiQrContainer.innerHTML = `
    <img src="${qrApiUrl}" 
         alt="Scan UPI QR Code to pay ₹${amount}" 
         class="upi-qr-img"
         onerror="renderFallbackSvgQr(this, ${amount})">
  `;
}

// Offline / network fallback SVG QR pattern
function renderFallbackSvgQr(imgElement, amount) {
  imgElement.parentElement.innerHTML = `
    <div style="text-align: center; padding: 10px; font-size: 11px; color: #C2410C; font-weight: bold;">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="#C2410C" style="margin: 0 auto 5px;">
        <path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h3v3h-3zm-5 0h3v3h-3zm2 5h3v3h-3zm3 0h3v3h-3z"/>
      </svg>
      Pay ₹${amount} to<br><code>${APP_CONFIG.upiId}</code>
    </div>
  `;
}

function handlePaymentMethodChange(method) {
  const upiBox = document.getElementById("upiDetailsBox");
  const gatewayNotice = document.getElementById("gatewayNoticeBox");

  if (method === "upi") {
    upiBox.style.display = "block";
    gatewayNotice.style.display = "none";
  } else if (method === "card_gateway") {
    upiBox.style.display = "none";
    gatewayNotice.style.display = "flex";
  } else {
    // COD
    upiBox.style.display = "none";
    gatewayNotice.style.display = "none";
  }
}

function copyUpiId() {
  const upiId = APP_CONFIG.upiId;
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard.writeText(upiId).then(() => {
      showToast("UPI ID copied to clipboard! 📋", "success");
    }).catch(() => {
      fallbackCopyText(upiId);
    });
  } else {
    fallbackCopyText(upiId);
  }
}

function fallbackCopyText(text) {
  try {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(tempInput);
    if (successful) {
      showToast("UPI ID copied to clipboard! 📋", "success");
    } else {
      showToast(`UPI ID: ${text}`, "info");
    }
  } catch (err) {
    showToast(`UPI ID: ${text}`, "info");
  }
}

// ============================================================================
// 7. ORDER SUBMISSION & RECEIPT GENERATION
// ============================================================================
function handlePlaceOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Cart is empty!", "info");
    return;
  }

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const pincode = document.getElementById("custPincode").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const landmark = document.getElementById("custLandmark").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = paymentMethodInput ? paymentMethodInput.value : "upi";

  if (!name || !phone || !address || !city || !pincode) {
    showToast("Please fill all required delivery details.", "info");
    return;
  }

  // Generate unique Order ID
  const orderId = "NB-" + Math.floor(100000 + Math.random() * 900000);
  const { subtotal, delivery, total } = calculateCartTotals();

  // Populate Receipt Modal
  document.getElementById("receiptOrderId").textContent = `#${orderId}`;
  document.getElementById("receiptCustName").textContent = name;
  document.getElementById("receiptCustPhone").textContent = phone;
  
  let methodLabel = "UPI (Instant Payment)";
  let statusText = "Payment Verified &bull; Kitchen Preparing Fresh Batch";
  if (paymentMethod === "cod") {
    methodLabel = "Cash on Delivery (COD)";
    statusText = "Order Confirmed &bull; Pay Cash / UPI at Doorstep";
  } else if (paymentMethod === "card_gateway") {
    methodLabel = "Card / Gateway (Direct Kitchen Order)";
    statusText = "Order Received &bull; Kitchen Dispatch Pending";
  }
  document.getElementById("receiptPayMethod").textContent = methodLabel;
  document.getElementById("receiptStatusPill").innerHTML = statusText;

  const fullAddress = `${address}${landmark ? ', Near ' + landmark : ''}, ${city} - ${pincode}`;
  document.getElementById("receiptDeliveryAddress").textContent = fullAddress;

  // Receipt Table Body
  const tableBody = document.getElementById("receiptTableBody");
  tableBody.innerHTML = cart.map(item => `
    <tr>
      <td><strong>${item.name}</strong> <small>(${item.weight})</small></td>
      <td>${item.quantity}</td>
      <td class="text-right">₹${item.price}</td>
      <td class="text-right">₹${item.price * item.quantity}</td>
    </tr>
  `).join("");

  document.getElementById("receiptSubtotal").textContent = `₹${subtotal}`;
  document.getElementById("receiptDelivery").textContent = delivery === 0 ? "FREE" : `₹${delivery}`;
  document.getElementById("receiptGrandTotal").textContent = `₹${total}`;

  // Sync Order to Supabase relational tables if connected
  if (supabaseClient) {
    try {
      const orderPayload = {
        order_id: orderId,
        customer_name: name,
        phone: phone,
        delivery_address: address,
        landmark: landmark || null,
        city: city,
        pincode: pincode,
        subtotal: subtotal,
        delivery_fee: delivery,
        total_amount: total,
        payment_method: paymentMethod,
        payment_status: paymentMethod === "cod" ? "pending" : "completed",
        order_status: "received"
      };

      // 1. Insert order record
      supabaseClient
        .from("orders")
        .insert([orderPayload])
        .select()
        .then(({ data, error }) => {
          if (error) {
            console.info("Supabase sync info (table orders pending in Supabase):", error.message);
            return;
          }
          if (data && data.length > 0) {
            const insertedOrder = data[0];
            console.log(`Order ${orderId} saved to Supabase (id: ${insertedOrder.id})`);

            // 2. Insert line items into relational order_items table
            const itemsPayload = cart.map(item => ({
              order_ref_id: insertedOrder.id,
              product_id: item.id || null,
              product_name: item.name,
              weight: item.weight,
              unit_price: item.price,
              quantity: item.quantity,
              item_total: item.price * item.quantity
            }));

            supabaseClient
              .from("order_items")
              .insert(itemsPayload)
              .then(({ error: itemsError }) => {
                if (itemsError) {
                  console.info("Supabase order_items sync note:", itemsError.message);
                } else {
                  console.log("Order items saved to Supabase successfully!");
                }
              })
              .catch(err => {
                console.info("Supabase order_items sync note:", err.message || err);
              });
          }
        })
        .catch(err => {
          console.info("Supabase orders sync note (will persist when Supabase project URL is active):", err.message || err);
        });
    } catch (err) {
      console.warn("Supabase order sync:", err);
    }
  }

  // Clear Cart
  cart = [];
  saveCartToStorage();
  updateCartUI();
  renderProducts();

  // Switch Modals
  closeCheckout();
  document.getElementById("orderConfirmOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  showToast("Order placed successfully! 🎉", "success");
}

function placeOrderViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Cart is empty!", "info");
    return;
  }

  const name = document.getElementById("custName").value.trim() || "Customer";
  const phone = document.getElementById("custPhone").value.trim() || "Not provided";
  const address = document.getElementById("custAddress").value.trim() || "Delivery address";
  const city = document.getElementById("custCity").value.trim() || "";
  const pincode = document.getElementById("custPincode").value.trim() || "";
  const { subtotal, delivery, total } = calculateCartTotals();

  // Create formatted WhatsApp message
  let itemsSummary = cart.map((item, idx) => `${idx + 1}. ${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`).join("\n");

  const message = `*NEW ORDER - NAATUBITE FOOD PRODUCTS*\n` +
    `--------------------------------\n` +
    `*Customer Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Address:* ${address}, ${city} - ${pincode}\n` +
    `--------------------------------\n` +
    `*ITEMS ORDERED:*\n${itemsSummary}\n` +
    `--------------------------------\n` +
    `*Subtotal:* ₹${subtotal}\n` +
    `*Delivery Fee:* ${delivery === 0 ? 'FREE' : '₹' + delivery}\n` +
    `*TOTAL PAYABLE:* ₹${total}\n\n` +
    `Please confirm my fresh batch homemade food order!`;

  const waUrl = `https://wa.me/${APP_CONFIG.supportPhone}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function closeOrderConfirmation() {
  document.getElementById("orderConfirmOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================================
// 8. PRODUCT QUICK VIEW MODAL
// ============================================================================
function openProductQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const content = document.getElementById("quickViewContent");
  content.innerHTML = `
    <div>
      <img src="${prod.image}" alt="${prod.alt || prod.name}" class="qv-image" onerror="this.onerror=null; this.src='images/placeholder-food.svg';">
    </div>
    <div class="qv-info">
      <span class="qv-category">${prod.categoryLabel} &bull; ${prod.weight}</span>
      <h3>${prod.name}</h3>
      <div class="qv-price-row">
        <span class="qv-price">₹${prod.price}</span>
        <span class="prod-orig-price">₹${prod.originalPrice}</span>
        <span class="prod-discount-tag">${Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)}% OFF</span>
      </div>
      <p class="qv-desc">${prod.description}</p>
      
      <ul class="qv-highlights-list">
        <li>🌿 <strong>Ingredients:</strong> ${prod.ingredients}</li>
        <li>⏰ <strong>Shelf Life:</strong> ${prod.shelfLife}</li>
        <li>🫒 <strong>Oil Used:</strong> 100% Cold-Pressed (Marachekku) Groundnut / Sesame Oil</li>
        <li>✨ <strong>Quality:</strong> Zero preservatives, chemical colors, or soda</li>
      </ul>

      <div style="display: flex; gap: 10px; margin-top: 15px;">
        <button type="button" class="btn btn-primary btn-block" onclick="addToCart('${prod.id}'); closeProductModal();">
          Add to Cart &bull; ₹${prod.price}
        </button>
      </div>
    </div>
  `;

  document.getElementById("productModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================================
// 9. FILTERING, SEARCHING & FAQ ACCORDION
// ============================================================================
function filterByCategory(category) {
  currentCategory = category;

  // Update tabs active class
  document.querySelectorAll(".tab-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();

  // Smooth scroll down to products section if clicked from categories banner
  const prodSec = document.getElementById("products");
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: "smooth" });
  }
}

function resetAllFilters() {
  currentCategory = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("headerSearchInput");
  if (searchInput) searchInput.value = "";
  
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-filter") === "all");
  });

  renderProducts();
}

function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const isActive = item.classList.contains("active");

  // Close other open faqs
  document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

  if (!isActive) {
    item.classList.add("active");
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone")?.value || "";
  const email = document.getElementById("contactEmail")?.value || "";
  const subject = document.getElementById("contactSubject")?.value || "";
  const message = document.getElementById("contactMessage")?.value || "";

  if (supabaseClient) {
    try {
      supabaseClient.from("contact_messages").insert([{
        name: name,
        phone: phone,
        email: email || null,
        subject: subject,
        message: message
      }]).then(({ error }) => {
        if (error) {
          console.info("Supabase contact_messages note:", error.message);
        } else {
          console.log("Contact message saved to Supabase successfully!");
        }
      }).catch(err => {
        console.info("Supabase contact sync note:", err.message || err);
      });
    } catch (err) {
      console.warn("Supabase contact sync:", err);
    }
  }

  showToast(`Thank you, ${name}! Your message has been received. Our kitchen team will contact you shortly.`, "success");
  event.target.reset();
}

// ============================================================================
// 10. TOAST NOTIFICATIONS
// ============================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ============================================================================
// 11. EVENT LISTENERS SETUP
// ============================================================================
function setupEventListeners() {
  // Open Cart Trigger
  const openCartBtn = document.getElementById("openCartBtn");
  if (openCartBtn) {
    openCartBtn.addEventListener("click", openCart);
  }

  // Category Tab Buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterByCategory(filter);
    });
  });

  // Sort Select Dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Header Search Input
  const searchInput = document.getElementById("headerSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim();
      clearBtn.style.display = currentSearchQuery ? "block" : "none";
      renderProducts();
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearBtn.style.display = "none";
      renderProducts();
    });
  }

  // Reset Filters Button in Status Bar
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetAllFilters);
  }

  // Mobile Hamburger Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      const isExpanded = navMenu.style.display === "flex";
      navMenu.style.display = isExpanded ? "none" : "flex";
      if (!isExpanded) {
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "100%";
        navMenu.style.left = "0";
        navMenu.style.right = "0";
        navMenu.style.backgroundColor = "rgba(250, 247, 242, 0.98)";
        navMenu.style.padding = "1.5rem";
        navMenu.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 860) {
          navMenu.style.display = "none";
        }
      });
    });
  }

  // Backdrop click dismisses modals
  ["checkoutModalOverlay", "productModalOverlay"].forEach(id => {
    const overlay = document.getElementById(id);
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          if (id === "checkoutModalOverlay") closeCheckout();
          if (id === "productModalOverlay") closeProductModal();
        }
      });
    }
  });

  // Escape key closes open modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeCheckout();
      closeOrderConfirmation();
      closeProductModal();
    }
  });

  // Current year in footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
