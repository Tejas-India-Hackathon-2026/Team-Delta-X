const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Exact 6 Main Categories with 5 Subcategories each
const CATEGORIES = [
  {
    id: 'cat-automobile',
    name: 'Automobile & Spares',
    slug: 'automobile-spares',
    emoji: '🚗',
    iconName: 'Car',
    description: 'Genuine bike & car spare parts, engine oils, batteries, tyres, and accessories.',
    color: 'from-amber-500 to-orange-600',
    subcategories: [
      'Two Wheeler Parts',
      'Engine Oils & Fluids',
      'Car Accessories',
      'Batteries & Electricals',
      'Tyres & Tubes'
    ]
  },
  {
    id: 'cat-electronics',
    name: 'Electronics & Mobiles',
    slug: 'electronics-mobiles',
    emoji: '📱',
    iconName: 'Smartphone',
    description: 'Smartphones, audio, chargers, smart wearables, and storage devices.',
    color: 'from-blue-500 to-indigo-600',
    subcategories: [
      'Smartphones & Tablets',
      'Audio & Headphones',
      'Cables, Chargers & Hubs',
      'Smart Wearables',
      'Storage & Pendrives'
    ]
  },
  {
    id: 'cat-pharmacy',
    name: 'Pharmacy & Health',
    slug: 'pharmacy-health',
    emoji: '💊',
    iconName: 'Pill',
    description: 'OTC medicines, wellness products, surgicals, vitamins, and healthcare devices.',
    color: 'from-rose-500 to-red-600',
    subcategories: [
      'OTC & Daily Care',
      'First Aid & Surgicals',
      'Vitamins & Supplements',
      'Diabetes & BP Care',
      'Baby & Mother Care'
    ]
  },
  {
    id: 'cat-grocery',
    name: 'Kirana & Daily Needs',
    slug: 'kirana-daily-needs',
    emoji: '🛒',
    iconName: 'ShoppingBag',
    description: 'Daily staples, atta, rice, milk, ghee, snacks, spices, and cleaning supplies.',
    color: 'from-emerald-500 to-green-600',
    subcategories: [
      'Staples, Atta & Rice',
      'Dairy, Milk & Ghee',
      'Snacks & Beverages',
      'Spices & Masalas',
      'Cleaning & Household'
    ]
  },
  {
    id: 'cat-hardware',
    name: 'Hardware & Sanitary',
    slug: 'hardware-sanitary',
    emoji: '🔧',
    iconName: 'Wrench',
    description: 'Tools, electrical wiring, plumbing pipes, paints, and hardware fasteners.',
    color: 'from-slate-600 to-slate-800',
    subcategories: [
      'Hand & Power Tools',
      'Electricals & Wiring',
      'Plumbing & Pipes',
      'Paints & Wall Care',
      'Fasteners & Hardware'
    ]
  },
  {
    id: 'cat-stationery',
    name: 'Stationery & Books',
    slug: 'stationery-books',
    emoji: '📚',
    iconName: 'BookOpen',
    description: 'Registers, pens, drawing supplies, office stationery, school bags, and exam books.',
    color: 'from-purple-500 to-pink-600',
    subcategories: [
      'Notebooks & Registers',
      'Pens, Art & Drawing',
      'Office & Printing',
      'School Bags & Boxes',
      'Competitive Books'
    ]
  }
];

