import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // =========================================================================
  // 🚗 AUTOMOBILE & VEHICLE SPARES
  // =========================================================================
  {
    id: 'prod-motul-7100-oil',
    name: 'Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)',
    brand: 'Motul',
    categoryId: 'cat-automobile',
    subcategory: 'Engine oil',
    sku: 'MTL-7100-10W50-1L',
    modelNumber: '7100-4T-ESTER',
    description: '100% Synthetic 4-Stroke motorcycle lubricant with Ester Technology. Formulated for superior engine protection, maximum horsepower output, smooth clutch engagement, and high thermal shear resistance.',
    specifications: {
      'Viscosity': '10W-50 4T',
      'Technology': '100% Synthetic Ester Core',
      'API Standard': 'API SN / SM / SL',
      'JASO Specification': 'JASO MA2 under N° M033MOT118',
      'Volume': '1 Litre',
      'Vehicle Compatibility': 'KTM Duke/RC 200/390, Royal Enfield Himalayan, Dominar 400, Apache RR310, Yamaha R15'
    },
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80',
    keywords: ['motul', 'engine oil', 'synthetic oil', '10w50', '7100', 'ktm oil', 'bike oil', 'lubricant', 'ester'],
    basePrice: 880,
    mrp: 1045,
    tags: ['100% Synthetic Ester', 'JASO MA2', 'High Performance']
  },
  {
    id: 'prod-honda-shine-brakepad',
    name: 'Honda Shine Front Disc Brake Pad (Genuine OEM)',
    brand: 'Honda Genuine Spares',
    categoryId: 'cat-automobile',
    subcategory: 'Brake parts',
    sku: 'HND-SHN-BP-01',
    modelNumber: '06455-KPN-901',
    description: 'Original Honda OEM front ceramic brake pad kit engineered for superior stopping power, zero squeak noise, and prolonged disc rotor lifespan on Honda CB Shine / Shine SP 125cc motorcycles.',
    specifications: {
      'Compatible Vehicles': 'Honda CB Shine 125, Shine SP, CB Unicorn 150/160',
      'Position': 'Front Disc Brake Assembly',
      'Material': 'Non-Asbestos Semi-Metallic Ceramic',
      'Package Contents': 'Pair of 2 Brake Pads + Steel Shim Clips',
      'Warranty': '6 Months Manufacturer Defect Warranty'
    },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    keywords: ['shine', 'honda', 'brake', 'pad', 'brakepad', 'cb shine', 'shine 125', 'front disc', 'bike parts', 'disc pad'],
    basePrice: 380,
    mrp: 499,
    tags: ['Best Seller', 'Genuine OEM', 'Popular Near You']
  },
  {
    id: 'prod-castrol-power1-oil',
    name: 'Castrol POWER1 4T 10W-30 Synthetic Bike Engine Oil 1L',
    brand: 'Castrol',
    categoryId: 'cat-automobile',
    subcategory: 'Engine oil',
    sku: 'CAS-PWR-10W30-1L',
    modelNumber: 'CASTROL-P1-30',
    description: 'Castrol POWER1 4T with Power Release Technology optimizes friction to deliver ultimate motorcycle acceleration at the touch of the throttle.',
    specifications: {
      'Viscosity Grade': '10W-30 4T',
      'API Standard': 'API SN / JASO MA2',
      'Volume': '1 Litre',
      'Vehicle Compatibility': 'Honda Activa, Shine, Hero Splendor, Passion Pro, TVS Raider'
    },
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80',
    keywords: ['castrol', 'engine oil', '10w30', 'bike oil', 'synthetic oil', 'shine', 'activa', 'splendor', 'lubricant'],
    basePrice: 440,
    mrp: 535,
    tags: ['Top Rated', 'Fast Moving']
  },
  {
    id: 'prod-amaron-bike-battery',
    name: 'Amaron Pro Rider 5Ah Maintenance Free Bike Battery',
    brand: 'Amaron',
    categoryId: 'cat-automobile',
    subcategory: 'Batteries',
    sku: 'AMR-BTZ5L-MF',
    modelNumber: 'AP-BTZ5L',
    description: 'Zero-maintenance high-cranking motorcycle battery with advanced AGM separator and patented Silven-X alloy.',
    specifications: {
      'Capacity': '5 Ah (12V)',
      'Warranty': '48 Months (24M Replacement + 24M Pro-rata)',
      'Technology': 'Valve Regulated Lead Acid (VRLA AGM)'
    },
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    keywords: ['amaron', 'battery', '5ah', 'bike battery', 'activa battery', 'shine battery', 'exide'],
    basePrice: 1199,
    mrp: 1450,
    tags: ['48M Warranty', 'Instant Fit']
  },
  {
    id: 'prod-mrf-zapper-tyre',
    name: 'MRF Zapper FX Tubeless Front Bike Tyre (90/90-17)',
    brand: 'MRF',
    categoryId: 'cat-automobile',
    subcategory: 'Tyres',
    sku: 'MRF-ZAP-909017',
    modelNumber: 'ZAPPER-FX-TL',
    description: 'High performance directional tread tyre ensuring excellent wet braking grip and cornering stability.',
    specifications: {
      'Size': '90/90-17 49P',
      'Type': 'Tubeless (TL)',
      'Position': 'Front'
    },
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    keywords: ['mrf', 'tyre', 'tire', 'zapper', 'tubeless', 'bike tyre', '90 90 17'],
    basePrice: 1850,
    mrp: 2150,
    tags: ['Tubeless', 'Wet Grip']
  },
  {
    id: 'prod-studds-ninja-helmet',
    name: 'Studds Ninja Elite Flip-Up Helmet with Clear Visor (L)',
    brand: 'Studds',
    categoryId: 'cat-automobile',
    subcategory: 'Helmets',
    sku: 'STD-NINJA-ELITE-L',
    modelNumber: 'NINJA-EL-BLK',
    description: 'ISI certified modular flip-up helmet with high impact outer thermoplastic shell and hypoallergenic liner.',
    specifications: {
      'Size': 'Large (580-600mm)',
      'Certification': 'ISI Marked (IS:4151)',
      'Style': 'Modular Flip-up'
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    keywords: ['helmet', 'studds', 'ninja', 'flip up', 'isi', 'bike helmet', 'accessories'],
    basePrice: 1350,
    mrp: 1595,
    tags: ['ISI Certified', 'Dual Visor']
  },

  // =========================================================================
  // 📱 ELECTRONICS & MOBILES
  // =========================================================================
  {
    id: 'prod-apple-iphone-15',
    name: 'Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera',
    brand: 'Apple',
    categoryId: 'cat-electronics',
    subcategory: 'Mobile phones',
    sku: 'APL-IP15-128-BLK',
    modelNumber: 'MTP03HN/A',
    description: 'Apple iPhone 15 with Dynamic Island, innovative 48MP Main Camera with 2x Telephoto, A16 Bionic powerhouse chip, durable color-infused back glass, aerospace-grade aluminum design, and USB-C connectivity.',
    specifications: {
      'Display': '6.1-inch Super Retina XDR OLED (2556x1179)',
      'Processor': 'A16 Bionic Chip (6-core CPU, 5-core GPU)',
      'Camera': '48MP Main + 12MP Ultra-Wide + 12MP TrueDepth Front',
      'Connector': 'USB-C (Supports DisplayPort & Charging)',
      'Storage': '128 GB NVMe Storage',
      'Warranty': '1 Year Apple India Official Warranty'
    },
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    keywords: ['iphone', 'iphone 15', 'apple', 'smartphone', 'mobile', 'ios', '48mp', 'dynamic island', 'usb c'],
    basePrice: 71999,
    mrp: 79900,
    tags: ['Dynamic Island', '1Y Apple Care', 'Best Seller']
  },
  {
    id: 'prod-boat-rockerz-450',
    name: 'boAt Rockerz 450 Bluetooth On-Ear Headphones with 15H Playback',
    brand: 'boAt',
    categoryId: 'cat-electronics',
    subcategory: 'Headphones',
    sku: 'BOAT-RCK-450-BLK',
    modelNumber: 'Rockerz 450',
    description: '40mm dynamic drivers with boAt Signature Sound, ergonomic padded earcups, integrated mic and dual connectivity (Bluetooth v5.0 + AUX).',
    specifications: {
      'Driver Size': '40 mm Neodymium',
      'Playback Time': 'Up to 15 Hours',
      'Charging Time': '2.5 Hours (Type-C)',
      'Warranty': '1 Year boAt India Warranty'
    },
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    keywords: ['boat', 'rockerz 450', 'headphones', 'bluetooth', 'wireless', 'earphones', 'electronics'],
    basePrice: 1199,
    mrp: 3990,
    tags: ['Crazy Deal', '1 Year Warranty']
  },
  {
    id: 'prod-mi-20000-powerbank',
    name: 'Xiaomi Mi 20000mAh 18W Fast Charging Power Bank 3i (Triple Output)',
    brand: 'Xiaomi / Mi',
    categoryId: 'cat-electronics',
    subcategory: 'Power banks',
    sku: 'MI-PB3I-20K',
    modelNumber: 'PLM18ZM',
    description: 'High-density 20000mAh lithium-polymer battery with 18W dual-direction fast charging and 12-layer circuit protection.',
    specifications: {
      'Capacity': '20000 mAh / 74Wh',
      'Ports': 'Triple Output (2x USB-A, 1x USB-C) + Dual Input',
      'Fast Charging': '18W Two-way Fast Charge',
      'Weight': '434g'
    },
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
    keywords: ['mi powerbank', 'power bank', '20000mah', 'xiaomi', 'fast charger', 'electronics'],
    basePrice: 1899,
    mrp: 2499,
    tags: ['High Capacity', '18W Fast Charge']
  },
  {
    id: 'prod-tp-link-archer-router',
    name: 'TP-Link Archer C6 AC1200 Dual Band Gigabit Wi-Fi Router',
    brand: 'TP-Link',
    categoryId: 'cat-electronics',
    subcategory: 'Routers',
    sku: 'TPL-C6-AC1200',
    modelNumber: 'Archer C6 v4',
    description: 'Dual-band Wi-Fi up to 1200 Mbps with 4 external antennas, MU-MIMO technology and Gigabit WAN/LAN ports for fiber optic broadband.',
    specifications: {
      'Wi-Fi Speed': '867 Mbps on 5GHz + 300 Mbps on 2.4GHz',
      'Antennas': '4 High-gain External Antennas',
      'Ports': '1x Gigabit WAN + 4x Gigabit LAN',
      'Warranty': '3 Years TP-Link Warranty'
    },
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    keywords: ['router', 'wifi', 'tplink', 'archer c6', 'gigabit', 'dual band', 'broadband'],
    basePrice: 2399,
    mrp: 3299,
    tags: ['Gigabit Fiber Ready', '3Y Warranty']
  },

  // =========================================================================
  // 💊 PHARMACY & HEALTHCARE
  // =========================================================================
  {
    id: 'prod-dr-morepen-gluco-one',
    name: 'Dr. Morepen BG-03 Gluco One Blood Glucose Monitor with 50 Test Strips',
    brand: 'Dr. Morepen',
    categoryId: 'cat-pharmacy',
    subcategory: 'Medical devices',
    sku: 'DRM-GLUCO-BG03-50S',
    modelNumber: 'BG-03',
    description: 'Clinically accurate, easy-to-use digital blood sugar monitoring system with 5-second results, large LCD screen, 300 test memory recall, and 50 free test strips in package.',
    specifications: {
      'Test Time': '5 Seconds Fast Readout',
      'Sample Size': 'Tiny 0.5 µL Capillary Blood Sample',
      'Memory': '300 Test Memory with Date & Time',
      'Package Includes': 'Glucometer, 50 Strips, Lancing Device, 10 Lancets, Battery, Carry Pouch',
      'Warranty': 'Lifetime Manufacturer Warranty on Meter'
    },
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80',
    keywords: ['glucometer', 'sugar test', 'dr morepen', 'gluco one', 'diabetes', 'blood sugar', 'test strips', 'bg03', 'medicine', 'pharmacy', 'health', 'medical'],
    basePrice: 999,
    mrp: 1490,
    tags: ['50 Free Strips', '5-Second Results', 'No Coding']
  },
  {
    id: 'prod-dolo-650',
    name: 'Dolo 650mg Paracetamol Tablets (Strip of 15 Tablets)',
    brand: 'Micro Labs',
    categoryId: 'cat-pharmacy',
    subcategory: 'OTC medicines',
    sku: 'DOLO-650-15T',
    description: 'Doctor recommended antipyretic medicine and analgesic for rapid relief from fever, body aches, headaches and tooth pain.',
    specifications: {
      'Active Salt': 'Paracetamol (Acetaminophen) 650mg',
      'Dosage Form': 'Oral Tablets',
      'Packaging': '15 Tablets Blister Pack',
      'Storage': 'Store in cool dry place below 30°C'
    },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    isMedicine: true,
    requiresPrescription: false,
    keywords: ['dolo', 'dolo 650', 'paracetamol', 'fever', 'headache', 'pain relief', 'tablet', 'pharmacy', 'medicine', 'medicines', 'dawa'],
    basePrice: 28,
    mrp: 35,
    tags: ['OTC Medicine', 'Fast Fever Relief']
  },
  {
    id: 'prod-omron-bp-monitor',
    name: 'Omron HEM-7120 Fully Automatic Digital Blood Pressure Monitor',
    brand: 'Omron',
    categoryId: 'cat-pharmacy',
    subcategory: 'Medical devices',
    sku: 'OMR-BP-HEM7120',
    modelNumber: 'HEM-7120',
    description: 'Intellisense technology for fast, comfortable and clinically validated upper arm blood pressure & pulse monitoring.',
    specifications: {
      'Measurement': 'Oscillometric Method',
      'Cuff Size': 'Medium (22-32 cm)',
      'Warranty': '3 Years Omron India Warranty',
      'Features': 'Hypertension Indicator, Body Movement Detection'
    },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    isMedicine: false,
    requiresPrescription: false,
    keywords: ['omron', 'bp monitor', 'blood pressure', 'digital bp', 'medical device', 'healthcare'],
    basePrice: 1980,
    mrp: 2450,
    tags: ['3-Year Warranty', 'Doctor Recommended']
  },
  {
    id: 'prod-dettol-antiseptic',
    name: 'Dettol Antiseptic Disinfectant Liquid 550ml',
    brand: 'Dettol',
    categoryId: 'cat-pharmacy',
    subcategory: 'First-aid',
    sku: 'DTL-ANT-550ML',
    description: 'Trusted antiseptic liquid for first-aid wound cleansing, personal hygiene, bathing and surface disinfection.',
    specifications: {
      'Volume': '550 ml Bottle',
      'Active Compound': 'Chloroxylenol (C8H9ClO)',
      'Use': 'Antiseptic & Surface Disinfectant'
    },
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    isMedicine: true,
    requiresPrescription: false,
    keywords: ['dettol', 'antiseptic', 'first aid', 'disinfectant', 'wound care', 'pharmacy'],
    basePrice: 198,
    mrp: 220,
    tags: ['First Aid Must-Have', '99.9% Germ Protection']
  },

  // =========================================================================
  // 🛒 GROCERY & DAILY NEEDS
  // =========================================================================
  {
    id: 'prod-fortune-biryani-rice',
    name: 'Fortune Biryani Special Super Premium Aged Long Grain Basmati Rice (5kg)',
    brand: 'Fortune / Adani Wilmar',
    categoryId: 'cat-grocery',
    subcategory: 'Rice',
    sku: 'FTN-BRY-RICE-5KG',
    modelNumber: 'BIR-SPEC-5K',
    description: 'Fluffy, royal 2-year naturally aged extra-long Basmati grains that elongate up to 2.5x after cooking. Ideal for authentic Hyderabadi & Awadhi biryanis with heavenly aroma and zero stickiness.',
    specifications: {
      'Weight': '5 kg Air-sealed Food Grade Polybag',
      'Grain Length': '8.4 mm Raw / 20+ mm Cooked',
      'Aging': '2 Years Naturally Aged in Temperature Controlled Silos',
      'Texture': 'Non-sticky, Pearly White, Fluffy'
    },
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    keywords: ['fortune rice', 'biryani rice', 'basmati', 'chawal', 'aged rice', 'fortune', 'grocery', '5kg'],
    basePrice: 549,
    mrp: 675,
    tags: ['2-Year Aged', '8.4mm Extra Long', 'Biryani Grade']
  },
  {
    id: 'prod-aashirvaad-atta',
    name: 'Aashirvaad Superior MP Sharbati Whole Wheat Atta 5kg',
    brand: 'Aashirvaad',
    categoryId: 'cat-grocery',
    subcategory: 'Flour',
    sku: 'ASH-ATTA-5KG',
    modelNumber: 'AASH-WHEAT-5K',
    description: '100% pure whole wheat grain flour sourced from MP Sehore grains for soft, fluffy rotis with natural fiber.',
    specifications: {
      'Weight': '5 kg',
      'Dietary Preference': 'Vegetarian, High Fiber',
      'Shelf Life': '6 Months'
    },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    keywords: ['aashirvaad', 'atta', 'flour', 'wheat', 'roti', 'gehu', 'grocery', '5kg'],
    basePrice: 245,
    mrp: 275,
    tags: ['Daily Staple', '100% Whole Wheat']
  },
  {
    id: 'prod-amul-gold-milk',
    name: 'Amul Gold Full Cream Pasteurized Milk 500ml',
    brand: 'Amul',
    categoryId: 'cat-grocery',
    subcategory: 'Dairy',
    sku: 'AML-GOLD-500ML',
    description: 'Homogenized pasteurized full cream fresh milk rich in vitamin A & D with minimum 6.0% fat and 9.0% SNF.',
    specifications: {
      'Fat Content': '6.0% Minimum',
      'Volume': '500 ml Pouch',
      'Storage': 'Refrigerate below 4°C'
    },
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    keywords: ['amul', 'milk', 'doodh', 'dairy', 'gold', 'full cream', 'fresh milk', 'tea'],
    basePrice: 34,
    mrp: 34,
    tags: ['Fresh Daily', 'Price Controlled']
  },
  {
    id: 'prod-tata-tea-gold',
    name: 'Tata Tea Gold Leaf & Gentle Pressed Long Leaves 500g',
    brand: 'Tata Tea',
    categoryId: 'cat-grocery',
    subcategory: 'Beverages',
    sku: 'TAT-GOLD-500G',
    description: 'A rich blend of Assam CTC granules with 15% gently rolled long leaves for superior aroma and full-bodied taste.',
    specifications: {
      'Weight': '500g Carton',
      'Blend': 'CTC Granules + Long Orthodox Leaves',
      'Origin': 'Assam Tea Estates'
    },
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    keywords: ['tata tea', 'tea', 'chai', 'gold', 'assam tea', 'beverages'],
    basePrice: 285,
    mrp: 330,
    tags: ['Top Pick', 'Aromatic Chai']
  },

  // =========================================================================
  // 🔧 HARDWARE & TOOLS
  // =========================================================================
  {
    id: 'prod-stanley-screwdriver-set',
    name: 'Stanley 12-Piece Cushion Grip Magnetic Screwdriver & Hand Toolset (Yellow/Black)',
    brand: 'Stanley',
    categoryId: 'cat-hardware',
    subcategory: 'Hand tools',
    sku: 'STN-SCRW-12PC-YEL',
    modelNumber: 'STMT60812-8',
    description: 'Professional grade 12-piece magnetic tip screwdriver set crafted from heat-treated chrome vanadium steel with ergonomic bi-material cushion grips for high torque and zero slip.',
    specifications: {
      'Blade Material': 'Chrome Vanadium (Cr-V) Steel with Black Oxide Tips',
      'Tip Types': 'Phillips (PH0, PH1, PH2, PH3), Slotted/Flat (3mm, 5mm, 6.5mm, 8mm), Torx (T15, T20)',
      'Handle': 'Ergonomic Bi-Material Cushion Grip',
      'Included': '12 Screwdrivers + Wall Mount Storage Rack',
      'Warranty': 'Limited Lifetime Warranty'
    },
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
    keywords: ['stanley', 'screwdriver', 'tools', 'hand tools', 'toolkit', 'magnetic', 'hardware', 'screws'],
    basePrice: 899,
    mrp: 1299,
    tags: ['Magnetic Tips', 'Chrome Vanadium', 'Heavy Duty']
  },
  {
    id: 'prod-bosch-drill-gsb500',
    name: 'Bosch GSB 500W Professional Impact Drill Tool Kit with 100 Accessories',
    brand: 'Bosch',
    categoryId: 'cat-hardware',
    subcategory: 'Drills',
    sku: 'BSH-GSB500-KIT',
    modelNumber: 'GSB 500 RE KIT',
    description: 'Compact 500W rotary hammer drill with reverse function, speed regulator, masonry drill bits, screwdrivers, hammer, pliers and sturdy carry case.',
    specifications: {
      'Power Input': '500 Watts',
      'No-load Speed': '0 - 2600 RPM',
      'Drilling Diameter': 'Concrete 10mm, Steel 8mm, Wood 20mm',
      'Accessories Included': '100 pcs DIY accessory kit + Toolbox'
    },
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    keywords: ['bosch', 'drill', 'gsb 500', 'power tools', 'impact drill', 'toolkit', 'hardware'],
    basePrice: 3450,
    mrp: 4200,
    tags: ['Original Bosch', '100pc Kit']
  },
  {
    id: 'prod-godrej-navtal-lock',
    name: 'Godrej Nav-Tal 7 Levers Brass Padlock with 3 Keys',
    brand: 'Godrej',
    categoryId: 'cat-hardware',
    subcategory: 'Locks',
    sku: 'GDJ-NAVTAL-7L',
    modelNumber: 'NAV-TAL-7-LEVER',
    description: 'Iconic heavy brass padlock with hardened electroplated steel shackle and 7 brass lever mechanism resistant to hacksaws and tampering.',
    specifications: {
      'Material': 'Solid Brass Body + Hardened Shackle',
      'Levers': '7 Precision Brass Levers',
      'Keys': '3 Brass Keys',
      'Warranty': '1 Year Godrej Warranty'
    },
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    keywords: ['godrej', 'lock', 'navtal', 'brass lock', 'padlock', 'tala', 'hardware'],
    basePrice: 485,
    mrp: 550,
    tags: ['Solid Brass', 'Tamper Proof']
  },

  // =========================================================================
  // 📚 STATIONERY & EDUCATION
  // =========================================================================
  {
    id: 'prod-classmate-notebook-bundle',
    name: 'Classmate Long Notebook Single Line 172 Pages (Pack of 6)',
    brand: 'Classmate / ITC',
    categoryId: 'cat-stationery',
    subcategory: 'Notebooks',
    sku: 'CLS-NB-172P-PK6',
    description: 'Elemental chlorine-free ultra white smooth paper notebooks with fun activity trivia and sturdy binding for students.',
    specifications: {
      'Pages': '172 Pages each',
      'Ruling': 'Single Line Ruled',
      'Size': '31.4 cm x 19.4 cm Long Book',
      'Quantity': 'Bundle of 6 Books'
    },
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    keywords: ['classmate', 'notebook', 'long book', 'stationery', 'books', 'school supplies'],
    basePrice: 330,
    mrp: 420,
    tags: ['Pack of 6', 'Eco Paper']
  }
];
