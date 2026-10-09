# NaatuBite - Traditional Food Products Shopping Website

> **“Traditional Taste, Homemade Goodness”**  
> Pure South Indian snacks, stone-ground ready-to-cook batters, and nutritious millet sweets. Handcrafted with cold-pressed oils, unrefined country jaggery, and zero preservatives.

---

## 🌐 How to View Your Website Right Now

You have **two easy ways** to open and use your website on your MacBook Air M5:

### Option 1: Using Your Active Localhost URL (Running Now!)
Your local server is currently active and running in the background on port **8000**:
* 👉 **[http://localhost:8000](http://localhost:8000)**

Just click the link above or copy-paste `http://localhost:8000` into **Safari** or **Google Chrome**.

---

### Option 2: Direct Double-Click (Zero Software / Zero Server Needed!)
Because this website is built with **100% pure HTML, CSS, and JavaScript**, it does not depend on any server or Python installation:
1. Open **Finder** on your Mac.
2. Go to your folder: `Desktop` &rarr; `marketingg`.
3. Double-click **`index.html`** (or right-click `index.html` &rarr; **Open With** &rarr; **Safari** or **Google Chrome**).
4. The entire shopping website will instantly load in your browser!

---

## 📁 Project File Structure

```text
marketingg/
├── index.html       # Clean HTML5 layout, header, hero, catalog, cart drawer & modals
├── style.css        # Warm South Indian heritage styling, responsive grids & animations
├── script.js        # Product catalog data (under ₹200), cart logic, UPI QR & WhatsApp order
├── README.md        # User instructions and customization guide
└── images/
    ├── placeholder-food.svg      # Clean fallback placeholder
    └── products/                 # 16 authentic, optimized local product photos (<150KB)
        ├── kai-murukku.jpg
        ├── crispy-thattai.jpg
        ├── madras-mixture.jpg
        ├── ribbon-pakoda.jpg
        ├── omapodi-sev.jpg
        ├── garlic-pepper-murukku.jpg
        ├── dosa-batter.jpg
        ├── idly-batter.jpg
        ├── appam-batter.jpg
        ├── adai-batter.jpg
        ├── millet-laddu.jpg
        ├── ragi-cookies.jpg
        ├── thinai-mixture.jpg
        ├── kambu-crisps.jpg
        ├── palm-kamarkat.jpg
        └── ellu-urundai.jpg
```

---

## 🥨 Product Categories Included (All Under ₹200)

| Category | Products Included | Pack Quantities | Prices | Image File |
| :--- | :--- | :--- | :--- | :--- |
| **Traditional Snacks** | Traditional Kai Murukku | 200 g | ₹75 | `kai-murukku.jpg` |
| | Crispy Madras Thattai | 200 g | ₹70 | `crispy-thattai.jpg` |
| | Traditional Madras Mixture | 250 g | ₹85 | `madras-mixture.jpg` |
| | Crunchy Ribbon Pakoda | 200 g | ₹75 | `ribbon-pakoda.jpg` |
| | Melt-in-Mouth Omapodi (Sev) | 200 g | ₹65 | `omapodi-sev.jpg` |
| | Country Garlic Pepper Murukku | 200 g | ₹80 | `garlic-pepper-murukku.jpg` |
| **Ready-to-Cook Batters** | Stone-Ground Dosa Batter | 1 kg | ₹85 | `dosa-batter.jpg` |
| | Pillow-Soft Idly Batter | 1 kg | ₹85 | `idly-batter.jpg` |
| | Malabar Appam & Idiyappam Batter | 750 g | ₹90 | `appam-batter.jpg` |
| | Multi-Lentil Crispy Adai Batter | 750 g | ₹95 | `adai-batter.jpg` |
| **Millets & Sweets** | Multi-Millet Ghee Laddu | 200 g | ₹130 | `millet-laddu.jpg` |
| | Ragi Palm Jaggery Cookies | 150 g | ₹110 | `ragi-cookies.jpg` |
| | Thinai (Foxtail Millet) Mixture | 200 g | ₹90 | `thinai-mixture.jpg` |
| | Roasted Kambu (Pearl Millet) Crisps | 150 g | ₹85 | `kambu-crisps.jpg` |
| | Traditional Palm Candy Kamarkat | 150 g | ₹75 | `palm-kamarkat.jpg` |
| | Iron-Rich Sesame (Ellu) Urundai | 200 g | ₹80 | `ellu-urundai.jpg` |

---

## 🛒 Features Included

1. **Interactive Shopping Cart Drawer:**
   - Add any product to the cart with a single click.
   - Adjust quantities (`+` or `-`) or remove items.
   - Real-time subtotal, delivery fee calculation (Free above ₹299), and animated free delivery progress bar.
   - Saves your cart in browser storage so it won't disappear when you refresh.

2. **Checkout & Payment:**
   - Collects customer Name, Mobile Number, Delivery Address, City, and Pincode.
   - **UPI Payment:** Automatically displays a dynamic UPI QR Code configured to your order total, with 1-click UPI ID copy.
   - **Cash on Delivery (COD):** Transparent doorstep cash/UPI payment option.
   - **1-Click WhatsApp Ordering:** Formats your customer details and itemized order into a message ready to send directly to your WhatsApp kitchen number.

3. **Order Confirmation & Print Receipt:**
   - Generates a unique Order ID (e.g. `#NB-849201`).
   - Detailed itemized bill with dispatch notice.
   - 1-click printable receipt.

---

## ✏️ How to Edit Products and Prices

Open [script.js](file:///Users/thilipkrishnan/Desktop/marketingg/script.js) in your text editor. Right at the top, you will find the `PRODUCTS` list:

```javascript
{
  id: "snack-01",
  name: "Traditional Kai Murukku",
  price: 75,              // Change your selling price here
  originalPrice: 95,      // Change original price here
  weight: "200 g",        // Change package quantity here
  image: "images/products/kai-murukku.jpg",
  alt: "Kai Murukku - hand-twisted crispy rice and urad dal coil snack",
  description: "..."      // Change description here
}
```
Simply edit any number or text and save the file. The website updates immediately!
