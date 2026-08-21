import { Category } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": "cat-automobile",
    "name": "Automobile & Spares",
    "slug": "automobile-spares",
    "emoji": "🚗",
    "iconName": "Car",
    "description": "Genuine bike & car spare parts, engine oils, batteries, tyres, and accessories.",
    "color": "from-amber-500 to-orange-600",
    "subcategories": [
      "Two Wheeler Parts",
      "Engine Oils & Fluids",
      "Car Accessories",
      "Batteries & Electricals",
      "Tyres & Tubes"
    ]
  },
  {
    "id": "cat-electronics",
    "name": "Electronics & Mobiles",
    "slug": "electronics-mobiles",
    "emoji": "📱",
    "iconName": "Smartphone",
    "description": "Smartphones, audio, chargers, smart wearables, and storage devices.",
    "color": "from-blue-500 to-indigo-600",
    "subcategories": [
      "Smartphones & Tablets",
      "Audio & Headphones",
      "Cables, Chargers & Hubs",
      "Smart Wearables",
      "Storage & Pendrives"
    ]
  },
  {
    "id": "cat-pharmacy",
    "name": "Pharmacy & Health",
    "slug": "pharmacy-health",
    "emoji": "💊",
    "iconName": "Pill",
    "description": "OTC medicines, wellness products, surgicals, vitamins, and healthcare devices.",
    "color": "from-rose-500 to-red-600",
    "subcategories": [
      "OTC & Daily Care",
      "First Aid & Surgicals",
      "Vitamins & Supplements",
      "Diabetes & BP Care",
      "Baby & Mother Care"
    ]
  },
  {
    "id": "cat-grocery",
    "name": "Kirana & Daily Needs",
    "slug": "kirana-daily-needs",
    "emoji": "🛒",
    "iconName": "ShoppingBag",
    "description": "Daily staples, atta, rice, milk, ghee, snacks, spices, and cleaning supplies.",
    "color": "from-emerald-500 to-green-600",
    "subcategories": [
      "Staples, Atta & Rice",
      "Dairy, Milk & Ghee",
      "Snacks & Beverages",
      "Spices & Masalas",
      "Cleaning & Household"
    ]
  },
  {
    "id": "cat-hardware",
    "name": "Hardware & Sanitary",
    "slug": "hardware-sanitary",
    "emoji": "🔧",
    "iconName": "Wrench",
    "description": "Tools, electrical wiring, plumbing pipes, paints, and hardware fasteners.",
    "color": "from-slate-600 to-slate-800",
    "subcategories": [
      "Hand & Power Tools",
      "Electricals & Wiring",
      "Plumbing & Pipes",
      "Paints & Wall Care",
      "Fasteners & Hardware"
    ]
  },
  {
    "id": "cat-stationery",
    "name": "Stationery & Books",
    "slug": "stationery-books",
    "emoji": "📚",
    "iconName": "BookOpen",
    "description": "Registers, pens, drawing supplies, office stationery, school bags, and exam books.",
    "color": "from-purple-500 to-pink-600",
    "subcategories": [
      "Notebooks & Registers",
      "Pens, Art & Drawing",
      "Office & Printing",
      "School Bags & Boxes",
      "Competitive Books"
    ]
  }
];