// Product Definition Templates: 10 Products per subcategory (30 subcategories = 300 products)
const PRODUCT_TEMPLATES = {
  // =========================================================================
  // 🚗 AUTOMOBILE & SPARES
  // =========================================================================
  'Two Wheeler Parts': [
    { name: 'Honda CB Shine Front Disc Brake Pad (Genuine OEM)', brand: 'Honda', mrp: 499, basePrice: 399, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['honda', 'shine', 'brake pad', 'disc brake', 'bike parts'] },
    { name: 'Hero Splendor Plus Clutch Plate Set (Set of 4)', brand: 'Hero Genuine', mrp: 450, basePrice: 360, img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', kw: ['hero', 'splendor', 'clutch plate', 'two wheeler'] },
    { name: 'Bajaj Pulsar 150 Chain Sprocket Kit (Rolon Brass)', brand: 'Rolon', mrp: 1450, basePrice: 1199, img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80', kw: ['pulsar', 'chain sprocket', 'rolon', 'bajaj'] },
    { name: 'TVS Apache RTR 160 Rear Brake Shoe Set', brand: 'TVS Genuine', mrp: 380, basePrice: 299, img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80', kw: ['tvs', 'apache', 'brake shoe', 'bike parts'] },
    { name: 'Royal Enfield Classic 350 Air Filter Element', brand: 'Royal Enfield', mrp: 350, basePrice: 280, img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80', kw: ['royal enfield', 'bullet', 'classic 350', 'air filter'] },
    { name: 'Honda Activa 6G Drive Belt OEM Transmission', brand: 'Bando / Honda', mrp: 550, basePrice: 440, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['activa', 'drive belt', 'scooter parts', 'honda'] },
    { name: 'NGK G-Power Platinum Spark Plug (CPR8EAGP-9)', brand: 'NGK', mrp: 220, basePrice: 175, img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80', kw: ['ngk', 'spark plug', 'bike ignition', 'platinum plug'] },
    { name: 'Hero HF Deluxe Accelerator & Clutch Cable Pair', brand: 'Hero', mrp: 260, basePrice: 199, img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', kw: ['clutch cable', 'accelerator cable', 'hero', 'hf deluxe'] },
    { name: 'Bajaj Platina Front Fork Oil Seal & Bushing Kit', brand: 'Endurance', mrp: 320, basePrice: 240, img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80', kw: ['fork oil seal', 'platina', 'suspension', 'bajaj'] },
    { name: 'Yamaha FZ Version 3 Rear LED Indicator Assembly', brand: 'Minda', mrp: 480, basePrice: 385, img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80', kw: ['yamaha fz', 'indicator', 'led light', 'minda'] }
  ],
  'Engine Oils & Fluids': [
    { name: 'Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)', brand: 'Motul', mrp: 1045, basePrice: 880, img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80', kw: ['motul', '7100', '10w50', 'synthetic oil', 'engine oil'] },
    { name: 'Castrol POWER1 4T 10W-30 Synthetic Technology Engine Oil 1L', brand: 'Castrol', mrp: 535, basePrice: 440, img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80', kw: ['castrol', 'power1', '10w30', 'bike oil', 'engine oil'] },
    { name: 'Motul 3100 4T Gold 20W-40 Semi-Synthetic Engine Oil (1L)', brand: 'Motul', mrp: 480, basePrice: 395, img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80', kw: ['motul 3100', '20w40', 'engine oil', 'bike lubricant'] },
    { name: 'Castrol Activ 4T 20W-40 Continuous Protection Bike Oil 1L', brand: 'Castrol', mrp: 440, basePrice: 360, img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80', kw: ['castrol activ', '20w40', 'bike oil', 'splendor oil'] },
    { name: 'Shell Advance AX7 10W-40 Synthetic Based Bike Oil 1L', brand: 'Shell', mrp: 510, basePrice: 420, img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80', kw: ['shell advance', 'ax7', '10w40', 'shell oil'] },
    { name: 'Gulf Pride 4T Plus 20W-40 High Performance Engine Oil 1L', brand: 'Gulf', mrp: 425, basePrice: 340, img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80', kw: ['gulf', 'gulf pride', '20w40', 'engine oil'] },
    { name: 'Motul Motocool Expert Radiator Coolant Fluid (1L)', brand: 'Motul', mrp: 460, basePrice: 375, img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80', kw: ['coolant', 'radiator coolant', 'motul coolant', 'ktm coolant'] },
    { name: 'Bosch DOT 4 High Performance Brake Fluid (250ml)', brand: 'Bosch', mrp: 160, basePrice: 125, img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80', kw: ['brake fluid', 'dot 4', 'bosch brake oil'] },
    { name: 'WD-40 Multi-Use Rust Prevention & Lubricant Spray (420ml)', brand: 'WD-40', mrp: 420, basePrice: 335, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['wd40', 'rust spray', 'chain cleaner', 'lubricant spray'] },
    { name: 'Motul C2 Chain Lube Road Aerosol Spray (400ml)', brand: 'Motul', mrp: 590, basePrice: 490, img: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80', kw: ['chain lube', 'motul c2', 'bike chain spray'] }
  ],
  'Car Accessories': [
    { name: 'Godrej Aer Twist Fresh Lush Green Car Perfume Air Freshener', brand: 'Godrej', mrp: 399, basePrice: 310, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['godrej aer', 'car perfume', 'car freshener', 'car accessories'] },
    { name: 'Amkette iGrip Drive Universal Magnetic Car Mobile Mount', brand: 'Amkette', mrp: 799, basePrice: 549, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', kw: ['car mobile holder', 'mobile mount', 'igrip', 'amkette'] },
    { name: 'Portronics Car Power 65W Fast Dual Port Type-C Car Charger', brand: 'Portronics', mrp: 1299, basePrice: 699, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['car charger', 'type c charger', 'portronics car power', 'fast charge'] },
    { name: '70mai Smart Dash Cam 1080P Full HD with Night Vision', brand: '70mai', mrp: 4999, basePrice: 3899, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['dash cam', '70mai', 'car camera', 'security camera'] },
    { name: '3M Microfiber Car Cleaning & Polishing Cloth (Pack of 3)', brand: '3M', mrp: 360, basePrice: 270, img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80', kw: ['3m cloth', 'microfiber', 'car wash', 'cleaning cloth'] },
    { name: 'Bergmann Typhoon Heavy Duty Metal Digital Tyre Inflator', brand: 'Bergmann', mrp: 2450, basePrice: 1799, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['tyre inflator', 'air pump', 'car pump', 'bergmann'] },
    { name: 'Wavex High Foaming Car Wash Shampoo pH Neutral (1L)', brand: 'Wavex', mrp: 420, basePrice: 315, img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80', kw: ['car shampoo', 'wavex', 'foam wash', 'car detailing'] },
    { name: 'All-Weather 7D Custom Molded Waterproof Car Foot Mats', brand: 'AutoForm', mrp: 3499, basePrice: 2499, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['car mats', '7d mats', 'foot mat', 'auto accessories'] },
    { name: 'JBL Club 6520 6.5-Inch 300W Coaxial Car Door Speakers Pair', brand: 'JBL', mrp: 4990, basePrice: 3499, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', kw: ['jbl car speakers', 'car audio', 'coaxial speakers', 'door speaker'] },
    { name: 'AutokraftZ Heavy Duty Anti-Theft Steering Wheel Lock', brand: 'AutokraftZ', mrp: 1199, basePrice: 799, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['steering lock', 'car lock', 'anti theft lock', 'security'] }
  ],
  'Batteries & Electricals': [
    { name: 'Amaron Pro Rider 5Ah Maintenance Free Bike Battery (AP-BTX5L)', brand: 'Amaron', mrp: 1450, basePrice: 1199, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['amaron', 'battery', '5ah battery', 'bike battery', 'pulsar battery'] },
    { name: 'Exide Xplore 4Ah VRLA Sealed Bike Battery (XLTZ4)', brand: 'Exide', mrp: 1250, basePrice: 1050, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['exide', 'xplore', '4ah battery', 'activa battery', 'splendor battery'] },
    { name: 'Amaron Hi-Life Flo 35Ah Car Battery (BH35B20R - 55 Month Warranty)', brand: 'Amaron', mrp: 4600, basePrice: 3850, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['amaron flo', 'car battery', '35ah battery', 'maruti battery', 'alto battery'] },
    { name: 'Exide Mileage 45Ah Maintenance Free Car Battery (ML45D26L)', brand: 'Exide', mrp: 5400, basePrice: 4450, img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80', kw: ['exide mileage', 'car battery', '45ah battery', 'hyundai battery'] },
    { name: 'Roots Windtone 12V High-Tone Electric Car Horn Pair', brand: 'Roots', mrp: 850, basePrice: 650, img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80', kw: ['roots horn', 'windtone', 'car horn', 'loud horn'] },
    { name: 'Philips H4 12V 60/55W X-tremeVision Pro150 Headlight Bulb', brand: 'Philips', mrp: 750, basePrice: 580, img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80', kw: ['philips h4', 'headlight bulb', 'car bulb', 'white light'] },
    { name: 'Osram Night Breaker Laser H7 Halogen Headlamp Bulb Pair', brand: 'Osram', mrp: 1850, basePrice: 1390, img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80', kw: ['osram h7', 'night breaker', 'headlight bulb', 'laser bulb'] },
    { name: 'Uno Minda 12V Heavy Duty Headlight Relay Wiring Harness Kit', brand: 'Uno Minda', mrp: 450, basePrice: 340, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['relay kit', 'minda relay', 'headlight harness', 'wiring kit'] },
    { name: 'Bosch 12V Symphony FC4 Car Horn Chrome Dual Set', brand: 'Bosch', mrp: 950, basePrice: 740, img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80', kw: ['bosch horn', 'symphony horn', 'car horn', 'dual horn'] },
    { name: 'Microtek 12V Automatic Smart Battery Charger for Car/Bike', brand: 'Microtek', mrp: 1899, basePrice: 1399, img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80', kw: ['battery charger', 'trickle charger', 'microtek battery charger'] }
  ],
  'Tyres & Tubes': [
    { name: 'MRF Zapper FX 90/90-17 Tubeless Bike Front Tyre', brand: 'MRF', mrp: 2150, basePrice: 1850, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['mrf zapper', 'bike tyre', 'tubeless tyre', '17 inch tyre', 'pulsar tyre'] },
    { name: 'CEAT Gripp X3 100/90-18 Tubeless Motorcycle Rear Tyre', brand: 'CEAT', mrp: 2350, basePrice: 1999, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['ceat gripp', 'rear tyre', 'splendor tyre', 'bike tyre'] },
    { name: 'MRF Nylogrip Zapper 90/100-10 Tubeless Scooter Tyre (Activa / Jupiter)', brand: 'MRF', mrp: 1450, basePrice: 1199, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['activa tyre', 'scooter tyre', '90/100-10', 'mrf nylogrip'] },
    { name: 'JK Tyre Blaze BR32 80/100-18 Tubeless Bike Tyre', brand: 'JK Tyre', mrp: 1750, basePrice: 1450, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['jk tyre', 'blaze tyre', 'bike tyre', 'shine tyre'] },
    { name: 'Apollo Amazer 4G Life 165/70 R14 Tubeless Car Tyre', brand: 'Apollo', mrp: 3850, basePrice: 3150, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['apollo tyre', 'amazer 4g', 'car tyre', '14 inch car tyre', 'wagonr tyre'] },
    { name: 'Bridgestone B290 175/65 R15 Premium Passenger Car Tyre', brand: 'Bridgestone', mrp: 5400, basePrice: 4499, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['bridgestone b290', 'honda city tyre', 'car tyre', '15 inch tyre'] },
    { name: 'CEAT Milaze 145/80 R12 Long Life Car Tyre (Alto / Eeco)', brand: 'CEAT', mrp: 2850, basePrice: 2350, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['ceat milaze', 'alto tyre', 'eeco tyre', '12 inch tyre'] },
    { name: 'Ralco Blaster 2.75-18 High Grip Motorcycle Butyl Tube', brand: 'Ralco', mrp: 280, basePrice: 210, img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', kw: ['bike tube', 'ralco tube', 'butyl tube', '2.75-18'] },
    { name: 'Universal Tubeless Tyre Puncture Repair Kit with 10 Strips', brand: 'Stanley Auto', mrp: 399, basePrice: 249, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['puncture kit', 'tyre repair kit', 'puncture strips', 'emergency repair'] },
    { name: 'Formula 1 Black Gold Tire Shine & Rim Protectant (473ml)', brand: 'Formula 1', mrp: 590, basePrice: 420, img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80', kw: ['tyre polish', 'formula 1', 'black shine', 'rim polish'] }
  ],

  // =========================================================================
  // 📱 ELECTRONICS & MOBILES
  // =========================================================================
  'Smartphones & Tablets': [
    { name: 'Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera', brand: 'Apple', mrp: 79900, basePrice: 71999, img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', kw: ['iphone 15', 'apple', 'ios', 'smartphone', 'mobile', 'dynamic island'] },
    { name: 'Samsung Galaxy S24 5G (8GB RAM, 128GB Storage, Onyx Black)', brand: 'Samsung', mrp: 74999, basePrice: 66999, img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80', kw: ['samsung s24', 'galaxy s24', 'samsung 5g', 'smartphone', 'ai phone'] },
    { name: 'OnePlus 12R 5G (8GB RAM, 128GB Storage, Cool Blue)', brand: 'OnePlus', mrp: 39999, basePrice: 37999, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', kw: ['oneplus 12r', 'oneplus 5g', 'smartphone', 'snapdragon 8 gen 2'] },
    { name: 'Redmi Note 13 Pro 5G (8GB RAM, 256GB, Midnight Black)', brand: 'Xiaomi / Redmi', mrp: 28999, basePrice: 24999, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', kw: ['redmi note 13 pro', 'xiaomi 5g', '200mp camera', 'mobile phone'] },
    { name: 'Realme 12 Pro+ 5G (8GB RAM, 128GB, Submarine Blue)', brand: 'Realme', mrp: 31999, basePrice: 27999, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', kw: ['realme 12 pro', 'realme 5g', 'periscope camera', 'smartphone'] },
    { name: 'Apple iPad 10th Gen 10.9-inch (Wi-Fi, 64GB, Silver)', brand: 'Apple', mrp: 39900, basePrice: 34990, img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80', kw: ['ipad', 'apple tablet', 'ipad 10th gen', 'tablet'] },
    { name: 'Samsung Galaxy Tab A9+ 11-inch (8GB RAM, 128GB, Wi-Fi + 5G)', brand: 'Samsung', mrp: 25999, basePrice: 20999, img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80', kw: ['samsung tab', 'galaxy tab a9', 'android tablet', 'tab'] },
    { name: 'Vivo V30 5G (8GB RAM, 128GB, Peacock Green Aura Light)', brand: 'Vivo', mrp: 35999, basePrice: 31999, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', kw: ['vivo v30', 'aura light portrait', 'vivo 5g', 'mobile'] },
    { name: 'Motorola Edge 50 Fusion (8GB RAM, 128GB, Marshmallow Blue)', brand: 'Motorola', mrp: 25999, basePrice: 21999, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', kw: ['moto edge 50', 'motorola fusion', 'curved oled', 'smartphone'] },
    { name: 'POCO X6 Pro 5G (12GB RAM, 512GB, Racing Yellow)', brand: 'POCO', mrp: 30999, basePrice: 26999, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', kw: ['poco x6 pro', 'gaming phone', 'dimensity 8300', 'poco 5g'] }
  ],
  'Audio & Headphones': [
    { name: 'boAt Rockerz 450 Bluetooth On-Ear Headphones with 15H Playback', brand: 'boAt', mrp: 3990, basePrice: 1199, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', kw: ['boat rockerz 450', 'headphones', 'bluetooth headphones', 'wireless earphone'] },
    { name: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones', brand: 'Sony', mrp: 34990, basePrice: 28990, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', kw: ['sony wh1000xm5', 'anc headphones', 'noise canceling', 'sony audio'] },
    { name: 'OnePlus Nord Buds 2r True Wireless in Ear Earbuds (Triple Mic)', brand: 'OnePlus', mrp: 2299, basePrice: 1799, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80', kw: ['nord buds', 'oneplus earbuds', 'tws', 'wireless earbuds'] },
    { name: 'boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime', brand: 'boAt', mrp: 4490, basePrice: 1099, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80', kw: ['boat airdopes 141', 'airpods', 'tws earbuds', 'boat audio'] },
    { name: 'JBL Flip 6 Portable Waterproof Bluetooth Speaker (30W Output)', brand: 'JBL', mrp: 13999, basePrice: 9999, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80', kw: ['jbl flip 6', 'bluetooth speaker', 'portable speaker', 'jbl audio'] },
    { name: 'Realme Buds Wireless 3 Neckband with 30dB ANC & 360 Spatial Audio', brand: 'Realme', mrp: 2999, basePrice: 1699, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80', kw: ['neckband', 'realme buds wireless', 'bluetooth neckband', 'anc earphones'] },
    { name: 'Sennheiser HD 450SE Wireless Over-Ear Active Noise Cancelling Headset', brand: 'Sennheiser', mrp: 14990, basePrice: 8990, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', kw: ['sennheiser', 'hd 450', 'studio headphones', 'audiophile audio'] },
    { name: 'boAt Stone 352 Portable 10W Bluetooth Speaker with RGB LED', brand: 'boAt', mrp: 3490, basePrice: 1499, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80', kw: ['boat stone 352', 'speaker', 'rgb speaker', 'wireless speaker'] },
    { name: 'Boult Audio Z40 True Wireless Earbuds with 60H Playtime', brand: 'Boult', mrp: 4999, basePrice: 1299, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80', kw: ['boult z40', 'tws', 'cheap earbuds', 'wireless buds'] },
    { name: 'JBL C100SI Wired in-Ear Headphones with One-Button Universal Mic', brand: 'JBL', mrp: 1299, basePrice: 599, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80', kw: ['jbl c100si', 'wired earphone', '3.5mm jack', 'bass earphones'] }
  ],
  'Cables, Chargers & Hubs': [
    { name: 'Anker 20W PowerPort III Nano Fast USB-C Wall Charger Adapter', brand: 'Anker', mrp: 1499, basePrice: 899, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['anker 20w', 'charger', 'iphone charger', 'fast charger', 'type c adapter'] },
    { name: 'Apple 20W USB-C Power Adapter (Original OEM)', brand: 'Apple', mrp: 1900, basePrice: 1699, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['apple 20w', 'original apple charger', 'type c power adapter'] },
    { name: 'Samsung 25W Super Fast Type-C Wall Charger (Without Cable)', brand: 'Samsung', mrp: 1699, basePrice: 1199, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['samsung 25w', 'super fast charger', 'samsung adapter'] },
    { name: 'boAt Rugged v3 Extra Tough Braided Type-C Fast Charging Cable (1.5M)', brand: 'boAt', mrp: 799, basePrice: 299, img: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80', kw: ['type c cable', 'boat cable', 'braided cable', 'fast charging wire'] },
    { name: 'Anker PowerLine III Flow Silicone USB-C to Lightning Cable (3ft)', brand: 'Anker', mrp: 1999, basePrice: 1399, img: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80', kw: ['lightning cable', 'anker cable', 'iphone cord', 'silicone cable'] },
    { name: 'Portronics MPort 65W 6-in-1 USB-C Multiport Hub with 4K HDMI & SD Card', brand: 'Portronics', mrp: 3499, basePrice: 1899, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['usb c hub', 'type c adapter', 'hdmi hub', 'macbook hub'] },
    { name: 'OnePlus Warp Charge 65W Power Adapter with Red Cable', brand: 'OnePlus', mrp: 2999, basePrice: 2299, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['warp charge 65w', 'oneplus charger', 'supervooc', 'fast adapter'] },
    { name: 'TP-Link TL-WR841N 300Mbps Wireless-N Wi-Fi Router', brand: 'TP-Link', mrp: 1499, basePrice: 999, img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', kw: ['wifi router', 'tp link router', 'wireless router', 'broadband'] },
    { name: 'Belkin BoostCharge Magnetic Wireless 15W MagSafe Charging Pad', brand: 'Belkin', mrp: 2999, basePrice: 1999, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['wireless charger', 'magsafe pad', 'belkin wireless', '15w charger'] },
    { name: 'Amkette PowerPro 4-Port USB Fast Desktop Charging Station (36W)', brand: 'Amkette', mrp: 1499, basePrice: 899, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', kw: ['multi port charger', 'desktop charger', '4 port usb hub'] }
  ],
  'Smart Wearables': [
    { name: 'Noise ColorFit Pulse 3 1.96-inch Bluetooth Calling Smartwatch', brand: 'Noise', mrp: 4999, basePrice: 1499, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', kw: ['noise smartwatch', 'colorfit pulse', 'calling watch', 'fitness tracker'] },
    { name: 'Fire-Boltt Phoenix Pro 1.39-inch Luxury Round Bluetooth Calling Watch', brand: 'Fire-Boltt', mrp: 6999, basePrice: 1399, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', kw: ['fireboltt', 'phoenix pro', 'round smartwatch', 'smart watch'] },
    { name: 'Apple Watch SE 2nd Gen (40mm GPS, Midnight Aluminium Case)', brand: 'Apple', mrp: 29900, basePrice: 25990, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80', kw: ['apple watch', 'watch se', 'iwatch', 'smartwatch'] },
    { name: 'Samsung Galaxy Watch6 Bluetooth (40mm, Graphite Black)', brand: 'Samsung', mrp: 33999, basePrice: 21999, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80', kw: ['galaxy watch 6', 'samsung watch', 'wear os', 'fitness watch'] },
    { name: 'boAt Wave Call 2 Smartwatch with HD Display & 700+ Active Modes', brand: 'boAt', mrp: 4990, basePrice: 1299, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', kw: ['boat smartwatch', 'wave call', 'bluetooth calling watch'] },
    { name: 'Amazfit GTR 4 New Smartwatch with Dual-Band GPS & AMOLED Display', brand: 'Amazfit', mrp: 18999, basePrice: 14999, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80', kw: ['amazfit gtr 4', 'gps watch', 'amoled smartwatch', 'running watch'] },
    { name: 'Fastrack Limitless FS1 Pro 1.96-inch Super AMOLED Calling Smartwatch', brand: 'Fastrack', mrp: 7995, basePrice: 2295, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', kw: ['fastrack watch', 'fs1 pro', 'amoled smartwatch'] },
    { name: 'Cultsport Ranger XR 1.43-inch Rugged Outdoor Smartwatch (850 Nits)', brand: 'Cultsport', mrp: 9999, basePrice: 2799, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80', kw: ['cultsport watch', 'rugged smartwatch', 'outdoor watch'] },
    { name: 'OnePlus Watch 2 with Wear OS 4 & Snapdragon W5 Chip (100H Battery)', brand: 'OnePlus', mrp: 27999, basePrice: 22999, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80', kw: ['oneplus watch 2', 'wear os watch', 'smartwatch'] },
    { name: 'Noise Pure Ring Smart Health & Sleep Tracker Titanium Finish', brand: 'Noise', mrp: 9999, basePrice: 5999, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', kw: ['smart ring', 'noise ring', 'health tracker', 'sleep ring'] }
  ],
  'Storage & Pendrives': [
    { name: 'SanDisk Ultra Dual Drive Luxe USB Type-C 128GB Flash Pendrive', brand: 'SanDisk', mrp: 2400, basePrice: 1199, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['sandisk pendrive', '128gb pendrive', 'type c pendrive', 'otg flash drive'] },
    { name: 'Samsung EVO Plus 128GB MicroSDXC Memory Card with Adapter (130MB/s)', brand: 'Samsung', mrp: 1899, basePrice: 899, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['memory card', 'sd card', 'samsung evo', '128gb sd card'] },
    { name: 'Crucial X6 1TB Portable External Solid State Drive SSD (Up to 800MB/s)', brand: 'Crucial', mrp: 11500, basePrice: 6299, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['external ssd', '1tb ssd', 'portable ssd', 'crucial x6'] },
    { name: 'Western Digital WD Elements 2TB USB 3.0 External Hard Drive', brand: 'Western Digital', mrp: 7990, basePrice: 5499, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['hard disk', 'external hdd', '2tb hard drive', 'wd elements'] },
    { name: 'SanDisk Cruzer Blade 64GB USB 2.0 Pen Drive', brand: 'SanDisk', mrp: 750, basePrice: 389, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['sandisk 64gb', 'cruzer blade', 'pendrive', 'flash drive'] },
    { name: 'Kingston DataTraveler Exodia M 128GB USB 3.2 Flash Drive', brand: 'Kingston', mrp: 1999, basePrice: 949, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['kingston pendrive', '128gb usb', 'flash drive'] },
    { name: 'SanDisk Ultra 64GB MicroSDHC Class 10 Memory Card 140MB/s', brand: 'SanDisk', mrp: 1100, basePrice: 489, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['sandisk sd card', '64gb memory card', 'cctv memory card'] },
    { name: 'HP v236w 32GB Metal USB 2.0 Flash Drive', brand: 'HP', mrp: 550, basePrice: 299, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['hp pendrive', '32gb pendrive', 'metal flash drive'] },
    { name: 'Seagate One Touch 1TB External Hard Drive with Password Protection', brand: 'Seagate', mrp: 6200, basePrice: 4699, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['seagate hard disk', '1tb hdd', 'one touch seagate'] },
    { name: 'Samsung T7 Shield 1TB Rugged Portable SSD USB 3.2 (1050MB/s)', brand: 'Samsung', mrp: 14999, basePrice: 9499, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80', kw: ['samsung t7', 'portable ssd', 'high speed ssd', 'nvme storage'] }
  ],

  // =========================================================================
  // 💊 PHARMACY & HEALTH
  // =========================================================================
  'OTC & Daily Care': [
    { name: 'Dolo 650mg Paracetamol Tablets (15 Tabs Strip)', brand: 'Micro Labs', mrp: 35, basePrice: 28, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['dolo 650', 'paracetamol', 'fever medicine', 'headache tablet', 'dawa', 'pharmacy'] },
    { name: 'Crocin 650 Fast Action Pain Relief Tablets (15 Tabs)', brand: 'GSK', mrp: 34, basePrice: 29, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['crocin 650', 'paracetamol', 'fever', 'bodyache', 'otc medicine'] },
    { name: 'Vicks Vaporub Cold Relief Warming Balm (50g)', brand: 'Procter & Gamble', mrp: 165, basePrice: 145, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['vicks vaporub', 'cold balm', 'cough relief', 'steam balm'] },
    { name: 'Eno Fruit Salt Fast Action Antacid Lemon Flavour (100g Bottle)', brand: 'Eno', mrp: 180, basePrice: 155, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['eno', 'acidity relief', 'antacid powder', 'eno lemon'] },
    { name: 'Digene Gel Antacid & Antigas Orange Flavour (200ml)', brand: 'Abbott', mrp: 155, basePrice: 130, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['digene syrup', 'antacid syrup', 'gas relief', 'acidity gel'] },
    { name: 'Volini Joint & Muscle Pain Relief Spray (100g)', brand: 'Sun Pharma', mrp: 290, basePrice: 235, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['volini spray', 'pain spray', 'muscle pain', 'back pain'] },
    { name: 'Moov Rapid Pain Relief Ointment (50g Tube)', brand: 'Reckitt', mrp: 195, basePrice: 165, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['moov', 'pain balm', 'back pain relief', 'ayurvedic balm'] },
    { name: 'Strepsils Honey & Lemon Lozenges for Sore Throat (Strip of 8)', brand: 'Strepsils', mrp: 40, basePrice: 35, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['strepsils', 'throat lozenges', 'cough drops', 'sore throat'] },
    { name: 'Otrivin Oxy Fast Relief Adult Nasal Spray (10ml)', brand: 'GSK', mrp: 115, basePrice: 98, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['otrivin', 'nasal spray', 'blocked nose', 'cold relief'] },
    { name: 'Iodex Double Power Fast Absorbing Pain Balm (40g)', brand: 'GSK', mrp: 160, basePrice: 135, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['iodex', 'pain balm', 'headache balm', 'muscle ache'] }
  ],
  'First Aid & Surgicals': [
    { name: 'Dettol Antiseptic Disinfectant Liquid 550ml Bottle', brand: 'Dettol', mrp: 220, basePrice: 198, img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80', kw: ['dettol', 'antiseptic', 'wound wash', 'first aid', 'disinfectant'] },
    { name: 'Savlon Antiseptic Liquid for Cuts & Scratches (500ml)', brand: 'Savlon / ITC', mrp: 195, basePrice: 170, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['savlon', 'antiseptic liquid', 'wound cleaner'] },
    { name: 'Hansaplast Washproof Medicated Bandage Strips (Box of 100)', brand: 'Hansaplast', mrp: 240, basePrice: 195, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['hansaplast', 'band aid', 'waterproof bandage', 'wound strip'] },
    { name: 'Flamingo Orthopedic Lumbar Sacro Sacro-Spinal Support Belt', brand: 'Flamingo', mrp: 1150, basePrice: 899, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['back belt', 'lumbar support', 'flamingo belt', 'ortho support'] },
    { name: 'Dr. Trust Non-Contact Infrared Forehead Thermometer', brand: 'Dr. Trust', mrp: 2490, basePrice: 1299, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['thermometer', 'forehead thermometer', 'infrared thermometer', 'fever test'] },
    { name: 'Cipla Cipladine 5% Povidone Iodine Antiseptic Ointment (20g)', brand: 'Cipla', mrp: 65, basePrice: 52, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['cipladine', 'betadine', 'burn ointment', 'antiseptic cream'] },
    { name: 'Bandage Plus Sterile Rolled Cotton Gauze Bandage (Pack of 12)', brand: 'Bandage Plus', mrp: 180, basePrice: 135, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['gauze bandage', 'cotton bandage', 'wound dressing', 'surgical roll'] },
    { name: 'Flamingo Tubular Elastic Knee Cap Compression Support (Pair)', brand: 'Flamingo', mrp: 450, basePrice: 360, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['knee cap', 'knee support', 'arthritis band', 'flamingo ortho'] },
    { name: 'Dr. Morepen Digital Clinical Body Thermometer with Beeper', brand: 'Dr. Morepen', mrp: 250, basePrice: 149, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['digital thermometer', 'dr morepen', 'fever meter'] },
    { name: 'Johnson & Johnson Sterile Cotton Buds 100% Pure (Pack of 200)', brand: 'Johnson & Johnson', mrp: 120, basePrice: 99, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['cotton buds', 'ear buds', 'sterile swabs'] }
  ],
  'Vitamins & Supplements': [
    { name: 'Becadexamin Multivitamin & Mineral Capsules (Bottle of 30)', brand: 'GSK', mrp: 65, basePrice: 55, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['becadexamin', 'multivitamin', 'vitamin capsules', 'health supplement'] },
    { name: 'Supradyn Daily Multivitamin with Zinc & Immunity Boosters (15 Tabs)', brand: 'Bayer', mrp: 60, basePrice: 50, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['supradyn', 'multivitamin with zinc', 'immunity booster', 'energy tablets'] },
    { name: 'Limcee 500mg Vitamin C Chewable Tablets Orange (15 Tabs)', brand: 'Abbott', mrp: 35, basePrice: 28, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['limcee', 'vitamin c', 'chewable tablet', 'immunity'] },
    { name: 'Shelcal 500 Calcium with Vitamin D3 Tablets (15 Tabs)', brand: 'Torrent Pharma', mrp: 135, basePrice: 110, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['shelcal 500', 'calcium tablet', 'vitamin d3', 'bone health'] },
    { name: 'Revital H Daily Health Supplement with Ginseng (60 Capsules)', brand: 'Sun Pharma', mrp: 550, basePrice: 440, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['revital h', 'ginseng', 'energy supplement', 'daily stamina'] },
    { name: 'Zincovit Multivitamin with Grape Seed Extract (15 Tablets)', brand: 'Apex', mrp: 115, basePrice: 95, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['zincovit', 'grape seed', 'multivitamin tablet', 'recovery'] },
    { name: 'Evion 400mg Vitamin E Capsules for Skin & Hair (10 Capsules)', brand: 'Merck / Procter & Gamble', mrp: 38, basePrice: 32, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['evion 400', 'vitamin e', 'skin vitamin', 'hair supplement'] },
    { name: 'HealthKart HK Vitals Fish Oil Omega 3 with EPA & DHA (60 Softgels)', brand: 'HealthKart', mrp: 799, basePrice: 499, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['omega 3', 'fish oil', 'heart health', 'hk vitals'] },
    { name: 'Dabur Chyawanprash 2X Immunity Booster Pure Herbs (1kg)', brand: 'Dabur', mrp: 435, basePrice: 360, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['chyawanprash', 'dabur', 'ayurvedic immunity', 'herbal tonic'] },
    { name: 'Himalaya Ashvagandha General Wellness & Stress Relief (60 Tablets)', brand: 'Himalaya', mrp: 220, basePrice: 175, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['ashwagandha', 'himalaya herbs', 'stress relief', 'ayurvedic medicine'] }
  ],
  'Diabetes & BP Care': [
    { name: 'Dr. Morepen BG-03 Gluco One Blood Glucose Monitor with 50 Test Strips', brand: 'Dr. Morepen', mrp: 1490, basePrice: 999, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80', kw: ['glucometer', 'sugar test', 'dr morepen', 'gluco one', 'diabetes', 'blood sugar', 'test strips'] },
    { name: 'Accu-Chek Active Blood Glucose Glucometer Kit with 10 Strips', brand: 'Roche / Accu-Chek', mrp: 1699, basePrice: 1299, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80', kw: ['accu chek', 'sugar meter', 'accuchek active', 'diabetes machine'] },
    { name: 'Omron HEM-7120 Fully Automatic Digital Upper Arm BP Monitor', brand: 'Omron', mrp: 2450, basePrice: 1980, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['bp machine', 'blood pressure monitor', 'omron 7120', 'hypertension'] },
    { name: 'Dr. Morepen Gluco One BG-03 Replacement Test Strips Box of 50', brand: 'Dr. Morepen', mrp: 890, basePrice: 649, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80', kw: ['gluco one strips', 'sugar strips', 'dr morepen strips 50'] },
    { name: 'Accu-Chek Instant Blood Glucose 50 Test Strips Pack', brand: 'Accu-Chek', mrp: 1125, basePrice: 875, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80', kw: ['accu chek instant', 'instant strips', 'diabetes test strips'] },
    { name: 'Dr. Trust USA Smart Dual Talking Digital Blood Pressure Monitor', brand: 'Dr. Trust', mrp: 2990, basePrice: 1899, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['dr trust bp', 'talking bp machine', 'blood pressure digital'] },
    { name: 'Himalaya Karela Metabolic Wellness & Glucose Regulation (60 Tablets)', brand: 'Himalaya', mrp: 220, basePrice: 175, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['karela tablets', 'diabetes ayurveda', 'blood sugar control', 'himalaya'] },
    { name: 'Sugar Free Gold Low Calorie Aspartame Sweetener Pellets (500 Pellets)', brand: 'Zydus Wellness', mrp: 300, basePrice: 245, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['sugar free gold', 'sweetener', 'sugar free pellets', 'diabetic sugar'] },
    { name: 'Dr. Morepen Universal Sterile Twist Lancets for Glucometer (Pack of 100)', brand: 'Dr. Morepen', mrp: 350, basePrice: 225, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80', kw: ['lancets', 'sugar needles', 'pricking lancets', 'dr morepen lancets'] },
    { name: 'Ensure Diabetic Care Nutrition Powder Vanilla Flavour (400g Tin)', brand: 'Abbott', mrp: 810, basePrice: 699, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', kw: ['ensure diabetes', 'ensure diabetic care', 'nutrition powder'] }
  ],
  'Baby & Mother Care': [
    { name: 'Pampers All Round Protection Pants Diapers Medium Size (76 Count)', brand: 'Pampers', mrp: 1299, basePrice: 999, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['pampers', 'baby diapers', 'medium diapers', 'pant diapers'] },
    { name: 'Himalaya Baby Lotion with Almond & Olive Oil Nourishing (400ml)', brand: 'Himalaya', mrp: 325, basePrice: 260, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['himalaya baby lotion', 'baby moisturizer', 'baby cream'] },
    { name: 'Johnson & Johnson No More Tears Gentle Baby Shampoo (500ml)', brand: 'Johnson & Johnson', mrp: 410, basePrice: 325, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['baby shampoo', 'johnson baby', 'no more tears'] },
    { name: 'Sebamed Baby Gentle Cleansing Bar pH 5.5 Soap (100g)', brand: 'Sebamed', mrp: 290, basePrice: 245, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['sebamed baby soap', 'ph 5.5 soap', 'baby bath soap'] },
    { name: 'Pigeon Calming Anti-Colic Wide Neck Baby Feeding Bottle (240ml)', brand: 'Pigeon', mrp: 699, basePrice: 520, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['feeding bottle', 'baby milk bottle', 'pigeon bottle', 'anti colic'] },
    { name: 'Huggies Wonder Pants Extra Absorb Diapers Large (64 Count)', brand: 'Huggies', mrp: 1199, basePrice: 899, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['huggies diapers', 'large diapers', 'wonder pants'] },
    { name: 'Mother Sparsh 99% Pure Water Unscented Baby Wipes (72 Wipes)', brand: 'Mother Sparsh', mrp: 299, basePrice: 199, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['baby wipes', 'water wipes', 'mother sparsh', 'wet wipes'] },
    { name: 'Chicco Baby Moments Rash Cream with 10% Zinc Oxide (100ml)', brand: 'Chicco', mrp: 399, basePrice: 310, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['diaper rash cream', 'chicco cream', 'zinc oxide rash balm'] },
    { name: 'Dabur Lal Tail Ayurvedic Baby Massage Oil with Ratanjyot (500ml)', brand: 'Dabur', mrp: 380, basePrice: 310, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['dabur lal tail', 'baby massage oil', 'ayurvedic baby oil'] },
    { name: 'Nestle Cerelac Wheat Apple Baby Cereal Stage 1 (300g Pack)', brand: 'Nestle', mrp: 315, basePrice: 285, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80', kw: ['cerelac', 'baby food', 'nestle cereal', 'wheat apple cerelac'] }
  ],

  // =========================================================================
  // 🛒 KIRANA & DAILY NEEDS
  // =========================================================================
  'Staples, Atta & Rice': [
    { name: 'Fortune Biryani Special Super Premium Aged Long Grain Basmati Rice (5kg)', brand: 'Fortune / Adani Wilmar', mrp: 675, basePrice: 549, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['fortune rice', 'biryani rice', 'basmati rice', 'chawal', 'aged rice', 'grocery'] },
    { name: 'Aashirvaad Superior MP Sharbati Whole Wheat Atta 5kg', brand: 'Aashirvaad', mrp: 275, basePrice: 245, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', kw: ['aashirvaad atta', 'wheat flour', 'mp sharbati', '5kg atta', 'gehun atta'] },
    { name: 'India Gate Basmati Rice Classic Extra Long Grain (5kg Bag)', brand: 'India Gate', mrp: 890, basePrice: 749, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['india gate classic', 'basmati rice', 'pulao rice'] },
    { name: 'Fortune Premium Kachi Ghani Pure Mustard Oil Jar (5L)', brand: 'Fortune', mrp: 850, basePrice: 699, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80', kw: ['mustard oil', 'sarson tel', 'fortune kachi ghani', 'cooking oil'] },
    { name: 'Tata Sampann Unpolished Toor Dal High Protein (1kg)', brand: 'Tata Sampann', mrp: 210, basePrice: 175, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['toor dal', 'arhar dal', 'tata sampann', 'unpolished pulses'] },
    { name: 'Fortune Sunlite Refined Sunflower Oil Pouch (1L)', brand: 'Fortune', mrp: 155, basePrice: 125, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80', kw: ['sunflower oil', 'fortune sunlite', 'refined oil'] },
    { name: 'Tata Sampann Fine Unpolished Moong Dal Split (1kg)', brand: 'Tata Sampann', mrp: 185, basePrice: 155, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['moong dal', 'tata dal', 'yellow dal', 'pulses'] },
    { name: 'Aashirvaad Select 100% Sharbati Whole Wheat Atta 10kg Bag', brand: 'Aashirvaad', mrp: 560, basePrice: 489, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', kw: ['aashirvaad 10kg', 'atta 10kg', 'sharbati atta'] },
    { name: 'Madhur Pure & Hygienic Sulphurless Sugar 5kg Bag', brand: 'Madhur', mrp: 260, basePrice: 220, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['sugar', 'madhur chini', '5kg sugar', 'white sugar'] },
    { name: 'Tata Salt Vacuum Evaporated Iodized Table Salt (1kg Pack)', brand: 'Tata Salt', mrp: 30, basePrice: 27, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', kw: ['tata salt', 'iodized salt', 'namak', 'table salt'] }
  ],
  'Dairy, Milk & Ghee': [
    { name: 'Amul Pure Cow Ghee Traditional Aroma Glass Jar (1L)', brand: 'Amul', mrp: 660, basePrice: 599, img: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80', kw: ['amul cow ghee', 'desi ghee', 'pure cow ghee', 'amul ghee 1l'] },
    { name: 'Amul Butter Pasteurized Salted 500g Block', brand: 'Amul', mrp: 275, basePrice: 265, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80', kw: ['amul butter', 'salted butter', 'makhan', 'butter 500g'] },
    { name: 'Amul Gold Full Cream Fresh Homogenised Milk (500ml Pouch)', brand: 'Amul', mrp: 34, basePrice: 34, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', kw: ['amul gold', 'full cream milk', 'fresh milk', 'doodh'] },
    { name: 'Amul Taaza Homogenised Toned Milk 1L Tetra Pak', brand: 'Amul', mrp: 74, basePrice: 70, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', kw: ['amul taaza', 'toned milk', 'tetra pak milk'] },
    { name: 'Mother Dairy Pure Buffalo Ghee 1L Tin', brand: 'Mother Dairy', mrp: 690, basePrice: 620, img: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80', kw: ['mother dairy ghee', 'buffalo ghee', 'desi ghee 1l'] },
    { name: 'Amul Malai Fresh Paneer Cube Block (200g)', brand: 'Amul', mrp: 95, basePrice: 88, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80', kw: ['amul paneer', 'fresh cottage cheese', 'malai paneer'] },
    { name: 'Amul Processed Diced Cheese Blend for Pizza (200g)', brand: 'Amul', mrp: 145, basePrice: 130, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80', kw: ['amul cheese', 'diced cheese', 'pizza cheese'] },
    { name: 'Nestle Everyday Dairy Whitener Milk Powder (1kg Pouch)', brand: 'Nestle', mrp: 540, basePrice: 480, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', kw: ['milk powder', 'nestle everyday', 'dairy whitener', 'tea milk powder'] },
    { name: 'Mother Dairy Classic Dahi Plain Curd Tub (400g)', brand: 'Mother Dairy', mrp: 45, basePrice: 42, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', kw: ['dahi', 'plain curd', 'mother dairy curd'] },
    { name: 'Epigamia Greek Yogurt Natural High Protein (100g Cup)', brand: 'Epigamia', mrp: 60, basePrice: 52, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', kw: ['greek yogurt', 'epigamia', 'protein curd'] }
  ],
  'Snacks & Beverages': [
    { name: 'Tata Tea Gold Rich Aroma CTC Tea with Long Leaves (500g)', brand: 'Tata Tea', mrp: 330, basePrice: 285, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80', kw: ['tata tea gold', 'chai patti', 'black tea', 'tea 500g'] },
    { name: 'Nescafe Classic Instant Pure Coffee Powder Glass Jar (100g)', brand: 'Nescafe', mrp: 340, basePrice: 290, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', kw: ['nescafe classic', 'coffee jar', 'instant coffee powder'] },
    { name: 'Cadbury Dairy Milk Silk Chocolate Bar Family Pack (150g)', brand: 'Cadbury', mrp: 180, basePrice: 160, img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80', kw: ['dairy milk silk', 'cadbury chocolate', 'silk chocolate'] },
    { name: 'Lay\'s India\'s Magic Masala Potato Chips Party Pack (115g)', brand: 'Lay\'s', mrp: 50, basePrice: 45, img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80', kw: ['lays magic masala', 'potato chips', 'lays party pack'] },
    { name: 'Haldiram\'s Nagpur Bhujia Sev Crispy Snack (1kg Mega Pack)', brand: 'Haldiram\'s', mrp: 290, basePrice: 245, img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80', kw: ['bhujia sev', 'haldiram namkeen', 'besan sev 1kg'] },
    { name: 'Parle-G Gold Glucose Biscuits Big Family Savings Pack (1kg)', brand: 'Parle', mrp: 120, basePrice: 105, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80', kw: ['parle g gold', 'glucose biscuit', 'chai biscuit'] },
    { name: 'Britannia Good Day Butter Rich Cookies (600g Value Pack)', brand: 'Britannia', mrp: 140, basePrice: 120, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80', kw: ['good day butter', 'britannia cookies', 'butter biscuit'] },
    { name: 'Red Bull Energy Drink Carbonated Can (250ml)', brand: 'Red Bull', mrp: 125, basePrice: 115, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80', kw: ['red bull', 'energy drink', 'caffeine can'] },
    { name: 'Maggi 2-Minute Masala Instant Noodles (Pack of 12 x 70g)', brand: 'Maggi / Nestle', mrp: 168, basePrice: 150, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', kw: ['maggi 12 pack', 'masala noodles', 'instant noodles'] },
    { name: 'Tropicana 100% Real Orange Juice Tetra Pak (1L)', brand: 'Tropicana', mrp: 145, basePrice: 125, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80', kw: ['tropicana orange', 'fruit juice', 'orange juice 1l'] }
  ],
  'Spices & Masalas': [
    { name: 'MDH Deggi Mirch Natural Red Colour Chilli Powder (500g)', brand: 'MDH', mrp: 340, basePrice: 290, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['deggi mirch', 'mdh chilli powder', 'lal mirch powder'] },
    { name: 'Catch Super Garam Masala Whole Spice Blend (200g)', brand: 'Catch', mrp: 160, basePrice: 135, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['garam masala', 'catch masala', 'spices'] },
    { name: 'Everest Turmeric Powder Pure Haldi (500g)', brand: 'Everest', mrp: 170, basePrice: 145, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['everest haldi', 'turmeric powder', 'haldi 500g'] },
    { name: 'Everest Coriander Powder Pure Dhania (500g)', brand: 'Everest', mrp: 165, basePrice: 140, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['dhania powder', 'coriander powder', 'everest dhania'] },
    { name: 'MDH Chunky Chat Masala Tangy Sprinkler (100g Box)', brand: 'MDH', mrp: 75, basePrice: 65, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['chaat masala', 'mdh chunky chat', 'salad spice'] },
    { name: 'Tata Sampann Whole Cumin Seeds Jeera (200g)', brand: 'Tata Sampann', mrp: 190, basePrice: 160, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['jeera', 'cumin seeds', 'tata sampann jeera'] },
    { name: 'Catch Shahi Biryani Masala Authentic Royal Blend (100g)', brand: 'Catch', mrp: 95, basePrice: 80, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['biryani masala', 'shahi biryani masala', 'catch biryani'] },
    { name: 'Everest Meat Masala for Mutton & Rich Curries (100g)', brand: 'Everest', mrp: 88, basePrice: 75, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['meat masala', 'mutton masala', 'everest meat'] },
    { name: 'Catch Kasuri Methi Dried Fenugreek Leaves (100g Box)', brand: 'Catch', mrp: 70, basePrice: 58, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['kasuri methi', 'dried fenugreek', 'catch methi'] },
    { name: 'MDH Kitchen King All-in-One Curry Masala (100g)', brand: 'MDH', mrp: 85, basePrice: 72, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', kw: ['kitchen king', 'mdh kitchen king', 'curry powder'] }
  ],
  'Cleaning & Household': [
    { name: 'Surf Excel Matic Front Load Detergent Powder (2kg Bag)', brand: 'Surf Excel', mrp: 490, basePrice: 420, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['surf excel matic', 'washing powder', 'detergent powder 2kg'] },
    { name: 'Vim Dishwash Gel Lemon Concentrate Dispenser Bottle (750ml)', brand: 'Vim', mrp: 210, basePrice: 175, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['vim gel', 'dishwash liquid', 'lemon gel', 'bartan gel'] },
    { name: 'Lizol Disinfectant Surface & Floor Cleaner Citrus (2L Bottle)', brand: 'Lizol', mrp: 410, basePrice: 345, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['lizol', 'floor cleaner', 'disinfectant cleaner 2l'] },
    { name: 'Harpic Power Plus Original Disinfectant Toilet Cleaner (1L)', brand: 'Harpic', mrp: 225, basePrice: 190, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['harpic', 'toilet cleaner', 'harpic 1l', 'bathroom cleaner'] },
    { name: 'Colin Glass and Surface Cleaner Spray Bottle (500ml)', brand: 'Colin', mrp: 115, basePrice: 98, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['colin spray', 'glass cleaner', 'window cleaner'] },
    { name: 'Ariel Complete Matic Liquid Detergent Front & Top Load (1L)', brand: 'Ariel', mrp: 260, basePrice: 220, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['ariel liquid', 'matic detergent liquid', 'washing liquid'] },
    { name: 'Scotch-Brite Heavy Duty Scrub Sponge Pad (Pack of 4)', brand: 'Scotch-Brite / 3M', mrp: 140, basePrice: 115, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['scotch brite', 'scrub pad', 'dish sponge', 'bartan scrub'] },
    { name: 'Good Knight Gold Flash Liquid Mosquito Vaporizer Refill (Pack of 2)', brand: 'Good Knight', mrp: 175, basePrice: 145, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['good knight', 'mosquito refill', 'all out refill'] },
    { name: 'Comfort After Wash Morning Fresh Fabric Conditioner (860ml)', brand: 'Comfort', mrp: 235, basePrice: 199, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['comfort liquid', 'fabric softener', 'clothes conditioner'] },
    { name: 'Hit Flying Insect Killer Mosquito & Fly Spray (400ml)', brand: 'Hit / Godrej', mrp: 230, basePrice: 195, img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80', kw: ['hit spray', 'kala hit', 'mosquito spray'] }
  ],

  // =========================================================================
  // 🔧 HARDWARE & SANITARY
  // =========================================================================
  'Hand & Power Tools': [
    { name: 'Stanley 12-Piece Cushion Grip Magnetic Screwdriver & Hand Toolset', brand: 'Stanley', mrp: 1299, basePrice: 899, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['stanley screwdriver', 'tools', 'hand tools', 'magnetic screwdriver set'] },
    { name: 'Bosch GSB 500W Professional Impact Drill Tool Kit with 100 Accessories', brand: 'Bosch', mrp: 4200, basePrice: 3450, img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80', kw: ['bosch drill', 'impact drill', 'gsb 500', 'power tool kit', 'drill machine'] },
    { name: 'Taparia 8-Inch Steel Combination Pliers with Insulated Grip', brand: 'Taparia', mrp: 310, basePrice: 245, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['taparia plier', 'combination pliers', 'hand plier', 'electrician tool'] },
    { name: 'Taparia 10-Inch Heavy Duty Adjustable Spanner Wrench', brand: 'Taparia', mrp: 480, basePrice: 390, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['adjustable wrench', 'slide wrench', 'spanner', 'taparia wrench'] },
    { name: 'Bosch GWS 600W Professional 4-Inch Angle Grinder Machine', brand: 'Bosch', mrp: 3100, basePrice: 2499, img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80', kw: ['angle grinder', 'bosch cutter', 'grinding machine', 'cutter machine'] },
    { name: 'Stanley 5-Meter Steel Metric Measuring Tape with Locking Mechanism', brand: 'Stanley', mrp: 290, basePrice: 199, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['measuring tape', 'stanley 5m tape', 'inch tape', 'survey tape'] },
    { name: 'Taparia 500g Drop Forged Carbon Steel Claw Hammer with Fiberglass Handle', brand: 'Taparia', mrp: 390, basePrice: 299, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['claw hammer', 'hathoda', 'taparia hammer', 'carpenter hammer'] },
    { name: 'Stanley 9-Piece Hex Ball-End Allen Key Keyring Set Metric', brand: 'Stanley', mrp: 420, basePrice: 315, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['allen key', 'hex key set', 'stanley allen key', 'l key'] },
    { name: 'Dongcheng 800W Rotary Hammer 26mm Heavy Drilling Machine', brand: 'Dongcheng', mrp: 3999, basePrice: 3199, img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80', kw: ['rotary hammer', 'heavy drill', 'concrete drill machine'] },
    { name: 'Taparia 86-Piece Master Socket & Ratchet Wrench Tool Set Case', brand: 'Taparia', mrp: 4950, basePrice: 3890, img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80', kw: ['socket set', 'ratchet wrench', 'mechanic toolkit', 'taparia set'] }
  ],
  'Electricals & Wiring': [
    { name: 'Havells LifeLine Plus 1.5 sq mm Single Core FR-LSH Copper Wire 90m (Red)', brand: 'Havells', mrp: 2150, basePrice: 1790, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['havells wire', '1.5 sq mm wire', 'copper wire', 'house wiring wire'] },
    { name: 'Polycab Optima Plus 2.5 sq mm Flame Retardant Copper Wire 90m (Blue)', brand: 'Polycab', mrp: 3400, basePrice: 2850, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['polycab wire', '2.5 sq mm wire', 'ac wiring wire', 'electric cable'] },
    { name: 'Anchor Roma Classic 6A 1-Way Modular White Light Switch (Pack of 10)', brand: 'Anchor by Panasonic', mrp: 380, basePrice: 290, img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80', kw: ['anchor roma', 'modular switch', '6a switch', 'light switch'] },
    { name: 'Anchor Roma 16A 3-Pin Power Socket with Shutter (Pack of 5)', brand: 'Anchor by Panasonic', mrp: 450, basePrice: 360, img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80', kw: ['16a socket', 'power socket', 'roma socket', 'plug socket'] },
    { name: 'Havells 9W Cool Day White B22 Base LED Bulb (Pack of 4)', brand: 'Havells', mrp: 520, basePrice: 360, img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80', kw: ['led bulb', 'havells bulb', '9w led', 'b22 bulb'] },
    { name: 'Schneider Electric Acti9 32A Double Pole MCB C-Curve', brand: 'Schneider Electric', mrp: 690, basePrice: 540, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['mcb', 'schneider mcb', '32a double pole', 'circuit breaker'] },
    { name: 'Orient Electric 1200mm Apex-FX High Speed Ceiling Fan (Brown)', brand: 'Orient', mrp: 2190, basePrice: 1699, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['ceiling fan', 'orient fan', 'high speed fan', 'pankha'] },
    { name: 'Luminous Zelio+ 1100 Pure Sine Wave Home UPS Inverter (900VA / 12V)', brand: 'Luminous', mrp: 7490, basePrice: 5890, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['inverter', 'luminous zelio', 'sine wave inverter', 'home ups'] },
    { name: 'Anchor PVC Self-Adhesive Electrical Insulation Tape (Pack of 5)', brand: 'Anchor', mrp: 90, basePrice: 70, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['electrical tape', 'wire tape', 'black tape', 'anchor tape'] },
    { name: 'GM 4-Outlet Heavy Duty Spike Guard Extension Board with 2M Cord', brand: 'GM Modular', mrp: 690, basePrice: 480, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', kw: ['extension board', 'spike guard', 'multi plug board', 'gm extension'] }
  ],
  'Plumbing & Pipes': [
    { name: 'Astral CPVC Pro 1-Inch Pipe Class 1 SDR 11 (3-Meter Length)', brand: 'Astral Pipes', mrp: 480, basePrice: 395, img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80', kw: ['cpvc pipe', 'astral pipe', '1 inch water pipe', 'plumbing pipe'] },
    { name: 'Supreme UPVC 3/4-Inch Ball Valve Brass Threaded', brand: 'Supreme', mrp: 290, basePrice: 220, img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80', kw: ['ball valve', 'water valve', 'supreme pipe fitting'] },
    { name: 'Hindware F160013 Brass Pillar Tap with Chrome Plating', brand: 'Hindware', mrp: 1190, basePrice: 890, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['washbasin tap', 'pillar tap', 'hindware tap', 'bathroom fitting'] },
    { name: 'Cera 2-in-1 Wall Mixer with Provision for Hand Shower', brand: 'Cera', mrp: 3450, basePrice: 2690, img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80', kw: ['wall mixer', 'cera tap', 'bathroom mixer', 'shower tap'] },
    { name: 'Astral Bondtite Solvent Cement for CPVC Pipe Joint (118ml Can)', brand: 'Astral', mrp: 160, basePrice: 125, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['cpvc solvent', 'pipe glue', 'astral cement', 'pipe joint'] },
    { name: 'Kohler Multi-Flow Chrome Overhead Rain Shower with Arm', brand: 'Kohler', mrp: 2990, basePrice: 2190, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['rain shower', 'overhead shower', 'kohler shower'] },
    { name: 'Supreme 4-Inch SWR PVC Drainage Pipe with Rubber Ring (10ft)', brand: 'Supreme', mrp: 680, basePrice: 540, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['drainage pipe', 'swr pipe', '4 inch pvc pipe'] },
    { name: 'Pidilite M-Seal Epoxy Compound for Water Leakage Sealing (100g)', brand: 'Pidilite', mrp: 35, basePrice: 30, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['m seal', 'epoxy seal', 'pipe leak seal', 'pidilite mseal'] },
    { name: 'PTFE Teflon Pipe Thread Sealing Tape (Pack of 10 Rolls)', brand: 'Champion', mrp: 150, basePrice: 110, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['teflon tape', 'thread seal tape', 'plumbing tape'] },
    { name: 'Jaquar Health Faucet with 1.2M Flexible Stainless Steel Hose & Hook', brand: 'Jaquar', mrp: 1450, basePrice: 1120, img: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80', kw: ['health faucet', 'jet spray', 'jaquar jet', 'toilet spray'] }
  ],
  'Paints & Wall Care': [
    { name: 'Asian Paints Apex Ultima Exterior Emulsion Paint (4L Bucket)', brand: 'Asian Paints', mrp: 1850, basePrice: 1540, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['asian paints', 'apex ultima', 'exterior paint', 'weatherproof paint'] },
    { name: 'Asian Paints Royale Luxury Interior Matt Emulsion Paint (4L)', brand: 'Asian Paints', mrp: 2150, basePrice: 1790, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['royale luxury', 'interior paint', 'wall paint', 'asian paints royale'] },
    { name: 'Birla White Wall Care Putty Water Resistant (20kg Bag)', brand: 'Birla White', mrp: 850, basePrice: 690, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['wall putty', 'birla white', 'putty 20kg', 'wall base'] },
    { name: 'Asian Paints Tractor Emulsion Interior Wall Paint (10L Bucket)', brand: 'Asian Paints', mrp: 1950, basePrice: 1590, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['tractor emulsion', 'interior emulsion', 'white wall paint'] },
    { name: 'Berger Walmasta Exterior Antifungal Emulsion (10L)', brand: 'Berger Paints', mrp: 1890, basePrice: 1499, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['berger paint', 'walmasta', 'exterior emulsion 10l'] },
    { name: 'Dr. Fixit 101 LW+ Waterproofing Liquid Additive for Concrete (5L)', brand: 'Dr. Fixit', mrp: 750, basePrice: 599, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['dr fixit 101', 'waterproofing liquid', 'roof water proofing'] },
    { name: 'Asian Paints Decoprime Wall Primer Solvent Thinnable (4L)', brand: 'Asian Paints', mrp: 780, basePrice: 620, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['wall primer', 'decoprime', 'asian paints primer'] },
    { name: 'Asian Paints 9-Inch Soft Grip Roller Brush with Tray for Wall Painting', brand: 'Asian Paints', mrp: 350, basePrice: 260, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['paint roller', 'roller brush', 'wall painting roller'] },
    { name: 'Fevicol SH Synthetic Resin Adhesive for Woodworking (1kg Jar)', brand: 'Fevicol / Pidilite', mrp: 290, basePrice: 240, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['fevicol sh', 'wood glue', 'adhesive jar 1kg'] },
    { name: 'Dr. Fixit Raincoat Waterproof Exterior Protective Coating (4L)', brand: 'Dr. Fixit', mrp: 1650, basePrice: 1320, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80', kw: ['dr fixit raincoat', 'waterproof exterior coat', 'leakproof paint'] }
  ],
  'Fasteners & Hardware': [
    { name: 'Godrej Nav-Tal 7 Levers High Security Brass Padlock with 3 Keys', brand: 'Godrej', mrp: 620, basePrice: 499, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['godrej lock', 'navtal lock', 'brass padlock', 'tala', 'door lock'] },
    { name: 'Europa High Security Rim Main Door Lock with 3 Dimple Keys', brand: 'Europa', mrp: 2450, basePrice: 1890, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['europa door lock', 'main door lock', 'night latch'] },
    { name: 'Heavy Duty Stainless Steel 304 Bearing Door Hinges 4-Inch (Pack of 3 Pairs)', brand: 'Dorset', mrp: 750, basePrice: 580, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['door hinges', 'ss hinges', 'kabza', '4 inch hinges'] },
    { name: 'Zinc Plated Steel Self-Drilling Drywall Screws 1.5-Inch (Box of 500)', brand: 'ForgeMaster', mrp: 450, basePrice: 340, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['drywall screws', 'screws box 500', 'hardware screws', 'pech'] },
    { name: 'Godrej Classic Cylindrical Stainless Steel Bedroom Door Lock', brand: 'Godrej', mrp: 1250, basePrice: 950, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['cylindrical lock', 'godrej round lock', 'bedroom lock'] },
    { name: 'Fischer Nylon Wall Plugs Rawl Plugs 8mm with Screws (Pack of 100)', brand: 'Fischer', mrp: 320, basePrice: 230, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['wall plugs', 'gitti', 'rawl plugs', 'fischer 8mm'] },
    { name: 'Ozone Hydraulic Automatic Aluminum Door Closer 60kg Load', brand: 'Ozone', mrp: 1450, basePrice: 1090, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['door closer', 'hydraulic door closer', 'ozone door'] },
    { name: 'Heavy Duty Solid Brass Tower Bolt Door Latch 8-Inch', brand: 'Dorset', mrp: 420, basePrice: 310, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['tower bolt', 'chitkani', 'door latch', 'brass bolt'] },
    { name: 'High Tensile Grade 8.8 Hex Bolts with Nuts M10 x 50mm (Pack of 50)', brand: 'Unbrako', mrp: 480, basePrice: 370, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['hex bolts', 'nut bolt set', 'm10 bolts', 'unbrako'] },
    { name: 'Dorset Stainless Steel Main Door Pull Handle 12-Inch Pair', brand: 'Dorset', mrp: 1150, basePrice: 850, img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80', kw: ['door handle', 'pull handle', 'ss handle'] }
  ],

  // =========================================================================
  // 📚 STATIONERY & BOOKS
  // =========================================================================
  'Notebooks & Registers': [
    { name: 'Classmate Long Notebook Single Line 172 Pages (Pack of 6)', brand: 'Classmate / ITC', mrp: 420, basePrice: 330, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['classmate notebook', 'copy', 'long notebook 6 pack', 'registers', 'school copy'] },
    { name: 'Classmate Pulse Spiral Bound Notebook A4 Size 300 Pages (Pack of 2)', brand: 'Classmate', mrp: 390, basePrice: 310, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['spiral notebook', 'classmate pulse', 'a4 spiral register'] },
    { name: 'Navneet Youva Hard Bound Accounting Cash Ledger Register 384 Pages', brand: 'Navneet', mrp: 280, basePrice: 220, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['account register', 'khata book', 'hardbound register', 'youva'] },
    { name: 'Classmate Soft Cover Ruled Notebook 120 Pages (Bundle of 12)', brand: 'Classmate', mrp: 480, basePrice: 380, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['small copy', 'school notebooks 12 pack', 'classmate copy'] },
    { name: 'Camlin Kokuyo Spiral Drawing Book A3 Size Cartridge Paper (36 Sheets)', brand: 'Camlin', mrp: 180, basePrice: 145, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['drawing book', 'a3 drawing copy', 'art book', 'camlin drawing'] },
    { name: 'Navneet Youva Practical Journal Ruled & Interleaf 160 Pages', brand: 'Navneet', mrp: 95, basePrice: 75, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['practical copy', 'science journal', 'interleaf copy'] },
    { name: 'Factor Notes Weekly Planner & Productivity Journal 200 Pages', brand: 'Factor Notes', mrp: 499, basePrice: 349, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['planner', 'daily journal', 'factor notes', 'diary'] },
    { name: 'JK Cedar Executive Hardcover Ruled Notebook Diary with Bookmark', brand: 'JK Paper', mrp: 260, basePrice: 195, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['executive diary', 'office notebook', 'hardcover diary'] },
    { name: 'Classmate Geometry Practical Lab Record Book (80 Pages)', brand: 'Classmate', mrp: 65, basePrice: 50, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['geometry book', 'lab record copy', 'math copy'] },
    { name: 'Navneet Graph Notebook Centimeter Grid Paper (64 Pages)', brand: 'Navneet', mrp: 45, basePrice: 35, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['graph copy', 'graph book', 'maths graph paper'] }
  ],
  'Pens, Art & Drawing': [
    { name: 'Parker Vector Matte Black Fountain Pen with Gold Trim Gift Box', brand: 'Parker', mrp: 650, basePrice: 499, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['parker pen', 'fountain pen', 'vector pen', 'gift pen', 'luxury pen'] },
    { name: 'Reynolds 045 Fine Carbide Tip Blue Ball Pens (Box of 20)', brand: 'Reynolds', mrp: 200, basePrice: 160, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['reynolds 045', 'ball pen box', 'blue pens 20 pack'] },
    { name: 'Uniball Eye UB-150 Micro 0.5mm Rollerball Pens (Pack of 3 Blue)', brand: 'Uni-ball', mrp: 270, basePrice: 225, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['uniball eye', 'roller pen', 'waterproof ink pen'] },
    { name: 'Doms Water Colour Cakes 24 Vibrant Shades with Brush', brand: 'Doms', mrp: 150, basePrice: 120, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', kw: ['water colour', 'doms colour', 'painting cake', 'art colours'] },
    { name: 'Faber-Castell 24 Tri Colour Triangular Grip Pencil Set', brand: 'Faber-Castell', mrp: 220, basePrice: 175, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', kw: ['colour pencils', 'faber castell', 'drawing pencils'] },
    { name: 'Pilot V5 Liquid Ink High Precision Roller Ball Pen (Pack of 3)', brand: 'Pilot', mrp: 240, basePrice: 195, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['pilot v5', 'liquid ink pen', 'precision pen'] },
    { name: 'Doms Smart Drawing Kit 8-in-1 Complete Art & Colouring Box', brand: 'Doms', mrp: 350, basePrice: 280, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', kw: ['doms art kit', 'colour kit', 'drawing set', 'kids colour box'] },
    { name: 'Camlin Artist Acrylic Colour 12 Tubes Set (20ml Each)', brand: 'Camlin', mrp: 450, basePrice: 360, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80', kw: ['acrylic colours', 'camlin acrylic', 'canvas paint'] },
    { name: 'Cello Butterflow Classic Blue Ballpoint Pens (Jar of 20)', brand: 'Cello', mrp: 200, basePrice: 155, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['cello butterflow', 'smooth pen', 'blue pen jar'] },
    { name: 'Staedtler Mars Lumograph Professional Art Sketching Graphite Pencils 6B-2H', brand: 'Staedtler', mrp: 620, basePrice: 490, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80', kw: ['sketching pencils', 'staedtler', 'graphite drawing pencils'] }
  ],
  'Office & Printing': [
    { name: 'JK Copier A4 Paper 75 GSM High Speed Printing Ream (500 Sheets)', brand: 'JK Paper', mrp: 380, basePrice: 310, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['jk copier a4', 'xerox paper', 'a4 rim 500 sheets', 'printer paper'] },
    { name: 'Kangaroo Heavy Duty Desktop Paper Stapler (Model No. 10 with 1000 Pins)', brand: 'Kangaro', mrp: 160, basePrice: 125, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['kangaro stapler', 'stapler machine', 'staple pins'] },
    { name: 'Casio MJ-120D Plus Desktop Check & Correct Calculator (12 Digits)', brand: 'Casio', mrp: 545, basePrice: 440, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['casio calculator', 'office calculator', '120d calculator', 'hisab calculator'] },
    { name: 'Kores White Glow Dry Correction Fluid Pen & Diluter Set', brand: 'Kores', mrp: 85, basePrice: 65, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['whitener', 'correction pen', 'kores white'] },
    { name: 'Kangaro Heavy Duty 2-Hole Paper Punch Machine (DP-600)', brand: 'Kangaro', mrp: 290, basePrice: 220, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['punch machine', 'kangaro punch', 'hole puncher'] },
    { name: 'Solo Premium A4 Button File Folders with Index Label (Pack of 10)', brand: 'Solo', mrp: 250, basePrice: 185, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['file folder', 'solo file', 'document folder a4'] },
    { name: 'Scotch 3M Transparent Strong Adhesive Tape with Dispenser (1-Inch x 25M)', brand: '3M / Scotch', mrp: 120, basePrice: 95, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['cello tape', 'clear tape', 'scotch tape dispenser'] },
    { name: 'Casio FX-991CW Scientific Calculator for Engineering Students (540+ Functions)', brand: 'Casio', mrp: 1595, basePrice: 1399, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['scientific calculator', 'fx 991', 'engineering calculator', 'casio 991cw'] },
    { name: 'Canon PG-745 Black Genuine Ink Cartridge for Pixma Printers', brand: 'Canon', mrp: 1195, basePrice: 990, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['canon ink', '745 ink cartridge', 'pixma ink', 'printer ink'] },
    { name: 'Kangaro Chrome Plated Paper Gem Clips (Box of 100 Clips)', brand: 'Kangaro', mrp: 60, basePrice: 45, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80', kw: ['paper clips', 'allpin', 'gem clips', 'kangaro clips'] }
  ],
  'School Bags & Boxes': [
    { name: 'Skybags Bravo 3 Compartment Water Resistant School Backpack (32L)', brand: 'Skybags', mrp: 2199, basePrice: 1499, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', kw: ['school bag', 'skybags backpack', 'student bag', 'tuition bag'] },
    { name: 'American Tourister Casual 32L Laptop & College Backpack (Teal Blue)', brand: 'American Tourister', mrp: 2490, basePrice: 1699, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', kw: ['college bag', 'laptop backpack', 'american tourister'] },
    { name: 'Camlin Kokuyo Scholar Geometry Mathematical Instrument Box', brand: 'Camlin', mrp: 180, basePrice: 145, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['geometry box', 'compass box', 'camlin scholar', 'instrument box'] },
    { name: 'Milton Thermosteel Flip Lid Insulated Hot & Cold Kids Water Bottle (500ml)', brand: 'Milton', mrp: 699, basePrice: 549, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', kw: ['milton bottle', 'thermosteel water bottle', 'school bottle'] },
    { name: 'Classmate Victor Metal Geometry Box with Mechanical Pencil', brand: 'Classmate', mrp: 220, basePrice: 175, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['classmate geometry box', 'victor compass box'] },
    { name: 'Cello Maxfresh Stainless Steel 3-Container Insulated Lunch Box with Bag', brand: 'Cello', mrp: 850, basePrice: 620, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', kw: ['lunch box', 'tiffin box', 'cello tiffin', 'school lunch box'] },
    { name: 'Safari Seek 35L Water Resistant School Bag with Rain Cover', brand: 'Safari', mrp: 2690, basePrice: 1790, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', kw: ['safari bag', 'safari backpack', 'school bag with rain cover'] },
    { name: 'Faber-Castell PVC Free Dust-Free Vinyl Erasers (Pack of 20)', brand: 'Faber-Castell', mrp: 100, basePrice: 80, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['eraser pack', 'rubber', 'dust free eraser', 'faber castell eraser'] },
    { name: 'Doms Neon Apsara Platinum Extra Dark Pencils (Pack of 10 with Sharpener)', brand: 'Doms', mrp: 70, basePrice: 55, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['pencil box', 'doms pencil', 'extra dark pencil'] },
    { name: 'Funskool Hardtop Embossed 3D Astronaut Pencil Case Pouch', brand: 'Funskool', mrp: 399, basePrice: 290, img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', kw: ['pencil pouch', 'hardtop pencil case', 'pencil box for kids'] }
  ],
  'Competitive Books': [
    { name: 'Lucent\'s General Knowledge (Samanya Gyan) Latest Edition 2026', brand: 'Lucent Publications', mrp: 360, basePrice: 280, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['lucent gk', 'samanya gyan', 'gk book', 'competitive exam', 'ssc book'] },
    { name: 'Quantitative Aptitude for Competitive Examinations by Dr. R.S. Aggarwal', brand: 'S. Chand', mrp: 799, basePrice: 620, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['rs aggarwal', 'quantitative aptitude', 'maths book for ssc', 's chand'] },
    { name: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal', brand: 'S. Chand', mrp: 850, basePrice: 680, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['reasoning book', 'verbal reasoning', 'rs aggarwal reasoning'] },
    { name: 'NCERT Indian History Class 6-12 Gist Summary for UPSC/BPSC Exams', brand: 'Arihant', mrp: 450, basePrice: 340, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['ncert history', 'upsc history', 'bpsc book', 'arihant ncert'] },
    { name: 'Fast Track Objective Arithmetic by Rajesh Verma', brand: 'Arihant Publications', mrp: 425, basePrice: 320, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['fast track maths', 'arihant arithmetic', 'rajesh verma'] },
    { name: 'General Science for Railway & SSC Exams (Samanya Vigyan)', brand: 'Speedy Publications', mrp: 220, basePrice: 165, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['speedy railway', 'general science book', 'railway gk'] },
    { name: 'English Grammar & Composition by Wren & Martin Multi-Colour Edition', brand: 'S. Chand', mrp: 499, basePrice: 390, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['wren and martin', 'english grammar', 'competitive english book'] },
    { name: 'Oxford Student Atlas for India Latest Comprehensive Edition', brand: 'Oxford University Press', mrp: 375, basePrice: 290, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['oxford atlas', 'map book', 'atlas for upsc', 'geography atlas'] },
    { name: 'BPSC Bihar Special GK (Bihar Samanya Parichay) by Dr. Manish Rannjan', brand: 'Prabhat Prakashan', mrp: 350, basePrice: 260, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['bihar gk', 'bpsc bihar special', 'manish rannjan', 'prabhat'] },
    { name: 'Drishti IAS Current Affairs Yearly Compilation Book (Hindi/English)', brand: 'Drishti Publications', mrp: 280, basePrice: 210, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', kw: ['drishti ias', 'current affairs', 'yearly current affairs book'] }
  ]
};

// Build all 300 products mapped to their exact Category ID and Subcategory
const ALL_PRODUCTS = [];
let prodSeq = 1;

for (const cat of CATEGORIES) {
  for (const sub of cat.subcategories) {
    const list = PRODUCT_TEMPLATES[sub] || [];
    list.forEach((item, idx) => {
      const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').slice(0, 30);
      ALL_PRODUCTS.push({
        id: `prod-${cat.id.replace('cat-', '')}-${idx + 1}-${slug}`,
        name: item.name,
        brand: item.brand,
        categoryId: cat.id,
        subcategory: sub,
        sku: `SKU-${cat.id.toUpperCase().slice(4, 7)}-${String(prodSeq).padStart(4, '0')}`,
        modelNumber: `MOD-${String(prodSeq).padStart(4, '0')}`,
        description: item.name + ' with 100% genuine warranty and immediate counter verification at local partner merchants.',
        specifications: {
          'Category': cat.name,
          'Subcategory': sub,
          'Brand': item.brand,
          'Warranty': '1 Year Standard Manufacturer Warranty'
        },
        image: item.img,
        keywords: item.kw,
        basePrice: item.basePrice,
        mrp: item.mrp,
        isMedicine: cat.id === 'cat-pharmacy',
        tags: [cat.name, sub, 'Local Stock']
      });
      prodSeq++;
    });
  }
}

console.log(`Generated ${ALL_PRODUCTS.length} clean, categorized products.`);

// 2. Realistic Local Merchants & Stores Generator (Within 1km - 100m to 900m)
const generateLocalStores = (cityName = 'Jamui', stateName = 'Bihar', lat = 24.9258, lng = 86.2232, pincode = '811307') => {
  const safeCity = cityName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return [
    {
      id: `store-${safeCity}-sharma-auto`,
      name: `${cityName} Sharma Auto Spares & Bike Clinic`,
      ownerName: 'Rajesh Sharma',
      phone: '+91 98450 12345',
      whatsapp: '919845012345',
      email: `sharma.auto.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-automobile'],
      rating: 4.8,
      reviewCount: 342,
      verified: true,
      address: `Shop #14, Main Market Road, Near Gandhi Chowk, ${cityName}`,
      area: `Main Market / Gandhi Chowk`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0012).toFixed(6)), lng: Number((lng + 0.0010).toFixed(6)) }, // ~160m
      openingHours: '8:30 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Genuine OEM Parts', 'Fitting Support', 'UPI Accepted', 'Counter Billing'],
      about: `Premier two-wheeler and four-wheeler spare parts hub in ${cityName}, stocking Motul oils, Castrol lubricants, Hero & Honda parts, and Exide batteries.`,
      gstNumber: '10AUTO1234F1Z5',
      joinedDate: '2023-01-10',
      viewsCount: 1540,
      enquiriesCount: 110
    },
    {
      id: `store-${safeCity}-kumar-motors`,
      name: `${cityName} Kumar Motors & Genuine Spares`,
      ownerName: 'Sunil Kumar',
      phone: '+91 98801 54321',
      whatsapp: '919880154321',
      email: `kumar.motors.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-automobile'],
      rating: 4.6,
      reviewCount: 198,
      verified: true,
      address: `Plot #88, Station Road, Near Railway Overbridge, ${cityName}`,
      area: `Station Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0025).toFixed(6)), lng: Number((lng + 0.0022).toFixed(6)) }, // ~380m
      openingHours: '9:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Wholesale Rates', 'Instant Installation', 'Engine Diagnostics'],
      about: `Authorized distributor for MRF Tyres, Castrol Power1, Amaron batteries, and clutch/brake assemblies in ${cityName}.`,
      gstNumber: '10KUMAR8899K1Z4',
      joinedDate: '2023-04-12',
      viewsCount: 1420,
      enquiriesCount: 95
    },
    {
      id: `store-${safeCity}-gadget-point`,
      name: `${cityName} Gadget & Mobile World`,
      ownerName: 'Arif Khan',
      phone: '+91 98805 77665',
      whatsapp: '919880577665',
      email: `gadgets.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-electronics'],
      rating: 4.8,
      reviewCount: 420,
      verified: true,
      address: `No. 32, Commercial Complex, Cinema Road, ${cityName}`,
      area: `Cinema Road / Commercial Hub`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0022).toFixed(6)), lng: Number((lng - 0.0018).toFixed(6)) }, // ~310m
      openingHours: '10:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Official Apple & Samsung Dealer', '0% EMI', 'Tempered Glass Fitment', 'Accessories'],
      about: `Exclusive smartphones and accessories gallery in ${cityName}, offering iPhone 15, OnePlus, boAt audio, Anker chargers, and SanDisk storage.`,
      gstNumber: '10GADGET1234P1Z2',
      joinedDate: '2023-02-15',
      viewsCount: 3200,
      enquiriesCount: 290
    },
    {
      id: `store-${safeCity}-digital-hub`,
      name: `${cityName} Digital Electronics & Audio Point`,
      ownerName: 'Vikash Barnwal',
      phone: '+91 98765 44332',
      whatsapp: '919876544332',
      email: `digitalhub.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-electronics'],
      rating: 4.7,
      reviewCount: 265,
      verified: true,
      address: `Shop #5, Tower Chowk, Court Road, ${cityName}`,
      area: `Tower Chowk`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0035).toFixed(6)), lng: Number((lng - 0.0028).toFixed(6)) }, // ~510m
      openingHours: '10:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Bluetooth Speakers', 'Smartwatches', 'Fast Chargers', 'Memory Cards'],
      about: `Authorized seller for boAt, Sony, Noise, JBL, and Fastrack smart wearables and sound systems in ${cityName}.`,
      gstNumber: '10DIGITAL5567R1Z9',
      joinedDate: '2022-10-15',
      viewsCount: 2100,
      enquiriesCount: 160
    },
    {
      id: `store-${safeCity}-city-pharmacy`,
      name: `${cityName} Care 24x7 Chemist & Surgicals`,
      ownerName: 'Dr. Anita Desai',
      phone: '+91 98800 23456',
      whatsapp: '919880023456',
      email: `carepharmacy.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.9,
      reviewCount: 512,
      verified: true,
      address: `Plot 22, Hospital Road, Opp. Sadar Hospital, ${cityName}`,
      area: `Hospital Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0018).toFixed(6)), lng: Number((lng + 0.0028).toFixed(6)) }, // ~370m
      openingHours: '24 Hours Open',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['24x7 Open', 'Cold Storage Insulin', 'Digital Rx OCR', 'Home Delivery in 15 Mins'],
      about: `Round-the-clock medical counter in ${cityName}, stocking Dolo 650, Dr. Morepen Glucometers, Omron BP monitors, baby diapers, and surgical items.`,
      gstNumber: '10PHARM5567R1Z9',
      joinedDate: '2022-08-15',
      viewsCount: 3450,
      enquiriesCount: 312
    },
    {
      id: `store-${safeCity}-medplus-health`,
      name: `${cityName} MedPlus Pharmacy & Wellness`,
      ownerName: 'Dr. Suresh Reddy',
      phone: '+91 98860 77889',
      whatsapp: '919886077889',
      email: `medplus.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.8,
      reviewCount: 390,
      verified: true,
      address: `1st Floor, LIC Building Complex, Kutchery Road, ${cityName}`,
      area: `Kutchery Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0042).toFixed(6)), lng: Number((lng + 0.0035).toFixed(6)) }, // ~610m
      openingHours: '7:30 AM - 11:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Flat 15% Off', 'Prescription Verification', 'Diabetic Diet', 'Vitamins'],
      about: `Trusted pharmacy chain in ${cityName}, providing authentic branded healthcare, vitamins, blood pressure monitors, and wellness products.`,
      gstNumber: '10MEDPLUS3322L1Z6',
      joinedDate: '2023-01-25',
      viewsCount: 1980,
      enquiriesCount: 155
    },
    {
      id: `store-${safeCity}-krishna-kirana`,
      name: `${cityName} Sri Krishna Super Store & Kirana`,
      ownerName: 'Gopalakrishna Rao',
      phone: '+91 99002 33445',
      whatsapp: '919900233445',
      email: `srikrishnakirana.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-grocery'],
      rating: 4.7,
      reviewCount: 480,
      verified: true,
      address: `12th Main, Gola Road, Near Purani Bazaar, ${cityName}`,
      area: `Gola Road / Purani Bazaar`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0015).toFixed(6)), lng: Number((lng - 0.0012).toFixed(6)) }, // ~210m
      openingHours: '7:30 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Home Delivery in 20 Mins', 'Wholesale Rations', 'UPI Accepted'],
      about: `Wholesale & retail kirana store in ${cityName}, offering Fortune Basmati Rice, Aashirvaad Atta, Amul Ghee, Tata Tea, and authentic masalas.`,
      gstNumber: '10GROC1234K1Z2',
      joinedDate: '2022-11-01',
      viewsCount: 2310,
      enquiriesCount: 190
    },
    {
      id: `store-${safeCity}-fresh-mart`,
      name: `${cityName} Fresh Daily Needs & Grocery Mart`,
      ownerName: 'Sunil Agrawal',
      phone: '+91 98765 33445',
      whatsapp: '919876533445',
      email: `freshmart.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-grocery'],
      rating: 4.8,
      reviewCount: 315,
      verified: true,
      address: `Shop #8, Mahavir Chowk, By-Pass Road, ${cityName}`,
      area: `Mahavir Chowk`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0038).toFixed(6)), lng: Number((lng + 0.0042).toFixed(6)) }, // ~640m
      openingHours: '7:00 AM - 10:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Express Delivery', 'Dairy & Paneer', 'Cleaning Products', 'Packaged Foods'],
      about: `Complete family grocery mart in ${cityName}, stocking daily essentials, dairy, detergents, cooking oils, and packaged snacks.`,
      gstNumber: '10FRESH9982D1ZH',
      joinedDate: '2023-02-20',
      viewsCount: 2200,
      enquiriesCount: 175
    },
    {
      id: `store-${safeCity}-hardware-tools`,
      name: `${cityName} Mahalaxmi Hardware & Power Tools`,
      ownerName: 'Manoj Kumar Gupta',
      phone: '+91 98765 77881',
      whatsapp: '919876577881',
      email: `hardware.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-hardware'],
      rating: 4.8,
      reviewCount: 280,
      verified: true,
      address: `Plot 10, Loha Mandi, Industrial Road, ${cityName}`,
      area: `Loha Mandi`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0028).toFixed(6)), lng: Number((lng - 0.0035).toFixed(6)) }, // ~500m
      openingHours: '8:30 AM - 8:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Stanley & Bosch Dealer', 'Asian Paints Center', 'Havells Wires', 'Astral Pipes'],
      about: `Industrial and household hardware supplier in ${cityName}, offering Stanley toolsets, Bosch drills, plumbing fixtures, and Godrej locks.`,
      gstNumber: '10HARD1234F1Z5',
      joinedDate: '2023-01-15',
      viewsCount: 1800,
      enquiriesCount: 140
    },
    {
      id: `store-${safeCity}-stationery-books`,
      name: `${cityName} Vidya Sagar Book Depot & Stationery`,
      ownerName: 'Ramanand Mishra',
      phone: '+91 98765 88990',
      whatsapp: '919876588990',
      email: `stationery.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-stationery'],
      rating: 4.9,
      reviewCount: 380,
      verified: true,
      address: `Shop #2, College Gate Road, Opp. K.K.M. College, ${cityName}`,
      area: `College Gate Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0020).toFixed(6)), lng: Number((lng + 0.0038).toFixed(6)) }, // ~470m
      openingHours: '8:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Lucent & RS Aggarwal Books', 'Classmate Registers', 'Parker Pens', 'Color Xerox'],
      about: `Leading book depot in ${cityName}, specializing in competitive exam books (SSC, BPSC, UPSC, Railway), school notebooks, and fine art supplies.`,
      gstNumber: '10BOOK7788P1Z3',
      joinedDate: '2022-11-20',
      viewsCount: 2100,
      enquiriesCount: 165
    },
    // Third competing stores for each domain:
    {
      id: `store-${safeCity}-royal-auto`,
      name: `${cityName} Royal Two-Wheeler Hub & Spare Center`,
      ownerName: 'Vikram Singh',
      phone: '+91 98455 99881',
      whatsapp: '919845599881',
      email: `royalauto.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-automobile'],
      rating: 4.7,
      reviewCount: 210,
      verified: true,
      address: `Opp. Bus Stand, Bypass Highway, ${cityName}`,
      area: `Bypass Highway / Bus Stand`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0032).toFixed(6)), lng: Number((lng + 0.0025).toFixed(6)) }, // ~520m
      openingHours: '8:00 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Express Engine Oil Change', 'Chain Lube Service', 'Genuine Helmets'],
      about: `Bike clinic and premium lubricants dealer in ${cityName}, specializing in Motul, Castrol, and original OEM parts.`,
      gstNumber: '10ROYAL3344K1Z8',
      joinedDate: '2023-03-10',
      viewsCount: 1600,
      enquiriesCount: 120
    },
    {
      id: `store-${safeCity}-apex-mobiles`,
      name: `${cityName} Apex Smart Mobiles & Gadgets Gallery`,
      ownerName: 'Deepak Chaurasia',
      phone: '+91 98765 66778',
      whatsapp: '919876566778',
      email: `apexmobiles.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-electronics'],
      rating: 4.9,
      reviewCount: 350,
      verified: true,
      address: `Shop #18, Main Market Square, ${cityName}`,
      area: `Main Market Square`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0018).toFixed(6)), lng: Number((lng - 0.0032).toFixed(6)) }, // ~420m
      openingHours: '10:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Original Apple & Samsung Stock', 'Smartwatches & TWS', 'Exchange Offers'],
      about: `Smart gadget retailer in ${cityName}, stocking official smartphones, fast chargers, power banks, and audio headsets.`,
      gstNumber: '10APEX7788P1Z5',
      joinedDate: '2023-01-20',
      viewsCount: 2800,
      enquiriesCount: 240
    },
    {
      id: `store-${safeCity}-sanjivani-medico`,
      name: `${cityName} Sanjivani Medicos & Healthcare`,
      ownerName: 'Dr. Rakesh Verma',
      phone: '+91 98801 22334',
      whatsapp: '919880122334',
      email: `sanjivani.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.8,
      reviewCount: 290,
      verified: true,
      address: `Shop #4, Gandhi Chowk, Station Road, ${cityName}`,
      area: `Gandhi Chowk`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0024).toFixed(6)), lng: Number((lng - 0.0020).toFixed(6)) }, // ~350m
      openingHours: '7:00 AM - 11:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Prescription Medicines', 'Daily Health Essentials', 'Free BP Checkup'],
      about: `Trusted chemist in ${cityName}, offering authentic OTC tablets, thermometers, diabetic strips, and child wellness products.`,
      gstNumber: '10SANJ8899K1Z2',
      joinedDate: '2022-09-10',
      viewsCount: 2200,
      enquiriesCount: 195
    },
    {
      id: `store-${safeCity}-apna-bazaar`,
      name: `${cityName} Apna Bazaar Wholesale Kirana`,
      ownerName: 'Rameshwar Prasad',
      phone: '+91 98765 11223',
      whatsapp: '919876511223',
      email: `apnabazaar.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-grocery'],
      rating: 4.6,
      reviewCount: 310,
      verified: true,
      address: `Main Mandi Road, Near Grain Market, ${cityName}`,
      area: `Grain Market / Mandi Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0028).toFixed(6)), lng: Number((lng + 0.0018).toFixed(6)) }, // ~410m
      openingHours: '7:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Wholesale Prices', 'Bulk Bags Available', 'Free Home Delivery'],
      about: `Large grocery wholesale depot in ${cityName}, supplying Aashirvaad Atta, Fortune Basmati, Amul Butter, Spices, and detergents.`,
      gstNumber: '10APNA4455L1Z1',
      joinedDate: '2022-12-05',
      viewsCount: 1950,
      enquiriesCount: 160
    },
    {
      id: `store-${safeCity}-metro-sanitary`,
      name: `${cityName} Metro Sanitary, Pipes & Electricals`,
      ownerName: 'Alok Singhania',
      phone: '+91 98800 44556',
      whatsapp: '919880044556',
      email: `metrosanitary.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-hardware'],
      rating: 4.7,
      reviewCount: 190,
      verified: true,
      address: `Plot #15, Cinema Road, Opp. Town Hall, ${cityName}`,
      area: `Cinema Road`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat + 0.0035).toFixed(6)), lng: Number((lng + 0.0015).toFixed(6)) }, // ~460m
      openingHours: '8:30 AM - 8:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Astral & Supreme Pipes', 'Havells & Polycab Wires', 'Water Heaters'],
      about: `Sanitary and electrical fitting center in ${cityName}, offering water motors, bathroom fixtures, wires, and power tools.`,
      gstNumber: '10METRO1122P1Z9',
      joinedDate: '2023-02-18',
      viewsCount: 1400,
      enquiriesCount: 115
    },
    {
      id: `store-${safeCity}-student-corner`,
      name: `${cityName} Student Corner & Book House`,
      ownerName: 'Santosh Jha',
      phone: '+91 98765 99001',
      whatsapp: '919876599001',
      email: `studentcorner.${safeCity}@dhoondo.local`,
      categoryIds: ['cat-stationery'],
      rating: 4.8,
      reviewCount: 310,
      verified: true,
      address: `Shop #11, High School Chowk, Station Road, ${cityName}`,
      area: `High School Chowk`,
      city: cityName,
      pincode: pincode,
      coordinates: { lat: Number((lat - 0.0012).toFixed(6)), lng: Number((lng - 0.0025).toFixed(6)) }, // ~310m
      openingHours: '8:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['NCERT Books', 'Competitive Exam Series', 'Calculators & Art Kits'],
      about: `Academic bookstore in ${cityName}, stocking school textbooks, registers, pens, geometry boxes, and reference guides.`,
      gstNumber: '10STUDENT8899K1Z4',
      joinedDate: '2023-01-05',
      viewsCount: 1900,
      enquiriesCount: 150
    }
  ];
};

// 3. Multi-Merchant Inventory Generator with Realistic Distinct Pricing and Stock States
const generateStoreInventory = (stores, products) => {
  const inventory = [];

  // Group stores by category
  const storesByCategory = new Map();
  stores.forEach(store => {
    store.categoryIds.forEach(catId => {
      if (!storesByCategory.has(catId)) storesByCategory.set(catId, []);
      storesByCategory.get(catId).push(store);
    });
  });

  // For every product, map across all stores belonging to its category with distinct competitive pricing
  products.forEach((prod, prodIdx) => {
    const matchingStores = storesByCategory.get(prod.categoryId) || [];

    // Distinct price multipliers for competing stores:
    // Store 0: 0.82 (18% discount -> Best Price Winner!)
    // Store 1: 0.88 (12% discount)
    // Store 2: 0.93 (7% discount)
    const baseMultipliers = [0.82, 0.88, 0.93];

    matchingStores.forEach((store, storeIndex) => {
      const multiplierIndex = (storeIndex + (prodIdx % 2)) % baseMultipliers.length;
      const multiplier = baseMultipliers[multiplierIndex];
      const price = Math.round(prod.mrp * multiplier);
      const discount = Math.round(((prod.mrp - price) / prod.mrp) * 100);

      // Realistic stock state:
      let status = 'in_stock';
      let stockQuantity = 14 + ((storeIndex * 5 + prodIdx * 3) % 20);

      if (prodIdx % 11 === 10 && storeIndex === 2) {
        status = 'out_of_stock';
        stockQuantity = 0;
      } else if (prodIdx % 7 === 6 && storeIndex === 1) {
        status = 'low_stock';
        stockQuantity = 2;
      }

      inventory.push({
        id: `inv-${store.id}-${prod.id}`,
        storeId: store.id,
        productId: prod.id,
        price,
        mrp: prod.mrp,
        discountPercent: discount,
        stockQuantity,
        status,
        lastUpdated: `${((storeIndex * 7 + prodIdx * 3) % 25) + 3} mins ago`,
        isBestPrice: multiplierIndex === 0
      });
    });
  });

  return inventory;
};

// Write updated data files
const defaultStores = generateLocalStores('Jamui', 'Bihar', 24.9258, 86.2232, '811307');
const defaultInventory = generateStoreInventory(defaultStores, ALL_PRODUCTS);

console.log(`Generated ${defaultStores.length} stores strictly within 1km.`);
console.log(`Generated ${defaultInventory.length} multi-store inventory comparison items.`);

// Output categories.ts
const categoriesFileContent = `import { Category } from '../types';

export const INITIAL_CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES, null, 2)};
`;

// Output products.ts
const productsFileContent = `import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = ${JSON.stringify(ALL_PRODUCTS, null, 2)};
`;

// Output inventory.ts
const inventoryFileContent = `import { StoreInventory } from '../types';

export const INITIAL_INVENTORY: StoreInventory[] = ${JSON.stringify(defaultInventory, null, 2)};
`;

// Output stores.ts
const storesFileContent = `import { Store, StoreInventory, Product, RetailerSubscription } from '../types';

export const getDefaultSubscription = (isPro: boolean = false): RetailerSubscription => {
  if (isPro) {
    return {
      plan: 'pro',
      billingCycle: 'yearly',
      status: 'active',
      startedAt: '2025-01-01',
      validUntil: '2027-01-01',
      maxProducts: 999999,
      amount: 999,
      autoRenew: true,
      invoices: [
        {
          id: 'inv-pro-001',
          date: '2025-01-01',
          amount: 999,
          plan: 'Pro Plan (Yearly)',
          billingCycle: 'yearly',
          status: 'paid',
          invoiceNumber: 'INV-2025-0089',
          paymentMethod: 'Card / NetBanking'
        }
      ]
    };
  }
  return {
    plan: 'free',
    billingCycle: 'monthly',
    status: 'active',
    startedAt: '2025-01-01',
    validUntil: '2099-12-31',
    maxProducts: 50,
    amount: 0,
    autoRenew: false,
    invoices: []
  };
};

export const INITIAL_STORES: Store[] = ${JSON.stringify(defaultStores, null, 2)};

export const generateStoresForCity = (
  city: string,
  state: string,
  lat: number,
  lng: number,
  pincode: string
): Store[] => {
  const safeCitySlug = city.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  const templates = [
    {
      name: \`\${city} Sharma Auto Spares & Bike Clinic\`,
      ownerName: 'Rajesh Sharma',
      phone: '+91 98450 12345',
      whatsapp: '919845012345',
      email: \`sharma.auto.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-automobile'],
      rating: 4.8,
      reviewCount: 342,
      verified: true,
      openingHours: '8:30 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Genuine OEM Parts', 'Fitting Support', 'UPI Accepted', 'Counter Billing'],
      about: \`Premier motorcycle and 4-wheeler parts distributor in \${city}, \${state}. Stocking genuine Motul, Castrol, Hero, Honda, and Exide batteries.\`,
      gstNumber: '10AUTO1234F1Z5',
      joinedDate: '2023-01-10',
      viewsCount: 1540,
      enquiriesCount: 110
    },
    {
      name: \`\${city} Kumar Motors & Genuine Spares\`,
      ownerName: 'Sunil Kumar',
      phone: '+91 98801 54321',
      whatsapp: '919880154321',
      email: \`kumar.motors.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-automobile'],
      rating: 4.6,
      reviewCount: 198,
      verified: true,
      openingHours: '9:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      facilities: ['MRF Tyres Dealer', 'Wholesale Rates', 'Instant Installation'],
      about: \`Authorized two-wheeler spares distributor in \${city}, stocking MRF Tyres, Amaron batteries, and clutch/brake parts.\`,
      gstNumber: '10KUMAR8899K1Z4',
      joinedDate: '2023-04-12',
      viewsCount: 1420,
      enquiriesCount: 95
    },
    {
      name: \`\${city} Gadget & Mobile World\`,
      ownerName: 'Arif Khan',
      phone: '+91 98805 77665',
      whatsapp: '919880577665',
      email: \`gadgets.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-electronics'],
      rating: 4.8,
      reviewCount: 420,
      verified: true,
      openingHours: '10:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Apple & Samsung Store', '0% EMI', 'Tempered Glass Fitment'],
      about: \`Smartphone and gadget showroom in \${city}, offering iPhone 15, OnePlus, boAt audio, and Anker fast chargers.\`,
      gstNumber: '10GADGET1234P1Z2',
      joinedDate: '2023-02-15',
      viewsCount: 3200,
      enquiriesCount: 290
    },
    {
      name: \`\${city} Digital Electronics & Audio Point\`,
      ownerName: 'Vikash Barnwal',
      phone: '+91 98765 44332',
      whatsapp: '919876544332',
      email: \`digitalhub.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-electronics'],
      rating: 4.7,
      reviewCount: 265,
      verified: true,
      openingHours: '10:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Bluetooth Speakers', 'Smartwatches', 'Fast Chargers', 'Memory Cards'],
      about: \`Authorized seller for boAt, Sony, Noise, JBL, and Fastrack smart wearables and sound systems in \${city}.\`,
      gstNumber: '10DIGITAL5567R1Z9',
      joinedDate: '2022-10-15',
      viewsCount: 2100,
      enquiriesCount: 160
    },
    {
      name: \`\${city} Care 24x7 Chemist & Surgicals\`,
      ownerName: 'Dr. Anita Desai',
      phone: '+91 98800 23456',
      whatsapp: '919880023456',
      email: \`carepharmacy.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.9,
      reviewCount: 512,
      verified: true,
      openingHours: '24 Hours Open',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['24x7 Open', 'Cold Storage Insulin', 'Digital Rx OCR', 'Home Delivery in 15 Mins'],
      about: \`Round-the-clock medical counter in \${city}, stocking Dolo 650, Dr. Morepen Glucometers, Omron BP monitors, and surgical items.\`,
      gstNumber: '10PHARM5567R1Z9',
      joinedDate: '2022-08-15',
      viewsCount: 3450,
      enquiriesCount: 312
    },
    {
      name: \`\${city} MedPlus Pharmacy & Wellness\`,
      ownerName: 'Dr. Suresh Reddy',
      phone: '+91 98860 77889',
      whatsapp: '919886077889',
      email: \`medplus.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.8,
      reviewCount: 390,
      verified: true,
      openingHours: '7:30 AM - 11:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Flat 15% Off', 'Prescription Verification', 'Diabetic Diet', 'Vitamins'],
      about: \`Trusted pharmacy chain in \${city}, providing authentic branded healthcare, vitamins, blood pressure monitors, and wellness products.\`,
      gstNumber: '10MEDPLUS3322L1Z6',
      joinedDate: '2023-01-25',
      viewsCount: 1980,
      enquiriesCount: 155
    },
    {
      name: \`\${city} Sri Krishna Super Store & Kirana\`,
      ownerName: 'Gopalakrishna Rao',
      phone: '+91 99002 33445',
      whatsapp: '919900233445',
      email: \`srikrishnakirana.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-grocery'],
      rating: 4.7,
      reviewCount: 480,
      verified: true,
      openingHours: '7:30 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Home Delivery in 20 Mins', 'Wholesale Rations', 'UPI Accepted'],
      about: \`Wholesale & retail kirana store in \${city}, offering Fortune Basmati Rice, Aashirvaad Atta, Amul Ghee, Tata Tea, and authentic masalas.\`,
      gstNumber: '10GROC1234K1Z2',
      joinedDate: '2022-11-01',
      viewsCount: 2310,
      enquiriesCount: 190
    },
    {
      name: \`\${city} Fresh Daily Needs & Grocery Mart\`,
      ownerName: 'Sunil Agrawal',
      phone: '+91 98765 33445',
      whatsapp: '919876533445',
      email: \`freshmart.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-grocery'],
      rating: 4.8,
      reviewCount: 315,
      verified: true,
      openingHours: '7:00 AM - 10:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Express Delivery', 'Dairy & Paneer', 'Cleaning Products', 'Packaged Foods'],
      about: \`Complete family grocery mart in \${city}, stocking daily essentials, dairy, detergents, cooking oils, and packaged snacks.\`,
      gstNumber: '10FRESH9982D1ZH',
      joinedDate: '2023-02-20',
      viewsCount: 2200,
      enquiriesCount: 175
    },
    {
      name: \`\${city} Mahalaxmi Hardware & Power Tools\`,
      ownerName: 'Manoj Kumar Gupta',
      phone: '+91 98765 77881',
      whatsapp: '919876577881',
      email: \`hardware.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-hardware'],
      rating: 4.8,
      reviewCount: 280,
      verified: true,
      openingHours: '8:30 AM - 8:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Stanley & Bosch Dealer', 'Asian Paints Center', 'Havells Wires', 'Astral Pipes'],
      about: \`Industrial and household hardware supplier in \${city}, offering Stanley toolsets, Bosch drills, plumbing fixtures, and Godrej locks.\`,
      gstNumber: '10HARD1234F1Z5',
      joinedDate: '2023-01-15',
      viewsCount: 1800,
      enquiriesCount: 140
    },
    {
      name: \`\${city} Vidya Sagar Book Depot & Stationery\`,
      ownerName: 'Ramanand Mishra',
      phone: '+91 98765 88990',
      whatsapp: '919876588990',
      email: \`stationery.\${safeCitySlug}@dhoondo.local\`,
      categoryIds: ['cat-stationery'],
      rating: 4.9,
      reviewCount: 380,
      verified: true,
      openingHours: '8:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Lucent & RS Aggarwal Books', 'Classmate Registers', 'Parker Pens', 'Color Xerox'],
      about: \`Leading book depot in \${city}, specializing in competitive exam books (SSC, BPSC, UPSC, Railway), school notebooks, and fine art supplies.\`,
      gstNumber: '10BOOK7788P1Z3',
      joinedDate: '2022-11-20',
      viewsCount: 2100,
      enquiriesCount: 165
    }
  ];

  // Coordinates strictly within 100m to 850m radius (Strictly under 1.0 km)
  const offsets = [
    { dLat: 0.0010, dLng: 0.0008, area: \`Main Market / Gandhi Chowk, \${city}\` }, // ~140m
    { dLat: -0.0022, dLng: 0.0018, area: \`Station Road / Commercial Hub, \${city}\` }, // ~320m
    { dLat: 0.0019, dLng: -0.0016, area: \`Cinema Road / City Center, \${city}\` }, // ~280m
    { dLat: -0.0032, dLng: -0.0024, area: \`Tower Chowk / Court Area, \${city}\` }, // ~460m
    { dLat: 0.0016, dLng: 0.0025, area: \`Hospital Road / Sadar Hospital, \${city}\` }, // ~340m
    { dLat: -0.0038, dLng: 0.0032, area: \`Kutchery Road / LIC Complex, \${city}\` }, // ~550m
    { dLat: -0.0014, dLng: -0.0011, area: \`Gola Road / Purani Bazaar, \${city}\` }, // ~190m
    { dLat: 0.0035, dLng: 0.0038, area: \`Mahavir Chowk / By-Pass, \${city}\` }, // ~580m
    { dLat: 0.0026, dLng: -0.0032, area: \`Loha Mandi / Industrial Area, \${city}\` }, // ~460m
    { dLat: -0.0018, dLng: 0.0035, area: \`College Gate Road / Campus Area, \${city}\` } // ~440m
  ];

  return templates.map((tmpl, idx) => {
    const offset = offsets[idx % offsets.length];
    return {
      ...tmpl,
      id: \`store-\${safeCitySlug}-\${idx + 1}\`,
      address: \`Shop #\${10 + idx * 5}, \${offset.area}\`,
      area: offset.area,
      city: city,
      pincode: pincode || '811307',
      coordinates: {
        lat: Number((lat + offset.dLat).toFixed(6)),
        lng: Number((lng + offset.dLng).toFixed(6))
      }
    };
  });
};

export const generateInventoryForStores = (
  newStores: Store[],
  existingProducts: Product[]
): StoreInventory[] => {
  const result: StoreInventory[] = [];

  newStores.forEach((store, storeIdx) => {
    existingProducts.forEach((prod, prodIdx) => {
      const isDirectCategory = store.categoryIds.includes(prod.categoryId);

      if (isDirectCategory) {
        const discountMultipliers = [0.85, 0.90, 0.88, 0.92, 0.82, 0.94];
        const multiplier = discountMultipliers[(storeIdx * 7 + prodIdx * 3) % discountMultipliers.length];
        const price = Math.round(prod.mrp * multiplier);
        const discount = Math.round(((prod.mrp - price) / prod.mrp) * 100);

        let status: 'in_stock' | 'low_stock' | 'out_of_stock' = 'in_stock';
        let stockQuantity = 12 + ((storeIdx * 3 + prodIdx * 5) % 25);
        
        if (prodIdx % 9 === 8 && storeIdx % 2 === 1) {
          status = 'out_of_stock';
          stockQuantity = 0;
        } else if (prodIdx % 7 === 6) {
          status = 'low_stock';
          stockQuantity = 2;
        }

        result.push({
          id: \`inv-\${store.id}-\${prod.id}\`,
          storeId: store.id,
          productId: prod.id,
          price,
          mrp: prod.mrp,
          discountPercent: discount,
          stockQuantity,
          status,
          lastUpdated: \`\${((storeIdx + prodIdx) % 35) + 5} mins ago\`,
          isBestPrice: multiplier <= 0.85
        });
      }
    });
  });

  return result;
};
`;

// Output mockStore.js
const mockStoreFileContent = `// In-memory fallback data store when MongoDB is disconnected / connecting
const mockData = {
  categories: ${JSON.stringify(CATEGORIES, null, 2)},
  stores: ${JSON.stringify(defaultStores, null, 2)},
  products: ${JSON.stringify(ALL_PRODUCTS, null, 2)},
  inventory: ${JSON.stringify(defaultInventory, null, 2)},
  demands: [
    {
      id: 'dem-001',
      productId: '${ALL_PRODUCTS[0].id}',
      productName: '${ALL_PRODUCTS[0].name}',
      brand: '${ALL_PRODUCTS[0].brand}',
      categoryId: '${ALL_PRODUCTS[0].categoryId}',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerArea: 'Main Market, Jamui',
      customerCoords: { lat: 24.9258, lng: 86.2232 },
      radiusKm: 1,
      searchesCount: 42,
      interestedCustomersCount: 14,
      createdAt: '2 hours ago',
      status: 'pending',
      notes: 'Need urgent OEM brake pads near Main Market.'
    }
  ],
  offers: [
    {
      id: 'off-001',
      storeId: '${defaultStores[2].id}',
      storeName: '${defaultStores[2].name}',
      storeArea: '${defaultStores[2].area}',
      productId: '${ALL_PRODUCTS[50].id}',
      productName: '${ALL_PRODUCTS[50].name}',
      title: 'Flat ₹7,900 Off on iPhone 15',
      description: 'Exclusive local counter deal with instant tempered glass fitment.',
      discountPercent: 10,
      offerPrice: 71999,
      originalPrice: 79900,
      validUntil: '2026-09-30',
      couponCode: 'IPHONE15SAVE',
      bannerImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
      isFeatured: true
    }
  ],
  enquiries: [
    {
      id: 'enq-001',
      storeId: '${defaultStores[0].id}',
      storeName: '${defaultStores[0].name}',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerMessage: 'Do you have original Motul 7100 10W-50 with unbroken seal in stock?',
      productId: '${ALL_PRODUCTS[10].id}',
      productName: '${ALL_PRODUCTS[10].name}',
      productPrice: 880,
      createdAt: '1 hour ago',
      status: 'replied',
      replyMessage: 'Yes, fresh 2026 batch cans available on counter with MRP bill.',
      repliedAt: '45 mins ago'
    }
  ],
  reviews: [
    {
      id: 'rev-001',
      storeId: '${defaultStores[0].id}',
      productId: '${ALL_PRODUCTS[10].id}',
      customerName: 'Karthik Rao',
      rating: 5,
      comment: 'Got genuine Motul 7100 at ₹880 compared to online ₹1045. Verified barcode and seal. Best local shop!',
      date: '2026-08-20',
      verifiedPurchase: true
    }
  ],
  users: [
    { id: 'usr-customer-1', name: 'Aakash Kumar', email: 'aakash@dhoondo.local', phone: '+91 98450 12345', role: 'customer' },
    { id: 'usr-retailer-1', name: 'Rajesh Sharma', email: 'sharma.autoparts@gmail.com', phone: '+91 98450 12345', role: 'retailer', storeId: '${defaultStores[0].id}' },
    { id: 'usr-admin-1', name: 'Admin Master', email: 'admin@dhoondo.in', phone: '+91 80 4000 8000', role: 'admin' },
  ],
};

const isDbConnected = () => {
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;
};

module.exports = { mockData, isDbConnected };
`;

fs.writeFileSync(path.join(rootDir, 'src/data/categories.ts'), categoriesFileContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'src/data/products.ts'), productsFileContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'src/data/inventory.ts'), inventoryFileContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'src/data/stores.ts'), storesFileContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'backend/src/utils/mockStore.js'), mockStoreFileContent, 'utf8');

console.log('✓ All 5 data files written successfully!');
