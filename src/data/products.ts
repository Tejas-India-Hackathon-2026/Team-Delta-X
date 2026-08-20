import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 🚗 Automobile
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
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    keywords: ['shine', 'honda', 'brake', 'pad', 'brakepad', 'cb shine', 'shine 125', 'front disc', 'bike parts', 'disc pad'],
    basePrice: 420,
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
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80',
    keywords: ['castrol', 'engine oil', '10w30', 'bike oil', 'synthetic oil', 'shine', 'activa', 'splendor', 'lubricant'],
    basePrice: 460,
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
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
    keywords: ['amaron', 'battery', '5ah', 'bike battery', 'activa battery', 'shine battery', 'exide'],
    basePrice: 1250,
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
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    keywords: ['helmet', 'studds', 'ninja', 'flip up', 'isi', 'bike helmet', 'accessories'],
    basePrice: 1350,
    mrp: 1595,
    tags: ['ISI Certified', 'Dual Visor']
  },

  // 🛒 Grocery & Daily Needs
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
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    keywords: ['amul', 'milk', 'doodh', 'dairy', 'gold', 'full cream', 'fresh milk', 'tea'],
    basePrice: 34,
    mrp: 34,
    tags: ['Fresh Daily', 'Price Controlled']
  },
  {
    id: 'prod-daawat-basmati-rice',
    name: 'Daawat Rozana Super Basmati Rice 5kg',
    brand: 'Daawat',
    categoryId: 'cat-grocery',
    subcategory: 'Rice',
    sku: 'DWT-ROZ-5KG',
    description: 'Aromatic aged long grain Basmati rice ideal for everyday family meals, fried rice, and biryani.',
    specifications: {
      'Weight': '5 kg',
      'Grain Length': 'Long Grain Aged',
      'Packaging': 'Food Grade Poly Bag'
    },
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    keywords: ['daawat', 'rice', 'basmati', 'chawal', 'rozana', 'biryani', 'grocery'],
    basePrice: 399,
    mrp: 460,
    tags: ['Aged Grain', 'Aromatic']
  },
  {
    id: 'prod-fortune-sunflower-oil',
    name: 'Fortune Sunlite Refined Sunflower Oil Pouch 1L',
    brand: 'Fortune',
    categoryId: 'cat-grocery',
    subcategory: 'Oil',
    sku: 'FTN-SUN-1L',
    description: 'Light and healthy cooking oil enriched with Vitamins A & D, easy to digest with high smoke point.',
    specifications: {
      'Volume': '1 Litre Pouch',
      'Type': 'Refined Sunflower Oil',
      'Fortification': 'Vitamins A & D'
    },
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    keywords: ['fortune', 'oil', 'sunflower oil', 'cooking oil', 'tel', 'grocery'],
    basePrice: 132,
    mrp: 155,
    tags: ['Healthy Heart', 'Value Deal']
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
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    keywords: ['tata tea', 'tea', 'chai', 'gold', 'assam tea', 'beverages'],
    basePrice: 285,
    mrp: 330,
    tags: ['Top Pick', 'Aromatic Chai']
  },

  // 💊 Pharmacy & Healthcare
  {
    id: 'prod-dolo-650',
    name: 'Dolo 650mg Paracetamol Tablets (Strip of 15 Tablets)',
    brand: 'Micro Labs',
    categoryId: 'cat-pharmacy',
    subcategory: 'OTC medicines',
    sku: 'DOLO-650-15T',
    description: 'Doctor recommended antipyretic and analgesic for rapid relief from fever, body aches, headaches and tooth pain.',
    specifications: {
      'Active Salt': 'Paracetamol (Acetaminophen) 650mg',
      'Dosage Form': 'Oral Tablets',
      'Packaging': '15 Tablets Blister Pack',
      'Storage': 'Store in cool dry place below 30°C'
    },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    isMedicine: true,
    requiresPrescription: false,
    keywords: ['dolo', 'dolo 650', 'paracetamol', 'fever', 'headache', 'pain relief', 'tablet', 'pharmacy'],
    basePrice: 32,
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
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    isMedicine: false,
    requiresPrescription: false,
    keywords: ['omron', 'bp monitor', 'blood pressure', 'digital bp', 'medical device', 'healthcare'],
    basePrice: 1980,
    mrp: 2450,
    tags: ['3-Year Warranty', 'Doctor Recommended']
  },
  {
    id: 'prod-augmentin-625',
    name: 'Augmentin 625 Duo Tablet (Strip of 10 Tablets) [Rx Required]',
    brand: 'GlaxoSmithKline (GSK)',
    categoryId: 'cat-pharmacy',
    subcategory: 'Prescription medicines',
    sku: 'GSK-AUG-625-10T',
    description: 'Broad-spectrum antibacterial medication containing Amoxicillin and Clavulanic Acid for bacterial infections. Valid doctor prescription strictly required.',
    specifications: {
      'Active Ingredients': 'Amoxicillin 500mg + Potassium Clavulanate 125mg',
      'Regulatory Schedule': 'Schedule H1 Prescription Drug',
      'Packaging': '10 Tablets Strip'
    },
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
    isMedicine: true,
    requiresPrescription: true,
    keywords: ['augmentin', 'amoxicillin', 'antibiotic', 'prescription', 'infection', 'chemist'],
    basePrice: 195,
    mrp: 223,
    tags: ['Prescription Required (Rx)', 'Schedule H1']
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
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80',
    isMedicine: true,
    requiresPrescription: false,
    keywords: ['dettol', 'antiseptic', 'first aid', 'disinfectant', 'wound care', 'pharmacy'],
    basePrice: 198,
    mrp: 220,
    tags: ['First Aid Must-Have', '99.9% Germ Protection']
  },

  // 📱 Electronics & Technology
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
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    keywords: ['boat', 'rockerz 450', 'headphones', 'bluetooth', 'wireless', 'earphones', 'electronics'],
    basePrice: 1299,
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
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    keywords: ['router', 'wifi', 'tplink', 'archer c6', 'gigabit', 'dual band', 'broadband'],
    basePrice: 2399,
    mrp: 3299,
    tags: ['Gigabit Fiber Ready', '3Y Warranty']
  },

  // ⚡ Electrical
  {
    id: 'prod-havells-9w-led',
    name: 'Havells 9W Adore Cool Day Light B22 LED Bulb (Pack of 4)',
    brand: 'Havells',
    categoryId: 'cat-electrical',
    subcategory: 'LED bulbs',
    sku: 'HVL-9W-LED-PK4',
    modelNumber: 'ADORE-9W-CDL',
    description: 'Energy-saving 9W LED bulb delivering 900 Lumens brightness with 6500K cool day light and 4kV surge protection against voltage fluctuations.',
    specifications: {
      'Wattage': '9 Watts',
      'Base Type': 'B22 Pin Base',
      'Color Temperature': '6500K Cool White (Daylight)',
      'Lifespan': '25,000 Operating Hours',
      'Warranty': '1 Year Replacement Warranty'
    },
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=600&q=80',
    keywords: ['havells', 'led bulb', '9w', 'b22', 'bulb', 'lighting', 'electrical'],
    basePrice: 299,
    mrp: 420,
    tags: ['Pack of 4', 'Surge Protected']
  },
  {
    id: 'prod-polycab-wire-15sqmm',
    name: 'Polycab 1.5 sq.mm Flame Retardant Single Core Copper Wire (90m Roll)',
    brand: 'Polycab',
    categoryId: 'cat-electrical',
    subcategory: 'Wires',
    sku: 'PLC-1.5MM-RED-90M',
    modelNumber: 'GREEN-FR-1.5',
    description: 'High conductivity electrolytic grade copper conductor wire insulated with self-extinguishing flame retardant PVC compound.',
    specifications: {
      'Conductor Size': '1.5 sq.mm',
      'Length': '90 Meters Coil',
      'Insulation': 'Flame Retardant (FR) PVC',
      'Voltage Rating': '1100 Volts (IS:694)'
    },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    keywords: ['polycab', 'wire', '1.5mm', 'copper wire', 'electrical wire', 'house wiring', 'fr wire'],
    basePrice: 1780,
    mrp: 2150,
    tags: ['IS:694 Certified', 'Flame Retardant']
  },
  {
    id: 'prod-anchor-roma-switch-pack',
    name: 'Anchor by Panasonic Roma Classic 6A 1-Way Modular Switch (Pack of 10)',
    brand: 'Anchor Panasonic',
    categoryId: 'cat-electrical',
    subcategory: 'Switches',
    sku: 'ANC-ROMA-6A-PK10',
    modelNumber: 'ROMA-6A-1W',
    description: 'Classic silent rocker switches made from UV stabilized high-gloss polycarbonate with silver cadmium contact tips.',
    specifications: {
      'Rating': '6 Ampere, 240V AC',
      'Module Size': '1 Module',
      'Quantity': '10 Switches',
      'Warranty': '10 Years Anchor Warranty'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    keywords: ['anchor', 'roma', 'switch', 'modular switch', 'panasonic', 'electricals', '6a'],
    basePrice: 280,
    mrp: 350,
    tags: ['10 Year Warranty', 'Modular']
  },

  // 🔧 Hardware & Tools
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
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    keywords: ['bosch', 'drill', 'gsb 500', 'power tools', 'impact drill', 'toolkit', 'hardware'],
    basePrice: 3899,
    mrp: 5250,
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
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    keywords: ['godrej', 'lock', 'navtal', 'brass lock', 'padlock', 'tala', 'hardware'],
    basePrice: 485,
    mrp: 550,
    tags: ['Solid Brass', 'Tamper Proof']
  },

  // 🏗️ Construction & Building Materials
  {
    id: 'prod-ultratech-cement',
    name: 'UltraTech Super 53-Grade OPC / PPC Cement (50kg Bag)',
    brand: 'UltraTech Cement',
    categoryId: 'cat-construction',
    subcategory: 'Cement',
    sku: 'ULT-SUPER-50KG',
    description: 'Engineers Choice: Premium micro-fine particle structure cement for high early compressive strength and waterproof RCC casting.',
    specifications: {
      'Weight': '50 kg Polypropylene Bag',
      'Grade': '53 Grade PPC / Super',
      'Certification': 'IS 1489 (Part 1)'
    },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    keywords: ['ultratech', 'cement', '53 grade', 'construction', 'building', 'rcc', '50kg'],
    basePrice: 385,
    mrp: 420,
    tags: ['Engineers Choice', 'High Strength']
  },
  {
    id: 'prod-asian-paints-royale',
    name: 'Asian Paints Royale Luxury Emulsion Shyne Interior Paint 4L (White/Tintable)',
    brand: 'Asian Paints',
    categoryId: 'cat-construction',
    subcategory: 'Paint',
    sku: 'AP-ROYALE-4L-WHT',
    description: 'Ultra-luxurious smooth sheen wall finish with Teflon surface protector, anti-bacterial fungal shield, and high washability.',
    specifications: {
      'Volume': '4 Litres Can',
      'Finish': 'Silky Shyne / Sheen',
      'Coverage': '140 - 160 sq.ft / Litre for 2 coats',
      'Washability': 'High Scrub Resistant'
    },
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
    keywords: ['asian paints', 'royale', 'paint', 'emulsion', 'interior paint', 'white', 'construction'],
    basePrice: 1890,
    mrp: 2200,
    tags: ['Teflon Shield', 'Luxury Finish']
  },

  // 🏠 Home & Kitchen
  {
    id: 'prod-prestige-cooker-triply',
    name: 'Prestige Deluxe Alpha Svachh Triply Stainless Steel Pressure Cooker 3L',
    brand: 'Prestige',
    categoryId: 'cat-home-kitchen',
    subcategory: 'Cookware',
    sku: 'PST-SVACHH-3L',
    modelNumber: 'ALPHA-TRIPLY-3',
    description: 'Triply stainless steel base for uniform heat distribution with spillage control Svachh lid design and induction compatible base.',
    specifications: {
      'Capacity': '3.0 Litres',
      'Base Type': 'Gas & Induction Compatible Triply',
      'Material': 'Food Grade SS 304',
      'Warranty': '5 Years Prestige Warranty'
    },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    keywords: ['prestige', 'pressure cooker', 'cooker', 'triply', '3 litre', 'kitchen', 'cookware'],
    basePrice: 2450,
    mrp: 3100,
    tags: ['Svachh Lid', '5Y Warranty']
  },
  {
    id: 'prod-milton-thermosteel-flask',
    name: 'Milton Thermosteel Flip Lid Vacuum Insulated Flask 1000ml (24 Hours Hot & Cold)',
    brand: 'Milton',
    categoryId: 'cat-home-kitchen',
    subcategory: 'Water bottles',
    sku: 'MLT-THRM-1000ML',
    description: 'Double-walled vacuum insulated bottle crafted from 304 grade stainless steel that keeps beverages piping hot or icy cold for 24 hours.',
    specifications: {
      'Capacity': '1000 ml (1 Litre)',
      'Insulation': '24 Hours Hot / Cold',
      'Lid': 'One-Touch Flip Open with Cup Lid',
      'Material': '18/8 Rust-free Stainless Steel'
    },
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    keywords: ['milton', 'flask', 'thermosteel', 'water bottle', 'hot and cold', 'kitchen', '1000ml'],
    basePrice: 940,
    mrp: 1195,
    tags: ['24H Hot & Cold', '100% Leak Proof']
  },

  // 🏋️ Sports & Fitness
  {
    id: 'prod-ss-cricket-bat',
    name: 'SS Ton Retro Classic English Willow Cricket Bat (Short Handle)',
    brand: 'SS Sunridges',
    categoryId: 'cat-sports',
    subcategory: 'Cricket equipment',
    sku: 'SS-TON-RETRO-EW',
    description: 'Handcrafted grade 1 English Willow cricket bat with massive edges, concave spine profile and Sarawak cane handle with scale grip.',
    specifications: {
      'Willow': 'Handcrafted Selected English Willow',
      'Weight': '1170 - 1210 grams',
      'Handle': 'Short Handle (9 Piece Cane)',
      'Toe Guard': 'Pre-fitted'
    },
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80',
    keywords: ['ss cricket bat', 'cricket bat', 'english willow', 'bat', 'sports', 'ss ton'],
    basePrice: 6500,
    mrp: 8200,
    tags: ['Grade 1 Willow', 'Match Ready']
  },
  {
    id: 'prod-yonex-nanoray-racket',
    name: 'Yonex Nanoray Light 18i Graphite Badminton Racquet (Strung, 77g)',
    brand: 'Yonex',
    categoryId: 'cat-sports',
    subcategory: 'Badminton',
    sku: 'YNX-NR-18I-STRUNG',
    description: 'Ultra lightweight 5U (77 grams) graphite isometric frame with lightning fast racquet handling and aerodynamic aero-box frame.',
    specifications: {
      'Weight': '5U (77g ± 2g)',
      'Grip Size': 'G4',
      'Max String Tension': '30 lbs',
      'Frame Material': 'High Modulus Graphite'
    },
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80',
    keywords: ['yonex', 'badminton', 'racquet', 'racket', 'nanoray', 'sports', 'feather'],
    basePrice: 1999,
    mrp: 2990,
    tags: ['Lightweight 77g', '30 lbs Tension']
  },

  // 🐶 Pet Supplies
  {
    id: 'prod-royal-canin-dog-food',
    name: 'Royal Canin Mini Adult Dry Dog Food 3kg',
    brand: 'Royal Canin',
    categoryId: 'cat-pets',
    subcategory: 'Pet food',
    sku: 'RC-MINI-ADULT-3KG',
    description: 'Complete nutritional formula specifically tailored for small breed adult dogs (up to 10kg) with L-Carnitine for healthy weight.',
    specifications: {
      'Weight': '3 kg Pack',
      'Breed Suitability': 'Small Breed Dogs (10 months to 8 years)',
      'Key Benefits': 'Optimal Weight, Dental Health & Coat Shine'
    },
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
    keywords: ['royal canin', 'dog food', 'pet food', 'pedigree', 'puppy', 'pets', '3kg'],
    basePrice: 2280,
    mrp: 2450,
    tags: ['Veterinary Choice', 'Premium Nutrition']
  },

  // 📚 Education & Stationery
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
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    keywords: ['classmate', 'notebook', 'long book', 'stationery', 'books', 'school supplies'],
    basePrice: 360,
    mrp: 420,
    tags: ['Pack of 6', 'Eco Paper']
  },

  // 💄 Beauty & Personal Care
  {
    id: 'prod-cetaphil-cleanser',
    name: 'Cetaphil Gentle Skin Cleanser for Dry to Normal Sensitive Skin 250ml',
    brand: 'Cetaphil',
    categoryId: 'cat-beauty',
    subcategory: 'Skincare',
    sku: 'CTP-GSC-250ML',
    description: 'Dermatologist tested soap-free, non-comedogenic gentle foaming cleanser enriched with Niacinamide and Vitamin B5.',
    specifications: {
      'Volume': '250 ml Pump Bottle',
      'Skin Type': 'Dry, Normal & Sensitive Skin',
      'Formula': 'Sulfate & Fragrance Free'
    },
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    keywords: ['cetaphil', 'cleanser', 'face wash', 'skincare', 'sensitive skin', 'beauty'],
    basePrice: 540,
    mrp: 615,
    tags: ['Dermatologist #1', 'Sensitive Skin']
  },

  // 🌾 Agriculture
  {
    id: 'prod-organic-vermicompost-10kg',
    name: 'Green Harvest 100% Organic Vermicompost Fertilizer 10kg Bag',
    brand: 'Green Harvest',
    categoryId: 'cat-agriculture',
    subcategory: 'Fertilizers',
    sku: 'GH-VERMI-10KG',
    description: 'Natural organic earthworm humus bio-fertilizer rich in nitrogen, phosphorus, potassium and soil beneficial microbes for plants and terrace gardens.',
    specifications: {
      'Weight': '10 kg Bag',
      'Composition': 'Pure Earthworm Castings + Neem Meal',
      'Organic Certified': 'NPOP Certified'
    },
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    keywords: ['vermicompost', 'fertilizer', 'organic', 'plants', 'gardening', 'agriculture', 'khad'],
    basePrice: 320,
    mrp: 450,
    tags: ['100% Organic', 'Terrace Garden']
  },

  // 👕 Fashion
  {
    id: 'prod-fabindia-cotton-kurta',
    name: 'FabIndia Mens Pure Cotton Long Kurta with Mandarin Collar (Navy Blue, L)',
    brand: 'FabIndia',
    categoryId: 'cat-fashion',
    subcategory: "Men's clothing",
    sku: 'FAB-KURTA-NAVY-L',
    description: 'Breathable handspun natural cotton casual kurta with regular fit, side pockets and mother-of-pearl buttons.',
    specifications: {
      'Fabric': '100% Breathable Khadi Cotton',
      'Collar': 'Mandarin Neck',
      'Fit': 'Comfort Regular Fit',
      'Care': 'Gentle Hand Wash'
    },
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=600&q=80',
    keywords: ['fabindia', 'kurta', 'cotton kurta', 'mens wear', 'ethnic wear', 'fashion'],
    basePrice: 1290,
    mrp: 1690,
    tags: ['Pure Cotton', 'Handspun']
  },

  // 👟 Footwear
  {
    id: 'prod-bata-leather-shoes',
    name: 'Bata Formal Slip-On Genuine Leather Derby Shoes (Black, UK 8)',
    brand: 'Bata',
    categoryId: 'cat-footwear',
    subcategory: 'Formal shoes',
    sku: 'BTA-DERBY-BLK-8',
    description: 'Premium soft buff calf leather formal shoes with cushioned memory foam insole and slip-resistant TPR sole.',
    specifications: {
      'Upper Material': '100% Genuine Leather',
      'Sole': 'Flexible Anti-Slip TPR Sole',
      'Closure': 'Elastic Gusset Slip-on'
    },
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80',
    keywords: ['bata', 'leather shoes', 'formal shoes', 'derby', 'shoes', 'footwear'],
    basePrice: 1799,
    mrp: 2499,
    tags: ['Genuine Leather', 'Memory Foam']
  },

  // 🎁 Gifts & Lifestyle
  {
    id: 'prod-fastrack-analog-watch',
    name: 'Fastrack Casual Black Dial Quartz Unisex Watch (Water Resistant)',
    brand: 'Fastrack / Titan',
    categoryId: 'cat-gifts',
    subcategory: 'Watches',
    sku: 'FST-WATCH-38024',
    description: 'Sporty minimalist matte black case with silicone strap, scratch-resistant mineral glass and 30m water resistance.',
    specifications: {
      'Movement': 'High Precision Quartz',
      'Water Resistance': '30 Meters (3 ATM)',
      'Warranty': '2 Years Titan Brand Warranty'
    },
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    keywords: ['fastrack', 'watch', 'titan', 'gift', 'analog watch', 'accessories', 'gifts'],
    basePrice: 1395,
    mrp: 1895,
    tags: ['2Y Warranty', 'Water Resistant']
  }
];
