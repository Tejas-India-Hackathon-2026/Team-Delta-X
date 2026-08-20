# 📍 Dhoondo — Hyperlocal Product & Inventory Discovery Platform

> **Discover nearby stores, compare live counter prices, explore realtime inventory, and empower local retailers with SaaS subscription intelligence.**

---

## 🌟 Key Highlights & Features

### 🛍️ 1. Customer Discovery & Search Radar
- **GPS-Powered Proximity Discovery**: Live geolocation detection with Haversine formula calculation & Google Maps radar integration.
- **Counter-Level Stock Transparency**: Filter products by `In Stock`, `Low Stock`, `Out of Stock`, and compare price matrices across local physical shops.
- **Interactive Multi-Store Comparisons**: Side-by-side spec, pricing, distance, and warranty comparison matrix.
- **Demand Radar**: Shoppers can post demand alerts for unlisted or out-of-stock items, which alerts nearby retailers.
- **Voice & Multilingual Search**: Audio-enabled voice search for quick local product lookups.

### 🏪 2. Retailer Operating System & SaaS
- **Live Inventory & Pricing Engine**: Retailers update counter inventory, prices, and discounts in real time.
- **Tiered SaaS Subscriptions**: Free tier (up to 50 products) and Pro tier (unlimited inventory, advanced demand alerts & analytics).
- **Proactive Demand Alerts**: Real-time alerts when nearby customers are searching for products the merchant stocks.
- **Store Showcase & Offers**: Create discount deals, banners, and direct WhatsApp customer enquiry handling.

### 🛡️ 3. Super Admin Governance & KYC Portal
- **Store KYC Verification**: Review GSTIN, trade licenses, storefront photos, and grant verified badges.
- **Dynamic Category & Taxonomy Management**: Add, update, and categorize products across diverse verticals.
- **Platform Analytics & Broadcasts**: Monitor platform growth, GMV metrics, and send broadcast alerts to retailers and customers.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend Framework** | React 18 (TypeScript), Vite 6 |
| **Styling & Design System** | Tailwind CSS, Lucide Icons, Glassmorphism, Micro-animations |
| **State Management** | Context API with LocalStorage sync |
| **Maps & Geo Intelligence** | Leaflet, Google Maps Loader, Haversine Distance Calculation |
| **Animation & Feedback** | Canvas Confetti, Custom Web Audio Sound Effects |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tejas-India-Hackathon-2026/Team-Delta-X.git
cd Team-Delta-X

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
dhoondo/
├── src/
│   ├── components/
│   │   ├── admin/          # Admin portal components & modals
│   │   ├── common/         # Header, Footer, BottomNav, AuthModal, LocationModal
│   │   ├── customer/       # ProductCard, StoreCard, CompareMatrix, DemandModal
│   │   ├── map/            # InteractiveMap, GoogleMapView, CascadedLocationPicker
│   │   ├── motion/         # SplashScreen, MotionExplainer
│   │   └── retailer/       # RetailerSidebar, AddProduct, SubscriptionModal
│   ├── context/            # Global AppContext state & persistence
│   ├── data/               # Indian locations, categories, stores, products, inventory
│   ├── pages/
│   │   ├── admin/          # 10 Admin management & governance views
│   │   ├── customer/       # 11 Customer shopping & exploration views
│   │   └── retailer/       # 10 Merchant SaaS & inventory views
│   ├── services/           # Geolocation, Distance, Maps, Audio sound effects
│   ├── types/              # Unified TypeScript definitions
│   ├── App.tsx             # Root router & layout orchestrator
│   └── main.tsx            # React DOM entry point
├── public/                 # Static assets
├── tailwind.config.js      # Design tokens & color palette
├── vite.config.ts          # Vite build config
└── package.json
```

---

## 👥 Team Delta X
Built for **Tejas India Hackathon 2026**.
