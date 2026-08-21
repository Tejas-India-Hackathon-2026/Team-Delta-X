// In-memory fallback data store when MongoDB is disconnected / connecting
const mockData = {
  categories: [
    { id: 'cat-automobile', name: 'Automobile & Spares', slug: 'automobile-spares', emoji: '🚗', iconName: 'Car', description: 'Genuine bike & car spare parts, engine oils, batteries, and accessories.', color: 'from-amber-500 to-orange-600', subcategories: ['Two Wheeler Parts', 'Engine Oils & Fluids', 'Car Accessories', 'Batteries & Electricals', 'Tyres & Tubes'] },
    { id: 'cat-electronics', name: 'Electronics & Mobiles', slug: 'electronics-mobiles', emoji: '📱', iconName: 'Smartphone', description: 'Smartphones, audio, smart wearables, cables, and home appliances.', color: 'from-blue-500 to-indigo-600', subcategories: ['Smartphones & Tablets', 'Audio & Headphones', 'Cables, Chargers & Hubs', 'Smart Wearables', 'Storage & Pendrives'] },
    { id: 'cat-pharmacy', name: 'Pharmacy & Health', slug: 'pharmacy-health', emoji: '💊', iconName: 'Pill', description: 'Prescription medicines, wellness products, surgicals, and vitamins.', color: 'from-emerald-500 to-teal-600', subcategories: ['OTC & Daily Care', 'First Aid & Surgicals', 'Vitamins & Supplements', 'Diabetes & BP Care', 'Baby & Mother Care'] },
    { id: 'cat-grocery', name: 'Kirana & Daily Needs', slug: 'kirana-daily-needs', emoji: '🛒', iconName: 'ShoppingBag', description: 'Daily staple rations, snacks, dairy products, spices, and cleaning supplies.', color: 'from-green-500 to-emerald-600', subcategories: ['Staples, Atta & Rice', 'Dairy, Milk & Ghee', 'Snacks & Beverages', 'Spices & Masalas', 'Cleaning & Household'] },
    { id: 'cat-hardware', name: 'Hardware & Sanitary', slug: 'hardware-sanitary', emoji: '🔧', iconName: 'Wrench', description: 'Tools, electrical wires, pipes, bathroom fittings, and power tools.', color: 'from-slate-600 to-slate-800', subcategories: ['Hand & Power Tools', 'Electricals & Wiring', 'Plumbing & Pipes', 'Paints & Wall Care', 'Fasteners & Hardware'] },
    { id: 'cat-stationery', name: 'Stationery & Books', slug: 'stationery-books', emoji: '📚', iconName: 'BookOpen', description: 'School supplies, office stationery, textbooks, and art materials.', color: 'from-purple-500 to-pink-600', subcategories: ['Notebooks & Registers', 'Pens, Art & Drawing', 'Office & Printing', 'School Bags & Boxes', 'Competitive Books'] },
  ],

  // 10 Detailed Real Retailer Stores strictly under 2km (<0.3km to 1.8km)
  stores: [
    {
      id: 'store-sharma-auto',
      name: 'Sharma Auto Spares & Service Hub',
      ownerName: 'Rajesh Sharma',
      phone: '+91 98450 12345',
      whatsapp: '+91 98450 12345',
      email: 'sharma.autoparts@gmail.com',
      categoryIds: ['cat-automobile', 'cat-hardware'],
      rating: 4.8,
      reviewCount: 342,
      verified: true,
      address: 'Shop #14, 80 Feet Road, 4th Block, Koramangala',
      area: 'Koramangala 4th Block',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9352, lng: 77.6245 },
      location: { type: 'Point', coordinates: [77.6245, 12.9352] },
      openingHours: '8:30 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['UPI Accepted', 'Counter Billing', 'Free Installation Support', 'Home Delivery within 3km'],
      about: 'Serving the neighborhood for 18+ years with 100% genuine OEM two-wheeler spare parts, Castrol engine oils, and Exide batteries.',
      gstNumber: '29ABCDE1234F1Z5',
      joinedDate: '2023-01-15',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    {
      id: 'store-apollo-meds',
      name: 'City Care Chemist & Surgicals',
      ownerName: 'Dr. Anita Desai',
      phone: '+91 98800 23456',
      whatsapp: '+91 98800 23456',
      email: 'citycare.koramangala@gmail.com',
      categoryIds: ['cat-pharmacy'],
      rating: 4.9,
      reviewCount: 512,
      verified: true,
      address: 'Plot 22, 1st Cross, Near Sony World Junction',
      area: 'Koramangala 6th Block',
      city: 'Bengaluru',
      pincode: '560095',
      coordinates: { lat: 12.9385, lng: 77.6285 },
      location: { type: 'Point', coordinates: [77.6285, 12.9385] },
      openingHours: '7:00 AM - 11:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c299896029?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Cold Storage Vaccines', 'Prescription Verification', 'Emergency Night Counter', 'Instant WhatsApp Orders'],
      about: 'Trusted retail medical store with complete stock of critical medicines, surgical disposables, pediatric care, and orthopedic braces.',
      gstNumber: '29PQRSM5678G2Z1',
      joinedDate: '2022-11-10',
      subscription: { plan: 'pro', billingCycle: 'monthly', status: 'active', maxProducts: 99999, amount: 249 },
    },
    {
      id: 'store-kumar-motors',
      name: 'Kumar Motors & Genuine Spares',
      ownerName: 'Sunil Kumar',
      phone: '+91 98801 54321',
      whatsapp: '+91 98801 54321',
      email: 'kumarmotors.blr@gmail.com',
      categoryIds: ['cat-automobile'],
      rating: 4.6,
      reviewCount: 198,
      verified: true,
      address: 'Plot #88, 100 Feet Road, Koramangala 1st Block',
      area: 'Koramangala 1st Block',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9288, lng: 77.6322 },
      location: { type: 'Point', coordinates: [77.6322, 12.9288] },
      openingHours: '9:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Wholesale Rates', 'Instant Counter Billing', 'Free Installation Support'],
      about: 'Authorized multi-brand bike spare distributor stocking Honda, Hero, Bajaj, Motul and Castrol.',
      gstNumber: '29AABCK9982D1ZH',
      joinedDate: '2023-03-20',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    {
      id: 'store-sri-krishna-kirana',
      name: 'Sri Krishna Super Store & Kirana',
      ownerName: 'Gopalakrishna Rao',
      phone: '+91 99002 33445',
      whatsapp: '919900233445',
      email: 'srikrishnakirana@gmail.com',
      categoryIds: ['cat-grocery'],
      rating: 4.7,
      reviewCount: 480,
      verified: true,
      address: '12th Main, 5th Cross, 1st Block, Koramangala',
      area: 'Koramangala 1st Block',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9284, lng: 77.6298 },
      location: { type: 'Point', coordinates: [77.6298, 12.9284] },
      openingHours: '7:30 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Home Delivery in 15 mins', 'Fresh Milk & Bread daily', 'Sodexo & UPI Accepted'],
      about: 'Serving Koramangala residents with authentic grains, Fortune Basmati rice, Aashirvaad Atta, and organic spices at wholesale prices.',
      gstNumber: '29GROC1234K1Z2',
      joinedDate: '2022-11-01',
      subscription: { plan: 'free', billingCycle: 'monthly', status: 'active', maxProducts: 50, amount: 0 },
    },
    {
      id: 'store-koramangala-gadgets',
      name: 'Koramangala Gadget & Mobile Point',
      ownerName: 'Arif Khan',
      phone: '+91 98805 77665',
      whatsapp: '+91 98805 77665',
      email: 'gadgetpoint.koramangala@gmail.com',
      categoryIds: ['cat-electronics', 'cat-hardware'],
      rating: 4.7,
      reviewCount: 240,
      verified: true,
      address: 'No. 32, 5th Block Commercial Street, Koramangala',
      area: 'Koramangala 5th Block',
      city: 'Bengaluru',
      pincode: '560095',
      coordinates: { lat: 12.9360, lng: 77.6230 },
      location: { type: 'Point', coordinates: [77.6230, 12.9360] },
      openingHours: '9:30 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Apple iPhone 15 Dealer', 'Instant Screen Guards', 'Anker & boAt Audio', 'Chargers & Cables'],
      about: 'Neighborhood gadget hub with genuine iPhone 15, boAt headphones, Anker fast chargers, and accessories.',
      gstNumber: '29JKLMNO4567P8Q9',
      joinedDate: '2023-01-22',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    }
  ],

  // Products with high-resolution, perfectly matching Unsplash photo images
  products: [
    // 🚗 Automobile
    {
      id: 'prod-motul-7100-oil',
      name: 'Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)',
      brand: 'Motul',
      categoryId: 'cat-automobile',
      subcategory: 'Engine Oils & Fluids',
      sku: 'MTL-7100-10W50-1L',
      modelNumber: '7100-4T-ESTER',
      description: '100% Synthetic 4-Stroke motorcycle lubricant with Ester Technology. Formulated for superior engine protection, maximum horsepower output, smooth clutch engagement, and high thermal shear resistance.',
      specifications: {
        'Viscosity': '10W-50 4T',
        'Technology': '100% Synthetic Ester Core',
        'API Standard': 'API SN / SM / SL',
        'JASO Specification': 'JASO MA2',
        'Volume': '1 Litre'
      },
      image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80',
      keywords: ['motul', 'engine oil', 'synthetic oil', '10w50', '7100', 'ktm oil', 'bike oil', 'lubricant'],
      basePrice: 880,
      mrp: 1045,
      tags: ['100% Synthetic Ester', 'JASO MA2', 'High Performance']
    },
    {
      id: 'prod-honda-shine-brakepad',
      name: 'Honda Shine Front Disc Brake Pad (Genuine OEM)',
      brand: 'Honda Genuine Spares',
      categoryId: 'cat-automobile',
      subcategory: 'Two Wheeler Parts',
      sku: 'HND-SHN-BP-01',
      modelNumber: '06455-KPN-901',
      description: 'Original Honda OEM front ceramic brake pad kit engineered for superior stopping power, zero squeak noise, and prolonged disc rotor lifespan.',
      specifications: {
        'Compatible Vehicles': 'Honda CB Shine 125, Shine SP, CB Unicorn 150/160',
        'Position': 'Front Disc Brake Assembly'
      },
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      keywords: ['shine', 'honda', 'brake', 'pad', 'brakepad', 'cb shine', 'shine 125', 'disc pad'],
      basePrice: 380,
      mrp: 499,
      tags: ['Best Seller', 'Genuine OEM']
    },
    {
      id: 'prod-castrol-power1-oil',
      name: 'Castrol POWER1 4T 10W-30 Synthetic Bike Engine Oil 1L',
      brand: 'Castrol',
      categoryId: 'cat-automobile',
      subcategory: 'Engine Oils & Fluids',
      sku: 'CAS-PWR-10W30-1L',
      modelNumber: 'CASTROL-P1-30',
      description: 'Castrol POWER1 4T with Power Release Technology optimizes friction to deliver ultimate motorcycle acceleration.',
      specifications: {
        'Viscosity Grade': '10W-30 4T',
        'Volume': '1 Litre'
      },
      image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80',
      keywords: ['castrol', 'engine oil', '10w30', 'bike oil', 'synthetic oil', 'shine', 'activa'],
      basePrice: 440,
      mrp: 535,
      tags: ['Top Rated', 'Fast Moving']
    },

    // 📱 Electronics & Mobiles
    {
      id: 'prod-apple-iphone-15',
      name: 'Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera',
      brand: 'Apple',
      categoryId: 'cat-electronics',
      subcategory: 'Smartphones & Tablets',
      sku: 'APL-IP15-128-BLK',
      modelNumber: 'MTP03HN/A',
      description: 'Apple iPhone 15 with Dynamic Island, innovative 48MP Main Camera, A16 Bionic powerhouse chip, durable color-infused back glass, and USB-C connectivity.',
      specifications: {
        'Display': '6.1-inch Super Retina XDR OLED',
        'Processor': 'A16 Bionic Chip',
        'Storage': '128 GB NVMe Storage',
        'Warranty': '1 Year Apple India Official Warranty'
      },
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      keywords: ['iphone', 'iphone 15', 'apple', 'smartphone', 'mobile', 'ios', '48mp', 'dynamic island'],
      basePrice: 71999,
      mrp: 79900,
      tags: ['Dynamic Island', '1Y Apple Care', 'Best Seller']
    },
    {
      id: 'prod-boat-rockerz-450',
      name: 'boAt Rockerz 450 Bluetooth On-Ear Headphones with 15H Playback',
      brand: 'boAt Lifestyle',
      categoryId: 'cat-electronics',
      subcategory: 'Audio & Headphones',
      sku: 'BAT-RCK-450-BLK',
      description: 'Immersive 40mm dynamic drivers with signature HD sound, plush adaptive earcups, and up to 15 hours non-stop playback on single charge.',
      specifications: {
        'Driver Size': '40 mm Neodymium Dynamic',
        'Battery Life': 'Up to 15 Hours'
      },
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      keywords: ['boat', 'headphones', 'rockerz', 'bluetooth', 'wireless', 'earphones'],
      basePrice: 1199,
      mrp: 3990,
      tags: ['Mega Deal', 'Trending Audio']
    },

    // 💊 Pharmacy
    {
      id: 'prod-dr-morepen-gluco-one',
      name: 'Dr. Morepen BG-03 Gluco One Blood Glucose Monitor with 50 Test Strips',
      brand: 'Dr. Morepen',
      categoryId: 'cat-pharmacy',
      subcategory: 'Diabetes & BP Care',
      sku: 'DRM-GLUCO-BG03-50S',
      modelNumber: 'BG-03',
      description: 'Clinically accurate, easy-to-use digital blood sugar monitoring system with 5-second results, large LCD screen, 300 test memory recall, and 50 free test strips in package.',
      specifications: {
        'Test Time': '5 Seconds Fast Readout',
        'Memory': '300 Test Memory with Date & Time',
        'Package Includes': 'Glucometer, 50 Strips, Lancing Device, Lancets'
      },
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80',
      keywords: ['glucometer', 'sugar test', 'dr morepen', 'gluco one', 'diabetes', 'blood sugar', 'test strips', 'medicine', 'pharmacy', 'health', 'medical'],
      basePrice: 999,
      mrp: 1490,
      tags: ['50 Free Strips', '5-Second Results', 'No Coding']
    },
    {
      id: 'prod-dolo-650',
      name: 'Dolo 650mg Paracetamol Tablets (15 Tabs Strip)',
      brand: 'Micro Labs',
      categoryId: 'cat-pharmacy',
      subcategory: 'OTC & Daily Care',
      sku: 'MIC-DOLO-650',
      description: 'Fast-relieving antipyretic medicine and analgesic for fever, headache, body aches, toothache, and viral fever discomfort.',
      specifications: {
        'Salt Composition': 'Paracetamol IP 650 mg',
        'Packaging': '1 Strip of 15 Tablets'
      },
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      keywords: ['dolo', 'dolo 650', 'paracetamol', 'fever', 'headache', 'pain', 'medicine', 'medicines', 'dawa', 'tablet', 'pharmacy'],
      basePrice: 28,
      mrp: 35,
      isMedicine: true,
      tags: ['Essential', 'Doctor Recommended']
    },

    // 🛒 Kirana & Daily Needs
    {
      id: 'prod-fortune-biryani-rice',
      name: 'Fortune Biryani Special Super Premium Aged Long Grain Basmati Rice (5kg)',
      brand: 'Fortune / Adani Wilmar',
      categoryId: 'cat-grocery',
      subcategory: 'Staples, Atta & Rice',
      sku: 'FTN-BRY-RICE-5KG',
      modelNumber: 'BIR-SPEC-5K',
      description: 'Fluffy, royal 2-year naturally aged extra-long Basmati grains that elongate up to 2.5x after cooking. Ideal for authentic biryanis with heavenly aroma.',
      specifications: {
        'Weight': '5 kg Polybag',
        'Aging': '2 Years Naturally Aged'
      },
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      keywords: ['fortune rice', 'biryani rice', 'basmati', 'chawal', 'aged rice', 'grocery'],
      basePrice: 549,
      mrp: 675,
      tags: ['2-Year Aged', '8.4mm Extra Long', 'Biryani Grade']
    },
    {
      id: 'prod-aashirvaad-atta',
      name: 'Aashirvaad Superior MP Sharbati Whole Wheat Atta 5kg',
      brand: 'Aashirvaad',
      categoryId: 'cat-grocery',
      subcategory: 'Staples, Atta & Rice',
      sku: 'ASH-ATTA-5KG',
      modelNumber: 'AASH-WHEAT-5K',
      description: '100% pure whole wheat grain flour sourced from MP Sehore grains for soft, fluffy rotis with natural fiber.',
      specifications: {
        'Weight': '5 kg',
        'Dietary Preference': 'Vegetarian, High Fiber'
      },
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      keywords: ['aashirvaad', 'atta', 'flour', 'wheat', 'roti', 'grocery', '5kg'],
      basePrice: 245,
      mrp: 275,
      tags: ['Daily Staple', '100% Whole Wheat']
    },

    // 🔧 Hardware & Tools
    {
      id: 'prod-stanley-screwdriver-set',
      name: 'Stanley 12-Piece Cushion Grip Magnetic Screwdriver & Hand Toolset (Yellow/Black)',
      brand: 'Stanley',
      categoryId: 'cat-hardware',
      subcategory: 'Hand & Power Tools',
      sku: 'STN-SCRW-12PC-YEL',
      modelNumber: 'STMT60812-8',
      description: 'Professional grade 12-piece magnetic tip screwdriver set crafted from heat-treated chrome vanadium steel with ergonomic bi-material cushion grips.',
      specifications: {
        'Blade Material': 'Chrome Vanadium (Cr-V) Steel',
        'Handle': 'Ergonomic Bi-Material Cushion Grip',
        'Included': '12 Screwdrivers + Storage Rack'
      },
      image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
      keywords: ['stanley', 'screwdriver', 'tools', 'hand tools', 'toolkit', 'magnetic', 'hardware'],
      basePrice: 899,
      mrp: 1299,
      tags: ['Magnetic Tips', 'Chrome Vanadium', 'Heavy Duty']
    },
    {
      id: 'prod-bosch-drill-gsb500',
      name: 'Bosch GSB 500W Professional Impact Drill Tool Kit with 100 Accessories',
      brand: 'Bosch',
      categoryId: 'cat-hardware',
      subcategory: 'Hand & Power Tools',
      sku: 'BSH-GSB500-KIT',
      modelNumber: 'GSB 500 RE KIT',
      description: 'Compact 500W rotary hammer drill with reverse function, speed regulator, masonry drill bits, screwdrivers, hammer, pliers and sturdy carry case.',
      specifications: {
        'Power Input': '500 Watts',
        'Drilling Diameter': 'Concrete 10mm, Steel 8mm, Wood 20mm'
      },
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      keywords: ['bosch', 'drill', 'gsb 500', 'power tools', 'impact drill', 'toolkit'],
      basePrice: 3450,
      mrp: 4200,
      tags: ['Original Bosch', '100pc Kit']
    },

    // 📚 Stationery & Books
    {
      id: 'prod-classmate-notebook-bundle',
      name: 'Classmate Long Notebook Single Line 172 Pages (Pack of 6)',
      brand: 'Classmate / ITC',
      categoryId: 'cat-stationery',
      subcategory: 'Notebooks & Registers',
      sku: 'CLS-NB-172P-PK6',
      description: 'Elemental chlorine-free ultra white smooth paper notebooks with fun activity trivia and sturdy binding for students.',
      specifications: {
        'Pages': '172 Pages each',
        'Quantity': 'Bundle of 6 Books'
      },
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
      keywords: ['classmate', 'notebook', 'long book', 'stationery', 'books'],
      basePrice: 330,
      mrp: 420,
      tags: ['Pack of 6', 'Eco Paper']
    }
  ],

  // Category-Strict Stores Inventory
  inventory: [
    // 🚗 Automobile & Hardware
    { id: 'inv-sharma-motul', storeId: 'store-sharma-auto', productId: 'prod-motul-7100-oil', price: 880, mrp: 1045, discountPercent: 16, stockQuantity: 24, status: 'in_stock', isBestPrice: true },
    { id: 'inv-kumar-motul', storeId: 'store-kumar-motors', productId: 'prod-motul-7100-oil', price: 920, mrp: 1045, discountPercent: 12, stockQuantity: 14, status: 'in_stock', isBestPrice: false },
    { id: 'inv-sharma-shine-bp', storeId: 'store-sharma-auto', productId: 'prod-honda-shine-brakepad', price: 399, mrp: 499, discountPercent: 20, stockQuantity: 18, status: 'in_stock', isBestPrice: false },
    { id: 'inv-kumar-shine-bp', storeId: 'store-kumar-motors', productId: 'prod-honda-shine-brakepad', price: 380, mrp: 499, discountPercent: 24, stockQuantity: 8, status: 'in_stock', isBestPrice: true },
    { id: 'inv-sharma-castrol', storeId: 'store-sharma-auto', productId: 'prod-castrol-power1-oil', price: 440, mrp: 535, discountPercent: 18, stockQuantity: 30, status: 'in_stock', isBestPrice: true },
    { id: 'inv-sharma-stanley', storeId: 'store-sharma-auto', productId: 'prod-stanley-screwdriver-set', price: 899, mrp: 1299, discountPercent: 31, stockQuantity: 16, status: 'in_stock', isBestPrice: true },
    { id: 'inv-sharma-drill', storeId: 'store-sharma-auto', productId: 'prod-bosch-drill-gsb500', price: 3450, mrp: 4200, discountPercent: 18, stockQuantity: 8, status: 'in_stock', isBestPrice: true },

    // 📱 Electronics & Mobiles
    { id: 'inv-kora-iphone', storeId: 'store-koramangala-gadgets', productId: 'prod-apple-iphone-15', price: 71999, mrp: 79900, discountPercent: 10, stockQuantity: 8, status: 'in_stock', isBestPrice: true },
    { id: 'inv-kora-boat', storeId: 'store-koramangala-gadgets', productId: 'prod-boat-rockerz-450', price: 1199, mrp: 3990, discountPercent: 70, stockQuantity: 22, status: 'in_stock', isBestPrice: true },

    // 💊 Pharmacy & Healthcare
    { id: 'inv-apollo-gluco', storeId: 'store-apollo-meds', productId: 'prod-dr-morepen-gluco-one', price: 999, mrp: 1490, discountPercent: 33, stockQuantity: 28, status: 'in_stock', isBestPrice: true },
    { id: 'inv-apollo-dolo', storeId: 'store-apollo-meds', productId: 'prod-dolo-650', price: 28, mrp: 35, discountPercent: 20, stockQuantity: 180, status: 'in_stock', isBestPrice: true },

    // 🛒 Kirana & Daily Needs
    { id: 'inv-krishna-fortune-rice', storeId: 'store-sri-krishna-kirana', productId: 'prod-fortune-biryani-rice', price: 549, mrp: 675, discountPercent: 19, stockQuantity: 35, status: 'in_stock', isBestPrice: true },
    { id: 'inv-krishna-atta', storeId: 'store-sri-krishna-kirana', productId: 'prod-aashirvaad-atta', price: 245, mrp: 275, discountPercent: 11, stockQuantity: 50, status: 'in_stock', isBestPrice: true },

    // 📚 Stationery & Books
    { id: 'inv-krishna-notebook', storeId: 'store-sri-krishna-kirana', productId: 'prod-classmate-notebook-bundle', price: 330, mrp: 420, discountPercent: 21, stockQuantity: 60, status: 'in_stock', isBestPrice: true }
  ],

  demands: [
    {
      id: 'dem-001',
      productId: 'prod-motul-7100-oil',
      productName: 'Motul 7100 4T 10W-50 Synthetic Engine Oil 1L',
      brand: 'Motul',
      categoryId: 'cat-automobile',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerArea: 'Koramangala 4th Block',
      customerCoords: { lat: 12.9352, lng: 77.6245 },
      radiusKm: 2,
      searchesCount: 42,
      interestedCustomersCount: 14,
      createdAt: '2 hours ago',
      status: 'pending',
      notes: 'Need urgent 10W-50 oil can for KTM Duke 390 servicing.'
    }
  ],

  offers: [
    {
      id: 'off-001',
      storeId: 'store-koramangala-gadgets',
      storeName: 'Koramangala Gadget & Mobile Point',
      storeArea: 'Koramangala 5th Block',
      productId: 'prod-apple-iphone-15',
      productName: 'Apple iPhone 15 (128GB, Black)',
      title: 'Flat ₹7,900 Off on iPhone 15',
      description: 'Exclusive counter deal with instant unboxing & tempered glass fitment.',
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
      storeId: 'store-sharma-auto',
      storeName: 'Sharma Auto Spares & Service Hub',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerMessage: 'Do you have original Motul 7100 10W-50 with unbroken seal in stock?',
      productId: 'prod-motul-7100-oil',
      productName: 'Motul 7100 4T 10W-50 Synthetic Oil',
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
      storeId: 'store-sharma-auto',
      productId: 'prod-motul-7100-oil',
      customerName: 'Karthik Rao',
      rating: 5,
      comment: 'Got genuine Motul 7100 at ₹880 compared to online ₹1045. Verified barcode and seal. Best local shop!',
      date: '2026-08-20',
      verifiedPurchase: true
    }
  ],

  users: [
    { id: 'usr-customer-1', name: 'Aakash Kumar', email: 'aakash@dhoondo.local', phone: '+91 98450 12345', role: 'customer' },
    { id: 'usr-retailer-1', name: 'Rajesh Sharma', email: 'sharma.autoparts@gmail.com', phone: '+91 98450 12345', role: 'retailer', storeId: 'store-sharma-auto' },
    { id: 'usr-admin-1', name: 'Admin Master', email: 'admin@dhoondo.in', phone: '+91 80 4000 8000', role: 'admin' },
  ],
};

const isDbConnected = () => {
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;
};

module.exports = { mockData, isDbConnected };
