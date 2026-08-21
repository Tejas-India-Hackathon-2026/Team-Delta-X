# 📍 Dhoondo (ढूंढो) — Hyperlocal Search, Comparison & Retailer SaaS Platform

> **Find Nearby • Compare Live Counter Prices • Empower Local Retailers Across All India**

Dhoondo connects everyday shoppers directly to physical neighborhood retail stores (automobiles, pharmacies, groceries, electronics, hardware, stationery) within strict hyperlocal walking/driving radiuses (600m – 5km), providing real-time stock visibility, live counter prices, and direct retailer engagement.

---

## 🌟 Core Feature Matrix

### 🔍 1. Shopper Discovery & Search
- **Instant Search with Autocorrect & Suggestions:** Debounced search with typo tolerance and keyboard navigation (`↑`, `↓`, `Enter`, `Esc`).
- **Live Keyword Highlighting:** Matched search fragments highlighted dynamically across products.
- **Persistent Recent Searches:** Search history stored locally with quick-remove tags and 1-click execution.
- **Multi-Store Price Comparison:** Real-time best price detection, percentage discount badges (`-X% OFF`), and savings calculations.
- **Stock Status Badges:** Color-coded inventory indicators (`In Stock`, `Low Stock < 3`, `Out of Stock Nearby`).
- **Voice Search & Speech Recognition:** Integrated voice search with pulsating frequency waveform visualizer.
- **Native Share & Clipboard Fallback:** Share products directly via Web Share API with instant toast feedback.

### 🗺️ 2. Geolocation & Interactive Map Radar
- **3-Tier Cascaded Location Hierarchy:** Instant selection across all 36 Indian States & UTs, Districts, and Localities.
- **High-Accuracy Geolocation Fallback:** Progressive GPS tracking with timeout handling and fallback to city center.
- **Custom Price Tagged Map Markers:** Interactive map pins displaying real-time item prices and store status.
- **Pulsating User Location Radar:** Live animated GPS indicator with search radius perimeter ring.
- **Walking & Driving ETA Estimator:** Automatic travel duration calculations based on calculated Haversine distance.
- **Turn-by-Turn Directions:** 1-tap deep links to Google Maps and native map turn-by-turn navigation.

### 🏪 3. Retailer SaaS Counter Tools
- **Live Inventory Manager:** Quick inline stock counters (`+` / `−` steppers) and inline price quick-edit.
- **Dynamic Profit Margin Calculator:** Real-time MRP vs Counter Price discount and margin analyzer.
- **Device Camera & Barcode Lookup Simulator:** Capture counter photos, scan barcodes, and auto-populate product catalog.
- **Inventory CSV Spreadsheet Export:** 1-click export of complete store stock to CSV.
- **Weekly Operating Hours Builder:** Day-by-day opening and closing time configuration.
- **UPI QR Payment Configuration:** Seamless VPA setup with dynamic QR preview for in-store payments.

### ⚡ 4. Hyperlocal Demand Radar & Direct Enquiries
- **Customer Demand Radar:** Alerts nearby retailers when shoppers search for out-of-stock items.
- **1-Click Demand Fulfillment:** Retailers can restock demanded products with one tap, instantly notifying customers.
- **Direct WhatsApp Enquiry Links:** Auto-generate formatted WhatsApp messages for fast counter replies.
- **Quick Reply Templates:** Pre-composed response chips for fast customer messaging.

### 🛡️ 5. Admin Governance & Platform Analytics
- **Merchant Verification Portal:** Document preview and 1-click approval/rejection with reason logs.
- **Platform Analytics & Funnel Tracking:** Real-time search-to-click conversion rates and category demand trends.
- **System Health & Offline Banner:** Real-time network status monitoring with auto-reconnection alerts.
- **Global Error Boundary:** React crash recovery mechanism with 1-click app reset.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend UI** | React 18, TypeScript 5, Tailwind CSS, Lucide Icons, Canvas Confetti |
| **Routing & State** | React Router v6, React Context API with LocalStorage Persistence |
| **Maps & Geospatial** | Leaflet, Google Maps Loader, Haversine Distance Calculator |
| **Build & Tooling** | Vite 6 with Rollup manual chunk splitting |
| **Backend API** | Node.js, Express, MongoDB / Resilient In-Memory Mock Database |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
cd backend && npm install && cd ..
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## ⌨️ Keyboard Shortcuts
- `/` — Focus header search input
- `H` — Navigate to Home
- `M` — Open Interactive Map
- `W` — Open Wishlist
- `?` — Open Keyboard Shortcuts Cheat-sheet
- `Esc` — Close active modal or drawer

---

## 📄 License
MIT License © 2026 Team Delta-X • Tejas India Hackathon
