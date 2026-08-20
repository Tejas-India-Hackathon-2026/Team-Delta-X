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

  // 10 Detailed Real Retailer Stores positioned for exact <1km, 1-2km, 2-5km comparison
  stores: [
    // 📍 1. < 1km (0.3 km)
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
    // 📍 2. < 1km (0.6 km)
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
    // 📍 3. 1 - 2km (1.2 km)
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
      about: 'Authorized multi-brand bike spare distributor stocking Honda, Hero, Bajaj, and Castrol.',
      gstNumber: '29AABCK9982D1ZH',
      joinedDate: '2023-03-20',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    // 📍 4. 1 - 2km (1.5 km)
    {
      id: 'store-medplus-quick',
      name: 'MedPlus Health & Wellness Express',
      ownerName: 'Ravi Teja',
      phone: '+91 98860 11223',
      whatsapp: '+91 98860 11223',
      email: 'medplus.koramangala@gmail.com',
      categoryIds: ['cat-pharmacy'],
      rating: 4.7,
      reviewCount: 220,
      verified: true,
      address: 'Shop 5, 5th Cross, 3rd Block, Koramangala',
      area: 'Koramangala 3rd Block',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9305, lng: 77.6210 },
      location: { type: 'Point', coordinates: [77.6210, 12.9305] },
      openingHours: '8:00 AM - 11:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c299896029?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Flat 15% Off Medicines', 'Diabetic Care Center', 'Instant WhatsApp Orders'],
      about: 'Fast neighborhood medical counter with high discount rates on prescription drugs and wellness gear.',
      gstNumber: '29MNOPE8899Q1R2',
      joinedDate: '2023-01-10',
      subscription: { plan: 'pro', billingCycle: 'monthly', status: 'active', maxProducts: 99999, amount: 249 },
    },
    // 📍 5. 2 - 5km (2.5 km)
    {
      id: 'store-krishna-kirana',
      name: 'Sri Krishna Super Kirana & Provisions',
      ownerName: 'Gopalakrishna Bhat',
      phone: '+91 98451 98765',
      whatsapp: '+91 98451 98765',
      email: 'krishnakirana.hsr@gmail.com',
      categoryIds: ['cat-grocery'],
      rating: 4.7,
      reviewCount: 289,
      verified: true,
      address: 'No. 542, 27th Main Road, Sector 1, HSR Layout',
      area: 'HSR Layout Sector 1',
      city: 'Bengaluru',
      pincode: '560102',
      coordinates: { lat: 12.9121, lng: 77.6445 },
      location: { type: 'Point', coordinates: [77.6445, 12.9121] },
      openingHours: '7:00 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Fast Home Delivery', 'Sodexo Cards Accepted', 'Fresh Dairy Counter', 'Wholesale Flour Mill'],
      about: 'Daily fresh staples, branded spices, cold-pressed cooking oils, dry fruits, and monthly grocery packages at competitive local prices.',
      gstNumber: '29KLMNO9012H3Z4',
      joinedDate: '2023-03-20',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    // 📍 6. 2 - 5km (3.1 km)
    {
      id: 'store-mahalaxmi-hardware',
      name: 'Mahalaxmi Hardware, Electricals & Power Tools',
      ownerName: 'Praveen Patel',
      phone: '+91 99001 67890',
      whatsapp: '+91 99001 67890',
      email: 'mahalaxmi.btm@gmail.com',
      categoryIds: ['cat-hardware', 'cat-automobile'],
      rating: 4.6,
      reviewCount: 198,
      verified: true,
      address: 'No. 89, 7th Main, 2nd Stage, BTM Layout',
      area: 'BTM Layout 2nd Stage',
      city: 'Bengaluru',
      pincode: '560076',
      coordinates: { lat: 12.9165, lng: 77.6101 },
      location: { type: 'Point', coordinates: [77.6101, 12.9165] },
      openingHours: '8:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Bosch Power Tools Center', 'Pipe Cutting & Threading', 'Credit Accounts for Contractors', 'Bulk Discounts'],
      about: 'Complete building and maintenance supplies: Bosch power tools, Havells copper wires, Asian Paints, and Supreme plumbing fixtures.',
      gstNumber: '29MNOPQ7890R1S2',
      joinedDate: '2023-04-05',
      subscription: { plan: 'pro', billingCycle: 'monthly', status: 'active', maxProducts: 99999, amount: 249 },
    },
    // 📍 7. 2 - 5km (4.2 km)
    {
      id: 'store-digital-world',
      name: 'Digital World Mobiles & Electronics Gallery',
      ownerName: 'Vikas Agarwal',
      phone: '+91 98110 54321',
      whatsapp: '+91 98110 54321',
      email: 'digitalworld.indiranagar@gmail.com',
      categoryIds: ['cat-electronics'],
      rating: 4.8,
      reviewCount: 420,
      verified: true,
      address: 'Shop 108, 100 Feet Road, HAL 2nd Stage, Indiranagar',
      area: 'Indiranagar 100ft Road',
      city: 'Bengaluru',
      pincode: '560038',
      coordinates: { lat: 12.9719, lng: 77.6412 },
      location: { type: 'Point', coordinates: [77.6412, 12.9719] },
      openingHours: '10:00 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Live Device Demos', '0% Bajaj Finance EMI', 'Instant Screen Guard Fitting', 'Authorized Warranty Support'],
      about: 'Authorized multi-brand showroom for boAt, Apple, OnePlus, Anker, JBL, and noise audio with genuine manufacturer warranties.',
      gstNumber: '29XYZAB3456K7L8',
      joinedDate: '2023-02-14',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    // 📍 8. 2 - 5km (4.8 km)
    {
      id: 'store-vidya-sagar-books',
      name: 'Vidya Sagar Educational Stationery & Book Depot',
      ownerName: 'Suresh Chandra',
      phone: '+91 98440 11223',
      whatsapp: '+91 98440 11223',
      email: 'vidyasagar.jayanagar@gmail.com',
      categoryIds: ['cat-stationery'],
      rating: 4.9,
      reviewCount: 380,
      verified: true,
      address: 'No. 34, 11th Main Road, 4th Block, Jayanagar',
      area: 'Jayanagar 4th Block',
      city: 'Bengaluru',
      pincode: '560011',
      coordinates: { lat: 12.9299, lng: 77.5826 },
      location: { type: 'Point', coordinates: [77.5826, 12.9299] },
      openingHours: '9:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['High Speed Color Xerox', 'Engineering Drawing Kits', 'School Book Binding', 'Parker Pen Engraving'],
      about: 'Iconic bookstore offering school & college textbooks, competitive exam guides (UPSC, JEE, NEET), Classmate stationery, and fine art supplies.',
      gstNumber: '29UVWXY4567T8U9',
      joinedDate: '2022-09-18',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
    // 📍 9. < 1km Local Kirana
    {
      id: 'store-local-quick-kirana',
      name: 'Daily Fresh Kirana & Provisions',
      ownerName: 'Manjunath Reddy',
      phone: '+91 98442 33441',
      whatsapp: '+91 98442 33441',
      email: 'dailyfresh.koramangala@gmail.com',
      categoryIds: ['cat-grocery'],
      rating: 4.5,
      reviewCount: 160,
      verified: true,
      address: 'Shop 12, 1st Cross, Koramangala 4th Block',
      area: 'Koramangala 4th Block',
      city: 'Bengaluru',
      pincode: '560034',
      coordinates: { lat: 12.9348, lng: 77.6250 },
      location: { type: 'Point', coordinates: [77.6250, 12.9348] },
      openingHours: '7:00 AM - 10:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Fast Home Delivery', 'Daily Milk & Bread', 'UPI Accepted'],
      about: 'Your friendly neighborhood grocery corner stocking Aashirvaad Atta, Amul Ghee, Tata Tea, and fresh dairy.',
      gstNumber: '29DEFGH2345J6K7',
      joinedDate: '2023-02-10',
      subscription: { plan: 'free', billingCycle: 'monthly', status: 'active', maxProducts: 50, amount: 0 },
    },
    // 📍 10. < 1km Local Electronics & Spares
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
      facilities: ['Instant Screen Guards', 'Anker & boAt Audio', 'Chargers & Cables'],
      about: 'Neighborhood gadget hub with genuine boAt headphones, Anker fast chargers, and accessories.',
      gstNumber: '29JKLMNO4567P8Q9',
      joinedDate: '2023-01-22',
      subscription: { plan: 'pro', billingCycle: 'yearly', status: 'active', maxProducts: 99999, amount: 2388 },
    },
  ],

  // Products with high-resolution, perfectly matching Unsplash photo images
  products: [
    // 🚗 Automobile
    {
      id: 'prod-honda-shine-brakepad',
      name: 'Honda Shine Front Disc Brake Pad (Genuine OEM)',
      brand: 'Honda Genuine Spares',
      categoryId: 'cat-automobile',
      subcategory: 'Two Wheeler Parts',
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
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
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
      subcategory: 'Engine Oils & Fluids',
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
      basePrice: 440,
      mrp: 535,
      tags: ['Top Rated', 'Fast Moving']
    },
    {
      id: 'prod-amaron-bike-battery',
      name: 'Amaron Pro Rider 5Ah Maintenance Free Bike Battery',
      brand: 'Amaron',
      categoryId: 'cat-automobile',
      subcategory: 'Batteries & Electricals',
      sku: 'AMR-BTZ5L-MF',
      modelNumber: 'AP-BTZ5L',
      description: 'Zero-maintenance high-cranking motorcycle battery with advanced AGM separator and patented Silven-X alloy.',
      specifications: {
        'Capacity': '5 Ah (12V)',
        'Warranty': '48 Months (24M Replacement + 24M Pro-rata)',
        'Technology': 'Valve Regulated Lead Acid (VRLA AGM)'
      },
      image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80',
      keywords: ['amaron', 'battery', '5ah', 'bike battery', 'pulsar', 'fz', 'apache', 'exide'],
      basePrice: 1199,
      mrp: 1450,
      tags: ['Long Warranty']
    },

    // 💊 Pharmacy
    {
      id: 'prod-dolo-650',
      name: 'Dolo 650mg Paracetamol Tablets (15 Tabs Strip)',
      brand: 'Micro Labs',
      categoryId: 'cat-pharmacy',
      subcategory: 'OTC & Daily Care',
      sku: 'MIC-DOLO-650',
      description: 'Fast-relieving antipyretic and analgesic for fever, headache, body aches, toothache, and viral fever discomfort.',
      specifications: {
        'Salt Composition': 'Paracetamol IP 650 mg',
        'Packaging': '1 Strip of 15 Tablets',
        'Dosage': 'As prescribed by physician (Max 4 tabs / 24 hrs)'
      },
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      keywords: ['dolo', 'dolo 650', 'paracetamol', 'fever', 'headache', 'calpol', 'crocin', 'tablet', 'pain'],
      basePrice: 28,
      mrp: 34,
      isMedicine: true,
      tags: ['Essential', 'Doctor Recommended']
    },
    {
      id: 'prod-accuchek-active',
      name: 'Accu-Chek Active Blood Glucose Glucometer Kit with 10 Strips',
      brand: 'Roche Diabetes Care',
      categoryId: 'cat-pharmacy',
      subcategory: 'Diabetes & BP Care',
      sku: 'ROCHE-AC-ACTIVE-01',
      description: 'Accurate and simple blood glucose monitoring system providing results in just 5 seconds with easy visual double-check.',
      specifications: {
        'Test Time': '5 Seconds',
        'Memory': '500 Test Results with Date & Time',
        'Box Includes': 'Meter, Softclix Lancing Device, 10 Sterile Lancets, 10 Test Strips'
      },
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80',
      keywords: ['glucometer', 'sugar test', 'diabetes', 'accuchek', 'blood sugar', 'glucose meter', 'strips'],
      basePrice: 1299,
      mrp: 1699,
      tags: ['Diabetes Essential']
    },
    {
      id: 'prod-volini-spray',
      name: 'Volini Pain Relief Spray Max Strength 100g',
      brand: 'Sun Pharma',
      categoryId: 'cat-pharmacy',
      subcategory: 'First Aid & Surgicals',
      sku: 'SUN-VOL-SP-100G',
      description: 'Quick action micro-gel formulation providing instant relief from joint pain, backache, neck pain, muscle sprains, and sports stiffness.',
      specifications: {
        'Active Ingredients': 'Diclofenac Diethylamine, Methyl Salicylate, Menthol, Linseed Oil',
        'Net Weight': '100 Grams Aerosol Spray'
      },
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80',
      keywords: ['volini', 'pain spray', 'back pain', 'joint pain', 'spray', 'moov', 'iodex', 'sprain'],
      basePrice: 230,
      mrp: 290,
      tags: ['Instant Relief']
    },

    // 🛒 Kirana & Daily Needs
    {
      id: 'prod-aashirvaad-atta-10kg',
      name: 'Aashirvaad Shudh Chakki Whole Wheat Atta 10kg Bag',
      brand: 'ITC Aashirvaad',
      categoryId: 'cat-grocery',
      subcategory: 'Staples, Atta & Rice',
      sku: 'ITC-ASH-ATT-10K',
      description: '100% whole wheat grains processed with traditional 4-step mechanical cleaning and chakki grinding for extra soft rotis.',
      specifications: {
        'Grain Type': '100% Whole Wheat (0% Maida)',
        'Net Weight': '10 kg Pack',
        'FSSAI Certified': '10012031000312'
      },
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      keywords: ['atta', 'aashirvaad', 'wheat', 'chakki', 'flour', 'roti', '10kg', 'itc'],
      basePrice: 410,
      mrp: 460,
      tags: ['Daily Staple', 'Pantry Must-Have']
    },
    {
      id: 'prod-amul-cow-ghee-1l',
      name: 'Amul Pure Cow Ghee 1L Tin Container',
      brand: 'Amul',
      categoryId: 'cat-grocery',
      subcategory: 'Dairy, Milk & Ghee',
      sku: 'AML-COW-GHEE-1L',
      description: 'Traditional aroma and golden texture rich in vitamins A, D, E, and K. Made from pure pasteurized fresh cow milk butter.',
      specifications: {
        'Packaging': '1 Litre Sealed Tin',
        'Nutritional Value': 'Fat 99.7g / 100g',
        'Shelf Life': '12 Months'
      },
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80',
      keywords: ['ghee', 'amul', 'cow ghee', 'desi ghee', 'pure ghee', 'dairy', 'butter'],
      basePrice: 599,
      mrp: 660,
      tags: ['100% Pure']
    },
    {
      id: 'prod-tata-tea-gold-1kg',
      name: 'Tata Tea Gold Premium Long Leaf Black Tea 1kg Pack',
      brand: 'Tata Consumer',
      categoryId: 'cat-grocery',
      subcategory: 'Snacks & Beverages',
      sku: 'TAT-TEA-GLD-1K',
      description: 'Exquisite blend of 85% fine Assam CTC tea granules with 15% gently rolled fragrant aromatic whole long leaves.',
      specifications: {
        'Variety': 'CTC + Long Leaves Blend',
        'Weight': '1 kg Family Saver Bag'
      },
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      keywords: ['tata tea', 'chai', 'tea', 'gold', 'assam tea', 'black tea', '1kg tea'],
      basePrice: 510,
      mrp: 610,
      tags: ['Aromatic Blend']
    },

    // 📱 Electronics & Mobiles
    {
      id: 'prod-boat-rockerz-450',
      name: 'boAt Rockerz 450 Bluetooth Wireless On-Ear Headphones',
      brand: 'boAt Lifestyle',
      categoryId: 'cat-electronics',
      subcategory: 'Audio & Headphones',
      sku: 'BAT-RCK-450-BLK',
      description: 'Immersive 40mm dynamic drivers with signature HD sound, plush adaptive earcups, and up to 15 hours non-stop playback on single charge.',
      specifications: {
        'Driver Size': '40 mm Neodymium Dynamic',
        'Battery Life': 'Up to 15 Hours (300mAh)',
        'Bluetooth Version': 'v5.0 with 10m Range',
        'Connectivity': 'Bluetooth + 3.5mm Aux Cable Dual Mode'
      },
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      keywords: ['boat', 'headphones', 'rockerz', 'bluetooth', 'wireless', 'earphones', 'headset', 'bass'],
      basePrice: 1199,
      mrp: 3990,
      tags: ['Mega Deal', 'Trending Audio']
    },
    {
      id: 'prod-anker-20w-charger',
      name: 'Anker PowerPort 20W Type-C Fast Wall Charger Adapter',
      brand: 'Anker',
      categoryId: 'cat-electronics',
      subcategory: 'Cables, Chargers & Hubs',
      sku: 'ANK-PWR-20W-WHT',
      description: 'Ultra-compact high-speed USB-C wall charger with PowerIQ 3.0 technology, compatible with iPhone 15/14/13 series, iPad, and Pixel.',
      specifications: {
        'Total Output': '20 Watts Power Delivery',
        'Port': '1 x USB Type-C',
        'Protection': 'MultiProtect Surge & Temperature Control'
      },
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
      keywords: ['anker', 'charger', 'type c', 'fast charger', 'iphone charger', '20w', 'adapter'],
      basePrice: 899,
      mrp: 1499,
      tags: ['Fast Charging']
    },
    {
      id: 'prod-sandisk-128gb-microsd',
      name: 'SanDisk Ultra 128GB MicroSDXC Class 10 UHS-I Memory Card',
      brand: 'SanDisk',
      categoryId: 'cat-electronics',
      subcategory: 'Storage & Pendrives',
      sku: 'SND-SD-128G-U1',
      description: 'High-speed 140MB/s transfer rate ideal for Android smartphones, tablets, dashcams, action cameras, and Nintendo Switch.',
      specifications: {
        'Capacity': '128 GB',
        'Speed Class': 'Class 10, U1, A1 App Performance',
        'Warranty': '10 Years Limited Warranty'
      },
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
      keywords: ['sandisk', 'memory card', 'sd card', '128gb', 'microsd', 'storage', 'camera'],
      basePrice: 799,
      mrp: 1400,
      tags: ['10-Yr Warranty']
    },

    // 🔧 Hardware & Sanitary
    {
      id: 'prod-bosch-drill-kit',
      name: 'Bosch GSB 500W Impact Drill Kit with 100 Accessories',
      brand: 'Bosch Professional',
      categoryId: 'cat-hardware',
      subcategory: 'Hand & Power Tools',
      sku: 'BSH-GSB-500-KT',
      description: 'Compact 500W impact drill machine with reverse-forward rotation, carrying case, drill bits, hammer, pliers, and screws set.',
      specifications: {
        'Power Input': '500 Watts',
        'Chuck Capacity': '1.5 - 10 mm Keyed',
        'Impact Rate': '0 - 41,600 bpm',
        'Drilling Diameter': 'Concrete 10mm, Wood 20mm, Steel 8mm'
      },
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      keywords: ['bosch', 'drill', 'power tool', 'toolkit', 'impact drill', 'hardware', 'hammer'],
      basePrice: 3299,
      mrp: 4200,
      tags: ['Pro Toolkit']
    },
    {
      id: 'prod-havells-wire-2.5',
      name: 'Havells Lifeline Plus 2.5 Sq mm FR Copper House Wire 90m',
      brand: 'Havells',
      categoryId: 'cat-hardware',
      subcategory: 'Electricals & Wiring',
      sku: 'HAV-WIRE-2.5-90M',
      description: 'Flame Retardant (FR) 100% pure electrolytic high-conductivity copper house building wire with 101% conductivity.',
      specifications: {
        'Conductor Area': '2.5 sq mm',
        'Length': '90 Metres Coil',
        'Insulation': 'Heat Resistant Flame Retardant PVC (ISI Certified)'
      },
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
      keywords: ['havells', 'wire', 'cable', 'electrical', 'copper wire', '2.5mm', 'house wiring'],
      basePrice: 2750,
      mrp: 3490,
      tags: ['Fire Safe']
    },

    // 📚 Stationery & Books
    {
      id: 'prod-classmate-notebook-pack',
      name: 'Classmate Long Ruled Notebook Pack of 6 (172 Pages each)',
      brand: 'ITC Classmate',
      categoryId: 'cat-stationery',
      subcategory: 'Notebooks & Registers',
      sku: 'ITC-CLS-NB-172-P6',
      description: 'Elemental chlorine-free bright white smooth writing paper with engaging activity trivia on back covers.',
      specifications: {
        'Page Count': '172 Pages per Book (Pack of 6)',
        'Ruling': 'Single Line Ruled with Margin',
        'Dimensions': '31.4 cm x 19.4 cm (Soft Bound)'
      },
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
      keywords: ['classmate', 'notebook', 'register', 'stationery', 'books', 'school', 'ruled book'],
      basePrice: 330,
      mrp: 420,
      tags: ['Student Favorite']
    },
    {
      id: 'prod-parker-vector-pen',
      name: 'Parker Vector Matte Black Fountain Pen with Gold Trim',
      brand: 'Parker',
      categoryId: 'cat-stationery',
      subcategory: 'Pens, Art & Drawing',
      sku: 'PRK-VCT-MTBLK-FP',
      description: 'Timeless cylindrical design in smudge-proof matte black finish with 23K gold plated stainless steel nib.',
      specifications: {
        'Nib Size': 'Fine Stainless Steel Nib',
        'Ink Mechanism': 'Piston Ink Converter + Blue Cartridge Included',
        'Body': 'Molded ABS Resin with Gold Plated Clip'
      },
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
      keywords: ['parker', 'pen', 'fountain pen', 'ink pen', 'vector', 'gift pen', 'luxury pen'],
      basePrice: 499,
      mrp: 650,
      tags: ['Executive Gift']
    }
  ],

  // 3 Competitive Stores Under <1km, 1-2km, 2-5km per product across all categories
  inventory: [
    // 🚗 1. Honda CB Shine Brake Pad (3 Stores Comparison)
    // < 1 km (0.3 km)
    { id: 'inv-sharma-shine-bp', storeId: 'store-sharma-auto', productId: 'prod-honda-shine-brakepad', price: 399, mrp: 499, discountPercent: 20, stockQuantity: 18, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km) - BEST PRICE!
    { id: 'inv-kumar-shine-bp', storeId: 'store-kumar-motors', productId: 'prod-honda-shine-brakepad', price: 380, mrp: 499, discountPercent: 24, stockQuantity: 8, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (3.1 km)
    { id: 'inv-mahalaxmi-shine-bp', storeId: 'store-mahalaxmi-hardware', productId: 'prod-honda-shine-brakepad', price: 420, mrp: 499, discountPercent: 16, stockQuantity: 12, status: 'in_stock', isBestPrice: false },

    // 🚗 2. Castrol Power1 Engine Oil 1L (3 Stores Comparison)
    // < 1 km (0.3 km)
    { id: 'inv-sharma-castrol', storeId: 'store-sharma-auto', productId: 'prod-castrol-power1-oil', price: 460, mrp: 535, discountPercent: 14, stockQuantity: 36, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km) - BEST PRICE!
    { id: 'inv-kumar-castrol', storeId: 'store-kumar-motors', productId: 'prod-castrol-power1-oil', price: 440, mrp: 535, discountPercent: 18, stockQuantity: 20, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (3.1 km)
    { id: 'inv-mahalaxmi-castrol', storeId: 'store-mahalaxmi-hardware', productId: 'prod-castrol-power1-oil', price: 475, mrp: 535, discountPercent: 11, stockQuantity: 15, status: 'in_stock', isBestPrice: false },

    // 🚗 3. Amaron 5Ah Bike Battery (3 Stores Comparison)
    // < 1 km (0.3 km)
    { id: 'inv-sharma-amaron', storeId: 'store-sharma-auto', productId: 'prod-amaron-bike-battery', price: 1250, mrp: 1450, discountPercent: 14, stockQuantity: 8, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km) - BEST PRICE!
    { id: 'inv-kumar-amaron', storeId: 'store-kumar-motors', productId: 'prod-amaron-bike-battery', price: 1199, mrp: 1450, discountPercent: 17, stockQuantity: 10, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (3.1 km)
    { id: 'inv-mahalaxmi-amaron', storeId: 'store-mahalaxmi-hardware', productId: 'prod-amaron-bike-battery', price: 1280, mrp: 1450, discountPercent: 12, stockQuantity: 5, status: 'in_stock', isBestPrice: false },

    // 💊 4. Dolo 650mg Paracetamol (3 Stores Comparison)
    // < 1 km (0.6 km)
    { id: 'inv-apollo-dolo', storeId: 'store-apollo-meds', productId: 'prod-dolo-650', price: 30, mrp: 34, discountPercent: 12, stockQuantity: 180, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.5 km) - BEST PRICE!
    { id: 'inv-medplus-dolo', storeId: 'store-medplus-quick', productId: 'prod-dolo-650', price: 28, mrp: 34, discountPercent: 18, stockQuantity: 120, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (2.5 km)
    { id: 'inv-krishna-dolo', storeId: 'store-krishna-kirana', productId: 'prod-dolo-650', price: 32, mrp: 34, discountPercent: 6, stockQuantity: 50, status: 'in_stock', isBestPrice: false },

    // 💊 5. Accu-Chek Active Glucometer (3 Stores Comparison)
    // < 1 km (0.6 km)
    { id: 'inv-apollo-accu', storeId: 'store-apollo-meds', productId: 'prod-accuchek-active', price: 1350, mrp: 1699, discountPercent: 20, stockQuantity: 15, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.5 km) - BEST PRICE!
    { id: 'inv-medplus-accu', storeId: 'store-medplus-quick', productId: 'prod-accuchek-active', price: 1299, mrp: 1699, discountPercent: 24, stockQuantity: 10, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (4.2 km)
    { id: 'inv-digital-accu', storeId: 'store-digital-world', productId: 'prod-accuchek-active', price: 1399, mrp: 1699, discountPercent: 18, stockQuantity: 6, status: 'in_stock', isBestPrice: false },

    // 💊 6. Volini Pain Spray 100g (3 Stores Comparison)
    // < 1 km (0.6 km)
    { id: 'inv-apollo-volini', storeId: 'store-apollo-meds', productId: 'prod-volini-spray', price: 235, mrp: 290, discountPercent: 19, stockQuantity: 45, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.5 km) - BEST PRICE!
    { id: 'inv-medplus-volini', storeId: 'store-medplus-quick', productId: 'prod-volini-spray', price: 230, mrp: 290, discountPercent: 21, stockQuantity: 30, status: 'in_stock', isBestPrice: true },
    // 2 - 5 km (2.5 km)
    { id: 'inv-krishna-volini', storeId: 'store-krishna-kirana', productId: 'prod-volini-spray', price: 245, mrp: 290, discountPercent: 15, stockQuantity: 20, status: 'in_stock', isBestPrice: false },

    // 🛒 7. Aashirvaad Atta 10kg (3 Stores Comparison)
    // < 1 km (0.4 km) - BEST PRICE!
    { id: 'inv-daily-atta', storeId: 'store-local-quick-kirana', productId: 'prod-aashirvaad-atta-10kg', price: 410, mrp: 460, discountPercent: 11, stockQuantity: 35, status: 'in_stock', isBestPrice: true },
    // 1 - 2 km (1.5 km)
    { id: 'inv-apollo-atta', storeId: 'store-medplus-quick', productId: 'prod-aashirvaad-atta-10kg', price: 420, mrp: 460, discountPercent: 9, stockQuantity: 15, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (2.5 km)
    { id: 'inv-krishna-atta', storeId: 'store-krishna-kirana', productId: 'prod-aashirvaad-atta-10kg', price: 425, mrp: 460, discountPercent: 8, stockQuantity: 60, status: 'in_stock', isBestPrice: false },

    // 🛒 8. Amul Pure Cow Ghee 1L (3 Stores Comparison)
    // < 1 km (0.4 km) - BEST PRICE!
    { id: 'inv-daily-ghee', storeId: 'store-local-quick-kirana', productId: 'prod-amul-cow-ghee-1l', price: 599, mrp: 660, discountPercent: 9, stockQuantity: 25, status: 'in_stock', isBestPrice: true },
    // 1 - 2 km (1.2 km)
    { id: 'inv-kumar-ghee', storeId: 'store-kumar-motors', productId: 'prod-amul-cow-ghee-1l', price: 610, mrp: 660, discountPercent: 8, stockQuantity: 12, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (2.5 km)
    { id: 'inv-krishna-ghee', storeId: 'store-krishna-kirana', productId: 'prod-amul-cow-ghee-1l', price: 620, mrp: 660, discountPercent: 6, stockQuantity: 40, status: 'in_stock', isBestPrice: false },

    // 📱 9. boAt Rockerz 450 Bluetooth Headphones (3 Stores Comparison)
    // < 1 km (0.5 km)
    { id: 'inv-gadget-boat', storeId: 'store-koramangala-gadgets', productId: 'prod-boat-rockerz-450', price: 1249, mrp: 3990, discountPercent: 68, stockQuantity: 22, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km)
    { id: 'inv-kumar-boat', storeId: 'store-kumar-motors', productId: 'prod-boat-rockerz-450', price: 1280, mrp: 3990, discountPercent: 67, stockQuantity: 8, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (4.2 km) - BEST PRICE!
    { id: 'inv-digital-boat', storeId: 'store-digital-world', productId: 'prod-boat-rockerz-450', price: 1199, mrp: 3990, discountPercent: 70, stockQuantity: 45, status: 'in_stock', isBestPrice: true },

    // 📱 10. Anker 20W Fast Charger Adapter (3 Stores Comparison)
    // < 1 km (0.5 km) - BEST PRICE!
    { id: 'inv-gadget-anker', storeId: 'store-koramangala-gadgets', productId: 'prod-anker-20w-charger', price: 899, mrp: 1499, discountPercent: 40, stockQuantity: 16, status: 'in_stock', isBestPrice: true },
    // 1 - 2 km (1.2 km)
    { id: 'inv-kumar-anker', storeId: 'store-kumar-motors', productId: 'prod-anker-20w-charger', price: 920, mrp: 1499, discountPercent: 39, stockQuantity: 10, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (4.2 km)
    { id: 'inv-digital-anker', storeId: 'store-digital-world', productId: 'prod-anker-20w-charger', price: 950, mrp: 1499, discountPercent: 37, stockQuantity: 25, status: 'in_stock', isBestPrice: false },

    // 🔧 11. Bosch GSB 500W Impact Drill Kit (3 Stores Comparison)
    // < 1 km (0.3 km)
    { id: 'inv-sharma-drill', storeId: 'store-sharma-auto', productId: 'prod-bosch-drill-kit', price: 3450, mrp: 4200, discountPercent: 18, stockQuantity: 6, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km)
    { id: 'inv-kumar-drill', storeId: 'store-kumar-motors', productId: 'prod-bosch-drill-kit', price: 3390, mrp: 4200, discountPercent: 19, stockQuantity: 4, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (3.1 km) - BEST PRICE!
    { id: 'inv-mahalaxmi-drill', storeId: 'store-mahalaxmi-hardware', productId: 'prod-bosch-drill-kit', price: 3299, mrp: 4200, discountPercent: 21, stockQuantity: 14, status: 'in_stock', isBestPrice: true },

    // 📚 12. Classmate Long Ruled Notebooks Pack of 6 (3 Stores Comparison)
    // < 1 km (0.4 km)
    { id: 'inv-daily-notebook', storeId: 'store-local-quick-kirana', productId: 'prod-classmate-notebook-pack', price: 360, mrp: 420, discountPercent: 14, stockQuantity: 40, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.5 km)
    { id: 'inv-medplus-notebook', storeId: 'store-medplus-quick', productId: 'prod-classmate-notebook-pack', price: 350, mrp: 420, discountPercent: 16, stockQuantity: 25, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (4.8 km) - BEST PRICE!
    { id: 'inv-vidya-notebook', storeId: 'store-vidya-sagar-books', productId: 'prod-classmate-notebook-pack', price: 330, mrp: 420, discountPercent: 21, stockQuantity: 90, status: 'in_stock', isBestPrice: true },

    // 📚 13. Parker Vector Matte Black Fountain Pen (3 Stores Comparison)
    // < 1 km (0.5 km)
    { id: 'inv-gadget-parker', storeId: 'store-koramangala-gadgets', productId: 'prod-parker-vector-pen', price: 550, mrp: 650, discountPercent: 15, stockQuantity: 12, status: 'in_stock', isBestPrice: false },
    // 1 - 2 km (1.2 km)
    { id: 'inv-kumar-parker', storeId: 'store-kumar-motors', productId: 'prod-parker-vector-pen', price: 530, mrp: 650, discountPercent: 18, stockQuantity: 8, status: 'in_stock', isBestPrice: false },
    // 2 - 5 km (4.8 km) - BEST PRICE!
    { id: 'inv-vidya-parker', storeId: 'store-vidya-sagar-books', productId: 'prod-parker-vector-pen', price: 499, mrp: 650, discountPercent: 23, stockQuantity: 35, status: 'in_stock', isBestPrice: true },
  ],

  demands: [
    {
      id: 'dem-001',
      productId: 'prod-amaron-bike-battery',
      productName: 'Amaron Pro Rider 5Ah Battery',
      brand: 'Amaron',
      categoryId: 'cat-automobile',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerArea: 'Koramangala 4th Block',
      customerCoords: { lat: 12.9352, lng: 77.6245 },
      radiusKm: 5,
      searchesCount: 42,
      interestedCustomersCount: 14,
      createdAt: '2 hours ago',
      status: 'pending',
      notes: 'Need urgent 5Ah battery replacement for Pulsar 150.'
    }
  ],

  offers: [
    {
      id: 'off-001',
      storeId: 'store-digital-world',
      storeName: 'Digital World Mobiles & Electronics Gallery',
      storeArea: 'Indiranagar 100ft Road',
      productId: 'prod-boat-rockerz-450',
      productName: 'boAt Rockerz 450 Bluetooth Headphones',
      title: 'Flat 70% Off on boAt Rockerz 450',
      description: 'Festive counter clearance sale! Get genuine boAt Rockerz 450 for just ₹1,199.',
      discountPercent: 70,
      offerPrice: 1199,
      originalPrice: 3990,
      validUntil: '2026-09-30',
      couponCode: 'BOAT70',
      bannerImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      isFeatured: true
    },
    {
      id: 'off-002',
      storeId: 'store-sharma-auto',
      storeName: 'Sharma Auto Spares & Service Hub',
      storeArea: 'Koramangala 4th Block',
      productId: 'prod-castrol-power1-oil',
      productName: 'Castrol POWER1 4T 10W-30 Synthetic Oil',
      title: 'Free Oil Filter with Castrol 1L Can',
      description: 'Buy any 1L can of Castrol POWER1 synthetic oil and get a free OEM oil filter.',
      discountPercent: 14,
      offerPrice: 460,
      originalPrice: 535,
      validUntil: '2026-09-15',
      couponCode: 'CASTROLFREE',
      bannerImage: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80',
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
      customerMessage: 'Is the Honda Shine front disc brake pad genuine Honda OEM or aftermarket?',
      productId: 'prod-honda-shine-brakepad',
      productName: 'Honda Shine Front Disc Brake Pad (Genuine OEM)',
      productPrice: 399,
      createdAt: '1 hour ago',
      status: 'replied',
      replyMessage: 'Yes, 100% genuine Honda OEM parts with hologram packaging.',
      repliedAt: '45 mins ago'
    }
  ],

  reviews: [
    {
      id: 'rev-001',
      storeId: 'store-sharma-auto',
      productId: 'prod-honda-shine-brakepad',
      customerName: 'Karthik Rao',
      rating: 5,
      comment: 'Got genuine Honda brake pads at 20% discount compared to authorized service center. Great local store!',
      date: '2026-08-18',
      verifiedPurchase: true
    },
    {
      id: 'rev-002',
      storeId: 'store-digital-world',
      productId: 'prod-boat-rockerz-450',
      customerName: 'Priya Sharma',
      rating: 5,
      comment: 'Instant counter pickup and bill with official warranty registration. Sound quality is amazing!',
      date: '2026-08-19',
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
