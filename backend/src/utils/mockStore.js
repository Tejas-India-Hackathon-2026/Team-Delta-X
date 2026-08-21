// In-memory fallback data store when MongoDB is disconnected / connecting
const mockData = {
  categories: [
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
],
  stores: [
  {
    "id": "store-jamui-sharma-auto",
    "name": "Jamui Sharma Auto Spares & Bike Clinic",
    "ownerName": "Rajesh Sharma",
    "phone": "+91 98450 12345",
    "whatsapp": "919845012345",
    "email": "sharma.auto.jamui@dhoondo.local",
    "categoryIds": [
      "cat-automobile"
    ],
    "rating": 4.8,
    "reviewCount": 342,
    "verified": true,
    "address": "Shop #14, Main Market Road, Near Gandhi Chowk, Jamui",
    "area": "Main Market / Gandhi Chowk",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.927,
      "lng": 86.2242
    },
    "openingHours": "8:30 AM - 9:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Genuine OEM Parts",
      "Fitting Support",
      "UPI Accepted",
      "Counter Billing"
    ],
    "about": "Premier two-wheeler and four-wheeler spare parts hub in Jamui, stocking Motul oils, Castrol lubricants, Hero & Honda parts, and Exide batteries.",
    "gstNumber": "10AUTO1234F1Z5",
    "joinedDate": "2023-01-10",
    "viewsCount": 1540,
    "enquiriesCount": 110
  },
  {
    "id": "store-jamui-kumar-motors",
    "name": "Jamui Kumar Motors & Genuine Spares",
    "ownerName": "Sunil Kumar",
    "phone": "+91 98801 54321",
    "whatsapp": "919880154321",
    "email": "kumar.motors.jamui@dhoondo.local",
    "categoryIds": [
      "cat-automobile"
    ],
    "rating": 4.6,
    "reviewCount": 198,
    "verified": true,
    "address": "Plot #88, Station Road, Near Railway Overbridge, Jamui",
    "area": "Station Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9233,
      "lng": 86.2254
    },
    "openingHours": "9:00 AM - 9:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Wholesale Rates",
      "Instant Installation",
      "Engine Diagnostics"
    ],
    "about": "Authorized distributor for MRF Tyres, Castrol Power1, Amaron batteries, and clutch/brake assemblies in Jamui.",
    "gstNumber": "10KUMAR8899K1Z4",
    "joinedDate": "2023-04-12",
    "viewsCount": 1420,
    "enquiriesCount": 95
  },
  {
    "id": "store-jamui-gadget-point",
    "name": "Jamui Gadget & Mobile World",
    "ownerName": "Arif Khan",
    "phone": "+91 98805 77665",
    "whatsapp": "919880577665",
    "email": "gadgets.jamui@dhoondo.local",
    "categoryIds": [
      "cat-electronics"
    ],
    "rating": 4.8,
    "reviewCount": 420,
    "verified": true,
    "address": "No. 32, Commercial Complex, Cinema Road, Jamui",
    "area": "Cinema Road / Commercial Hub",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.928,
      "lng": 86.2214
    },
    "openingHours": "10:00 AM - 9:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Official Apple & Samsung Dealer",
      "0% EMI",
      "Tempered Glass Fitment",
      "Accessories"
    ],
    "about": "Exclusive smartphones and accessories gallery in Jamui, offering iPhone 15, OnePlus, boAt audio, Anker chargers, and SanDisk storage.",
    "gstNumber": "10GADGET1234P1Z2",
    "joinedDate": "2023-02-15",
    "viewsCount": 3200,
    "enquiriesCount": 290
  },
  {
    "id": "store-jamui-digital-hub",
    "name": "Jamui Digital Electronics & Audio Point",
    "ownerName": "Vikash Barnwal",
    "phone": "+91 98765 44332",
    "whatsapp": "919876544332",
    "email": "digitalhub.jamui@dhoondo.local",
    "categoryIds": [
      "cat-electronics"
    ],
    "rating": 4.7,
    "reviewCount": 265,
    "verified": true,
    "address": "Shop #5, Tower Chowk, Court Road, Jamui",
    "area": "Tower Chowk",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9223,
      "lng": 86.2204
    },
    "openingHours": "10:00 AM - 9:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Bluetooth Speakers",
      "Smartwatches",
      "Fast Chargers",
      "Memory Cards"
    ],
    "about": "Authorized seller for boAt, Sony, Noise, JBL, and Fastrack smart wearables and sound systems in Jamui.",
    "gstNumber": "10DIGITAL5567R1Z9",
    "joinedDate": "2022-10-15",
    "viewsCount": 2100,
    "enquiriesCount": 160
  },
  {
    "id": "store-jamui-city-pharmacy",
    "name": "Jamui Care 24x7 Chemist & Surgicals",
    "ownerName": "Dr. Anita Desai",
    "phone": "+91 98800 23456",
    "whatsapp": "919880023456",
    "email": "carepharmacy.jamui@dhoondo.local",
    "categoryIds": [
      "cat-pharmacy"
    ],
    "rating": 4.9,
    "reviewCount": 512,
    "verified": true,
    "address": "Plot 22, Hospital Road, Opp. Sadar Hospital, Jamui",
    "area": "Hospital Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9276,
      "lng": 86.226
    },
    "openingHours": "24 Hours Open",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "24x7 Open",
      "Cold Storage Insulin",
      "Digital Rx OCR",
      "Home Delivery in 15 Mins"
    ],
    "about": "Round-the-clock medical counter in Jamui, stocking Dolo 650, Dr. Morepen Glucometers, Omron BP monitors, baby diapers, and surgical items.",
    "gstNumber": "10PHARM5567R1Z9",
    "joinedDate": "2022-08-15",
    "viewsCount": 3450,
    "enquiriesCount": 312
  },
  {
    "id": "store-jamui-medplus-health",
    "name": "Jamui MedPlus Pharmacy & Wellness",
    "ownerName": "Dr. Suresh Reddy",
    "phone": "+91 98860 77889",
    "whatsapp": "919886077889",
    "email": "medplus.jamui@dhoondo.local",
    "categoryIds": [
      "cat-pharmacy"
    ],
    "rating": 4.8,
    "reviewCount": 390,
    "verified": true,
    "address": "1st Floor, LIC Building Complex, Kutchery Road, Jamui",
    "area": "Kutchery Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9216,
      "lng": 86.2267
    },
    "openingHours": "7:30 AM - 11:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Flat 15% Off",
      "Prescription Verification",
      "Diabetic Diet",
      "Vitamins"
    ],
    "about": "Trusted pharmacy chain in Jamui, providing authentic branded healthcare, vitamins, blood pressure monitors, and wellness products.",
    "gstNumber": "10MEDPLUS3322L1Z6",
    "joinedDate": "2023-01-25",
    "viewsCount": 1980,
    "enquiriesCount": 155
  },
  {
    "id": "store-jamui-krishna-kirana",
    "name": "Jamui Sri Krishna Super Store & Kirana",
    "ownerName": "Gopalakrishna Rao",
    "phone": "+91 99002 33445",
    "whatsapp": "919900233445",
    "email": "srikrishnakirana.jamui@dhoondo.local",
    "categoryIds": [
      "cat-grocery"
    ],
    "rating": 4.7,
    "reviewCount": 480,
    "verified": true,
    "address": "12th Main, Gola Road, Near Purani Bazaar, Jamui",
    "area": "Gola Road / Purani Bazaar",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9243,
      "lng": 86.222
    },
    "openingHours": "7:30 AM - 10:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Home Delivery in 20 Mins",
      "Wholesale Rations",
      "UPI Accepted"
    ],
    "about": "Wholesale & retail kirana store in Jamui, offering Fortune Basmati Rice, Aashirvaad Atta, Amul Ghee, Tata Tea, and authentic masalas.",
    "gstNumber": "10GROC1234K1Z2",
    "joinedDate": "2022-11-01",
    "viewsCount": 2310,
    "enquiriesCount": 190
  },
  {
    "id": "store-jamui-fresh-mart",
    "name": "Jamui Fresh Daily Needs & Grocery Mart",
    "ownerName": "Sunil Agrawal",
    "phone": "+91 98765 33445",
    "whatsapp": "919876533445",
    "email": "freshmart.jamui@dhoondo.local",
    "categoryIds": [
      "cat-grocery"
    ],
    "rating": 4.8,
    "reviewCount": 315,
    "verified": true,
    "address": "Shop #8, Mahavir Chowk, By-Pass Road, Jamui",
    "area": "Mahavir Chowk",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9296,
      "lng": 86.2274
    },
    "openingHours": "7:00 AM - 10:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Express Delivery",
      "Dairy & Paneer",
      "Cleaning Products",
      "Packaged Foods"
    ],
    "about": "Complete family grocery mart in Jamui, stocking daily essentials, dairy, detergents, cooking oils, and packaged snacks.",
    "gstNumber": "10FRESH9982D1ZH",
    "joinedDate": "2023-02-20",
    "viewsCount": 2200,
    "enquiriesCount": 175
  },
  {
    "id": "store-jamui-hardware-tools",
    "name": "Jamui Mahalaxmi Hardware & Power Tools",
    "ownerName": "Manoj Kumar Gupta",
    "phone": "+91 98765 77881",
    "whatsapp": "919876577881",
    "email": "hardware.jamui@dhoondo.local",
    "categoryIds": [
      "cat-hardware"
    ],
    "rating": 4.8,
    "reviewCount": 280,
    "verified": true,
    "address": "Plot 10, Loha Mandi, Industrial Road, Jamui",
    "area": "Loha Mandi",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9286,
      "lng": 86.2197
    },
    "openingHours": "8:30 AM - 8:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Stanley & Bosch Dealer",
      "Asian Paints Center",
      "Havells Wires",
      "Astral Pipes"
    ],
    "about": "Industrial and household hardware supplier in Jamui, offering Stanley toolsets, Bosch drills, plumbing fixtures, and Godrej locks.",
    "gstNumber": "10HARD1234F1Z5",
    "joinedDate": "2023-01-15",
    "viewsCount": 1800,
    "enquiriesCount": 140
  },
  {
    "id": "store-jamui-stationery-books",
    "name": "Jamui Vidya Sagar Book Depot & Stationery",
    "ownerName": "Ramanand Mishra",
    "phone": "+91 98765 88990",
    "whatsapp": "919876588990",
    "email": "stationery.jamui@dhoondo.local",
    "categoryIds": [
      "cat-stationery"
    ],
    "rating": 4.9,
    "reviewCount": 380,
    "verified": true,
    "address": "Shop #2, College Gate Road, Opp. K.K.M. College, Jamui",
    "area": "College Gate Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9238,
      "lng": 86.227
    },
    "openingHours": "8:00 AM - 9:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Lucent & RS Aggarwal Books",
      "Classmate Registers",
      "Parker Pens",
      "Color Xerox"
    ],
    "about": "Leading book depot in Jamui, specializing in competitive exam books (SSC, BPSC, UPSC, Railway), school notebooks, and fine art supplies.",
    "gstNumber": "10BOOK7788P1Z3",
    "joinedDate": "2022-11-20",
    "viewsCount": 2100,
    "enquiriesCount": 165
  },
  {
    "id": "store-jamui-royal-auto",
    "name": "Jamui Royal Two-Wheeler Hub & Spare Center",
    "ownerName": "Vikram Singh",
    "phone": "+91 98455 99881",
    "whatsapp": "919845599881",
    "email": "royalauto.jamui@dhoondo.local",
    "categoryIds": [
      "cat-automobile"
    ],
    "rating": 4.7,
    "reviewCount": 210,
    "verified": true,
    "address": "Opp. Bus Stand, Bypass Highway, Jamui",
    "area": "Bypass Highway / Bus Stand",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.929,
      "lng": 86.2257
    },
    "openingHours": "8:00 AM - 10:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Express Engine Oil Change",
      "Chain Lube Service",
      "Genuine Helmets"
    ],
    "about": "Bike clinic and premium lubricants dealer in Jamui, specializing in Motul, Castrol, and original OEM parts.",
    "gstNumber": "10ROYAL3344K1Z8",
    "joinedDate": "2023-03-10",
    "viewsCount": 1600,
    "enquiriesCount": 120
  },
  {
    "id": "store-jamui-apex-mobiles",
    "name": "Jamui Apex Smart Mobiles & Gadgets Gallery",
    "ownerName": "Deepak Chaurasia",
    "phone": "+91 98765 66778",
    "whatsapp": "919876566778",
    "email": "apexmobiles.jamui@dhoondo.local",
    "categoryIds": [
      "cat-electronics"
    ],
    "rating": 4.9,
    "reviewCount": 350,
    "verified": true,
    "address": "Shop #18, Main Market Square, Jamui",
    "area": "Main Market Square",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.924,
      "lng": 86.22
    },
    "openingHours": "10:00 AM - 9:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Original Apple & Samsung Stock",
      "Smartwatches & TWS",
      "Exchange Offers"
    ],
    "about": "Smart gadget retailer in Jamui, stocking official smartphones, fast chargers, power banks, and audio headsets.",
    "gstNumber": "10APEX7788P1Z5",
    "joinedDate": "2023-01-20",
    "viewsCount": 2800,
    "enquiriesCount": 240
  },
  {
    "id": "store-jamui-sanjivani-medico",
    "name": "Jamui Sanjivani Medicos & Healthcare",
    "ownerName": "Dr. Rakesh Verma",
    "phone": "+91 98801 22334",
    "whatsapp": "919880122334",
    "email": "sanjivani.jamui@dhoondo.local",
    "categoryIds": [
      "cat-pharmacy"
    ],
    "rating": 4.8,
    "reviewCount": 290,
    "verified": true,
    "address": "Shop #4, Gandhi Chowk, Station Road, Jamui",
    "area": "Gandhi Chowk",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9282,
      "lng": 86.2212
    },
    "openingHours": "7:00 AM - 11:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Prescription Medicines",
      "Daily Health Essentials",
      "Free BP Checkup"
    ],
    "about": "Trusted chemist in Jamui, offering authentic OTC tablets, thermometers, diabetic strips, and child wellness products.",
    "gstNumber": "10SANJ8899K1Z2",
    "joinedDate": "2022-09-10",
    "viewsCount": 2200,
    "enquiriesCount": 195
  },
  {
    "id": "store-jamui-apna-bazaar",
    "name": "Jamui Apna Bazaar Wholesale Kirana",
    "ownerName": "Rameshwar Prasad",
    "phone": "+91 98765 11223",
    "whatsapp": "919876511223",
    "email": "apnabazaar.jamui@dhoondo.local",
    "categoryIds": [
      "cat-grocery"
    ],
    "rating": 4.6,
    "reviewCount": 310,
    "verified": true,
    "address": "Main Mandi Road, Near Grain Market, Jamui",
    "area": "Grain Market / Mandi Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.923,
      "lng": 86.225
    },
    "openingHours": "7:00 AM - 9:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Wholesale Prices",
      "Bulk Bags Available",
      "Free Home Delivery"
    ],
    "about": "Large grocery wholesale depot in Jamui, supplying Aashirvaad Atta, Fortune Basmati, Amul Butter, Spices, and detergents.",
    "gstNumber": "10APNA4455L1Z1",
    "joinedDate": "2022-12-05",
    "viewsCount": 1950,
    "enquiriesCount": 160
  },
  {
    "id": "store-jamui-metro-sanitary",
    "name": "Jamui Metro Sanitary, Pipes & Electricals",
    "ownerName": "Alok Singhania",
    "phone": "+91 98800 44556",
    "whatsapp": "919880044556",
    "email": "metrosanitary.jamui@dhoondo.local",
    "categoryIds": [
      "cat-hardware"
    ],
    "rating": 4.7,
    "reviewCount": 190,
    "verified": true,
    "address": "Plot #15, Cinema Road, Opp. Town Hall, Jamui",
    "area": "Cinema Road",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9293,
      "lng": 86.2247
    },
    "openingHours": "8:30 AM - 8:30 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "Astral & Supreme Pipes",
      "Havells & Polycab Wires",
      "Water Heaters"
    ],
    "about": "Sanitary and electrical fitting center in Jamui, offering water motors, bathroom fixtures, wires, and power tools.",
    "gstNumber": "10METRO1122P1Z9",
    "joinedDate": "2023-02-18",
    "viewsCount": 1400,
    "enquiriesCount": 115
  },
  {
    "id": "store-jamui-student-corner",
    "name": "Jamui Student Corner & Book House",
    "ownerName": "Santosh Jha",
    "phone": "+91 98765 99001",
    "whatsapp": "919876599001",
    "email": "studentcorner.jamui@dhoondo.local",
    "categoryIds": [
      "cat-stationery"
    ],
    "rating": 4.8,
    "reviewCount": 310,
    "verified": true,
    "address": "Shop #11, High School Chowk, Station Road, Jamui",
    "area": "High School Chowk",
    "city": "Jamui",
    "pincode": "811307",
    "coordinates": {
      "lat": 24.9246,
      "lng": 86.2207
    },
    "openingHours": "8:00 AM - 9:00 PM",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    "facilities": [
      "NCERT Books",
      "Competitive Exam Series",
      "Calculators & Art Kits"
    ],
    "about": "Academic bookstore in Jamui, stocking school textbooks, registers, pens, geometry boxes, and reference guides.",
    "gstNumber": "10STUDENT8899K1Z4",
    "joinedDate": "2023-01-05",
    "viewsCount": 1900,
    "enquiriesCount": 150
  }
],
  products: [
  {
    "id": "prod-automobile-1-honda-cb-shine-front-disc-brak",
    "name": "Honda CB Shine Front Disc Brake Pad (Genuine OEM)",
    "brand": "Honda",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0001",
    "modelNumber": "MOD-0001",
    "description": "Honda CB Shine Front Disc Brake Pad (Genuine OEM) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Honda",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "honda",
      "shine",
      "brake pad",
      "disc brake",
      "bike parts"
    ],
    "basePrice": 399,
    "mrp": 499,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-2-hero-splendor-plus-clutch-plat",
    "name": "Hero Splendor Plus Clutch Plate Set (Set of 4)",
    "brand": "Hero Genuine",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0002",
    "modelNumber": "MOD-0002",
    "description": "Hero Splendor Plus Clutch Plate Set (Set of 4) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Hero Genuine",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hero",
      "splendor",
      "clutch plate",
      "two wheeler"
    ],
    "basePrice": 360,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "name": "Bajaj Pulsar 150 Chain Sprocket Kit (Rolon Brass)",
    "brand": "Rolon",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0003",
    "modelNumber": "MOD-0003",
    "description": "Bajaj Pulsar 150 Chain Sprocket Kit (Rolon Brass) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Rolon",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "pulsar",
      "chain sprocket",
      "rolon",
      "bajaj"
    ],
    "basePrice": 1199,
    "mrp": 1450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "name": "TVS Apache RTR 160 Rear Brake Shoe Set",
    "brand": "TVS Genuine",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0004",
    "modelNumber": "MOD-0004",
    "description": "TVS Apache RTR 160 Rear Brake Shoe Set with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "TVS Genuine",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tvs",
      "apache",
      "brake shoe",
      "bike parts"
    ],
    "basePrice": 299,
    "mrp": 380,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-5-royal-enfield-classic-350-air-",
    "name": "Royal Enfield Classic 350 Air Filter Element",
    "brand": "Royal Enfield",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0005",
    "modelNumber": "MOD-0005",
    "description": "Royal Enfield Classic 350 Air Filter Element with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Royal Enfield",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "royal enfield",
      "bullet",
      "classic 350",
      "air filter"
    ],
    "basePrice": 280,
    "mrp": 350,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "name": "Honda Activa 6G Drive Belt OEM Transmission",
    "brand": "Bando / Honda",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0006",
    "modelNumber": "MOD-0006",
    "description": "Honda Activa 6G Drive Belt OEM Transmission with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Bando / Honda",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "activa",
      "drive belt",
      "scooter parts",
      "honda"
    ],
    "basePrice": 440,
    "mrp": 550,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "name": "NGK G-Power Platinum Spark Plug (CPR8EAGP-9)",
    "brand": "NGK",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0007",
    "modelNumber": "MOD-0007",
    "description": "NGK G-Power Platinum Spark Plug (CPR8EAGP-9) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "NGK",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ngk",
      "spark plug",
      "bike ignition",
      "platinum plug"
    ],
    "basePrice": 175,
    "mrp": 220,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "name": "Hero HF Deluxe Accelerator & Clutch Cable Pair",
    "brand": "Hero",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0008",
    "modelNumber": "MOD-0008",
    "description": "Hero HF Deluxe Accelerator & Clutch Cable Pair with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Hero",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "clutch cable",
      "accelerator cable",
      "hero",
      "hf deluxe"
    ],
    "basePrice": 199,
    "mrp": 260,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "name": "Bajaj Platina Front Fork Oil Seal & Bushing Kit",
    "brand": "Endurance",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0009",
    "modelNumber": "MOD-0009",
    "description": "Bajaj Platina Front Fork Oil Seal & Bushing Kit with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Endurance",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fork oil seal",
      "platina",
      "suspension",
      "bajaj"
    ],
    "basePrice": 240,
    "mrp": 320,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "name": "Yamaha FZ Version 3 Rear LED Indicator Assembly",
    "brand": "Minda",
    "categoryId": "cat-automobile",
    "subcategory": "Two Wheeler Parts",
    "sku": "SKU-AUT-0010",
    "modelNumber": "MOD-0010",
    "description": "Yamaha FZ Version 3 Rear LED Indicator Assembly with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Two Wheeler Parts",
      "Brand": "Minda",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "yamaha fz",
      "indicator",
      "led light",
      "minda"
    ],
    "basePrice": 385,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Two Wheeler Parts",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "name": "Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)",
    "brand": "Motul",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0011",
    "modelNumber": "MOD-0011",
    "description": "Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Motul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "motul",
      "7100",
      "10w50",
      "synthetic oil",
      "engine oil"
    ],
    "basePrice": 880,
    "mrp": 1045,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "name": "Castrol POWER1 4T 10W-30 Synthetic Technology Engine Oil 1L",
    "brand": "Castrol",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0012",
    "modelNumber": "MOD-0012",
    "description": "Castrol POWER1 4T 10W-30 Synthetic Technology Engine Oil 1L with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Castrol",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "castrol",
      "power1",
      "10w30",
      "bike oil",
      "engine oil"
    ],
    "basePrice": 440,
    "mrp": 535,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "name": "Motul 3100 4T Gold 20W-40 Semi-Synthetic Engine Oil (1L)",
    "brand": "Motul",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0013",
    "modelNumber": "MOD-0013",
    "description": "Motul 3100 4T Gold 20W-40 Semi-Synthetic Engine Oil (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Motul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "motul 3100",
      "20w40",
      "engine oil",
      "bike lubricant"
    ],
    "basePrice": 395,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "name": "Castrol Activ 4T 20W-40 Continuous Protection Bike Oil 1L",
    "brand": "Castrol",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0014",
    "modelNumber": "MOD-0014",
    "description": "Castrol Activ 4T 20W-40 Continuous Protection Bike Oil 1L with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Castrol",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "castrol activ",
      "20w40",
      "bike oil",
      "splendor oil"
    ],
    "basePrice": 360,
    "mrp": 440,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "name": "Shell Advance AX7 10W-40 Synthetic Based Bike Oil 1L",
    "brand": "Shell",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0015",
    "modelNumber": "MOD-0015",
    "description": "Shell Advance AX7 10W-40 Synthetic Based Bike Oil 1L with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Shell",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "shell advance",
      "ax7",
      "10w40",
      "shell oil"
    ],
    "basePrice": 420,
    "mrp": 510,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "name": "Gulf Pride 4T Plus 20W-40 High Performance Engine Oil 1L",
    "brand": "Gulf",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0016",
    "modelNumber": "MOD-0016",
    "description": "Gulf Pride 4T Plus 20W-40 High Performance Engine Oil 1L with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Gulf",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "gulf",
      "gulf pride",
      "20w40",
      "engine oil"
    ],
    "basePrice": 340,
    "mrp": 425,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-7-motul-motocool-expert-radiator",
    "name": "Motul Motocool Expert Radiator Coolant Fluid (1L)",
    "brand": "Motul",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0017",
    "modelNumber": "MOD-0017",
    "description": "Motul Motocool Expert Radiator Coolant Fluid (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Motul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "coolant",
      "radiator coolant",
      "motul coolant",
      "ktm coolant"
    ],
    "basePrice": 375,
    "mrp": 460,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-8-bosch-dot-4-high-performance-b",
    "name": "Bosch DOT 4 High Performance Brake Fluid (250ml)",
    "brand": "Bosch",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0018",
    "modelNumber": "MOD-0018",
    "description": "Bosch DOT 4 High Performance Brake Fluid (250ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Bosch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "brake fluid",
      "dot 4",
      "bosch brake oil"
    ],
    "basePrice": 125,
    "mrp": 160,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-9-wd-40-multi-use-rust-preventio",
    "name": "WD-40 Multi-Use Rust Prevention & Lubricant Spray (420ml)",
    "brand": "WD-40",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0019",
    "modelNumber": "MOD-0019",
    "description": "WD-40 Multi-Use Rust Prevention & Lubricant Spray (420ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "WD-40",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wd40",
      "rust spray",
      "chain cleaner",
      "lubricant spray"
    ],
    "basePrice": 335,
    "mrp": 420,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "name": "Motul C2 Chain Lube Road Aerosol Spray (400ml)",
    "brand": "Motul",
    "categoryId": "cat-automobile",
    "subcategory": "Engine Oils & Fluids",
    "sku": "SKU-AUT-0020",
    "modelNumber": "MOD-0020",
    "description": "Motul C2 Chain Lube Road Aerosol Spray (400ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Engine Oils & Fluids",
      "Brand": "Motul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "chain lube",
      "motul c2",
      "bike chain spray"
    ],
    "basePrice": 490,
    "mrp": 590,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Engine Oils & Fluids",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "name": "Godrej Aer Twist Fresh Lush Green Car Perfume Air Freshener",
    "brand": "Godrej",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0021",
    "modelNumber": "MOD-0021",
    "description": "Godrej Aer Twist Fresh Lush Green Car Perfume Air Freshener with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "Godrej",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "godrej aer",
      "car perfume",
      "car freshener",
      "car accessories"
    ],
    "basePrice": 310,
    "mrp": 399,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-2-amkette-igrip-drive-universal-",
    "name": "Amkette iGrip Drive Universal Magnetic Car Mobile Mount",
    "brand": "Amkette",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0022",
    "modelNumber": "MOD-0022",
    "description": "Amkette iGrip Drive Universal Magnetic Car Mobile Mount with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "Amkette",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "car mobile holder",
      "mobile mount",
      "igrip",
      "amkette"
    ],
    "basePrice": 549,
    "mrp": 799,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-3-portronics-car-power-65w-fast-",
    "name": "Portronics Car Power 65W Fast Dual Port Type-C Car Charger",
    "brand": "Portronics",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0023",
    "modelNumber": "MOD-0023",
    "description": "Portronics Car Power 65W Fast Dual Port Type-C Car Charger with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "Portronics",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "car charger",
      "type c charger",
      "portronics car power",
      "fast charge"
    ],
    "basePrice": 699,
    "mrp": 1299,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "name": "70mai Smart Dash Cam 1080P Full HD with Night Vision",
    "brand": "70mai",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0024",
    "modelNumber": "MOD-0024",
    "description": "70mai Smart Dash Cam 1080P Full HD with Night Vision with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "70mai",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dash cam",
      "70mai",
      "car camera",
      "security camera"
    ],
    "basePrice": 3899,
    "mrp": 4999,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "name": "3M Microfiber Car Cleaning & Polishing Cloth (Pack of 3)",
    "brand": "3M",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0025",
    "modelNumber": "MOD-0025",
    "description": "3M Microfiber Car Cleaning & Polishing Cloth (Pack of 3) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "3M",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "3m cloth",
      "microfiber",
      "car wash",
      "cleaning cloth"
    ],
    "basePrice": 270,
    "mrp": 360,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "name": "Bergmann Typhoon Heavy Duty Metal Digital Tyre Inflator",
    "brand": "Bergmann",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0026",
    "modelNumber": "MOD-0026",
    "description": "Bergmann Typhoon Heavy Duty Metal Digital Tyre Inflator with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "Bergmann",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tyre inflator",
      "air pump",
      "car pump",
      "bergmann"
    ],
    "basePrice": 1799,
    "mrp": 2450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "name": "Wavex High Foaming Car Wash Shampoo pH Neutral (1L)",
    "brand": "Wavex",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0027",
    "modelNumber": "MOD-0027",
    "description": "Wavex High Foaming Car Wash Shampoo pH Neutral (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "Wavex",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "car shampoo",
      "wavex",
      "foam wash",
      "car detailing"
    ],
    "basePrice": 315,
    "mrp": 420,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-8-all-weather-7d-custom-molded-w",
    "name": "All-Weather 7D Custom Molded Waterproof Car Foot Mats",
    "brand": "AutoForm",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0028",
    "modelNumber": "MOD-0028",
    "description": "All-Weather 7D Custom Molded Waterproof Car Foot Mats with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "AutoForm",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "car mats",
      "7d mats",
      "foot mat",
      "auto accessories"
    ],
    "basePrice": 2499,
    "mrp": 3499,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "name": "JBL Club 6520 6.5-Inch 300W Coaxial Car Door Speakers Pair",
    "brand": "JBL",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0029",
    "modelNumber": "MOD-0029",
    "description": "JBL Club 6520 6.5-Inch 300W Coaxial Car Door Speakers Pair with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "JBL",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jbl car speakers",
      "car audio",
      "coaxial speakers",
      "door speaker"
    ],
    "basePrice": 3499,
    "mrp": 4990,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "name": "AutokraftZ Heavy Duty Anti-Theft Steering Wheel Lock",
    "brand": "AutokraftZ",
    "categoryId": "cat-automobile",
    "subcategory": "Car Accessories",
    "sku": "SKU-AUT-0030",
    "modelNumber": "MOD-0030",
    "description": "AutokraftZ Heavy Duty Anti-Theft Steering Wheel Lock with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Car Accessories",
      "Brand": "AutokraftZ",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "steering lock",
      "car lock",
      "anti theft lock",
      "security"
    ],
    "basePrice": 799,
    "mrp": 1199,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Car Accessories",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "name": "Amaron Pro Rider 5Ah Maintenance Free Bike Battery (AP-BTX5L)",
    "brand": "Amaron",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0031",
    "modelNumber": "MOD-0031",
    "description": "Amaron Pro Rider 5Ah Maintenance Free Bike Battery (AP-BTX5L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Amaron",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amaron",
      "battery",
      "5ah battery",
      "bike battery",
      "pulsar battery"
    ],
    "basePrice": 1199,
    "mrp": 1450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "name": "Exide Xplore 4Ah VRLA Sealed Bike Battery (XLTZ4)",
    "brand": "Exide",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0032",
    "modelNumber": "MOD-0032",
    "description": "Exide Xplore 4Ah VRLA Sealed Bike Battery (XLTZ4) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Exide",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "exide",
      "xplore",
      "4ah battery",
      "activa battery",
      "splendor battery"
    ],
    "basePrice": 1050,
    "mrp": 1250,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "name": "Amaron Hi-Life Flo 35Ah Car Battery (BH35B20R - 55 Month Warranty)",
    "brand": "Amaron",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0033",
    "modelNumber": "MOD-0033",
    "description": "Amaron Hi-Life Flo 35Ah Car Battery (BH35B20R - 55 Month Warranty) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Amaron",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amaron flo",
      "car battery",
      "35ah battery",
      "maruti battery",
      "alto battery"
    ],
    "basePrice": 3850,
    "mrp": 4600,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-4-exide-mileage-45ah-maintenance",
    "name": "Exide Mileage 45Ah Maintenance Free Car Battery (ML45D26L)",
    "brand": "Exide",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0034",
    "modelNumber": "MOD-0034",
    "description": "Exide Mileage 45Ah Maintenance Free Car Battery (ML45D26L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Exide",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "exide mileage",
      "car battery",
      "45ah battery",
      "hyundai battery"
    ],
    "basePrice": 4450,
    "mrp": 5400,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-5-roots-windtone-12v-high-tone-e",
    "name": "Roots Windtone 12V High-Tone Electric Car Horn Pair",
    "brand": "Roots",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0035",
    "modelNumber": "MOD-0035",
    "description": "Roots Windtone 12V High-Tone Electric Car Horn Pair with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Roots",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "roots horn",
      "windtone",
      "car horn",
      "loud horn"
    ],
    "basePrice": 650,
    "mrp": 850,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "name": "Philips H4 12V 60/55W X-tremeVision Pro150 Headlight Bulb",
    "brand": "Philips",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0036",
    "modelNumber": "MOD-0036",
    "description": "Philips H4 12V 60/55W X-tremeVision Pro150 Headlight Bulb with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Philips",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "philips h4",
      "headlight bulb",
      "car bulb",
      "white light"
    ],
    "basePrice": 580,
    "mrp": 750,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-7-osram-night-breaker-laser-h7-h",
    "name": "Osram Night Breaker Laser H7 Halogen Headlamp Bulb Pair",
    "brand": "Osram",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0037",
    "modelNumber": "MOD-0037",
    "description": "Osram Night Breaker Laser H7 Halogen Headlamp Bulb Pair with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Osram",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "osram h7",
      "night breaker",
      "headlight bulb",
      "laser bulb"
    ],
    "basePrice": 1390,
    "mrp": 1850,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "name": "Uno Minda 12V Heavy Duty Headlight Relay Wiring Harness Kit",
    "brand": "Uno Minda",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0038",
    "modelNumber": "MOD-0038",
    "description": "Uno Minda 12V Heavy Duty Headlight Relay Wiring Harness Kit with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Uno Minda",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "relay kit",
      "minda relay",
      "headlight harness",
      "wiring kit"
    ],
    "basePrice": 340,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "name": "Bosch 12V Symphony FC4 Car Horn Chrome Dual Set",
    "brand": "Bosch",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0039",
    "modelNumber": "MOD-0039",
    "description": "Bosch 12V Symphony FC4 Car Horn Chrome Dual Set with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Bosch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bosch horn",
      "symphony horn",
      "car horn",
      "dual horn"
    ],
    "basePrice": 740,
    "mrp": 950,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-10-microtek-12v-automatic-smart-b",
    "name": "Microtek 12V Automatic Smart Battery Charger for Car/Bike",
    "brand": "Microtek",
    "categoryId": "cat-automobile",
    "subcategory": "Batteries & Electricals",
    "sku": "SKU-AUT-0040",
    "modelNumber": "MOD-0040",
    "description": "Microtek 12V Automatic Smart Battery Charger for Car/Bike with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Batteries & Electricals",
      "Brand": "Microtek",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "battery charger",
      "trickle charger",
      "microtek battery charger"
    ],
    "basePrice": 1399,
    "mrp": 1899,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Batteries & Electricals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "name": "MRF Zapper FX 90/90-17 Tubeless Bike Front Tyre",
    "brand": "MRF",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0041",
    "modelNumber": "MOD-0041",
    "description": "MRF Zapper FX 90/90-17 Tubeless Bike Front Tyre with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "MRF",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "mrf zapper",
      "bike tyre",
      "tubeless tyre",
      "17 inch tyre",
      "pulsar tyre"
    ],
    "basePrice": 1850,
    "mrp": 2150,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "name": "CEAT Gripp X3 100/90-18 Tubeless Motorcycle Rear Tyre",
    "brand": "CEAT",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0042",
    "modelNumber": "MOD-0042",
    "description": "CEAT Gripp X3 100/90-18 Tubeless Motorcycle Rear Tyre with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "CEAT",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ceat gripp",
      "rear tyre",
      "splendor tyre",
      "bike tyre"
    ],
    "basePrice": 1999,
    "mrp": 2350,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "name": "MRF Nylogrip Zapper 90/100-10 Tubeless Scooter Tyre (Activa / Jupiter)",
    "brand": "MRF",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0043",
    "modelNumber": "MOD-0043",
    "description": "MRF Nylogrip Zapper 90/100-10 Tubeless Scooter Tyre (Activa / Jupiter) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "MRF",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "activa tyre",
      "scooter tyre",
      "90/100-10",
      "mrf nylogrip"
    ],
    "basePrice": 1199,
    "mrp": 1450,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "name": "JK Tyre Blaze BR32 80/100-18 Tubeless Bike Tyre",
    "brand": "JK Tyre",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0044",
    "modelNumber": "MOD-0044",
    "description": "JK Tyre Blaze BR32 80/100-18 Tubeless Bike Tyre with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "JK Tyre",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jk tyre",
      "blaze tyre",
      "bike tyre",
      "shine tyre"
    ],
    "basePrice": 1450,
    "mrp": 1750,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "name": "Apollo Amazer 4G Life 165/70 R14 Tubeless Car Tyre",
    "brand": "Apollo",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0045",
    "modelNumber": "MOD-0045",
    "description": "Apollo Amazer 4G Life 165/70 R14 Tubeless Car Tyre with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "Apollo",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "apollo tyre",
      "amazer 4g",
      "car tyre",
      "14 inch car tyre",
      "wagonr tyre"
    ],
    "basePrice": 3150,
    "mrp": 3850,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "name": "Bridgestone B290 175/65 R15 Premium Passenger Car Tyre",
    "brand": "Bridgestone",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0046",
    "modelNumber": "MOD-0046",
    "description": "Bridgestone B290 175/65 R15 Premium Passenger Car Tyre with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "Bridgestone",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bridgestone b290",
      "honda city tyre",
      "car tyre",
      "15 inch tyre"
    ],
    "basePrice": 4499,
    "mrp": 5400,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "name": "CEAT Milaze 145/80 R12 Long Life Car Tyre (Alto / Eeco)",
    "brand": "CEAT",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0047",
    "modelNumber": "MOD-0047",
    "description": "CEAT Milaze 145/80 R12 Long Life Car Tyre (Alto / Eeco) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "CEAT",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ceat milaze",
      "alto tyre",
      "eeco tyre",
      "12 inch tyre"
    ],
    "basePrice": 2350,
    "mrp": 2850,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "name": "Ralco Blaster 2.75-18 High Grip Motorcycle Butyl Tube",
    "brand": "Ralco",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0048",
    "modelNumber": "MOD-0048",
    "description": "Ralco Blaster 2.75-18 High Grip Motorcycle Butyl Tube with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "Ralco",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bike tube",
      "ralco tube",
      "butyl tube",
      "2.75-18"
    ],
    "basePrice": 210,
    "mrp": 280,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-9-universal-tubeless-tyre-punctu",
    "name": "Universal Tubeless Tyre Puncture Repair Kit with 10 Strips",
    "brand": "Stanley Auto",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0049",
    "modelNumber": "MOD-0049",
    "description": "Universal Tubeless Tyre Puncture Repair Kit with 10 Strips with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "Stanley Auto",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "puncture kit",
      "tyre repair kit",
      "puncture strips",
      "emergency repair"
    ],
    "basePrice": 249,
    "mrp": 399,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-automobile-10-formula-1-black-gold-tire-shin",
    "name": "Formula 1 Black Gold Tire Shine & Rim Protectant (473ml)",
    "brand": "Formula 1",
    "categoryId": "cat-automobile",
    "subcategory": "Tyres & Tubes",
    "sku": "SKU-AUT-0050",
    "modelNumber": "MOD-0050",
    "description": "Formula 1 Black Gold Tire Shine & Rim Protectant (473ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Automobile & Spares",
      "Subcategory": "Tyres & Tubes",
      "Brand": "Formula 1",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tyre polish",
      "formula 1",
      "black shine",
      "rim polish"
    ],
    "basePrice": 420,
    "mrp": 590,
    "isMedicine": false,
    "tags": [
      "Automobile & Spares",
      "Tyres & Tubes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "name": "Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera",
    "brand": "Apple",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0051",
    "modelNumber": "MOD-0051",
    "description": "Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Apple",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "iphone 15",
      "apple",
      "ios",
      "smartphone",
      "mobile",
      "dynamic island"
    ],
    "basePrice": 71999,
    "mrp": 79900,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "name": "Samsung Galaxy S24 5G (8GB RAM, 128GB Storage, Onyx Black)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0052",
    "modelNumber": "MOD-0052",
    "description": "Samsung Galaxy S24 5G (8GB RAM, 128GB Storage, Onyx Black) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "samsung s24",
      "galaxy s24",
      "samsung 5g",
      "smartphone",
      "ai phone"
    ],
    "basePrice": 66999,
    "mrp": 74999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "name": "OnePlus 12R 5G (8GB RAM, 128GB Storage, Cool Blue)",
    "brand": "OnePlus",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0053",
    "modelNumber": "MOD-0053",
    "description": "OnePlus 12R 5G (8GB RAM, 128GB Storage, Cool Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "OnePlus",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "oneplus 12r",
      "oneplus 5g",
      "smartphone",
      "snapdragon 8 gen 2"
    ],
    "basePrice": 37999,
    "mrp": 39999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "name": "Redmi Note 13 Pro 5G (8GB RAM, 256GB, Midnight Black)",
    "brand": "Xiaomi / Redmi",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0054",
    "modelNumber": "MOD-0054",
    "description": "Redmi Note 13 Pro 5G (8GB RAM, 256GB, Midnight Black) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Xiaomi / Redmi",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "redmi note 13 pro",
      "xiaomi 5g",
      "200mp camera",
      "mobile phone"
    ],
    "basePrice": 24999,
    "mrp": 28999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "name": "Realme 12 Pro+ 5G (8GB RAM, 128GB, Submarine Blue)",
    "brand": "Realme",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0055",
    "modelNumber": "MOD-0055",
    "description": "Realme 12 Pro+ 5G (8GB RAM, 128GB, Submarine Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Realme",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "realme 12 pro",
      "realme 5g",
      "periscope camera",
      "smartphone"
    ],
    "basePrice": 27999,
    "mrp": 31999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "name": "Apple iPad 10th Gen 10.9-inch (Wi-Fi, 64GB, Silver)",
    "brand": "Apple",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0056",
    "modelNumber": "MOD-0056",
    "description": "Apple iPad 10th Gen 10.9-inch (Wi-Fi, 64GB, Silver) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Apple",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ipad",
      "apple tablet",
      "ipad 10th gen",
      "tablet"
    ],
    "basePrice": 34990,
    "mrp": 39900,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "name": "Samsung Galaxy Tab A9+ 11-inch (8GB RAM, 128GB, Wi-Fi + 5G)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0057",
    "modelNumber": "MOD-0057",
    "description": "Samsung Galaxy Tab A9+ 11-inch (8GB RAM, 128GB, Wi-Fi + 5G) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "samsung tab",
      "galaxy tab a9",
      "android tablet",
      "tab"
    ],
    "basePrice": 20999,
    "mrp": 25999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "name": "Vivo V30 5G (8GB RAM, 128GB, Peacock Green Aura Light)",
    "brand": "Vivo",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0058",
    "modelNumber": "MOD-0058",
    "description": "Vivo V30 5G (8GB RAM, 128GB, Peacock Green Aura Light) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Vivo",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "vivo v30",
      "aura light portrait",
      "vivo 5g",
      "mobile"
    ],
    "basePrice": 31999,
    "mrp": 35999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "name": "Motorola Edge 50 Fusion (8GB RAM, 128GB, Marshmallow Blue)",
    "brand": "Motorola",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0059",
    "modelNumber": "MOD-0059",
    "description": "Motorola Edge 50 Fusion (8GB RAM, 128GB, Marshmallow Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "Motorola",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "moto edge 50",
      "motorola fusion",
      "curved oled",
      "smartphone"
    ],
    "basePrice": 21999,
    "mrp": 25999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "name": "POCO X6 Pro 5G (12GB RAM, 512GB, Racing Yellow)",
    "brand": "POCO",
    "categoryId": "cat-electronics",
    "subcategory": "Smartphones & Tablets",
    "sku": "SKU-ELE-0060",
    "modelNumber": "MOD-0060",
    "description": "POCO X6 Pro 5G (12GB RAM, 512GB, Racing Yellow) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smartphones & Tablets",
      "Brand": "POCO",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "poco x6 pro",
      "gaming phone",
      "dimensity 8300",
      "poco 5g"
    ],
    "basePrice": 26999,
    "mrp": 30999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smartphones & Tablets",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "name": "boAt Rockerz 450 Bluetooth On-Ear Headphones with 15H Playback",
    "brand": "boAt",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0061",
    "modelNumber": "MOD-0061",
    "description": "boAt Rockerz 450 Bluetooth On-Ear Headphones with 15H Playback with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "boAt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "boat rockerz 450",
      "headphones",
      "bluetooth headphones",
      "wireless earphone"
    ],
    "basePrice": 1199,
    "mrp": 3990,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "name": "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    "brand": "Sony",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0062",
    "modelNumber": "MOD-0062",
    "description": "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "Sony",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sony wh1000xm5",
      "anc headphones",
      "noise canceling",
      "sony audio"
    ],
    "basePrice": 28990,
    "mrp": 34990,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "name": "OnePlus Nord Buds 2r True Wireless in Ear Earbuds (Triple Mic)",
    "brand": "OnePlus",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0063",
    "modelNumber": "MOD-0063",
    "description": "OnePlus Nord Buds 2r True Wireless in Ear Earbuds (Triple Mic) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "OnePlus",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "nord buds",
      "oneplus earbuds",
      "tws",
      "wireless earbuds"
    ],
    "basePrice": 1799,
    "mrp": 2299,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "name": "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime",
    "brand": "boAt",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0064",
    "modelNumber": "MOD-0064",
    "description": "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "boAt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "boat airdopes 141",
      "airpods",
      "tws earbuds",
      "boat audio"
    ],
    "basePrice": 1099,
    "mrp": 4490,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-5-jbl-flip-6-portable-waterproof",
    "name": "JBL Flip 6 Portable Waterproof Bluetooth Speaker (30W Output)",
    "brand": "JBL",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0065",
    "modelNumber": "MOD-0065",
    "description": "JBL Flip 6 Portable Waterproof Bluetooth Speaker (30W Output) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "JBL",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jbl flip 6",
      "bluetooth speaker",
      "portable speaker",
      "jbl audio"
    ],
    "basePrice": 9999,
    "mrp": 13999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-6-realme-buds-wireless-3-neckban",
    "name": "Realme Buds Wireless 3 Neckband with 30dB ANC & 360 Spatial Audio",
    "brand": "Realme",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0066",
    "modelNumber": "MOD-0066",
    "description": "Realme Buds Wireless 3 Neckband with 30dB ANC & 360 Spatial Audio with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "Realme",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "neckband",
      "realme buds wireless",
      "bluetooth neckband",
      "anc earphones"
    ],
    "basePrice": 1699,
    "mrp": 2999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "name": "Sennheiser HD 450SE Wireless Over-Ear Active Noise Cancelling Headset",
    "brand": "Sennheiser",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0067",
    "modelNumber": "MOD-0067",
    "description": "Sennheiser HD 450SE Wireless Over-Ear Active Noise Cancelling Headset with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "Sennheiser",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sennheiser",
      "hd 450",
      "studio headphones",
      "audiophile audio"
    ],
    "basePrice": 8990,
    "mrp": 14990,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-8-boat-stone-352-portable-10w-bl",
    "name": "boAt Stone 352 Portable 10W Bluetooth Speaker with RGB LED",
    "brand": "boAt",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0068",
    "modelNumber": "MOD-0068",
    "description": "boAt Stone 352 Portable 10W Bluetooth Speaker with RGB LED with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "boAt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "boat stone 352",
      "speaker",
      "rgb speaker",
      "wireless speaker"
    ],
    "basePrice": 1499,
    "mrp": 3490,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-9-boult-audio-z40-true-wireless-",
    "name": "Boult Audio Z40 True Wireless Earbuds with 60H Playtime",
    "brand": "Boult",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0069",
    "modelNumber": "MOD-0069",
    "description": "Boult Audio Z40 True Wireless Earbuds with 60H Playtime with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "Boult",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "boult z40",
      "tws",
      "cheap earbuds",
      "wireless buds"
    ],
    "basePrice": 1299,
    "mrp": 4999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "name": "JBL C100SI Wired in-Ear Headphones with One-Button Universal Mic",
    "brand": "JBL",
    "categoryId": "cat-electronics",
    "subcategory": "Audio & Headphones",
    "sku": "SKU-ELE-0070",
    "modelNumber": "MOD-0070",
    "description": "JBL C100SI Wired in-Ear Headphones with One-Button Universal Mic with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Audio & Headphones",
      "Brand": "JBL",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jbl c100si",
      "wired earphone",
      "3.5mm jack",
      "bass earphones"
    ],
    "basePrice": 599,
    "mrp": 1299,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Audio & Headphones",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "name": "Anker 20W PowerPort III Nano Fast USB-C Wall Charger Adapter",
    "brand": "Anker",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0071",
    "modelNumber": "MOD-0071",
    "description": "Anker 20W PowerPort III Nano Fast USB-C Wall Charger Adapter with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Anker",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "anker 20w",
      "charger",
      "iphone charger",
      "fast charger",
      "type c adapter"
    ],
    "basePrice": 899,
    "mrp": 1499,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "name": "Apple 20W USB-C Power Adapter (Original OEM)",
    "brand": "Apple",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0072",
    "modelNumber": "MOD-0072",
    "description": "Apple 20W USB-C Power Adapter (Original OEM) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Apple",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "apple 20w",
      "original apple charger",
      "type c power adapter"
    ],
    "basePrice": 1699,
    "mrp": 1900,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-3-samsung-25w-super-fast-type-c-",
    "name": "Samsung 25W Super Fast Type-C Wall Charger (Without Cable)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0073",
    "modelNumber": "MOD-0073",
    "description": "Samsung 25W Super Fast Type-C Wall Charger (Without Cable) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "samsung 25w",
      "super fast charger",
      "samsung adapter"
    ],
    "basePrice": 1199,
    "mrp": 1699,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "name": "boAt Rugged v3 Extra Tough Braided Type-C Fast Charging Cable (1.5M)",
    "brand": "boAt",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0074",
    "modelNumber": "MOD-0074",
    "description": "boAt Rugged v3 Extra Tough Braided Type-C Fast Charging Cable (1.5M) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "boAt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "type c cable",
      "boat cable",
      "braided cable",
      "fast charging wire"
    ],
    "basePrice": 299,
    "mrp": 799,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-5-anker-powerline-iii-flow-silic",
    "name": "Anker PowerLine III Flow Silicone USB-C to Lightning Cable (3ft)",
    "brand": "Anker",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0075",
    "modelNumber": "MOD-0075",
    "description": "Anker PowerLine III Flow Silicone USB-C to Lightning Cable (3ft) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Anker",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lightning cable",
      "anker cable",
      "iphone cord",
      "silicone cable"
    ],
    "basePrice": 1399,
    "mrp": 1999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "name": "Portronics MPort 65W 6-in-1 USB-C Multiport Hub with 4K HDMI & SD Card",
    "brand": "Portronics",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0076",
    "modelNumber": "MOD-0076",
    "description": "Portronics MPort 65W 6-in-1 USB-C Multiport Hub with 4K HDMI & SD Card with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Portronics",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "usb c hub",
      "type c adapter",
      "hdmi hub",
      "macbook hub"
    ],
    "basePrice": 1899,
    "mrp": 3499,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-7-oneplus-warp-charge-65w-power-",
    "name": "OnePlus Warp Charge 65W Power Adapter with Red Cable",
    "brand": "OnePlus",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0077",
    "modelNumber": "MOD-0077",
    "description": "OnePlus Warp Charge 65W Power Adapter with Red Cable with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "OnePlus",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "warp charge 65w",
      "oneplus charger",
      "supervooc",
      "fast adapter"
    ],
    "basePrice": 2299,
    "mrp": 2999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "name": "TP-Link TL-WR841N 300Mbps Wireless-N Wi-Fi Router",
    "brand": "TP-Link",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0078",
    "modelNumber": "MOD-0078",
    "description": "TP-Link TL-WR841N 300Mbps Wireless-N Wi-Fi Router with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "TP-Link",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wifi router",
      "tp link router",
      "wireless router",
      "broadband"
    ],
    "basePrice": 999,
    "mrp": 1499,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "name": "Belkin BoostCharge Magnetic Wireless 15W MagSafe Charging Pad",
    "brand": "Belkin",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0079",
    "modelNumber": "MOD-0079",
    "description": "Belkin BoostCharge Magnetic Wireless 15W MagSafe Charging Pad with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Belkin",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wireless charger",
      "magsafe pad",
      "belkin wireless",
      "15w charger"
    ],
    "basePrice": 1999,
    "mrp": 2999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "name": "Amkette PowerPro 4-Port USB Fast Desktop Charging Station (36W)",
    "brand": "Amkette",
    "categoryId": "cat-electronics",
    "subcategory": "Cables, Chargers & Hubs",
    "sku": "SKU-ELE-0080",
    "modelNumber": "MOD-0080",
    "description": "Amkette PowerPro 4-Port USB Fast Desktop Charging Station (36W) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Cables, Chargers & Hubs",
      "Brand": "Amkette",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "multi port charger",
      "desktop charger",
      "4 port usb hub"
    ],
    "basePrice": 899,
    "mrp": 1499,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Cables, Chargers & Hubs",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "name": "Noise ColorFit Pulse 3 1.96-inch Bluetooth Calling Smartwatch",
    "brand": "Noise",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0081",
    "modelNumber": "MOD-0081",
    "description": "Noise ColorFit Pulse 3 1.96-inch Bluetooth Calling Smartwatch with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Noise",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "noise smartwatch",
      "colorfit pulse",
      "calling watch",
      "fitness tracker"
    ],
    "basePrice": 1499,
    "mrp": 4999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "name": "Fire-Boltt Phoenix Pro 1.39-inch Luxury Round Bluetooth Calling Watch",
    "brand": "Fire-Boltt",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0082",
    "modelNumber": "MOD-0082",
    "description": "Fire-Boltt Phoenix Pro 1.39-inch Luxury Round Bluetooth Calling Watch with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Fire-Boltt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fireboltt",
      "phoenix pro",
      "round smartwatch",
      "smart watch"
    ],
    "basePrice": 1399,
    "mrp": 6999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "name": "Apple Watch SE 2nd Gen (40mm GPS, Midnight Aluminium Case)",
    "brand": "Apple",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0083",
    "modelNumber": "MOD-0083",
    "description": "Apple Watch SE 2nd Gen (40mm GPS, Midnight Aluminium Case) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Apple",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "apple watch",
      "watch se",
      "iwatch",
      "smartwatch"
    ],
    "basePrice": 25990,
    "mrp": 29900,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "name": "Samsung Galaxy Watch6 Bluetooth (40mm, Graphite Black)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0084",
    "modelNumber": "MOD-0084",
    "description": "Samsung Galaxy Watch6 Bluetooth (40mm, Graphite Black) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "galaxy watch 6",
      "samsung watch",
      "wear os",
      "fitness watch"
    ],
    "basePrice": 21999,
    "mrp": 33999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "name": "boAt Wave Call 2 Smartwatch with HD Display & 700+ Active Modes",
    "brand": "boAt",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0085",
    "modelNumber": "MOD-0085",
    "description": "boAt Wave Call 2 Smartwatch with HD Display & 700+ Active Modes with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "boAt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "boat smartwatch",
      "wave call",
      "bluetooth calling watch"
    ],
    "basePrice": 1299,
    "mrp": 4990,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "name": "Amazfit GTR 4 New Smartwatch with Dual-Band GPS & AMOLED Display",
    "brand": "Amazfit",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0086",
    "modelNumber": "MOD-0086",
    "description": "Amazfit GTR 4 New Smartwatch with Dual-Band GPS & AMOLED Display with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Amazfit",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amazfit gtr 4",
      "gps watch",
      "amoled smartwatch",
      "running watch"
    ],
    "basePrice": 14999,
    "mrp": 18999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "name": "Fastrack Limitless FS1 Pro 1.96-inch Super AMOLED Calling Smartwatch",
    "brand": "Fastrack",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0087",
    "modelNumber": "MOD-0087",
    "description": "Fastrack Limitless FS1 Pro 1.96-inch Super AMOLED Calling Smartwatch with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Fastrack",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fastrack watch",
      "fs1 pro",
      "amoled smartwatch"
    ],
    "basePrice": 2295,
    "mrp": 7995,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "name": "Cultsport Ranger XR 1.43-inch Rugged Outdoor Smartwatch (850 Nits)",
    "brand": "Cultsport",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0088",
    "modelNumber": "MOD-0088",
    "description": "Cultsport Ranger XR 1.43-inch Rugged Outdoor Smartwatch (850 Nits) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Cultsport",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cultsport watch",
      "rugged smartwatch",
      "outdoor watch"
    ],
    "basePrice": 2799,
    "mrp": 9999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "name": "OnePlus Watch 2 with Wear OS 4 & Snapdragon W5 Chip (100H Battery)",
    "brand": "OnePlus",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0089",
    "modelNumber": "MOD-0089",
    "description": "OnePlus Watch 2 with Wear OS 4 & Snapdragon W5 Chip (100H Battery) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "OnePlus",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "oneplus watch 2",
      "wear os watch",
      "smartwatch"
    ],
    "basePrice": 22999,
    "mrp": 27999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-10-noise-pure-ring-smart-health-s",
    "name": "Noise Pure Ring Smart Health & Sleep Tracker Titanium Finish",
    "brand": "Noise",
    "categoryId": "cat-electronics",
    "subcategory": "Smart Wearables",
    "sku": "SKU-ELE-0090",
    "modelNumber": "MOD-0090",
    "description": "Noise Pure Ring Smart Health & Sleep Tracker Titanium Finish with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Smart Wearables",
      "Brand": "Noise",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "smart ring",
      "noise ring",
      "health tracker",
      "sleep ring"
    ],
    "basePrice": 5999,
    "mrp": 9999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Smart Wearables",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "name": "SanDisk Ultra Dual Drive Luxe USB Type-C 128GB Flash Pendrive",
    "brand": "SanDisk",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0091",
    "modelNumber": "MOD-0091",
    "description": "SanDisk Ultra Dual Drive Luxe USB Type-C 128GB Flash Pendrive with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "SanDisk",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sandisk pendrive",
      "128gb pendrive",
      "type c pendrive",
      "otg flash drive"
    ],
    "basePrice": 1199,
    "mrp": 2400,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "name": "Samsung EVO Plus 128GB MicroSDXC Memory Card with Adapter (130MB/s)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0092",
    "modelNumber": "MOD-0092",
    "description": "Samsung EVO Plus 128GB MicroSDXC Memory Card with Adapter (130MB/s) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "memory card",
      "sd card",
      "samsung evo",
      "128gb sd card"
    ],
    "basePrice": 899,
    "mrp": 1899,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-3-crucial-x6-1tb-portable-extern",
    "name": "Crucial X6 1TB Portable External Solid State Drive SSD (Up to 800MB/s)",
    "brand": "Crucial",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0093",
    "modelNumber": "MOD-0093",
    "description": "Crucial X6 1TB Portable External Solid State Drive SSD (Up to 800MB/s) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Crucial",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "external ssd",
      "1tb ssd",
      "portable ssd",
      "crucial x6"
    ],
    "basePrice": 6299,
    "mrp": 11500,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-4-western-digital-wd-elements-2t",
    "name": "Western Digital WD Elements 2TB USB 3.0 External Hard Drive",
    "brand": "Western Digital",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0094",
    "modelNumber": "MOD-0094",
    "description": "Western Digital WD Elements 2TB USB 3.0 External Hard Drive with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Western Digital",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hard disk",
      "external hdd",
      "2tb hard drive",
      "wd elements"
    ],
    "basePrice": 5499,
    "mrp": 7990,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "name": "SanDisk Cruzer Blade 64GB USB 2.0 Pen Drive",
    "brand": "SanDisk",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0095",
    "modelNumber": "MOD-0095",
    "description": "SanDisk Cruzer Blade 64GB USB 2.0 Pen Drive with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "SanDisk",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sandisk 64gb",
      "cruzer blade",
      "pendrive",
      "flash drive"
    ],
    "basePrice": 389,
    "mrp": 750,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-6-kingston-datatraveler-exodia-m",
    "name": "Kingston DataTraveler Exodia M 128GB USB 3.2 Flash Drive",
    "brand": "Kingston",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0096",
    "modelNumber": "MOD-0096",
    "description": "Kingston DataTraveler Exodia M 128GB USB 3.2 Flash Drive with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Kingston",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "kingston pendrive",
      "128gb usb",
      "flash drive"
    ],
    "basePrice": 949,
    "mrp": 1999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "name": "SanDisk Ultra 64GB MicroSDHC Class 10 Memory Card 140MB/s",
    "brand": "SanDisk",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0097",
    "modelNumber": "MOD-0097",
    "description": "SanDisk Ultra 64GB MicroSDHC Class 10 Memory Card 140MB/s with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "SanDisk",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sandisk sd card",
      "64gb memory card",
      "cctv memory card"
    ],
    "basePrice": 489,
    "mrp": 1100,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "name": "HP v236w 32GB Metal USB 2.0 Flash Drive",
    "brand": "HP",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0098",
    "modelNumber": "MOD-0098",
    "description": "HP v236w 32GB Metal USB 2.0 Flash Drive with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "HP",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hp pendrive",
      "32gb pendrive",
      "metal flash drive"
    ],
    "basePrice": 299,
    "mrp": 550,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-9-seagate-one-touch-1tb-external",
    "name": "Seagate One Touch 1TB External Hard Drive with Password Protection",
    "brand": "Seagate",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0099",
    "modelNumber": "MOD-0099",
    "description": "Seagate One Touch 1TB External Hard Drive with Password Protection with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Seagate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "seagate hard disk",
      "1tb hdd",
      "one touch seagate"
    ],
    "basePrice": 4699,
    "mrp": 6200,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "name": "Samsung T7 Shield 1TB Rugged Portable SSD USB 3.2 (1050MB/s)",
    "brand": "Samsung",
    "categoryId": "cat-electronics",
    "subcategory": "Storage & Pendrives",
    "sku": "SKU-ELE-0100",
    "modelNumber": "MOD-0100",
    "description": "Samsung T7 Shield 1TB Rugged Portable SSD USB 3.2 (1050MB/s) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Electronics & Mobiles",
      "Subcategory": "Storage & Pendrives",
      "Brand": "Samsung",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "samsung t7",
      "portable ssd",
      "high speed ssd",
      "nvme storage"
    ],
    "basePrice": 9499,
    "mrp": 14999,
    "isMedicine": false,
    "tags": [
      "Electronics & Mobiles",
      "Storage & Pendrives",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "name": "Dolo 650mg Paracetamol Tablets (15 Tabs Strip)",
    "brand": "Micro Labs",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0101",
    "modelNumber": "MOD-0101",
    "description": "Dolo 650mg Paracetamol Tablets (15 Tabs Strip) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Micro Labs",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dolo 650",
      "paracetamol",
      "fever medicine",
      "headache tablet",
      "dawa",
      "pharmacy"
    ],
    "basePrice": 28,
    "mrp": 35,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "name": "Crocin 650 Fast Action Pain Relief Tablets (15 Tabs)",
    "brand": "GSK",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0102",
    "modelNumber": "MOD-0102",
    "description": "Crocin 650 Fast Action Pain Relief Tablets (15 Tabs) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "GSK",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "crocin 650",
      "paracetamol",
      "fever",
      "bodyache",
      "otc medicine"
    ],
    "basePrice": 29,
    "mrp": 34,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "name": "Vicks Vaporub Cold Relief Warming Balm (50g)",
    "brand": "Procter & Gamble",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0103",
    "modelNumber": "MOD-0103",
    "description": "Vicks Vaporub Cold Relief Warming Balm (50g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Procter & Gamble",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "vicks vaporub",
      "cold balm",
      "cough relief",
      "steam balm"
    ],
    "basePrice": 145,
    "mrp": 165,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "name": "Eno Fruit Salt Fast Action Antacid Lemon Flavour (100g Bottle)",
    "brand": "Eno",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0104",
    "modelNumber": "MOD-0104",
    "description": "Eno Fruit Salt Fast Action Antacid Lemon Flavour (100g Bottle) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Eno",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "eno",
      "acidity relief",
      "antacid powder",
      "eno lemon"
    ],
    "basePrice": 155,
    "mrp": 180,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "name": "Digene Gel Antacid & Antigas Orange Flavour (200ml)",
    "brand": "Abbott",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0105",
    "modelNumber": "MOD-0105",
    "description": "Digene Gel Antacid & Antigas Orange Flavour (200ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Abbott",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "digene syrup",
      "antacid syrup",
      "gas relief",
      "acidity gel"
    ],
    "basePrice": 130,
    "mrp": 155,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "name": "Volini Joint & Muscle Pain Relief Spray (100g)",
    "brand": "Sun Pharma",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0106",
    "modelNumber": "MOD-0106",
    "description": "Volini Joint & Muscle Pain Relief Spray (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Sun Pharma",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "volini spray",
      "pain spray",
      "muscle pain",
      "back pain"
    ],
    "basePrice": 235,
    "mrp": 290,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "name": "Moov Rapid Pain Relief Ointment (50g Tube)",
    "brand": "Reckitt",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0107",
    "modelNumber": "MOD-0107",
    "description": "Moov Rapid Pain Relief Ointment (50g Tube) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Reckitt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "moov",
      "pain balm",
      "back pain relief",
      "ayurvedic balm"
    ],
    "basePrice": 165,
    "mrp": 195,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "name": "Strepsils Honey & Lemon Lozenges for Sore Throat (Strip of 8)",
    "brand": "Strepsils",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0108",
    "modelNumber": "MOD-0108",
    "description": "Strepsils Honey & Lemon Lozenges for Sore Throat (Strip of 8) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "Strepsils",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "strepsils",
      "throat lozenges",
      "cough drops",
      "sore throat"
    ],
    "basePrice": 35,
    "mrp": 40,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "name": "Otrivin Oxy Fast Relief Adult Nasal Spray (10ml)",
    "brand": "GSK",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0109",
    "modelNumber": "MOD-0109",
    "description": "Otrivin Oxy Fast Relief Adult Nasal Spray (10ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "GSK",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "otrivin",
      "nasal spray",
      "blocked nose",
      "cold relief"
    ],
    "basePrice": 98,
    "mrp": 115,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-10-iodex-double-power-fast-absorb",
    "name": "Iodex Double Power Fast Absorbing Pain Balm (40g)",
    "brand": "GSK",
    "categoryId": "cat-pharmacy",
    "subcategory": "OTC & Daily Care",
    "sku": "SKU-PHA-0110",
    "modelNumber": "MOD-0110",
    "description": "Iodex Double Power Fast Absorbing Pain Balm (40g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "OTC & Daily Care",
      "Brand": "GSK",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "iodex",
      "pain balm",
      "headache balm",
      "muscle ache"
    ],
    "basePrice": 135,
    "mrp": 160,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "OTC & Daily Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "name": "Dettol Antiseptic Disinfectant Liquid 550ml Bottle",
    "brand": "Dettol",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0111",
    "modelNumber": "MOD-0111",
    "description": "Dettol Antiseptic Disinfectant Liquid 550ml Bottle with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Dettol",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dettol",
      "antiseptic",
      "wound wash",
      "first aid",
      "disinfectant"
    ],
    "basePrice": 198,
    "mrp": 220,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "name": "Savlon Antiseptic Liquid for Cuts & Scratches (500ml)",
    "brand": "Savlon / ITC",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0112",
    "modelNumber": "MOD-0112",
    "description": "Savlon Antiseptic Liquid for Cuts & Scratches (500ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Savlon / ITC",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "savlon",
      "antiseptic liquid",
      "wound cleaner"
    ],
    "basePrice": 170,
    "mrp": 195,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-3-hansaplast-washproof-medicated",
    "name": "Hansaplast Washproof Medicated Bandage Strips (Box of 100)",
    "brand": "Hansaplast",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0113",
    "modelNumber": "MOD-0113",
    "description": "Hansaplast Washproof Medicated Bandage Strips (Box of 100) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Hansaplast",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hansaplast",
      "band aid",
      "waterproof bandage",
      "wound strip"
    ],
    "basePrice": 195,
    "mrp": 240,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "name": "Flamingo Orthopedic Lumbar Sacro Sacro-Spinal Support Belt",
    "brand": "Flamingo",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0114",
    "modelNumber": "MOD-0114",
    "description": "Flamingo Orthopedic Lumbar Sacro Sacro-Spinal Support Belt with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Flamingo",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "back belt",
      "lumbar support",
      "flamingo belt",
      "ortho support"
    ],
    "basePrice": 899,
    "mrp": 1150,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "name": "Dr. Trust Non-Contact Infrared Forehead Thermometer",
    "brand": "Dr. Trust",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0115",
    "modelNumber": "MOD-0115",
    "description": "Dr. Trust Non-Contact Infrared Forehead Thermometer with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Dr. Trust",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "thermometer",
      "forehead thermometer",
      "infrared thermometer",
      "fever test"
    ],
    "basePrice": 1299,
    "mrp": 2490,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "name": "Cipla Cipladine 5% Povidone Iodine Antiseptic Ointment (20g)",
    "brand": "Cipla",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0116",
    "modelNumber": "MOD-0116",
    "description": "Cipla Cipladine 5% Povidone Iodine Antiseptic Ointment (20g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Cipla",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cipladine",
      "betadine",
      "burn ointment",
      "antiseptic cream"
    ],
    "basePrice": 52,
    "mrp": 65,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "name": "Bandage Plus Sterile Rolled Cotton Gauze Bandage (Pack of 12)",
    "brand": "Bandage Plus",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0117",
    "modelNumber": "MOD-0117",
    "description": "Bandage Plus Sterile Rolled Cotton Gauze Bandage (Pack of 12) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Bandage Plus",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "gauze bandage",
      "cotton bandage",
      "wound dressing",
      "surgical roll"
    ],
    "basePrice": 135,
    "mrp": 180,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "name": "Flamingo Tubular Elastic Knee Cap Compression Support (Pair)",
    "brand": "Flamingo",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0118",
    "modelNumber": "MOD-0118",
    "description": "Flamingo Tubular Elastic Knee Cap Compression Support (Pair) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Flamingo",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "knee cap",
      "knee support",
      "arthritis band",
      "flamingo ortho"
    ],
    "basePrice": 360,
    "mrp": 450,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "name": "Dr. Morepen Digital Clinical Body Thermometer with Beeper",
    "brand": "Dr. Morepen",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0119",
    "modelNumber": "MOD-0119",
    "description": "Dr. Morepen Digital Clinical Body Thermometer with Beeper with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Dr. Morepen",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "digital thermometer",
      "dr morepen",
      "fever meter"
    ],
    "basePrice": 149,
    "mrp": 250,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "name": "Johnson & Johnson Sterile Cotton Buds 100% Pure (Pack of 200)",
    "brand": "Johnson & Johnson",
    "categoryId": "cat-pharmacy",
    "subcategory": "First Aid & Surgicals",
    "sku": "SKU-PHA-0120",
    "modelNumber": "MOD-0120",
    "description": "Johnson & Johnson Sterile Cotton Buds 100% Pure (Pack of 200) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "First Aid & Surgicals",
      "Brand": "Johnson & Johnson",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cotton buds",
      "ear buds",
      "sterile swabs"
    ],
    "basePrice": 99,
    "mrp": 120,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "First Aid & Surgicals",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-1-becadexamin-multivitamin-miner",
    "name": "Becadexamin Multivitamin & Mineral Capsules (Bottle of 30)",
    "brand": "GSK",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0121",
    "modelNumber": "MOD-0121",
    "description": "Becadexamin Multivitamin & Mineral Capsules (Bottle of 30) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "GSK",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "becadexamin",
      "multivitamin",
      "vitamin capsules",
      "health supplement"
    ],
    "basePrice": 55,
    "mrp": 65,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "name": "Supradyn Daily Multivitamin with Zinc & Immunity Boosters (15 Tabs)",
    "brand": "Bayer",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0122",
    "modelNumber": "MOD-0122",
    "description": "Supradyn Daily Multivitamin with Zinc & Immunity Boosters (15 Tabs) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Bayer",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "supradyn",
      "multivitamin with zinc",
      "immunity booster",
      "energy tablets"
    ],
    "basePrice": 50,
    "mrp": 60,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "name": "Limcee 500mg Vitamin C Chewable Tablets Orange (15 Tabs)",
    "brand": "Abbott",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0123",
    "modelNumber": "MOD-0123",
    "description": "Limcee 500mg Vitamin C Chewable Tablets Orange (15 Tabs) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Abbott",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "limcee",
      "vitamin c",
      "chewable tablet",
      "immunity"
    ],
    "basePrice": 28,
    "mrp": 35,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "name": "Shelcal 500 Calcium with Vitamin D3 Tablets (15 Tabs)",
    "brand": "Torrent Pharma",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0124",
    "modelNumber": "MOD-0124",
    "description": "Shelcal 500 Calcium with Vitamin D3 Tablets (15 Tabs) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Torrent Pharma",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "shelcal 500",
      "calcium tablet",
      "vitamin d3",
      "bone health"
    ],
    "basePrice": 110,
    "mrp": 135,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-5-revital-h-daily-health-supplem",
    "name": "Revital H Daily Health Supplement with Ginseng (60 Capsules)",
    "brand": "Sun Pharma",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0125",
    "modelNumber": "MOD-0125",
    "description": "Revital H Daily Health Supplement with Ginseng (60 Capsules) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Sun Pharma",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "revital h",
      "ginseng",
      "energy supplement",
      "daily stamina"
    ],
    "basePrice": 440,
    "mrp": 550,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "name": "Zincovit Multivitamin with Grape Seed Extract (15 Tablets)",
    "brand": "Apex",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0126",
    "modelNumber": "MOD-0126",
    "description": "Zincovit Multivitamin with Grape Seed Extract (15 Tablets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Apex",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "zincovit",
      "grape seed",
      "multivitamin tablet",
      "recovery"
    ],
    "basePrice": 95,
    "mrp": 115,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "name": "Evion 400mg Vitamin E Capsules for Skin & Hair (10 Capsules)",
    "brand": "Merck / Procter & Gamble",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0127",
    "modelNumber": "MOD-0127",
    "description": "Evion 400mg Vitamin E Capsules for Skin & Hair (10 Capsules) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Merck / Procter & Gamble",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "evion 400",
      "vitamin e",
      "skin vitamin",
      "hair supplement"
    ],
    "basePrice": 32,
    "mrp": 38,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "name": "HealthKart HK Vitals Fish Oil Omega 3 with EPA & DHA (60 Softgels)",
    "brand": "HealthKart",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0128",
    "modelNumber": "MOD-0128",
    "description": "HealthKart HK Vitals Fish Oil Omega 3 with EPA & DHA (60 Softgels) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "HealthKart",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "omega 3",
      "fish oil",
      "heart health",
      "hk vitals"
    ],
    "basePrice": 499,
    "mrp": 799,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "name": "Dabur Chyawanprash 2X Immunity Booster Pure Herbs (1kg)",
    "brand": "Dabur",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0129",
    "modelNumber": "MOD-0129",
    "description": "Dabur Chyawanprash 2X Immunity Booster Pure Herbs (1kg) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Dabur",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "chyawanprash",
      "dabur",
      "ayurvedic immunity",
      "herbal tonic"
    ],
    "basePrice": 360,
    "mrp": 435,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "name": "Himalaya Ashvagandha General Wellness & Stress Relief (60 Tablets)",
    "brand": "Himalaya",
    "categoryId": "cat-pharmacy",
    "subcategory": "Vitamins & Supplements",
    "sku": "SKU-PHA-0130",
    "modelNumber": "MOD-0130",
    "description": "Himalaya Ashvagandha General Wellness & Stress Relief (60 Tablets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Vitamins & Supplements",
      "Brand": "Himalaya",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ashwagandha",
      "himalaya herbs",
      "stress relief",
      "ayurvedic medicine"
    ],
    "basePrice": 175,
    "mrp": 220,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Vitamins & Supplements",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "name": "Dr. Morepen BG-03 Gluco One Blood Glucose Monitor with 50 Test Strips",
    "brand": "Dr. Morepen",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0131",
    "modelNumber": "MOD-0131",
    "description": "Dr. Morepen BG-03 Gluco One Blood Glucose Monitor with 50 Test Strips with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Dr. Morepen",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "glucometer",
      "sugar test",
      "dr morepen",
      "gluco one",
      "diabetes",
      "blood sugar",
      "test strips"
    ],
    "basePrice": 999,
    "mrp": 1490,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-2-accu-chek-active-blood-glucose",
    "name": "Accu-Chek Active Blood Glucose Glucometer Kit with 10 Strips",
    "brand": "Roche / Accu-Chek",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0132",
    "modelNumber": "MOD-0132",
    "description": "Accu-Chek Active Blood Glucose Glucometer Kit with 10 Strips with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Roche / Accu-Chek",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "accu chek",
      "sugar meter",
      "accuchek active",
      "diabetes machine"
    ],
    "basePrice": 1299,
    "mrp": 1699,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "name": "Omron HEM-7120 Fully Automatic Digital Upper Arm BP Monitor",
    "brand": "Omron",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0133",
    "modelNumber": "MOD-0133",
    "description": "Omron HEM-7120 Fully Automatic Digital Upper Arm BP Monitor with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Omron",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bp machine",
      "blood pressure monitor",
      "omron 7120",
      "hypertension"
    ],
    "basePrice": 1980,
    "mrp": 2450,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "name": "Dr. Morepen Gluco One BG-03 Replacement Test Strips Box of 50",
    "brand": "Dr. Morepen",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0134",
    "modelNumber": "MOD-0134",
    "description": "Dr. Morepen Gluco One BG-03 Replacement Test Strips Box of 50 with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Dr. Morepen",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "gluco one strips",
      "sugar strips",
      "dr morepen strips 50"
    ],
    "basePrice": 649,
    "mrp": 890,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "name": "Accu-Chek Instant Blood Glucose 50 Test Strips Pack",
    "brand": "Accu-Chek",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0135",
    "modelNumber": "MOD-0135",
    "description": "Accu-Chek Instant Blood Glucose 50 Test Strips Pack with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Accu-Chek",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "accu chek instant",
      "instant strips",
      "diabetes test strips"
    ],
    "basePrice": 875,
    "mrp": 1125,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "name": "Dr. Trust USA Smart Dual Talking Digital Blood Pressure Monitor",
    "brand": "Dr. Trust",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0136",
    "modelNumber": "MOD-0136",
    "description": "Dr. Trust USA Smart Dual Talking Digital Blood Pressure Monitor with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Dr. Trust",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dr trust bp",
      "talking bp machine",
      "blood pressure digital"
    ],
    "basePrice": 1899,
    "mrp": 2990,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-7-himalaya-karela-metabolic-well",
    "name": "Himalaya Karela Metabolic Wellness & Glucose Regulation (60 Tablets)",
    "brand": "Himalaya",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0137",
    "modelNumber": "MOD-0137",
    "description": "Himalaya Karela Metabolic Wellness & Glucose Regulation (60 Tablets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Himalaya",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "karela tablets",
      "diabetes ayurveda",
      "blood sugar control",
      "himalaya"
    ],
    "basePrice": 175,
    "mrp": 220,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "name": "Sugar Free Gold Low Calorie Aspartame Sweetener Pellets (500 Pellets)",
    "brand": "Zydus Wellness",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0138",
    "modelNumber": "MOD-0138",
    "description": "Sugar Free Gold Low Calorie Aspartame Sweetener Pellets (500 Pellets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Zydus Wellness",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sugar free gold",
      "sweetener",
      "sugar free pellets",
      "diabetic sugar"
    ],
    "basePrice": 245,
    "mrp": 300,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "name": "Dr. Morepen Universal Sterile Twist Lancets for Glucometer (Pack of 100)",
    "brand": "Dr. Morepen",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0139",
    "modelNumber": "MOD-0139",
    "description": "Dr. Morepen Universal Sterile Twist Lancets for Glucometer (Pack of 100) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Dr. Morepen",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lancets",
      "sugar needles",
      "pricking lancets",
      "dr morepen lancets"
    ],
    "basePrice": 225,
    "mrp": 350,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "name": "Ensure Diabetic Care Nutrition Powder Vanilla Flavour (400g Tin)",
    "brand": "Abbott",
    "categoryId": "cat-pharmacy",
    "subcategory": "Diabetes & BP Care",
    "sku": "SKU-PHA-0140",
    "modelNumber": "MOD-0140",
    "description": "Ensure Diabetic Care Nutrition Powder Vanilla Flavour (400g Tin) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Diabetes & BP Care",
      "Brand": "Abbott",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ensure diabetes",
      "ensure diabetic care",
      "nutrition powder"
    ],
    "basePrice": 699,
    "mrp": 810,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Diabetes & BP Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-1-pampers-all-round-protection-p",
    "name": "Pampers All Round Protection Pants Diapers Medium Size (76 Count)",
    "brand": "Pampers",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0141",
    "modelNumber": "MOD-0141",
    "description": "Pampers All Round Protection Pants Diapers Medium Size (76 Count) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Pampers",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "pampers",
      "baby diapers",
      "medium diapers",
      "pant diapers"
    ],
    "basePrice": 999,
    "mrp": 1299,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "name": "Himalaya Baby Lotion with Almond & Olive Oil Nourishing (400ml)",
    "brand": "Himalaya",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0142",
    "modelNumber": "MOD-0142",
    "description": "Himalaya Baby Lotion with Almond & Olive Oil Nourishing (400ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Himalaya",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "himalaya baby lotion",
      "baby moisturizer",
      "baby cream"
    ],
    "basePrice": 260,
    "mrp": 325,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "name": "Johnson & Johnson No More Tears Gentle Baby Shampoo (500ml)",
    "brand": "Johnson & Johnson",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0143",
    "modelNumber": "MOD-0143",
    "description": "Johnson & Johnson No More Tears Gentle Baby Shampoo (500ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Johnson & Johnson",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "baby shampoo",
      "johnson baby",
      "no more tears"
    ],
    "basePrice": 325,
    "mrp": 410,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "name": "Sebamed Baby Gentle Cleansing Bar pH 5.5 Soap (100g)",
    "brand": "Sebamed",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0144",
    "modelNumber": "MOD-0144",
    "description": "Sebamed Baby Gentle Cleansing Bar pH 5.5 Soap (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Sebamed",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sebamed baby soap",
      "ph 5.5 soap",
      "baby bath soap"
    ],
    "basePrice": 245,
    "mrp": 290,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "name": "Pigeon Calming Anti-Colic Wide Neck Baby Feeding Bottle (240ml)",
    "brand": "Pigeon",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0145",
    "modelNumber": "MOD-0145",
    "description": "Pigeon Calming Anti-Colic Wide Neck Baby Feeding Bottle (240ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Pigeon",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "feeding bottle",
      "baby milk bottle",
      "pigeon bottle",
      "anti colic"
    ],
    "basePrice": 520,
    "mrp": 699,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "name": "Huggies Wonder Pants Extra Absorb Diapers Large (64 Count)",
    "brand": "Huggies",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0146",
    "modelNumber": "MOD-0146",
    "description": "Huggies Wonder Pants Extra Absorb Diapers Large (64 Count) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Huggies",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "huggies diapers",
      "large diapers",
      "wonder pants"
    ],
    "basePrice": 899,
    "mrp": 1199,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "name": "Mother Sparsh 99% Pure Water Unscented Baby Wipes (72 Wipes)",
    "brand": "Mother Sparsh",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0147",
    "modelNumber": "MOD-0147",
    "description": "Mother Sparsh 99% Pure Water Unscented Baby Wipes (72 Wipes) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Mother Sparsh",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "baby wipes",
      "water wipes",
      "mother sparsh",
      "wet wipes"
    ],
    "basePrice": 199,
    "mrp": 299,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "name": "Chicco Baby Moments Rash Cream with 10% Zinc Oxide (100ml)",
    "brand": "Chicco",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0148",
    "modelNumber": "MOD-0148",
    "description": "Chicco Baby Moments Rash Cream with 10% Zinc Oxide (100ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Chicco",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "diaper rash cream",
      "chicco cream",
      "zinc oxide rash balm"
    ],
    "basePrice": 310,
    "mrp": 399,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "name": "Dabur Lal Tail Ayurvedic Baby Massage Oil with Ratanjyot (500ml)",
    "brand": "Dabur",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0149",
    "modelNumber": "MOD-0149",
    "description": "Dabur Lal Tail Ayurvedic Baby Massage Oil with Ratanjyot (500ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Dabur",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dabur lal tail",
      "baby massage oil",
      "ayurvedic baby oil"
    ],
    "basePrice": 310,
    "mrp": 380,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "name": "Nestle Cerelac Wheat Apple Baby Cereal Stage 1 (300g Pack)",
    "brand": "Nestle",
    "categoryId": "cat-pharmacy",
    "subcategory": "Baby & Mother Care",
    "sku": "SKU-PHA-0150",
    "modelNumber": "MOD-0150",
    "description": "Nestle Cerelac Wheat Apple Baby Cereal Stage 1 (300g Pack) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Pharmacy & Health",
      "Subcategory": "Baby & Mother Care",
      "Brand": "Nestle",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cerelac",
      "baby food",
      "nestle cereal",
      "wheat apple cerelac"
    ],
    "basePrice": 285,
    "mrp": 315,
    "isMedicine": true,
    "tags": [
      "Pharmacy & Health",
      "Baby & Mother Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-1-fortune-biryani-special-super-",
    "name": "Fortune Biryani Special Super Premium Aged Long Grain Basmati Rice (5kg)",
    "brand": "Fortune / Adani Wilmar",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0151",
    "modelNumber": "MOD-0151",
    "description": "Fortune Biryani Special Super Premium Aged Long Grain Basmati Rice (5kg) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Fortune / Adani Wilmar",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fortune rice",
      "biryani rice",
      "basmati rice",
      "chawal",
      "aged rice",
      "grocery"
    ],
    "basePrice": 549,
    "mrp": 675,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "name": "Aashirvaad Superior MP Sharbati Whole Wheat Atta 5kg",
    "brand": "Aashirvaad",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0152",
    "modelNumber": "MOD-0152",
    "description": "Aashirvaad Superior MP Sharbati Whole Wheat Atta 5kg with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Aashirvaad",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "aashirvaad atta",
      "wheat flour",
      "mp sharbati",
      "5kg atta",
      "gehun atta"
    ],
    "basePrice": 245,
    "mrp": 275,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-3-india-gate-basmati-rice-classi",
    "name": "India Gate Basmati Rice Classic Extra Long Grain (5kg Bag)",
    "brand": "India Gate",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0153",
    "modelNumber": "MOD-0153",
    "description": "India Gate Basmati Rice Classic Extra Long Grain (5kg Bag) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "India Gate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "india gate classic",
      "basmati rice",
      "pulao rice"
    ],
    "basePrice": 749,
    "mrp": 890,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "name": "Fortune Premium Kachi Ghani Pure Mustard Oil Jar (5L)",
    "brand": "Fortune",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0154",
    "modelNumber": "MOD-0154",
    "description": "Fortune Premium Kachi Ghani Pure Mustard Oil Jar (5L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Fortune",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "mustard oil",
      "sarson tel",
      "fortune kachi ghani",
      "cooking oil"
    ],
    "basePrice": 699,
    "mrp": 850,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-5-tata-sampann-unpolished-toor-d",
    "name": "Tata Sampann Unpolished Toor Dal High Protein (1kg)",
    "brand": "Tata Sampann",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0155",
    "modelNumber": "MOD-0155",
    "description": "Tata Sampann Unpolished Toor Dal High Protein (1kg) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Tata Sampann",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "toor dal",
      "arhar dal",
      "tata sampann",
      "unpolished pulses"
    ],
    "basePrice": 175,
    "mrp": 210,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-6-fortune-sunlite-refined-sunflo",
    "name": "Fortune Sunlite Refined Sunflower Oil Pouch (1L)",
    "brand": "Fortune",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0156",
    "modelNumber": "MOD-0156",
    "description": "Fortune Sunlite Refined Sunflower Oil Pouch (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Fortune",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sunflower oil",
      "fortune sunlite",
      "refined oil"
    ],
    "basePrice": 125,
    "mrp": 155,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-7-tata-sampann-fine-unpolished-m",
    "name": "Tata Sampann Fine Unpolished Moong Dal Split (1kg)",
    "brand": "Tata Sampann",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0157",
    "modelNumber": "MOD-0157",
    "description": "Tata Sampann Fine Unpolished Moong Dal Split (1kg) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Tata Sampann",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "moong dal",
      "tata dal",
      "yellow dal",
      "pulses"
    ],
    "basePrice": 155,
    "mrp": 185,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-8-aashirvaad-select-100-sharbati",
    "name": "Aashirvaad Select 100% Sharbati Whole Wheat Atta 10kg Bag",
    "brand": "Aashirvaad",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0158",
    "modelNumber": "MOD-0158",
    "description": "Aashirvaad Select 100% Sharbati Whole Wheat Atta 10kg Bag with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Aashirvaad",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "aashirvaad 10kg",
      "atta 10kg",
      "sharbati atta"
    ],
    "basePrice": 489,
    "mrp": 560,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "name": "Madhur Pure & Hygienic Sulphurless Sugar 5kg Bag",
    "brand": "Madhur",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0159",
    "modelNumber": "MOD-0159",
    "description": "Madhur Pure & Hygienic Sulphurless Sugar 5kg Bag with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Madhur",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sugar",
      "madhur chini",
      "5kg sugar",
      "white sugar"
    ],
    "basePrice": 220,
    "mrp": 260,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "name": "Tata Salt Vacuum Evaporated Iodized Table Salt (1kg Pack)",
    "brand": "Tata Salt",
    "categoryId": "cat-grocery",
    "subcategory": "Staples, Atta & Rice",
    "sku": "SKU-GRO-0160",
    "modelNumber": "MOD-0160",
    "description": "Tata Salt Vacuum Evaporated Iodized Table Salt (1kg Pack) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Staples, Atta & Rice",
      "Brand": "Tata Salt",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tata salt",
      "iodized salt",
      "namak",
      "table salt"
    ],
    "basePrice": 27,
    "mrp": 30,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Staples, Atta & Rice",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-1-amul-pure-cow-ghee-traditional",
    "name": "Amul Pure Cow Ghee Traditional Aroma Glass Jar (1L)",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0161",
    "modelNumber": "MOD-0161",
    "description": "Amul Pure Cow Ghee Traditional Aroma Glass Jar (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul cow ghee",
      "desi ghee",
      "pure cow ghee",
      "amul ghee 1l"
    ],
    "basePrice": 599,
    "mrp": 660,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-2-amul-butter-pasteurized-salted",
    "name": "Amul Butter Pasteurized Salted 500g Block",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0162",
    "modelNumber": "MOD-0162",
    "description": "Amul Butter Pasteurized Salted 500g Block with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul butter",
      "salted butter",
      "makhan",
      "butter 500g"
    ],
    "basePrice": 265,
    "mrp": 275,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "name": "Amul Gold Full Cream Fresh Homogenised Milk (500ml Pouch)",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0163",
    "modelNumber": "MOD-0163",
    "description": "Amul Gold Full Cream Fresh Homogenised Milk (500ml Pouch) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul gold",
      "full cream milk",
      "fresh milk",
      "doodh"
    ],
    "basePrice": 34,
    "mrp": 34,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-4-amul-taaza-homogenised-toned-m",
    "name": "Amul Taaza Homogenised Toned Milk 1L Tetra Pak",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0164",
    "modelNumber": "MOD-0164",
    "description": "Amul Taaza Homogenised Toned Milk 1L Tetra Pak with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul taaza",
      "toned milk",
      "tetra pak milk"
    ],
    "basePrice": 70,
    "mrp": 74,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "name": "Mother Dairy Pure Buffalo Ghee 1L Tin",
    "brand": "Mother Dairy",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0165",
    "modelNumber": "MOD-0165",
    "description": "Mother Dairy Pure Buffalo Ghee 1L Tin with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Mother Dairy",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "mother dairy ghee",
      "buffalo ghee",
      "desi ghee 1l"
    ],
    "basePrice": 620,
    "mrp": 690,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "name": "Amul Malai Fresh Paneer Cube Block (200g)",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0166",
    "modelNumber": "MOD-0166",
    "description": "Amul Malai Fresh Paneer Cube Block (200g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul paneer",
      "fresh cottage cheese",
      "malai paneer"
    ],
    "basePrice": 88,
    "mrp": 95,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-7-amul-processed-diced-cheese-bl",
    "name": "Amul Processed Diced Cheese Blend for Pizza (200g)",
    "brand": "Amul",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0167",
    "modelNumber": "MOD-0167",
    "description": "Amul Processed Diced Cheese Blend for Pizza (200g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Amul",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "amul cheese",
      "diced cheese",
      "pizza cheese"
    ],
    "basePrice": 130,
    "mrp": 145,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-8-nestle-everyday-dairy-whitener",
    "name": "Nestle Everyday Dairy Whitener Milk Powder (1kg Pouch)",
    "brand": "Nestle",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0168",
    "modelNumber": "MOD-0168",
    "description": "Nestle Everyday Dairy Whitener Milk Powder (1kg Pouch) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Nestle",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "milk powder",
      "nestle everyday",
      "dairy whitener",
      "tea milk powder"
    ],
    "basePrice": 480,
    "mrp": 540,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-9-mother-dairy-classic-dahi-plai",
    "name": "Mother Dairy Classic Dahi Plain Curd Tub (400g)",
    "brand": "Mother Dairy",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0169",
    "modelNumber": "MOD-0169",
    "description": "Mother Dairy Classic Dahi Plain Curd Tub (400g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Mother Dairy",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dahi",
      "plain curd",
      "mother dairy curd"
    ],
    "basePrice": 42,
    "mrp": 45,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-10-epigamia-greek-yogurt-natural-",
    "name": "Epigamia Greek Yogurt Natural High Protein (100g Cup)",
    "brand": "Epigamia",
    "categoryId": "cat-grocery",
    "subcategory": "Dairy, Milk & Ghee",
    "sku": "SKU-GRO-0170",
    "modelNumber": "MOD-0170",
    "description": "Epigamia Greek Yogurt Natural High Protein (100g Cup) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Dairy, Milk & Ghee",
      "Brand": "Epigamia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "greek yogurt",
      "epigamia",
      "protein curd"
    ],
    "basePrice": 52,
    "mrp": 60,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Dairy, Milk & Ghee",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "name": "Tata Tea Gold Rich Aroma CTC Tea with Long Leaves (500g)",
    "brand": "Tata Tea",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0171",
    "modelNumber": "MOD-0171",
    "description": "Tata Tea Gold Rich Aroma CTC Tea with Long Leaves (500g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Tata Tea",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tata tea gold",
      "chai patti",
      "black tea",
      "tea 500g"
    ],
    "basePrice": 285,
    "mrp": 330,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-2-nescafe-classic-instant-pure-c",
    "name": "Nescafe Classic Instant Pure Coffee Powder Glass Jar (100g)",
    "brand": "Nescafe",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0172",
    "modelNumber": "MOD-0172",
    "description": "Nescafe Classic Instant Pure Coffee Powder Glass Jar (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Nescafe",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "nescafe classic",
      "coffee jar",
      "instant coffee powder"
    ],
    "basePrice": 290,
    "mrp": 340,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "name": "Cadbury Dairy Milk Silk Chocolate Bar Family Pack (150g)",
    "brand": "Cadbury",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0173",
    "modelNumber": "MOD-0173",
    "description": "Cadbury Dairy Milk Silk Chocolate Bar Family Pack (150g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Cadbury",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dairy milk silk",
      "cadbury chocolate",
      "silk chocolate"
    ],
    "basePrice": 160,
    "mrp": 180,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "name": "Lay's India's Magic Masala Potato Chips Party Pack (115g)",
    "brand": "Lay's",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0174",
    "modelNumber": "MOD-0174",
    "description": "Lay's India's Magic Masala Potato Chips Party Pack (115g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Lay's",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lays magic masala",
      "potato chips",
      "lays party pack"
    ],
    "basePrice": 45,
    "mrp": 50,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "name": "Haldiram's Nagpur Bhujia Sev Crispy Snack (1kg Mega Pack)",
    "brand": "Haldiram's",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0175",
    "modelNumber": "MOD-0175",
    "description": "Haldiram's Nagpur Bhujia Sev Crispy Snack (1kg Mega Pack) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Haldiram's",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bhujia sev",
      "haldiram namkeen",
      "besan sev 1kg"
    ],
    "basePrice": 245,
    "mrp": 290,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "name": "Parle-G Gold Glucose Biscuits Big Family Savings Pack (1kg)",
    "brand": "Parle",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0176",
    "modelNumber": "MOD-0176",
    "description": "Parle-G Gold Glucose Biscuits Big Family Savings Pack (1kg) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Parle",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "parle g gold",
      "glucose biscuit",
      "chai biscuit"
    ],
    "basePrice": 105,
    "mrp": 120,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-7-britannia-good-day-butter-rich",
    "name": "Britannia Good Day Butter Rich Cookies (600g Value Pack)",
    "brand": "Britannia",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0177",
    "modelNumber": "MOD-0177",
    "description": "Britannia Good Day Butter Rich Cookies (600g Value Pack) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Britannia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "good day butter",
      "britannia cookies",
      "butter biscuit"
    ],
    "basePrice": 120,
    "mrp": 140,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-8-red-bull-energy-drink-carbonat",
    "name": "Red Bull Energy Drink Carbonated Can (250ml)",
    "brand": "Red Bull",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0178",
    "modelNumber": "MOD-0178",
    "description": "Red Bull Energy Drink Carbonated Can (250ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Red Bull",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "red bull",
      "energy drink",
      "caffeine can"
    ],
    "basePrice": 115,
    "mrp": 125,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-9-maggi-2-minute-masala-instant-",
    "name": "Maggi 2-Minute Masala Instant Noodles (Pack of 12 x 70g)",
    "brand": "Maggi / Nestle",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0179",
    "modelNumber": "MOD-0179",
    "description": "Maggi 2-Minute Masala Instant Noodles (Pack of 12 x 70g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Maggi / Nestle",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "maggi 12 pack",
      "masala noodles",
      "instant noodles"
    ],
    "basePrice": 150,
    "mrp": 168,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-10-tropicana-100-real-orange-juic",
    "name": "Tropicana 100% Real Orange Juice Tetra Pak (1L)",
    "brand": "Tropicana",
    "categoryId": "cat-grocery",
    "subcategory": "Snacks & Beverages",
    "sku": "SKU-GRO-0180",
    "modelNumber": "MOD-0180",
    "description": "Tropicana 100% Real Orange Juice Tetra Pak (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Snacks & Beverages",
      "Brand": "Tropicana",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tropicana orange",
      "fruit juice",
      "orange juice 1l"
    ],
    "basePrice": 125,
    "mrp": 145,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Snacks & Beverages",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "name": "MDH Deggi Mirch Natural Red Colour Chilli Powder (500g)",
    "brand": "MDH",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0181",
    "modelNumber": "MOD-0181",
    "description": "MDH Deggi Mirch Natural Red Colour Chilli Powder (500g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "MDH",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "deggi mirch",
      "mdh chilli powder",
      "lal mirch powder"
    ],
    "basePrice": 290,
    "mrp": 340,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-2-catch-super-garam-masala-whole",
    "name": "Catch Super Garam Masala Whole Spice Blend (200g)",
    "brand": "Catch",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0182",
    "modelNumber": "MOD-0182",
    "description": "Catch Super Garam Masala Whole Spice Blend (200g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Catch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "garam masala",
      "catch masala",
      "spices"
    ],
    "basePrice": 135,
    "mrp": 160,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-3-everest-turmeric-powder-pure-h",
    "name": "Everest Turmeric Powder Pure Haldi (500g)",
    "brand": "Everest",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0183",
    "modelNumber": "MOD-0183",
    "description": "Everest Turmeric Powder Pure Haldi (500g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Everest",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "everest haldi",
      "turmeric powder",
      "haldi 500g"
    ],
    "basePrice": 145,
    "mrp": 170,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-4-everest-coriander-powder-pure-",
    "name": "Everest Coriander Powder Pure Dhania (500g)",
    "brand": "Everest",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0184",
    "modelNumber": "MOD-0184",
    "description": "Everest Coriander Powder Pure Dhania (500g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Everest",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dhania powder",
      "coriander powder",
      "everest dhania"
    ],
    "basePrice": 140,
    "mrp": 165,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "name": "MDH Chunky Chat Masala Tangy Sprinkler (100g Box)",
    "brand": "MDH",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0185",
    "modelNumber": "MOD-0185",
    "description": "MDH Chunky Chat Masala Tangy Sprinkler (100g Box) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "MDH",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "chaat masala",
      "mdh chunky chat",
      "salad spice"
    ],
    "basePrice": 65,
    "mrp": 75,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "name": "Tata Sampann Whole Cumin Seeds Jeera (200g)",
    "brand": "Tata Sampann",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0186",
    "modelNumber": "MOD-0186",
    "description": "Tata Sampann Whole Cumin Seeds Jeera (200g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Tata Sampann",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jeera",
      "cumin seeds",
      "tata sampann jeera"
    ],
    "basePrice": 160,
    "mrp": 190,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-7-catch-shahi-biryani-masala-aut",
    "name": "Catch Shahi Biryani Masala Authentic Royal Blend (100g)",
    "brand": "Catch",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0187",
    "modelNumber": "MOD-0187",
    "description": "Catch Shahi Biryani Masala Authentic Royal Blend (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Catch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "biryani masala",
      "shahi biryani masala",
      "catch biryani"
    ],
    "basePrice": 80,
    "mrp": 95,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-8-everest-meat-masala-for-mutton",
    "name": "Everest Meat Masala for Mutton & Rich Curries (100g)",
    "brand": "Everest",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0188",
    "modelNumber": "MOD-0188",
    "description": "Everest Meat Masala for Mutton & Rich Curries (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Everest",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "meat masala",
      "mutton masala",
      "everest meat"
    ],
    "basePrice": 75,
    "mrp": 88,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "name": "Catch Kasuri Methi Dried Fenugreek Leaves (100g Box)",
    "brand": "Catch",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0189",
    "modelNumber": "MOD-0189",
    "description": "Catch Kasuri Methi Dried Fenugreek Leaves (100g Box) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "Catch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "kasuri methi",
      "dried fenugreek",
      "catch methi"
    ],
    "basePrice": 58,
    "mrp": 70,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "name": "MDH Kitchen King All-in-One Curry Masala (100g)",
    "brand": "MDH",
    "categoryId": "cat-grocery",
    "subcategory": "Spices & Masalas",
    "sku": "SKU-GRO-0190",
    "modelNumber": "MOD-0190",
    "description": "MDH Kitchen King All-in-One Curry Masala (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Spices & Masalas",
      "Brand": "MDH",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "kitchen king",
      "mdh kitchen king",
      "curry powder"
    ],
    "basePrice": 72,
    "mrp": 85,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Spices & Masalas",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-1-surf-excel-matic-front-load-de",
    "name": "Surf Excel Matic Front Load Detergent Powder (2kg Bag)",
    "brand": "Surf Excel",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0191",
    "modelNumber": "MOD-0191",
    "description": "Surf Excel Matic Front Load Detergent Powder (2kg Bag) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Surf Excel",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "surf excel matic",
      "washing powder",
      "detergent powder 2kg"
    ],
    "basePrice": 420,
    "mrp": 490,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "name": "Vim Dishwash Gel Lemon Concentrate Dispenser Bottle (750ml)",
    "brand": "Vim",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0192",
    "modelNumber": "MOD-0192",
    "description": "Vim Dishwash Gel Lemon Concentrate Dispenser Bottle (750ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Vim",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "vim gel",
      "dishwash liquid",
      "lemon gel",
      "bartan gel"
    ],
    "basePrice": 175,
    "mrp": 210,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-3-lizol-disinfectant-surface-flo",
    "name": "Lizol Disinfectant Surface & Floor Cleaner Citrus (2L Bottle)",
    "brand": "Lizol",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0193",
    "modelNumber": "MOD-0193",
    "description": "Lizol Disinfectant Surface & Floor Cleaner Citrus (2L Bottle) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Lizol",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lizol",
      "floor cleaner",
      "disinfectant cleaner 2l"
    ],
    "basePrice": 345,
    "mrp": 410,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-4-harpic-power-plus-original-dis",
    "name": "Harpic Power Plus Original Disinfectant Toilet Cleaner (1L)",
    "brand": "Harpic",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0194",
    "modelNumber": "MOD-0194",
    "description": "Harpic Power Plus Original Disinfectant Toilet Cleaner (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Harpic",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "harpic",
      "toilet cleaner",
      "harpic 1l",
      "bathroom cleaner"
    ],
    "basePrice": 190,
    "mrp": 225,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-5-colin-glass-and-surface-cleane",
    "name": "Colin Glass and Surface Cleaner Spray Bottle (500ml)",
    "brand": "Colin",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0195",
    "modelNumber": "MOD-0195",
    "description": "Colin Glass and Surface Cleaner Spray Bottle (500ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Colin",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "colin spray",
      "glass cleaner",
      "window cleaner"
    ],
    "basePrice": 98,
    "mrp": 115,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-6-ariel-complete-matic-liquid-de",
    "name": "Ariel Complete Matic Liquid Detergent Front & Top Load (1L)",
    "brand": "Ariel",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0196",
    "modelNumber": "MOD-0196",
    "description": "Ariel Complete Matic Liquid Detergent Front & Top Load (1L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Ariel",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ariel liquid",
      "matic detergent liquid",
      "washing liquid"
    ],
    "basePrice": 220,
    "mrp": 260,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "name": "Scotch-Brite Heavy Duty Scrub Sponge Pad (Pack of 4)",
    "brand": "Scotch-Brite / 3M",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0197",
    "modelNumber": "MOD-0197",
    "description": "Scotch-Brite Heavy Duty Scrub Sponge Pad (Pack of 4) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Scotch-Brite / 3M",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "scotch brite",
      "scrub pad",
      "dish sponge",
      "bartan scrub"
    ],
    "basePrice": 115,
    "mrp": 140,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-8-good-knight-gold-flash-liquid-",
    "name": "Good Knight Gold Flash Liquid Mosquito Vaporizer Refill (Pack of 2)",
    "brand": "Good Knight",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0198",
    "modelNumber": "MOD-0198",
    "description": "Good Knight Gold Flash Liquid Mosquito Vaporizer Refill (Pack of 2) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Good Knight",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "good knight",
      "mosquito refill",
      "all out refill"
    ],
    "basePrice": 145,
    "mrp": 175,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-9-comfort-after-wash-morning-fre",
    "name": "Comfort After Wash Morning Fresh Fabric Conditioner (860ml)",
    "brand": "Comfort",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0199",
    "modelNumber": "MOD-0199",
    "description": "Comfort After Wash Morning Fresh Fabric Conditioner (860ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Comfort",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "comfort liquid",
      "fabric softener",
      "clothes conditioner"
    ],
    "basePrice": 199,
    "mrp": 235,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-grocery-10-hit-flying-insect-killer-mosqu",
    "name": "Hit Flying Insect Killer Mosquito & Fly Spray (400ml)",
    "brand": "Hit / Godrej",
    "categoryId": "cat-grocery",
    "subcategory": "Cleaning & Household",
    "sku": "SKU-GRO-0200",
    "modelNumber": "MOD-0200",
    "description": "Hit Flying Insect Killer Mosquito & Fly Spray (400ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Kirana & Daily Needs",
      "Subcategory": "Cleaning & Household",
      "Brand": "Hit / Godrej",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hit spray",
      "kala hit",
      "mosquito spray"
    ],
    "basePrice": 195,
    "mrp": 230,
    "isMedicine": false,
    "tags": [
      "Kirana & Daily Needs",
      "Cleaning & Household",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-1-stanley-12-piece-cushion-grip-",
    "name": "Stanley 12-Piece Cushion Grip Magnetic Screwdriver & Hand Toolset",
    "brand": "Stanley",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0201",
    "modelNumber": "MOD-0201",
    "description": "Stanley 12-Piece Cushion Grip Magnetic Screwdriver & Hand Toolset with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Stanley",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "stanley screwdriver",
      "tools",
      "hand tools",
      "magnetic screwdriver set"
    ],
    "basePrice": 899,
    "mrp": 1299,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-2-bosch-gsb-500w-professional-im",
    "name": "Bosch GSB 500W Professional Impact Drill Tool Kit with 100 Accessories",
    "brand": "Bosch",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0202",
    "modelNumber": "MOD-0202",
    "description": "Bosch GSB 500W Professional Impact Drill Tool Kit with 100 Accessories with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Bosch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bosch drill",
      "impact drill",
      "gsb 500",
      "power tool kit",
      "drill machine"
    ],
    "basePrice": 3450,
    "mrp": 4200,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-3-taparia-8-inch-steel-combinati",
    "name": "Taparia 8-Inch Steel Combination Pliers with Insulated Grip",
    "brand": "Taparia",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0203",
    "modelNumber": "MOD-0203",
    "description": "Taparia 8-Inch Steel Combination Pliers with Insulated Grip with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Taparia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "taparia plier",
      "combination pliers",
      "hand plier",
      "electrician tool"
    ],
    "basePrice": 245,
    "mrp": 310,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-4-taparia-10-inch-heavy-duty-adj",
    "name": "Taparia 10-Inch Heavy Duty Adjustable Spanner Wrench",
    "brand": "Taparia",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0204",
    "modelNumber": "MOD-0204",
    "description": "Taparia 10-Inch Heavy Duty Adjustable Spanner Wrench with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Taparia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "adjustable wrench",
      "slide wrench",
      "spanner",
      "taparia wrench"
    ],
    "basePrice": 390,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-5-bosch-gws-600w-professional-4-",
    "name": "Bosch GWS 600W Professional 4-Inch Angle Grinder Machine",
    "brand": "Bosch",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0205",
    "modelNumber": "MOD-0205",
    "description": "Bosch GWS 600W Professional 4-Inch Angle Grinder Machine with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Bosch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "angle grinder",
      "bosch cutter",
      "grinding machine",
      "cutter machine"
    ],
    "basePrice": 2499,
    "mrp": 3100,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-6-stanley-5-meter-steel-metric-m",
    "name": "Stanley 5-Meter Steel Metric Measuring Tape with Locking Mechanism",
    "brand": "Stanley",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0206",
    "modelNumber": "MOD-0206",
    "description": "Stanley 5-Meter Steel Metric Measuring Tape with Locking Mechanism with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Stanley",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "measuring tape",
      "stanley 5m tape",
      "inch tape",
      "survey tape"
    ],
    "basePrice": 199,
    "mrp": 290,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-7-taparia-500g-drop-forged-carbo",
    "name": "Taparia 500g Drop Forged Carbon Steel Claw Hammer with Fiberglass Handle",
    "brand": "Taparia",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0207",
    "modelNumber": "MOD-0207",
    "description": "Taparia 500g Drop Forged Carbon Steel Claw Hammer with Fiberglass Handle with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Taparia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "claw hammer",
      "hathoda",
      "taparia hammer",
      "carpenter hammer"
    ],
    "basePrice": 299,
    "mrp": 390,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-8-stanley-9-piece-hex-ball-end-a",
    "name": "Stanley 9-Piece Hex Ball-End Allen Key Keyring Set Metric",
    "brand": "Stanley",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0208",
    "modelNumber": "MOD-0208",
    "description": "Stanley 9-Piece Hex Ball-End Allen Key Keyring Set Metric with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Stanley",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "allen key",
      "hex key set",
      "stanley allen key",
      "l key"
    ],
    "basePrice": 315,
    "mrp": 420,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-9-dongcheng-800w-rotary-hammer-2",
    "name": "Dongcheng 800W Rotary Hammer 26mm Heavy Drilling Machine",
    "brand": "Dongcheng",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0209",
    "modelNumber": "MOD-0209",
    "description": "Dongcheng 800W Rotary Hammer 26mm Heavy Drilling Machine with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Dongcheng",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "rotary hammer",
      "heavy drill",
      "concrete drill machine"
    ],
    "basePrice": 3199,
    "mrp": 3999,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-10-taparia-86-piece-master-socket",
    "name": "Taparia 86-Piece Master Socket & Ratchet Wrench Tool Set Case",
    "brand": "Taparia",
    "categoryId": "cat-hardware",
    "subcategory": "Hand & Power Tools",
    "sku": "SKU-HAR-0210",
    "modelNumber": "MOD-0210",
    "description": "Taparia 86-Piece Master Socket & Ratchet Wrench Tool Set Case with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Hand & Power Tools",
      "Brand": "Taparia",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "socket set",
      "ratchet wrench",
      "mechanic toolkit",
      "taparia set"
    ],
    "basePrice": 3890,
    "mrp": 4950,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Hand & Power Tools",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-1-havells-lifeline-plus-1-5-sq-m",
    "name": "Havells LifeLine Plus 1.5 sq mm Single Core FR-LSH Copper Wire 90m (Red)",
    "brand": "Havells",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0211",
    "modelNumber": "MOD-0211",
    "description": "Havells LifeLine Plus 1.5 sq mm Single Core FR-LSH Copper Wire 90m (Red) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Havells",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "havells wire",
      "1.5 sq mm wire",
      "copper wire",
      "house wiring wire"
    ],
    "basePrice": 1790,
    "mrp": 2150,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-2-polycab-optima-plus-2-5-sq-mm-",
    "name": "Polycab Optima Plus 2.5 sq mm Flame Retardant Copper Wire 90m (Blue)",
    "brand": "Polycab",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0212",
    "modelNumber": "MOD-0212",
    "description": "Polycab Optima Plus 2.5 sq mm Flame Retardant Copper Wire 90m (Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Polycab",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "polycab wire",
      "2.5 sq mm wire",
      "ac wiring wire",
      "electric cable"
    ],
    "basePrice": 2850,
    "mrp": 3400,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-3-anchor-roma-classic-6a-1-way-m",
    "name": "Anchor Roma Classic 6A 1-Way Modular White Light Switch (Pack of 10)",
    "brand": "Anchor by Panasonic",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0213",
    "modelNumber": "MOD-0213",
    "description": "Anchor Roma Classic 6A 1-Way Modular White Light Switch (Pack of 10) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Anchor by Panasonic",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "anchor roma",
      "modular switch",
      "6a switch",
      "light switch"
    ],
    "basePrice": 290,
    "mrp": 380,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-4-anchor-roma-16a-3-pin-power-so",
    "name": "Anchor Roma 16A 3-Pin Power Socket with Shutter (Pack of 5)",
    "brand": "Anchor by Panasonic",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0214",
    "modelNumber": "MOD-0214",
    "description": "Anchor Roma 16A 3-Pin Power Socket with Shutter (Pack of 5) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Anchor by Panasonic",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "16a socket",
      "power socket",
      "roma socket",
      "plug socket"
    ],
    "basePrice": 360,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-5-havells-9w-cool-day-white-b22-",
    "name": "Havells 9W Cool Day White B22 Base LED Bulb (Pack of 4)",
    "brand": "Havells",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0215",
    "modelNumber": "MOD-0215",
    "description": "Havells 9W Cool Day White B22 Base LED Bulb (Pack of 4) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Havells",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "led bulb",
      "havells bulb",
      "9w led",
      "b22 bulb"
    ],
    "basePrice": 360,
    "mrp": 520,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-6-schneider-electric-acti9-32a-d",
    "name": "Schneider Electric Acti9 32A Double Pole MCB C-Curve",
    "brand": "Schneider Electric",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0216",
    "modelNumber": "MOD-0216",
    "description": "Schneider Electric Acti9 32A Double Pole MCB C-Curve with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Schneider Electric",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "mcb",
      "schneider mcb",
      "32a double pole",
      "circuit breaker"
    ],
    "basePrice": 540,
    "mrp": 690,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-7-orient-electric-1200mm-apex-fx",
    "name": "Orient Electric 1200mm Apex-FX High Speed Ceiling Fan (Brown)",
    "brand": "Orient",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0217",
    "modelNumber": "MOD-0217",
    "description": "Orient Electric 1200mm Apex-FX High Speed Ceiling Fan (Brown) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Orient",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ceiling fan",
      "orient fan",
      "high speed fan",
      "pankha"
    ],
    "basePrice": 1699,
    "mrp": 2190,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-8-luminous-zelio-1100-pure-sine-",
    "name": "Luminous Zelio+ 1100 Pure Sine Wave Home UPS Inverter (900VA / 12V)",
    "brand": "Luminous",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0218",
    "modelNumber": "MOD-0218",
    "description": "Luminous Zelio+ 1100 Pure Sine Wave Home UPS Inverter (900VA / 12V) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Luminous",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "inverter",
      "luminous zelio",
      "sine wave inverter",
      "home ups"
    ],
    "basePrice": 5890,
    "mrp": 7490,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-9-anchor-pvc-self-adhesive-elect",
    "name": "Anchor PVC Self-Adhesive Electrical Insulation Tape (Pack of 5)",
    "brand": "Anchor",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0219",
    "modelNumber": "MOD-0219",
    "description": "Anchor PVC Self-Adhesive Electrical Insulation Tape (Pack of 5) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "Anchor",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "electrical tape",
      "wire tape",
      "black tape",
      "anchor tape"
    ],
    "basePrice": 70,
    "mrp": 90,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-10-gm-4-outlet-heavy-duty-spike-g",
    "name": "GM 4-Outlet Heavy Duty Spike Guard Extension Board with 2M Cord",
    "brand": "GM Modular",
    "categoryId": "cat-hardware",
    "subcategory": "Electricals & Wiring",
    "sku": "SKU-HAR-0220",
    "modelNumber": "MOD-0220",
    "description": "GM 4-Outlet Heavy Duty Spike Guard Extension Board with 2M Cord with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Electricals & Wiring",
      "Brand": "GM Modular",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "extension board",
      "spike guard",
      "multi plug board",
      "gm extension"
    ],
    "basePrice": 480,
    "mrp": 690,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Electricals & Wiring",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-1-astral-cpvc-pro-1-inch-pipe-cl",
    "name": "Astral CPVC Pro 1-Inch Pipe Class 1 SDR 11 (3-Meter Length)",
    "brand": "Astral Pipes",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0221",
    "modelNumber": "MOD-0221",
    "description": "Astral CPVC Pro 1-Inch Pipe Class 1 SDR 11 (3-Meter Length) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Astral Pipes",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cpvc pipe",
      "astral pipe",
      "1 inch water pipe",
      "plumbing pipe"
    ],
    "basePrice": 395,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-2-supreme-upvc-3-4-inch-ball-val",
    "name": "Supreme UPVC 3/4-Inch Ball Valve Brass Threaded",
    "brand": "Supreme",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0222",
    "modelNumber": "MOD-0222",
    "description": "Supreme UPVC 3/4-Inch Ball Valve Brass Threaded with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Supreme",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ball valve",
      "water valve",
      "supreme pipe fitting"
    ],
    "basePrice": 220,
    "mrp": 290,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-3-hindware-f160013-brass-pillar-",
    "name": "Hindware F160013 Brass Pillar Tap with Chrome Plating",
    "brand": "Hindware",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0223",
    "modelNumber": "MOD-0223",
    "description": "Hindware F160013 Brass Pillar Tap with Chrome Plating with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Hindware",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "washbasin tap",
      "pillar tap",
      "hindware tap",
      "bathroom fitting"
    ],
    "basePrice": 890,
    "mrp": 1190,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-4-cera-2-in-1-wall-mixer-with-pr",
    "name": "Cera 2-in-1 Wall Mixer with Provision for Hand Shower",
    "brand": "Cera",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0224",
    "modelNumber": "MOD-0224",
    "description": "Cera 2-in-1 Wall Mixer with Provision for Hand Shower with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Cera",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wall mixer",
      "cera tap",
      "bathroom mixer",
      "shower tap"
    ],
    "basePrice": 2690,
    "mrp": 3450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-5-astral-bondtite-solvent-cement",
    "name": "Astral Bondtite Solvent Cement for CPVC Pipe Joint (118ml Can)",
    "brand": "Astral",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0225",
    "modelNumber": "MOD-0225",
    "description": "Astral Bondtite Solvent Cement for CPVC Pipe Joint (118ml Can) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Astral",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cpvc solvent",
      "pipe glue",
      "astral cement",
      "pipe joint"
    ],
    "basePrice": 125,
    "mrp": 160,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-6-kohler-multi-flow-chrome-overh",
    "name": "Kohler Multi-Flow Chrome Overhead Rain Shower with Arm",
    "brand": "Kohler",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0226",
    "modelNumber": "MOD-0226",
    "description": "Kohler Multi-Flow Chrome Overhead Rain Shower with Arm with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Kohler",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "rain shower",
      "overhead shower",
      "kohler shower"
    ],
    "basePrice": 2190,
    "mrp": 2990,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-7-supreme-4-inch-swr-pvc-drainag",
    "name": "Supreme 4-Inch SWR PVC Drainage Pipe with Rubber Ring (10ft)",
    "brand": "Supreme",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0227",
    "modelNumber": "MOD-0227",
    "description": "Supreme 4-Inch SWR PVC Drainage Pipe with Rubber Ring (10ft) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Supreme",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "drainage pipe",
      "swr pipe",
      "4 inch pvc pipe"
    ],
    "basePrice": 540,
    "mrp": 680,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-8-pidilite-m-seal-epoxy-compound",
    "name": "Pidilite M-Seal Epoxy Compound for Water Leakage Sealing (100g)",
    "brand": "Pidilite",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0228",
    "modelNumber": "MOD-0228",
    "description": "Pidilite M-Seal Epoxy Compound for Water Leakage Sealing (100g) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Pidilite",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "m seal",
      "epoxy seal",
      "pipe leak seal",
      "pidilite mseal"
    ],
    "basePrice": 30,
    "mrp": 35,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-9-ptfe-teflon-pipe-thread-sealin",
    "name": "PTFE Teflon Pipe Thread Sealing Tape (Pack of 10 Rolls)",
    "brand": "Champion",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0229",
    "modelNumber": "MOD-0229",
    "description": "PTFE Teflon Pipe Thread Sealing Tape (Pack of 10 Rolls) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Champion",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "teflon tape",
      "thread seal tape",
      "plumbing tape"
    ],
    "basePrice": 110,
    "mrp": 150,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-10-jaquar-health-faucet-with-1-2m",
    "name": "Jaquar Health Faucet with 1.2M Flexible Stainless Steel Hose & Hook",
    "brand": "Jaquar",
    "categoryId": "cat-hardware",
    "subcategory": "Plumbing & Pipes",
    "sku": "SKU-HAR-0230",
    "modelNumber": "MOD-0230",
    "description": "Jaquar Health Faucet with 1.2M Flexible Stainless Steel Hose & Hook with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Plumbing & Pipes",
      "Brand": "Jaquar",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "health faucet",
      "jet spray",
      "jaquar jet",
      "toilet spray"
    ],
    "basePrice": 1120,
    "mrp": 1450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Plumbing & Pipes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-1-asian-paints-apex-ultima-exter",
    "name": "Asian Paints Apex Ultima Exterior Emulsion Paint (4L Bucket)",
    "brand": "Asian Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0231",
    "modelNumber": "MOD-0231",
    "description": "Asian Paints Apex Ultima Exterior Emulsion Paint (4L Bucket) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Asian Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "asian paints",
      "apex ultima",
      "exterior paint",
      "weatherproof paint"
    ],
    "basePrice": 1540,
    "mrp": 1850,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-2-asian-paints-royale-luxury-int",
    "name": "Asian Paints Royale Luxury Interior Matt Emulsion Paint (4L)",
    "brand": "Asian Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0232",
    "modelNumber": "MOD-0232",
    "description": "Asian Paints Royale Luxury Interior Matt Emulsion Paint (4L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Asian Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "royale luxury",
      "interior paint",
      "wall paint",
      "asian paints royale"
    ],
    "basePrice": 1790,
    "mrp": 2150,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-3-birla-white-wall-care-putty-wa",
    "name": "Birla White Wall Care Putty Water Resistant (20kg Bag)",
    "brand": "Birla White",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0233",
    "modelNumber": "MOD-0233",
    "description": "Birla White Wall Care Putty Water Resistant (20kg Bag) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Birla White",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wall putty",
      "birla white",
      "putty 20kg",
      "wall base"
    ],
    "basePrice": 690,
    "mrp": 850,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-4-asian-paints-tractor-emulsion-",
    "name": "Asian Paints Tractor Emulsion Interior Wall Paint (10L Bucket)",
    "brand": "Asian Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0234",
    "modelNumber": "MOD-0234",
    "description": "Asian Paints Tractor Emulsion Interior Wall Paint (10L Bucket) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Asian Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tractor emulsion",
      "interior emulsion",
      "white wall paint"
    ],
    "basePrice": 1590,
    "mrp": 1950,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-5-berger-walmasta-exterior-antif",
    "name": "Berger Walmasta Exterior Antifungal Emulsion (10L)",
    "brand": "Berger Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0235",
    "modelNumber": "MOD-0235",
    "description": "Berger Walmasta Exterior Antifungal Emulsion (10L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Berger Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "berger paint",
      "walmasta",
      "exterior emulsion 10l"
    ],
    "basePrice": 1499,
    "mrp": 1890,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-6-dr-fixit-101-lw-waterproofing-",
    "name": "Dr. Fixit 101 LW+ Waterproofing Liquid Additive for Concrete (5L)",
    "brand": "Dr. Fixit",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0236",
    "modelNumber": "MOD-0236",
    "description": "Dr. Fixit 101 LW+ Waterproofing Liquid Additive for Concrete (5L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Dr. Fixit",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dr fixit 101",
      "waterproofing liquid",
      "roof water proofing"
    ],
    "basePrice": 599,
    "mrp": 750,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-7-asian-paints-decoprime-wall-pr",
    "name": "Asian Paints Decoprime Wall Primer Solvent Thinnable (4L)",
    "brand": "Asian Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0237",
    "modelNumber": "MOD-0237",
    "description": "Asian Paints Decoprime Wall Primer Solvent Thinnable (4L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Asian Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wall primer",
      "decoprime",
      "asian paints primer"
    ],
    "basePrice": 620,
    "mrp": 780,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-8-asian-paints-9-inch-soft-grip-",
    "name": "Asian Paints 9-Inch Soft Grip Roller Brush with Tray for Wall Painting",
    "brand": "Asian Paints",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0238",
    "modelNumber": "MOD-0238",
    "description": "Asian Paints 9-Inch Soft Grip Roller Brush with Tray for Wall Painting with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Asian Paints",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "paint roller",
      "roller brush",
      "wall painting roller"
    ],
    "basePrice": 260,
    "mrp": 350,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-9-fevicol-sh-synthetic-resin-adh",
    "name": "Fevicol SH Synthetic Resin Adhesive for Woodworking (1kg Jar)",
    "brand": "Fevicol / Pidilite",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0239",
    "modelNumber": "MOD-0239",
    "description": "Fevicol SH Synthetic Resin Adhesive for Woodworking (1kg Jar) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Fevicol / Pidilite",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fevicol sh",
      "wood glue",
      "adhesive jar 1kg"
    ],
    "basePrice": 240,
    "mrp": 290,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-10-dr-fixit-raincoat-waterproof-e",
    "name": "Dr. Fixit Raincoat Waterproof Exterior Protective Coating (4L)",
    "brand": "Dr. Fixit",
    "categoryId": "cat-hardware",
    "subcategory": "Paints & Wall Care",
    "sku": "SKU-HAR-0240",
    "modelNumber": "MOD-0240",
    "description": "Dr. Fixit Raincoat Waterproof Exterior Protective Coating (4L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Paints & Wall Care",
      "Brand": "Dr. Fixit",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "dr fixit raincoat",
      "waterproof exterior coat",
      "leakproof paint"
    ],
    "basePrice": 1320,
    "mrp": 1650,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Paints & Wall Care",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-1-godrej-nav-tal-7-levers-high-s",
    "name": "Godrej Nav-Tal 7 Levers High Security Brass Padlock with 3 Keys",
    "brand": "Godrej",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0241",
    "modelNumber": "MOD-0241",
    "description": "Godrej Nav-Tal 7 Levers High Security Brass Padlock with 3 Keys with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Godrej",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "godrej lock",
      "navtal lock",
      "brass padlock",
      "tala",
      "door lock"
    ],
    "basePrice": 499,
    "mrp": 620,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-2-europa-high-security-rim-main-",
    "name": "Europa High Security Rim Main Door Lock with 3 Dimple Keys",
    "brand": "Europa",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0242",
    "modelNumber": "MOD-0242",
    "description": "Europa High Security Rim Main Door Lock with 3 Dimple Keys with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Europa",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "europa door lock",
      "main door lock",
      "night latch"
    ],
    "basePrice": 1890,
    "mrp": 2450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-3-heavy-duty-stainless-steel-304",
    "name": "Heavy Duty Stainless Steel 304 Bearing Door Hinges 4-Inch (Pack of 3 Pairs)",
    "brand": "Dorset",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0243",
    "modelNumber": "MOD-0243",
    "description": "Heavy Duty Stainless Steel 304 Bearing Door Hinges 4-Inch (Pack of 3 Pairs) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Dorset",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "door hinges",
      "ss hinges",
      "kabza",
      "4 inch hinges"
    ],
    "basePrice": 580,
    "mrp": 750,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-4-zinc-plated-steel-self-drillin",
    "name": "Zinc Plated Steel Self-Drilling Drywall Screws 1.5-Inch (Box of 500)",
    "brand": "ForgeMaster",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0244",
    "modelNumber": "MOD-0244",
    "description": "Zinc Plated Steel Self-Drilling Drywall Screws 1.5-Inch (Box of 500) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "ForgeMaster",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "drywall screws",
      "screws box 500",
      "hardware screws",
      "pech"
    ],
    "basePrice": 340,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-5-godrej-classic-cylindrical-sta",
    "name": "Godrej Classic Cylindrical Stainless Steel Bedroom Door Lock",
    "brand": "Godrej",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0245",
    "modelNumber": "MOD-0245",
    "description": "Godrej Classic Cylindrical Stainless Steel Bedroom Door Lock with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Godrej",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cylindrical lock",
      "godrej round lock",
      "bedroom lock"
    ],
    "basePrice": 950,
    "mrp": 1250,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-6-fischer-nylon-wall-plugs-rawl-",
    "name": "Fischer Nylon Wall Plugs Rawl Plugs 8mm with Screws (Pack of 100)",
    "brand": "Fischer",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0246",
    "modelNumber": "MOD-0246",
    "description": "Fischer Nylon Wall Plugs Rawl Plugs 8mm with Screws (Pack of 100) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Fischer",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wall plugs",
      "gitti",
      "rawl plugs",
      "fischer 8mm"
    ],
    "basePrice": 230,
    "mrp": 320,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-7-ozone-hydraulic-automatic-alum",
    "name": "Ozone Hydraulic Automatic Aluminum Door Closer 60kg Load",
    "brand": "Ozone",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0247",
    "modelNumber": "MOD-0247",
    "description": "Ozone Hydraulic Automatic Aluminum Door Closer 60kg Load with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Ozone",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "door closer",
      "hydraulic door closer",
      "ozone door"
    ],
    "basePrice": 1090,
    "mrp": 1450,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-8-heavy-duty-solid-brass-tower-b",
    "name": "Heavy Duty Solid Brass Tower Bolt Door Latch 8-Inch",
    "brand": "Dorset",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0248",
    "modelNumber": "MOD-0248",
    "description": "Heavy Duty Solid Brass Tower Bolt Door Latch 8-Inch with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Dorset",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "tower bolt",
      "chitkani",
      "door latch",
      "brass bolt"
    ],
    "basePrice": 310,
    "mrp": 420,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-9-high-tensile-grade-8-8-hex-bol",
    "name": "High Tensile Grade 8.8 Hex Bolts with Nuts M10 x 50mm (Pack of 50)",
    "brand": "Unbrako",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0249",
    "modelNumber": "MOD-0249",
    "description": "High Tensile Grade 8.8 Hex Bolts with Nuts M10 x 50mm (Pack of 50) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Unbrako",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "hex bolts",
      "nut bolt set",
      "m10 bolts",
      "unbrako"
    ],
    "basePrice": 370,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-hardware-10-dorset-stainless-steel-main-do",
    "name": "Dorset Stainless Steel Main Door Pull Handle 12-Inch Pair",
    "brand": "Dorset",
    "categoryId": "cat-hardware",
    "subcategory": "Fasteners & Hardware",
    "sku": "SKU-HAR-0250",
    "modelNumber": "MOD-0250",
    "description": "Dorset Stainless Steel Main Door Pull Handle 12-Inch Pair with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Hardware & Sanitary",
      "Subcategory": "Fasteners & Hardware",
      "Brand": "Dorset",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "door handle",
      "pull handle",
      "ss handle"
    ],
    "basePrice": 850,
    "mrp": 1150,
    "isMedicine": false,
    "tags": [
      "Hardware & Sanitary",
      "Fasteners & Hardware",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-1-classmate-long-notebook-single",
    "name": "Classmate Long Notebook Single Line 172 Pages (Pack of 6)",
    "brand": "Classmate / ITC",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0251",
    "modelNumber": "MOD-0251",
    "description": "Classmate Long Notebook Single Line 172 Pages (Pack of 6) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Classmate / ITC",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "classmate notebook",
      "copy",
      "long notebook 6 pack",
      "registers",
      "school copy"
    ],
    "basePrice": 330,
    "mrp": 420,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-2-classmate-pulse-spiral-bound-n",
    "name": "Classmate Pulse Spiral Bound Notebook A4 Size 300 Pages (Pack of 2)",
    "brand": "Classmate",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0252",
    "modelNumber": "MOD-0252",
    "description": "Classmate Pulse Spiral Bound Notebook A4 Size 300 Pages (Pack of 2) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Classmate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "spiral notebook",
      "classmate pulse",
      "a4 spiral register"
    ],
    "basePrice": 310,
    "mrp": 390,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-3-navneet-youva-hard-bound-accou",
    "name": "Navneet Youva Hard Bound Accounting Cash Ledger Register 384 Pages",
    "brand": "Navneet",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0253",
    "modelNumber": "MOD-0253",
    "description": "Navneet Youva Hard Bound Accounting Cash Ledger Register 384 Pages with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Navneet",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "account register",
      "khata book",
      "hardbound register",
      "youva"
    ],
    "basePrice": 220,
    "mrp": 280,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-4-classmate-soft-cover-ruled-not",
    "name": "Classmate Soft Cover Ruled Notebook 120 Pages (Bundle of 12)",
    "brand": "Classmate",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0254",
    "modelNumber": "MOD-0254",
    "description": "Classmate Soft Cover Ruled Notebook 120 Pages (Bundle of 12) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Classmate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "small copy",
      "school notebooks 12 pack",
      "classmate copy"
    ],
    "basePrice": 380,
    "mrp": 480,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-5-camlin-kokuyo-spiral-drawing-b",
    "name": "Camlin Kokuyo Spiral Drawing Book A3 Size Cartridge Paper (36 Sheets)",
    "brand": "Camlin",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0255",
    "modelNumber": "MOD-0255",
    "description": "Camlin Kokuyo Spiral Drawing Book A3 Size Cartridge Paper (36 Sheets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Camlin",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "drawing book",
      "a3 drawing copy",
      "art book",
      "camlin drawing"
    ],
    "basePrice": 145,
    "mrp": 180,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-6-navneet-youva-practical-journa",
    "name": "Navneet Youva Practical Journal Ruled & Interleaf 160 Pages",
    "brand": "Navneet",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0256",
    "modelNumber": "MOD-0256",
    "description": "Navneet Youva Practical Journal Ruled & Interleaf 160 Pages with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Navneet",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "practical copy",
      "science journal",
      "interleaf copy"
    ],
    "basePrice": 75,
    "mrp": 95,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-7-factor-notes-weekly-planner-pr",
    "name": "Factor Notes Weekly Planner & Productivity Journal 200 Pages",
    "brand": "Factor Notes",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0257",
    "modelNumber": "MOD-0257",
    "description": "Factor Notes Weekly Planner & Productivity Journal 200 Pages with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Factor Notes",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "planner",
      "daily journal",
      "factor notes",
      "diary"
    ],
    "basePrice": 349,
    "mrp": 499,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-8-jk-cedar-executive-hardcover-r",
    "name": "JK Cedar Executive Hardcover Ruled Notebook Diary with Bookmark",
    "brand": "JK Paper",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0258",
    "modelNumber": "MOD-0258",
    "description": "JK Cedar Executive Hardcover Ruled Notebook Diary with Bookmark with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "JK Paper",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "executive diary",
      "office notebook",
      "hardcover diary"
    ],
    "basePrice": 195,
    "mrp": 260,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-9-classmate-geometry-practical-l",
    "name": "Classmate Geometry Practical Lab Record Book (80 Pages)",
    "brand": "Classmate",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0259",
    "modelNumber": "MOD-0259",
    "description": "Classmate Geometry Practical Lab Record Book (80 Pages) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Classmate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "geometry book",
      "lab record copy",
      "math copy"
    ],
    "basePrice": 50,
    "mrp": 65,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-10-navneet-graph-notebook-centime",
    "name": "Navneet Graph Notebook Centimeter Grid Paper (64 Pages)",
    "brand": "Navneet",
    "categoryId": "cat-stationery",
    "subcategory": "Notebooks & Registers",
    "sku": "SKU-STA-0260",
    "modelNumber": "MOD-0260",
    "description": "Navneet Graph Notebook Centimeter Grid Paper (64 Pages) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Notebooks & Registers",
      "Brand": "Navneet",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "graph copy",
      "graph book",
      "maths graph paper"
    ],
    "basePrice": 35,
    "mrp": 45,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Notebooks & Registers",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-1-parker-vector-matte-black-foun",
    "name": "Parker Vector Matte Black Fountain Pen with Gold Trim Gift Box",
    "brand": "Parker",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0261",
    "modelNumber": "MOD-0261",
    "description": "Parker Vector Matte Black Fountain Pen with Gold Trim Gift Box with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Parker",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "parker pen",
      "fountain pen",
      "vector pen",
      "gift pen",
      "luxury pen"
    ],
    "basePrice": 499,
    "mrp": 650,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-2-reynolds-045-fine-carbide-tip-",
    "name": "Reynolds 045 Fine Carbide Tip Blue Ball Pens (Box of 20)",
    "brand": "Reynolds",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0262",
    "modelNumber": "MOD-0262",
    "description": "Reynolds 045 Fine Carbide Tip Blue Ball Pens (Box of 20) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Reynolds",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "reynolds 045",
      "ball pen box",
      "blue pens 20 pack"
    ],
    "basePrice": 160,
    "mrp": 200,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-3-uniball-eye-ub-150-micro-0-5mm",
    "name": "Uniball Eye UB-150 Micro 0.5mm Rollerball Pens (Pack of 3 Blue)",
    "brand": "Uni-ball",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0263",
    "modelNumber": "MOD-0263",
    "description": "Uniball Eye UB-150 Micro 0.5mm Rollerball Pens (Pack of 3 Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Uni-ball",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "uniball eye",
      "roller pen",
      "waterproof ink pen"
    ],
    "basePrice": 225,
    "mrp": 270,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-4-doms-water-colour-cakes-24-vib",
    "name": "Doms Water Colour Cakes 24 Vibrant Shades with Brush",
    "brand": "Doms",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0264",
    "modelNumber": "MOD-0264",
    "description": "Doms Water Colour Cakes 24 Vibrant Shades with Brush with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Doms",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "water colour",
      "doms colour",
      "painting cake",
      "art colours"
    ],
    "basePrice": 120,
    "mrp": 150,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-5-faber-castell-24-tri-colour-tr",
    "name": "Faber-Castell 24 Tri Colour Triangular Grip Pencil Set",
    "brand": "Faber-Castell",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0265",
    "modelNumber": "MOD-0265",
    "description": "Faber-Castell 24 Tri Colour Triangular Grip Pencil Set with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Faber-Castell",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "colour pencils",
      "faber castell",
      "drawing pencils"
    ],
    "basePrice": 175,
    "mrp": 220,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-6-pilot-v5-liquid-ink-high-preci",
    "name": "Pilot V5 Liquid Ink High Precision Roller Ball Pen (Pack of 3)",
    "brand": "Pilot",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0266",
    "modelNumber": "MOD-0266",
    "description": "Pilot V5 Liquid Ink High Precision Roller Ball Pen (Pack of 3) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Pilot",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "pilot v5",
      "liquid ink pen",
      "precision pen"
    ],
    "basePrice": 195,
    "mrp": 240,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-7-doms-smart-drawing-kit-8-in-1-",
    "name": "Doms Smart Drawing Kit 8-in-1 Complete Art & Colouring Box",
    "brand": "Doms",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0267",
    "modelNumber": "MOD-0267",
    "description": "Doms Smart Drawing Kit 8-in-1 Complete Art & Colouring Box with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Doms",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "doms art kit",
      "colour kit",
      "drawing set",
      "kids colour box"
    ],
    "basePrice": 280,
    "mrp": 350,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-8-camlin-artist-acrylic-colour-1",
    "name": "Camlin Artist Acrylic Colour 12 Tubes Set (20ml Each)",
    "brand": "Camlin",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0268",
    "modelNumber": "MOD-0268",
    "description": "Camlin Artist Acrylic Colour 12 Tubes Set (20ml Each) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Camlin",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "acrylic colours",
      "camlin acrylic",
      "canvas paint"
    ],
    "basePrice": 360,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-9-cello-butterflow-classic-blue-",
    "name": "Cello Butterflow Classic Blue Ballpoint Pens (Jar of 20)",
    "brand": "Cello",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0269",
    "modelNumber": "MOD-0269",
    "description": "Cello Butterflow Classic Blue Ballpoint Pens (Jar of 20) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Cello",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cello butterflow",
      "smooth pen",
      "blue pen jar"
    ],
    "basePrice": 155,
    "mrp": 200,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-10-staedtler-mars-lumograph-profe",
    "name": "Staedtler Mars Lumograph Professional Art Sketching Graphite Pencils 6B-2H",
    "brand": "Staedtler",
    "categoryId": "cat-stationery",
    "subcategory": "Pens, Art & Drawing",
    "sku": "SKU-STA-0270",
    "modelNumber": "MOD-0270",
    "description": "Staedtler Mars Lumograph Professional Art Sketching Graphite Pencils 6B-2H with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Pens, Art & Drawing",
      "Brand": "Staedtler",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "sketching pencils",
      "staedtler",
      "graphite drawing pencils"
    ],
    "basePrice": 490,
    "mrp": 620,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Pens, Art & Drawing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-1-jk-copier-a4-paper-75-gsm-high",
    "name": "JK Copier A4 Paper 75 GSM High Speed Printing Ream (500 Sheets)",
    "brand": "JK Paper",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0271",
    "modelNumber": "MOD-0271",
    "description": "JK Copier A4 Paper 75 GSM High Speed Printing Ream (500 Sheets) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "JK Paper",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "jk copier a4",
      "xerox paper",
      "a4 rim 500 sheets",
      "printer paper"
    ],
    "basePrice": 310,
    "mrp": 380,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-2-kangaroo-heavy-duty-desktop-pa",
    "name": "Kangaroo Heavy Duty Desktop Paper Stapler (Model No. 10 with 1000 Pins)",
    "brand": "Kangaro",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0272",
    "modelNumber": "MOD-0272",
    "description": "Kangaroo Heavy Duty Desktop Paper Stapler (Model No. 10 with 1000 Pins) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Kangaro",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "kangaro stapler",
      "stapler machine",
      "staple pins"
    ],
    "basePrice": 125,
    "mrp": 160,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-3-casio-mj-120d-plus-desktop-che",
    "name": "Casio MJ-120D Plus Desktop Check & Correct Calculator (12 Digits)",
    "brand": "Casio",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0273",
    "modelNumber": "MOD-0273",
    "description": "Casio MJ-120D Plus Desktop Check & Correct Calculator (12 Digits) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Casio",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "casio calculator",
      "office calculator",
      "120d calculator",
      "hisab calculator"
    ],
    "basePrice": 440,
    "mrp": 545,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-4-kores-white-glow-dry-correctio",
    "name": "Kores White Glow Dry Correction Fluid Pen & Diluter Set",
    "brand": "Kores",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0274",
    "modelNumber": "MOD-0274",
    "description": "Kores White Glow Dry Correction Fluid Pen & Diluter Set with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Kores",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "whitener",
      "correction pen",
      "kores white"
    ],
    "basePrice": 65,
    "mrp": 85,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-5-kangaro-heavy-duty-2-hole-pape",
    "name": "Kangaro Heavy Duty 2-Hole Paper Punch Machine (DP-600)",
    "brand": "Kangaro",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0275",
    "modelNumber": "MOD-0275",
    "description": "Kangaro Heavy Duty 2-Hole Paper Punch Machine (DP-600) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Kangaro",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "punch machine",
      "kangaro punch",
      "hole puncher"
    ],
    "basePrice": 220,
    "mrp": 290,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-6-solo-premium-a4-button-file-fo",
    "name": "Solo Premium A4 Button File Folders with Index Label (Pack of 10)",
    "brand": "Solo",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0276",
    "modelNumber": "MOD-0276",
    "description": "Solo Premium A4 Button File Folders with Index Label (Pack of 10) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Solo",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "file folder",
      "solo file",
      "document folder a4"
    ],
    "basePrice": 185,
    "mrp": 250,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-7-scotch-3m-transparent-strong-a",
    "name": "Scotch 3M Transparent Strong Adhesive Tape with Dispenser (1-Inch x 25M)",
    "brand": "3M / Scotch",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0277",
    "modelNumber": "MOD-0277",
    "description": "Scotch 3M Transparent Strong Adhesive Tape with Dispenser (1-Inch x 25M) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "3M / Scotch",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "cello tape",
      "clear tape",
      "scotch tape dispenser"
    ],
    "basePrice": 95,
    "mrp": 120,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-8-casio-fx-991cw-scientific-calc",
    "name": "Casio FX-991CW Scientific Calculator for Engineering Students (540+ Functions)",
    "brand": "Casio",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0278",
    "modelNumber": "MOD-0278",
    "description": "Casio FX-991CW Scientific Calculator for Engineering Students (540+ Functions) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Casio",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "scientific calculator",
      "fx 991",
      "engineering calculator",
      "casio 991cw"
    ],
    "basePrice": 1399,
    "mrp": 1595,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-9-canon-pg-745-black-genuine-ink",
    "name": "Canon PG-745 Black Genuine Ink Cartridge for Pixma Printers",
    "brand": "Canon",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0279",
    "modelNumber": "MOD-0279",
    "description": "Canon PG-745 Black Genuine Ink Cartridge for Pixma Printers with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Canon",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "canon ink",
      "745 ink cartridge",
      "pixma ink",
      "printer ink"
    ],
    "basePrice": 990,
    "mrp": 1195,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-10-kangaro-chrome-plated-paper-ge",
    "name": "Kangaro Chrome Plated Paper Gem Clips (Box of 100 Clips)",
    "brand": "Kangaro",
    "categoryId": "cat-stationery",
    "subcategory": "Office & Printing",
    "sku": "SKU-STA-0280",
    "modelNumber": "MOD-0280",
    "description": "Kangaro Chrome Plated Paper Gem Clips (Box of 100 Clips) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Office & Printing",
      "Brand": "Kangaro",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "paper clips",
      "allpin",
      "gem clips",
      "kangaro clips"
    ],
    "basePrice": 45,
    "mrp": 60,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Office & Printing",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-1-skybags-bravo-3-compartment-wa",
    "name": "Skybags Bravo 3 Compartment Water Resistant School Backpack (32L)",
    "brand": "Skybags",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0281",
    "modelNumber": "MOD-0281",
    "description": "Skybags Bravo 3 Compartment Water Resistant School Backpack (32L) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Skybags",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "school bag",
      "skybags backpack",
      "student bag",
      "tuition bag"
    ],
    "basePrice": 1499,
    "mrp": 2199,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-2-american-tourister-casual-32l-",
    "name": "American Tourister Casual 32L Laptop & College Backpack (Teal Blue)",
    "brand": "American Tourister",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0282",
    "modelNumber": "MOD-0282",
    "description": "American Tourister Casual 32L Laptop & College Backpack (Teal Blue) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "American Tourister",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "college bag",
      "laptop backpack",
      "american tourister"
    ],
    "basePrice": 1699,
    "mrp": 2490,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-3-camlin-kokuyo-scholar-geometry",
    "name": "Camlin Kokuyo Scholar Geometry Mathematical Instrument Box",
    "brand": "Camlin",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0283",
    "modelNumber": "MOD-0283",
    "description": "Camlin Kokuyo Scholar Geometry Mathematical Instrument Box with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Camlin",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "geometry box",
      "compass box",
      "camlin scholar",
      "instrument box"
    ],
    "basePrice": 145,
    "mrp": 180,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-4-milton-thermosteel-flip-lid-in",
    "name": "Milton Thermosteel Flip Lid Insulated Hot & Cold Kids Water Bottle (500ml)",
    "brand": "Milton",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0284",
    "modelNumber": "MOD-0284",
    "description": "Milton Thermosteel Flip Lid Insulated Hot & Cold Kids Water Bottle (500ml) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Milton",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "milton bottle",
      "thermosteel water bottle",
      "school bottle"
    ],
    "basePrice": 549,
    "mrp": 699,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-5-classmate-victor-metal-geometr",
    "name": "Classmate Victor Metal Geometry Box with Mechanical Pencil",
    "brand": "Classmate",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0285",
    "modelNumber": "MOD-0285",
    "description": "Classmate Victor Metal Geometry Box with Mechanical Pencil with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Classmate",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "classmate geometry box",
      "victor compass box"
    ],
    "basePrice": 175,
    "mrp": 220,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-6-cello-maxfresh-stainless-steel",
    "name": "Cello Maxfresh Stainless Steel 3-Container Insulated Lunch Box with Bag",
    "brand": "Cello",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0286",
    "modelNumber": "MOD-0286",
    "description": "Cello Maxfresh Stainless Steel 3-Container Insulated Lunch Box with Bag with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Cello",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lunch box",
      "tiffin box",
      "cello tiffin",
      "school lunch box"
    ],
    "basePrice": 620,
    "mrp": 850,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-7-safari-seek-35l-water-resistan",
    "name": "Safari Seek 35L Water Resistant School Bag with Rain Cover",
    "brand": "Safari",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0287",
    "modelNumber": "MOD-0287",
    "description": "Safari Seek 35L Water Resistant School Bag with Rain Cover with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Safari",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "safari bag",
      "safari backpack",
      "school bag with rain cover"
    ],
    "basePrice": 1790,
    "mrp": 2690,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-8-faber-castell-pvc-free-dust-fr",
    "name": "Faber-Castell PVC Free Dust-Free Vinyl Erasers (Pack of 20)",
    "brand": "Faber-Castell",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0288",
    "modelNumber": "MOD-0288",
    "description": "Faber-Castell PVC Free Dust-Free Vinyl Erasers (Pack of 20) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Faber-Castell",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "eraser pack",
      "rubber",
      "dust free eraser",
      "faber castell eraser"
    ],
    "basePrice": 80,
    "mrp": 100,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-9-doms-neon-apsara-platinum-extr",
    "name": "Doms Neon Apsara Platinum Extra Dark Pencils (Pack of 10 with Sharpener)",
    "brand": "Doms",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0289",
    "modelNumber": "MOD-0289",
    "description": "Doms Neon Apsara Platinum Extra Dark Pencils (Pack of 10 with Sharpener) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Doms",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "pencil box",
      "doms pencil",
      "extra dark pencil"
    ],
    "basePrice": 55,
    "mrp": 70,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-10-funskool-hardtop-embossed-3d-a",
    "name": "Funskool Hardtop Embossed 3D Astronaut Pencil Case Pouch",
    "brand": "Funskool",
    "categoryId": "cat-stationery",
    "subcategory": "School Bags & Boxes",
    "sku": "SKU-STA-0290",
    "modelNumber": "MOD-0290",
    "description": "Funskool Hardtop Embossed 3D Astronaut Pencil Case Pouch with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "School Bags & Boxes",
      "Brand": "Funskool",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "pencil pouch",
      "hardtop pencil case",
      "pencil box for kids"
    ],
    "basePrice": 290,
    "mrp": 399,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "School Bags & Boxes",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-1-lucent-s-general-knowledge-sam",
    "name": "Lucent's General Knowledge (Samanya Gyan) Latest Edition 2026",
    "brand": "Lucent Publications",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0291",
    "modelNumber": "MOD-0291",
    "description": "Lucent's General Knowledge (Samanya Gyan) Latest Edition 2026 with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Lucent Publications",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "lucent gk",
      "samanya gyan",
      "gk book",
      "competitive exam",
      "ssc book"
    ],
    "basePrice": 280,
    "mrp": 360,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-2-quantitative-aptitude-for-comp",
    "name": "Quantitative Aptitude for Competitive Examinations by Dr. R.S. Aggarwal",
    "brand": "S. Chand",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0292",
    "modelNumber": "MOD-0292",
    "description": "Quantitative Aptitude for Competitive Examinations by Dr. R.S. Aggarwal with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "S. Chand",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "rs aggarwal",
      "quantitative aptitude",
      "maths book for ssc",
      "s chand"
    ],
    "basePrice": 620,
    "mrp": 799,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-3-a-modern-approach-to-verbal-no",
    "name": "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal",
    "brand": "S. Chand",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0293",
    "modelNumber": "MOD-0293",
    "description": "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "S. Chand",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "reasoning book",
      "verbal reasoning",
      "rs aggarwal reasoning"
    ],
    "basePrice": 680,
    "mrp": 850,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-4-ncert-indian-history-class-6-1",
    "name": "NCERT Indian History Class 6-12 Gist Summary for UPSC/BPSC Exams",
    "brand": "Arihant",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0294",
    "modelNumber": "MOD-0294",
    "description": "NCERT Indian History Class 6-12 Gist Summary for UPSC/BPSC Exams with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Arihant",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "ncert history",
      "upsc history",
      "bpsc book",
      "arihant ncert"
    ],
    "basePrice": 340,
    "mrp": 450,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-5-fast-track-objective-arithmeti",
    "name": "Fast Track Objective Arithmetic by Rajesh Verma",
    "brand": "Arihant Publications",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0295",
    "modelNumber": "MOD-0295",
    "description": "Fast Track Objective Arithmetic by Rajesh Verma with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Arihant Publications",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "fast track maths",
      "arihant arithmetic",
      "rajesh verma"
    ],
    "basePrice": 320,
    "mrp": 425,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-6-general-science-for-railway-ss",
    "name": "General Science for Railway & SSC Exams (Samanya Vigyan)",
    "brand": "Speedy Publications",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0296",
    "modelNumber": "MOD-0296",
    "description": "General Science for Railway & SSC Exams (Samanya Vigyan) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Speedy Publications",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "speedy railway",
      "general science book",
      "railway gk"
    ],
    "basePrice": 165,
    "mrp": 220,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-7-english-grammar-composition-by",
    "name": "English Grammar & Composition by Wren & Martin Multi-Colour Edition",
    "brand": "S. Chand",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0297",
    "modelNumber": "MOD-0297",
    "description": "English Grammar & Composition by Wren & Martin Multi-Colour Edition with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "S. Chand",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "wren and martin",
      "english grammar",
      "competitive english book"
    ],
    "basePrice": 390,
    "mrp": 499,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-8-oxford-student-atlas-for-india",
    "name": "Oxford Student Atlas for India Latest Comprehensive Edition",
    "brand": "Oxford University Press",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0298",
    "modelNumber": "MOD-0298",
    "description": "Oxford Student Atlas for India Latest Comprehensive Edition with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Oxford University Press",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "oxford atlas",
      "map book",
      "atlas for upsc",
      "geography atlas"
    ],
    "basePrice": 290,
    "mrp": 375,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-9-bpsc-bihar-special-gk-bihar-sa",
    "name": "BPSC Bihar Special GK (Bihar Samanya Parichay) by Dr. Manish Rannjan",
    "brand": "Prabhat Prakashan",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0299",
    "modelNumber": "MOD-0299",
    "description": "BPSC Bihar Special GK (Bihar Samanya Parichay) by Dr. Manish Rannjan with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Prabhat Prakashan",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "bihar gk",
      "bpsc bihar special",
      "manish rannjan",
      "prabhat"
    ],
    "basePrice": 260,
    "mrp": 350,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  },
  {
    "id": "prod-stationery-10-drishti-ias-current-affairs-ye",
    "name": "Drishti IAS Current Affairs Yearly Compilation Book (Hindi/English)",
    "brand": "Drishti Publications",
    "categoryId": "cat-stationery",
    "subcategory": "Competitive Books",
    "sku": "SKU-STA-0300",
    "modelNumber": "MOD-0300",
    "description": "Drishti IAS Current Affairs Yearly Compilation Book (Hindi/English) with 100% genuine warranty and immediate counter verification at local partner merchants.",
    "specifications": {
      "Category": "Stationery & Books",
      "Subcategory": "Competitive Books",
      "Brand": "Drishti Publications",
      "Warranty": "1 Year Standard Manufacturer Warranty"
    },
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    "keywords": [
      "drishti ias",
      "current affairs",
      "yearly current affairs book"
    ],
    "basePrice": 210,
    "mrp": 280,
    "isMedicine": false,
    "tags": [
      "Stationery & Books",
      "Competitive Books",
      "Local Stock"
    ]
  }
],
  inventory: [
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-1-honda-cb-shine-front-disc-brak",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-1-honda-cb-shine-front-disc-brak",
    "price": 409,
    "mrp": 499,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-1-honda-cb-shine-front-disc-brak",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-1-honda-cb-shine-front-disc-brak",
    "price": 439,
    "mrp": 499,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-1-honda-cb-shine-front-disc-brak",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-1-honda-cb-shine-front-disc-brak",
    "price": 464,
    "mrp": 499,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-2-hero-splendor-plus-clutch-plat",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-2-hero-splendor-plus-clutch-plat",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-2-hero-splendor-plus-clutch-plat",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-2-hero-splendor-plus-clutch-plat",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-2-hero-splendor-plus-clutch-plat",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-2-hero-splendor-plus-clutch-plat",
    "price": 369,
    "mrp": 450,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "price": 1189,
    "mrp": 1450,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "price": 1276,
    "mrp": 1450,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-3-bajaj-pulsar-150-chain-sprocke",
    "price": 1349,
    "mrp": 1450,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "price": 334,
    "mrp": 380,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "price": 353,
    "mrp": 380,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-4-tvs-apache-rtr-160-rear-brake-",
    "price": 312,
    "mrp": 380,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-5-royal-enfield-classic-350-air-",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-5-royal-enfield-classic-350-air-",
    "price": 287,
    "mrp": 350,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-5-royal-enfield-classic-350-air-",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-5-royal-enfield-classic-350-air-",
    "price": 308,
    "mrp": 350,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-5-royal-enfield-classic-350-air-",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-5-royal-enfield-classic-350-air-",
    "price": 326,
    "mrp": 350,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "price": 484,
    "mrp": 550,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "price": 512,
    "mrp": 550,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-6-honda-activa-6g-drive-belt-oem",
    "price": 451,
    "mrp": 550,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-7-ngk-g-power-platinum-spark-plu",
    "price": 205,
    "mrp": 220,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "price": 229,
    "mrp": 260,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "price": 242,
    "mrp": 260,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-8-hero-hf-deluxe-accelerator-clu",
    "price": 213,
    "mrp": 260,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "price": 262,
    "mrp": 320,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "price": 282,
    "mrp": 320,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-9-bajaj-platina-front-fork-oil-s",
    "price": 298,
    "mrp": 320,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "price": 446,
    "mrp": 480,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-10-yamaha-fz-version-3-rear-led-i",
    "price": 394,
    "mrp": 480,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "price": 857,
    "mrp": 1045,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "price": 920,
    "mrp": 1045,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-1-motul-7100-4t-10w-50-100-synth",
    "price": 972,
    "mrp": 1045,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "price": 471,
    "mrp": 535,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "price": 498,
    "mrp": 535,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-2-castrol-power1-4t-10w-30-synth",
    "price": 439,
    "mrp": 535,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "price": 394,
    "mrp": 480,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-3-motul-3100-4t-gold-20w-40-semi",
    "price": 446,
    "mrp": 480,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "price": 387,
    "mrp": 440,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "price": 409,
    "mrp": 440,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-4-castrol-activ-4t-20w-40-contin",
    "price": 361,
    "mrp": 440,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "price": 418,
    "mrp": 510,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "price": 449,
    "mrp": 510,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-5-shell-advance-ax7-10w-40-synth",
    "price": 474,
    "mrp": 510,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "price": 374,
    "mrp": 425,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "price": 395,
    "mrp": 425,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-6-gulf-pride-4t-plus-20w-40-high",
    "price": 349,
    "mrp": 425,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-7-motul-motocool-expert-radiator",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-7-motul-motocool-expert-radiator",
    "price": 377,
    "mrp": 460,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-7-motul-motocool-expert-radiator",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-7-motul-motocool-expert-radiator",
    "price": 405,
    "mrp": 460,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-7-motul-motocool-expert-radiator",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-7-motul-motocool-expert-radiator",
    "price": 428,
    "mrp": 460,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-8-bosch-dot-4-high-performance-b",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-8-bosch-dot-4-high-performance-b",
    "price": 141,
    "mrp": 160,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-8-bosch-dot-4-high-performance-b",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-8-bosch-dot-4-high-performance-b",
    "price": 149,
    "mrp": 160,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-8-bosch-dot-4-high-performance-b",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-8-bosch-dot-4-high-performance-b",
    "price": 131,
    "mrp": 160,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-9-wd-40-multi-use-rust-preventio",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-9-wd-40-multi-use-rust-preventio",
    "price": 344,
    "mrp": 420,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-9-wd-40-multi-use-rust-preventio",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-9-wd-40-multi-use-rust-preventio",
    "price": 370,
    "mrp": 420,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-9-wd-40-multi-use-rust-preventio",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-9-wd-40-multi-use-rust-preventio",
    "price": 391,
    "mrp": 420,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "price": 519,
    "mrp": 590,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "price": 549,
    "mrp": 590,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-10-motul-c2-chain-lube-road-aeros",
    "price": 484,
    "mrp": 590,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "price": 327,
    "mrp": 399,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "price": 351,
    "mrp": 399,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-1-godrej-aer-twist-fresh-lush-gr",
    "price": 371,
    "mrp": 399,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-2-amkette-igrip-drive-universal-",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-2-amkette-igrip-drive-universal-",
    "price": 703,
    "mrp": 799,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-2-amkette-igrip-drive-universal-",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-2-amkette-igrip-drive-universal-",
    "price": 743,
    "mrp": 799,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-2-amkette-igrip-drive-universal-",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-2-amkette-igrip-drive-universal-",
    "price": 655,
    "mrp": 799,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-3-portronics-car-power-65w-fast-",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-3-portronics-car-power-65w-fast-",
    "price": 1065,
    "mrp": 1299,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-3-portronics-car-power-65w-fast-",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-3-portronics-car-power-65w-fast-",
    "price": 1143,
    "mrp": 1299,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-3-portronics-car-power-65w-fast-",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-3-portronics-car-power-65w-fast-",
    "price": 1208,
    "mrp": 1299,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "price": 4399,
    "mrp": 4999,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "price": 4649,
    "mrp": 4999,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-4-70mai-smart-dash-cam-1080p-ful",
    "price": 4099,
    "mrp": 4999,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "price": 295,
    "mrp": 360,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "price": 317,
    "mrp": 360,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-5-3m-microfiber-car-cleaning-pol",
    "price": 335,
    "mrp": 360,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "price": 2156,
    "mrp": 2450,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "price": 2279,
    "mrp": 2450,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-6-bergmann-typhoon-heavy-duty-me",
    "price": 2009,
    "mrp": 2450,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "price": 344,
    "mrp": 420,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "price": 370,
    "mrp": 420,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-7-wavex-high-foaming-car-wash-sh",
    "price": 391,
    "mrp": 420,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-8-all-weather-7d-custom-molded-w",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-8-all-weather-7d-custom-molded-w",
    "price": 3079,
    "mrp": 3499,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-8-all-weather-7d-custom-molded-w",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-8-all-weather-7d-custom-molded-w",
    "price": 3254,
    "mrp": 3499,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-8-all-weather-7d-custom-molded-w",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-8-all-weather-7d-custom-molded-w",
    "price": 2869,
    "mrp": 3499,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "price": 4092,
    "mrp": 4990,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "price": 4391,
    "mrp": 4990,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-9-jbl-club-6520-6-5-inch-300w-co",
    "price": 4641,
    "mrp": 4990,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "price": 1055,
    "mrp": 1199,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "price": 1115,
    "mrp": 1199,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-10-autokraftz-heavy-duty-anti-the",
    "price": 983,
    "mrp": 1199,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "price": 1189,
    "mrp": 1450,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "price": 1276,
    "mrp": 1450,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-1-amaron-pro-rider-5ah-maintenan",
    "price": 1349,
    "mrp": 1450,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "price": 1100,
    "mrp": 1250,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "price": 1163,
    "mrp": 1250,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-2-exide-xplore-4ah-vrla-sealed-b",
    "price": 1025,
    "mrp": 1250,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "price": 3772,
    "mrp": 4600,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "price": 4048,
    "mrp": 4600,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-3-amaron-hi-life-flo-35ah-car-ba",
    "price": 4278,
    "mrp": 4600,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-4-exide-mileage-45ah-maintenance",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-4-exide-mileage-45ah-maintenance",
    "price": 4752,
    "mrp": 5400,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-4-exide-mileage-45ah-maintenance",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-4-exide-mileage-45ah-maintenance",
    "price": 5022,
    "mrp": 5400,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-4-exide-mileage-45ah-maintenance",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-4-exide-mileage-45ah-maintenance",
    "price": 4428,
    "mrp": 5400,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-5-roots-windtone-12v-high-tone-e",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-5-roots-windtone-12v-high-tone-e",
    "price": 697,
    "mrp": 850,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-5-roots-windtone-12v-high-tone-e",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-5-roots-windtone-12v-high-tone-e",
    "price": 748,
    "mrp": 850,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-5-roots-windtone-12v-high-tone-e",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-5-roots-windtone-12v-high-tone-e",
    "price": 791,
    "mrp": 850,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "price": 660,
    "mrp": 750,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "price": 698,
    "mrp": 750,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-6-philips-h4-12v-60-55w-x-tremev",
    "price": 615,
    "mrp": 750,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-7-osram-night-breaker-laser-h7-h",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-7-osram-night-breaker-laser-h7-h",
    "price": 1517,
    "mrp": 1850,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-7-osram-night-breaker-laser-h7-h",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-7-osram-night-breaker-laser-h7-h",
    "price": 1628,
    "mrp": 1850,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-7-osram-night-breaker-laser-h7-h",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-7-osram-night-breaker-laser-h7-h",
    "price": 1721,
    "mrp": 1850,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-8-uno-minda-12v-heavy-duty-headl",
    "price": 369,
    "mrp": 450,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "price": 779,
    "mrp": 950,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "price": 836,
    "mrp": 950,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-9-bosch-12v-symphony-fc4-car-hor",
    "price": 884,
    "mrp": 950,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-10-microtek-12v-automatic-smart-b",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-10-microtek-12v-automatic-smart-b",
    "price": 1671,
    "mrp": 1899,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-10-microtek-12v-automatic-smart-b",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-10-microtek-12v-automatic-smart-b",
    "price": 1766,
    "mrp": 1899,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-10-microtek-12v-automatic-smart-b",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-10-microtek-12v-automatic-smart-b",
    "price": 1557,
    "mrp": 1899,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "price": 1763,
    "mrp": 2150,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "price": 1892,
    "mrp": 2150,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-1-mrf-zapper-fx-90-90-17-tubeles",
    "price": 2000,
    "mrp": 2150,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "price": 2068,
    "mrp": 2350,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "price": 2186,
    "mrp": 2350,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-2-ceat-gripp-x3-100-90-18-tubele",
    "price": 1927,
    "mrp": 2350,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "price": 1189,
    "mrp": 1450,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "price": 1276,
    "mrp": 1450,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-3-mrf-nylogrip-zapper-90-100-10-",
    "price": 1349,
    "mrp": 1450,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "price": 1540,
    "mrp": 1750,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "price": 1628,
    "mrp": 1750,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-4-jk-tyre-blaze-br32-80-100-18-t",
    "price": 1435,
    "mrp": 1750,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "price": 3157,
    "mrp": 3850,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "price": 3388,
    "mrp": 3850,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-5-apollo-amazer-4g-life-165-70-r",
    "price": 3581,
    "mrp": 3850,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "price": 4752,
    "mrp": 5400,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "price": 5022,
    "mrp": 5400,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-6-bridgestone-b290-175-65-r15-pr",
    "price": 4428,
    "mrp": 5400,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "price": 2337,
    "mrp": 2850,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "price": 2508,
    "mrp": 2850,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-7-ceat-milaze-145-80-r12-long-li",
    "price": 2651,
    "mrp": 2850,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "price": 246,
    "mrp": 280,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "price": 260,
    "mrp": 280,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-8-ralco-blaster-2-75-18-high-gri",
    "price": 230,
    "mrp": 280,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-9-universal-tubeless-tyre-punctu",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-9-universal-tubeless-tyre-punctu",
    "price": 327,
    "mrp": 399,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-9-universal-tubeless-tyre-punctu",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-9-universal-tubeless-tyre-punctu",
    "price": 351,
    "mrp": 399,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-9-universal-tubeless-tyre-punctu",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-9-universal-tubeless-tyre-punctu",
    "price": 371,
    "mrp": 399,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sharma-auto-prod-automobile-10-formula-1-black-gold-tire-shin",
    "storeId": "store-jamui-sharma-auto",
    "productId": "prod-automobile-10-formula-1-black-gold-tire-shin",
    "price": 519,
    "mrp": 590,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-kumar-motors-prod-automobile-10-formula-1-black-gold-tire-shin",
    "storeId": "store-jamui-kumar-motors",
    "productId": "prod-automobile-10-formula-1-black-gold-tire-shin",
    "price": 549,
    "mrp": 590,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-royal-auto-prod-automobile-10-formula-1-black-gold-tire-shin",
    "storeId": "store-jamui-royal-auto",
    "productId": "prod-automobile-10-formula-1-black-gold-tire-shin",
    "price": 484,
    "mrp": 590,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "price": 65518,
    "mrp": 79900,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "price": 70312,
    "mrp": 79900,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-1-apple-iphone-15-128gb-black-dy",
    "price": 74307,
    "mrp": 79900,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "price": 65999,
    "mrp": 74999,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "price": 69749,
    "mrp": 74999,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-2-samsung-galaxy-s24-5g-8gb-ram-",
    "price": 61499,
    "mrp": 74999,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "price": 32799,
    "mrp": 39999,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "price": 35199,
    "mrp": 39999,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-3-oneplus-12r-5g-8gb-ram-128gb-s",
    "price": 37199,
    "mrp": 39999,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "price": 25519,
    "mrp": 28999,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "price": 26969,
    "mrp": 28999,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-4-redmi-note-13-pro-5g-8gb-ram-2",
    "price": 23779,
    "mrp": 28999,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "price": 26239,
    "mrp": 31999,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "price": 28159,
    "mrp": 31999,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-5-realme-12-pro-5g-8gb-ram-128gb",
    "price": 29759,
    "mrp": 31999,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "price": 35112,
    "mrp": 39900,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "price": 37107,
    "mrp": 39900,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-6-apple-ipad-10th-gen-10-9-inch-",
    "price": 32718,
    "mrp": 39900,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "price": 21319,
    "mrp": 25999,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "price": 22879,
    "mrp": 25999,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-7-samsung-galaxy-tab-a9-11-inch-",
    "price": 24179,
    "mrp": 25999,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "price": 31679,
    "mrp": 35999,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "price": 33479,
    "mrp": 35999,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-8-vivo-v30-5g-8gb-ram-128gb-peac",
    "price": 29519,
    "mrp": 35999,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "price": 21319,
    "mrp": 25999,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "price": 22879,
    "mrp": 25999,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-9-motorola-edge-50-fusion-8gb-ra",
    "price": 24179,
    "mrp": 25999,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "price": 27279,
    "mrp": 30999,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "price": 28829,
    "mrp": 30999,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-10-poco-x6-pro-5g-12gb-ram-512gb-",
    "price": 25419,
    "mrp": 30999,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "price": 3272,
    "mrp": 3990,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "price": 3511,
    "mrp": 3990,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-1-boat-rockerz-450-bluetooth-on-",
    "price": 3711,
    "mrp": 3990,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "price": 30791,
    "mrp": 34990,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "price": 32541,
    "mrp": 34990,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-2-sony-wh-1000xm5-wireless-indus",
    "price": 28692,
    "mrp": 34990,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "price": 1885,
    "mrp": 2299,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "price": 2023,
    "mrp": 2299,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-3-oneplus-nord-buds-2r-true-wire",
    "price": 2138,
    "mrp": 2299,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "price": 3951,
    "mrp": 4490,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "price": 4176,
    "mrp": 4490,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-4-boat-airdopes-141-bluetooth-tw",
    "price": 3682,
    "mrp": 4490,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-5-jbl-flip-6-portable-waterproof",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-5-jbl-flip-6-portable-waterproof",
    "price": 11479,
    "mrp": 13999,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-5-jbl-flip-6-portable-waterproof",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-5-jbl-flip-6-portable-waterproof",
    "price": 12319,
    "mrp": 13999,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-5-jbl-flip-6-portable-waterproof",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-5-jbl-flip-6-portable-waterproof",
    "price": 13019,
    "mrp": 13999,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-6-realme-buds-wireless-3-neckban",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-6-realme-buds-wireless-3-neckban",
    "price": 2639,
    "mrp": 2999,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-6-realme-buds-wireless-3-neckban",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-6-realme-buds-wireless-3-neckban",
    "price": 2789,
    "mrp": 2999,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-6-realme-buds-wireless-3-neckban",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-6-realme-buds-wireless-3-neckban",
    "price": 2459,
    "mrp": 2999,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "price": 12292,
    "mrp": 14990,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "price": 13191,
    "mrp": 14990,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-7-sennheiser-hd-450se-wireless-o",
    "price": 13941,
    "mrp": 14990,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-8-boat-stone-352-portable-10w-bl",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-8-boat-stone-352-portable-10w-bl",
    "price": 3071,
    "mrp": 3490,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-8-boat-stone-352-portable-10w-bl",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-8-boat-stone-352-portable-10w-bl",
    "price": 3246,
    "mrp": 3490,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-8-boat-stone-352-portable-10w-bl",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-8-boat-stone-352-portable-10w-bl",
    "price": 2862,
    "mrp": 3490,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-9-boult-audio-z40-true-wireless-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-9-boult-audio-z40-true-wireless-",
    "price": 4099,
    "mrp": 4999,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-9-boult-audio-z40-true-wireless-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-9-boult-audio-z40-true-wireless-",
    "price": 4399,
    "mrp": 4999,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-9-boult-audio-z40-true-wireless-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-9-boult-audio-z40-true-wireless-",
    "price": 4649,
    "mrp": 4999,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "price": 1143,
    "mrp": 1299,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "price": 1208,
    "mrp": 1299,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-10-jbl-c100si-wired-in-ear-headph",
    "price": 1065,
    "mrp": 1299,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "price": 1229,
    "mrp": 1499,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "price": 1319,
    "mrp": 1499,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-1-anker-20w-powerport-iii-nano-f",
    "price": 1394,
    "mrp": 1499,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "price": 1672,
    "mrp": 1900,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "price": 1767,
    "mrp": 1900,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-2-apple-20w-usb-c-power-adapter-",
    "price": 1558,
    "mrp": 1900,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-3-samsung-25w-super-fast-type-c-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-3-samsung-25w-super-fast-type-c-",
    "price": 1393,
    "mrp": 1699,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-3-samsung-25w-super-fast-type-c-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-3-samsung-25w-super-fast-type-c-",
    "price": 1495,
    "mrp": 1699,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-3-samsung-25w-super-fast-type-c-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-3-samsung-25w-super-fast-type-c-",
    "price": 1580,
    "mrp": 1699,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "price": 703,
    "mrp": 799,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "price": 743,
    "mrp": 799,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-4-boat-rugged-v3-extra-tough-bra",
    "price": 655,
    "mrp": 799,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-5-anker-powerline-iii-flow-silic",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-5-anker-powerline-iii-flow-silic",
    "price": 1639,
    "mrp": 1999,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-5-anker-powerline-iii-flow-silic",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-5-anker-powerline-iii-flow-silic",
    "price": 1759,
    "mrp": 1999,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-5-anker-powerline-iii-flow-silic",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-5-anker-powerline-iii-flow-silic",
    "price": 1859,
    "mrp": 1999,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "price": 3079,
    "mrp": 3499,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "price": 3254,
    "mrp": 3499,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-6-portronics-mport-65w-6-in-1-us",
    "price": 2869,
    "mrp": 3499,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-7-oneplus-warp-charge-65w-power-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-7-oneplus-warp-charge-65w-power-",
    "price": 2459,
    "mrp": 2999,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-7-oneplus-warp-charge-65w-power-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-7-oneplus-warp-charge-65w-power-",
    "price": 2639,
    "mrp": 2999,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-7-oneplus-warp-charge-65w-power-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-7-oneplus-warp-charge-65w-power-",
    "price": 2789,
    "mrp": 2999,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "price": 1319,
    "mrp": 1499,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "price": 1394,
    "mrp": 1499,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-8-tp-link-tl-wr841n-300mbps-wire",
    "price": 1229,
    "mrp": 1499,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "price": 2459,
    "mrp": 2999,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "price": 2639,
    "mrp": 2999,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-9-belkin-boostcharge-magnetic-wi",
    "price": 2789,
    "mrp": 2999,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "price": 1319,
    "mrp": 1499,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "price": 1394,
    "mrp": 1499,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-10-amkette-powerpro-4-port-usb-fa",
    "price": 1229,
    "mrp": 1499,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "price": 4099,
    "mrp": 4999,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "price": 4399,
    "mrp": 4999,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-1-noise-colorfit-pulse-3-1-96-in",
    "price": 4649,
    "mrp": 4999,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "price": 6159,
    "mrp": 6999,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "price": 6509,
    "mrp": 6999,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-2-fire-boltt-phoenix-pro-1-39-in",
    "price": 5739,
    "mrp": 6999,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "price": 24518,
    "mrp": 29900,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "price": 26312,
    "mrp": 29900,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-3-apple-watch-se-2nd-gen-40mm-gp",
    "price": 27807,
    "mrp": 29900,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "price": 29919,
    "mrp": 33999,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "price": 31619,
    "mrp": 33999,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-4-samsung-galaxy-watch6-bluetoot",
    "price": 27879,
    "mrp": 33999,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "price": 4092,
    "mrp": 4990,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "price": 4391,
    "mrp": 4990,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-5-boat-wave-call-2-smartwatch-wi",
    "price": 4641,
    "mrp": 4990,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "price": 16719,
    "mrp": 18999,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "price": 17669,
    "mrp": 18999,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-6-amazfit-gtr-4-new-smartwatch-w",
    "price": 15579,
    "mrp": 18999,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "price": 6556,
    "mrp": 7995,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "price": 7036,
    "mrp": 7995,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-7-fastrack-limitless-fs1-pro-1-9",
    "price": 7435,
    "mrp": 7995,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "price": 8799,
    "mrp": 9999,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "price": 9299,
    "mrp": 9999,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-8-cultsport-ranger-xr-1-43-inch-",
    "price": 8199,
    "mrp": 9999,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "price": 22959,
    "mrp": 27999,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "price": 24639,
    "mrp": 27999,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-9-oneplus-watch-2-with-wear-os-4",
    "price": 26039,
    "mrp": 27999,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-10-noise-pure-ring-smart-health-s",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-10-noise-pure-ring-smart-health-s",
    "price": 8799,
    "mrp": 9999,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-10-noise-pure-ring-smart-health-s",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-10-noise-pure-ring-smart-health-s",
    "price": 9299,
    "mrp": 9999,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-10-noise-pure-ring-smart-health-s",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-10-noise-pure-ring-smart-health-s",
    "price": 8199,
    "mrp": 9999,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "price": 1968,
    "mrp": 2400,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "price": 2112,
    "mrp": 2400,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-1-sandisk-ultra-dual-drive-luxe-",
    "price": 2232,
    "mrp": 2400,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "price": 1671,
    "mrp": 1899,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "price": 1766,
    "mrp": 1899,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-2-samsung-evo-plus-128gb-microsd",
    "price": 1557,
    "mrp": 1899,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-3-crucial-x6-1tb-portable-extern",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-3-crucial-x6-1tb-portable-extern",
    "price": 9430,
    "mrp": 11500,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-3-crucial-x6-1tb-portable-extern",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-3-crucial-x6-1tb-portable-extern",
    "price": 10120,
    "mrp": 11500,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-3-crucial-x6-1tb-portable-extern",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-3-crucial-x6-1tb-portable-extern",
    "price": 10695,
    "mrp": 11500,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-4-western-digital-wd-elements-2t",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-4-western-digital-wd-elements-2t",
    "price": 7031,
    "mrp": 7990,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-4-western-digital-wd-elements-2t",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-4-western-digital-wd-elements-2t",
    "price": 7431,
    "mrp": 7990,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-4-western-digital-wd-elements-2t",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-4-western-digital-wd-elements-2t",
    "price": 6552,
    "mrp": 7990,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "price": 615,
    "mrp": 750,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "price": 660,
    "mrp": 750,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-5-sandisk-cruzer-blade-64gb-usb-",
    "price": 698,
    "mrp": 750,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-6-kingston-datatraveler-exodia-m",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-6-kingston-datatraveler-exodia-m",
    "price": 1759,
    "mrp": 1999,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-6-kingston-datatraveler-exodia-m",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-6-kingston-datatraveler-exodia-m",
    "price": 1859,
    "mrp": 1999,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-6-kingston-datatraveler-exodia-m",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-6-kingston-datatraveler-exodia-m",
    "price": 1639,
    "mrp": 1999,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "price": 902,
    "mrp": 1100,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "price": 968,
    "mrp": 1100,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-7-sandisk-ultra-64gb-microsdhc-c",
    "price": 1023,
    "mrp": 1100,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "price": 484,
    "mrp": 550,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "price": 512,
    "mrp": 550,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-8-hp-v236w-32gb-metal-usb-2-0-fl",
    "price": 451,
    "mrp": 550,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-9-seagate-one-touch-1tb-external",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-9-seagate-one-touch-1tb-external",
    "price": 5084,
    "mrp": 6200,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-9-seagate-one-touch-1tb-external",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-9-seagate-one-touch-1tb-external",
    "price": 5456,
    "mrp": 6200,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-9-seagate-one-touch-1tb-external",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-9-seagate-one-touch-1tb-external",
    "price": 5766,
    "mrp": 6200,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-gadget-point-prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "storeId": "store-jamui-gadget-point",
    "productId": "prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "price": 13199,
    "mrp": 14999,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-digital-hub-prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "storeId": "store-jamui-digital-hub",
    "productId": "prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "price": 13949,
    "mrp": 14999,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apex-mobiles-prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "storeId": "store-jamui-apex-mobiles",
    "productId": "prod-electronics-10-samsung-t7-shield-1tb-rugged-p",
    "price": 12299,
    "mrp": 14999,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "price": 29,
    "mrp": 35,
    "discountPercent": 17,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "price": 31,
    "mrp": 35,
    "discountPercent": 11,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-1-dolo-650mg-paracetamol-tablets",
    "price": 33,
    "mrp": 35,
    "discountPercent": 6,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "price": 30,
    "mrp": 34,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "price": 32,
    "mrp": 34,
    "discountPercent": 6,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-2-crocin-650-fast-action-pain-re",
    "price": 28,
    "mrp": 34,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "price": 135,
    "mrp": 165,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "price": 145,
    "mrp": 165,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-3-vicks-vaporub-cold-relief-warm",
    "price": 153,
    "mrp": 165,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "price": 158,
    "mrp": 180,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "price": 167,
    "mrp": 180,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-4-eno-fruit-salt-fast-action-ant",
    "price": 148,
    "mrp": 180,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "price": 127,
    "mrp": 155,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "price": 136,
    "mrp": 155,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-5-digene-gel-antacid-antigas-ora",
    "price": 144,
    "mrp": 155,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "price": 270,
    "mrp": 290,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-6-volini-joint-muscle-pain-relie",
    "price": 238,
    "mrp": 290,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "price": 160,
    "mrp": 195,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "price": 172,
    "mrp": 195,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-7-moov-rapid-pain-relief-ointmen",
    "price": 181,
    "mrp": 195,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "price": 35,
    "mrp": 40,
    "discountPercent": 13,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "price": 37,
    "mrp": 40,
    "discountPercent": 8,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-8-strepsils-honey-lemon-lozenges",
    "price": 33,
    "mrp": 40,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "price": 94,
    "mrp": 115,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "price": 101,
    "mrp": 115,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-9-otrivin-oxy-fast-relief-adult-",
    "price": 107,
    "mrp": 115,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-10-iodex-double-power-fast-absorb",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-10-iodex-double-power-fast-absorb",
    "price": 141,
    "mrp": 160,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-10-iodex-double-power-fast-absorb",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-10-iodex-double-power-fast-absorb",
    "price": 149,
    "mrp": 160,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-10-iodex-double-power-fast-absorb",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-10-iodex-double-power-fast-absorb",
    "price": 131,
    "mrp": 160,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-1-dettol-antiseptic-disinfectant",
    "price": 205,
    "mrp": 220,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "price": 172,
    "mrp": 195,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "price": 181,
    "mrp": 195,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-2-savlon-antiseptic-liquid-for-c",
    "price": 160,
    "mrp": 195,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-3-hansaplast-washproof-medicated",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-3-hansaplast-washproof-medicated",
    "price": 197,
    "mrp": 240,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-3-hansaplast-washproof-medicated",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-3-hansaplast-washproof-medicated",
    "price": 211,
    "mrp": 240,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-3-hansaplast-washproof-medicated",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-3-hansaplast-washproof-medicated",
    "price": 223,
    "mrp": 240,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "price": 1012,
    "mrp": 1150,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "price": 1070,
    "mrp": 1150,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-4-flamingo-orthopedic-lumbar-sac",
    "price": 943,
    "mrp": 1150,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "price": 2042,
    "mrp": 2490,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "price": 2191,
    "mrp": 2490,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-5-dr-trust-non-contact-infrared-",
    "price": 2316,
    "mrp": 2490,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "price": 57,
    "mrp": 65,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "price": 60,
    "mrp": 65,
    "discountPercent": 8,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-6-cipla-cipladine-5-povidone-iod",
    "price": 53,
    "mrp": 65,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "price": 148,
    "mrp": 180,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "price": 158,
    "mrp": 180,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-7-bandage-plus-sterile-rolled-co",
    "price": 167,
    "mrp": 180,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-8-flamingo-tubular-elastic-knee-",
    "price": 369,
    "mrp": 450,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "price": 205,
    "mrp": 250,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "price": 220,
    "mrp": 250,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-9-dr-morepen-digital-clinical-bo",
    "price": 233,
    "mrp": 250,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "price": 106,
    "mrp": 120,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "price": 112,
    "mrp": 120,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-10-johnson-johnson-sterile-cotton",
    "price": 98,
    "mrp": 120,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-1-becadexamin-multivitamin-miner",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-1-becadexamin-multivitamin-miner",
    "price": 53,
    "mrp": 65,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-1-becadexamin-multivitamin-miner",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-1-becadexamin-multivitamin-miner",
    "price": 57,
    "mrp": 65,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-1-becadexamin-multivitamin-miner",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-1-becadexamin-multivitamin-miner",
    "price": 60,
    "mrp": 65,
    "discountPercent": 8,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "price": 53,
    "mrp": 60,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "price": 56,
    "mrp": 60,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-2-supradyn-daily-multivitamin-wi",
    "price": 49,
    "mrp": 60,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "price": 29,
    "mrp": 35,
    "discountPercent": 17,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "price": 31,
    "mrp": 35,
    "discountPercent": 11,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-3-limcee-500mg-vitamin-c-chewabl",
    "price": 33,
    "mrp": 35,
    "discountPercent": 6,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "price": 119,
    "mrp": 135,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "price": 126,
    "mrp": 135,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-4-shelcal-500-calcium-with-vitam",
    "price": 111,
    "mrp": 135,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-5-revital-h-daily-health-supplem",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-5-revital-h-daily-health-supplem",
    "price": 451,
    "mrp": 550,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-5-revital-h-daily-health-supplem",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-5-revital-h-daily-health-supplem",
    "price": 484,
    "mrp": 550,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-5-revital-h-daily-health-supplem",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-5-revital-h-daily-health-supplem",
    "price": 512,
    "mrp": 550,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "price": 101,
    "mrp": 115,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "price": 107,
    "mrp": 115,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-6-zincovit-multivitamin-with-gra",
    "price": 94,
    "mrp": 115,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "price": 31,
    "mrp": 38,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "price": 33,
    "mrp": 38,
    "discountPercent": 13,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-7-evion-400mg-vitamin-e-capsules",
    "price": 35,
    "mrp": 38,
    "discountPercent": 8,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "price": 703,
    "mrp": 799,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "price": 743,
    "mrp": 799,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-8-healthkart-hk-vitals-fish-oil-",
    "price": 655,
    "mrp": 799,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "price": 357,
    "mrp": 435,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "price": 383,
    "mrp": 435,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-9-dabur-chyawanprash-2x-immunity",
    "price": 405,
    "mrp": 435,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "price": 205,
    "mrp": 220,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-10-himalaya-ashvagandha-general-w",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "price": 1222,
    "mrp": 1490,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "price": 1311,
    "mrp": 1490,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-1-dr-morepen-bg-03-gluco-one-blo",
    "price": 1386,
    "mrp": 1490,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-2-accu-chek-active-blood-glucose",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-2-accu-chek-active-blood-glucose",
    "price": 1495,
    "mrp": 1699,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-2-accu-chek-active-blood-glucose",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-2-accu-chek-active-blood-glucose",
    "price": 1580,
    "mrp": 1699,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-2-accu-chek-active-blood-glucose",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-2-accu-chek-active-blood-glucose",
    "price": 1393,
    "mrp": 1699,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "price": 2009,
    "mrp": 2450,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "price": 2156,
    "mrp": 2450,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-3-omron-hem-7120-fully-automatic",
    "price": 2279,
    "mrp": 2450,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "price": 783,
    "mrp": 890,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "price": 828,
    "mrp": 890,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-4-dr-morepen-gluco-one-bg-03-rep",
    "price": 730,
    "mrp": 890,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "price": 923,
    "mrp": 1125,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "price": 990,
    "mrp": 1125,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-5-accu-chek-instant-blood-glucos",
    "price": 1046,
    "mrp": 1125,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "price": 2631,
    "mrp": 2990,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "price": 2781,
    "mrp": 2990,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-6-dr-trust-usa-smart-dual-talkin",
    "price": 2452,
    "mrp": 2990,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-7-himalaya-karela-metabolic-well",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-7-himalaya-karela-metabolic-well",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-7-himalaya-karela-metabolic-well",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-7-himalaya-karela-metabolic-well",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-7-himalaya-karela-metabolic-well",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-7-himalaya-karela-metabolic-well",
    "price": 205,
    "mrp": 220,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "price": 264,
    "mrp": 300,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "price": 279,
    "mrp": 300,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-8-sugar-free-gold-low-calorie-as",
    "price": 246,
    "mrp": 300,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "price": 287,
    "mrp": 350,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "price": 308,
    "mrp": 350,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-9-dr-morepen-universal-sterile-t",
    "price": 326,
    "mrp": 350,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "price": 713,
    "mrp": 810,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "price": 753,
    "mrp": 810,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-10-ensure-diabetic-care-nutrition",
    "price": 664,
    "mrp": 810,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-1-pampers-all-round-protection-p",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-1-pampers-all-round-protection-p",
    "price": 1065,
    "mrp": 1299,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-1-pampers-all-round-protection-p",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-1-pampers-all-round-protection-p",
    "price": 1143,
    "mrp": 1299,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-1-pampers-all-round-protection-p",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-1-pampers-all-round-protection-p",
    "price": 1208,
    "mrp": 1299,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "price": 286,
    "mrp": 325,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "price": 302,
    "mrp": 325,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-2-himalaya-baby-lotion-with-almo",
    "price": 267,
    "mrp": 325,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "price": 336,
    "mrp": 410,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "price": 361,
    "mrp": 410,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-3-johnson-johnson-no-more-tears-",
    "price": 381,
    "mrp": 410,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "price": 270,
    "mrp": 290,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-4-sebamed-baby-gentle-cleansing-",
    "price": 238,
    "mrp": 290,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "price": 573,
    "mrp": 699,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "price": 615,
    "mrp": 699,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-5-pigeon-calming-anti-colic-wide",
    "price": 650,
    "mrp": 699,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "price": 1055,
    "mrp": 1199,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "price": 1115,
    "mrp": 1199,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-6-huggies-wonder-pants-extra-abs",
    "price": 983,
    "mrp": 1199,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "price": 245,
    "mrp": 299,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "price": 263,
    "mrp": 299,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-7-mother-sparsh-99-pure-water-un",
    "price": 278,
    "mrp": 299,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "price": 351,
    "mrp": 399,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "price": 371,
    "mrp": 399,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-8-chicco-baby-moments-rash-cream",
    "price": 327,
    "mrp": 399,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "price": 312,
    "mrp": 380,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "price": 334,
    "mrp": 380,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-9-dabur-lal-tail-ayurvedic-baby-",
    "price": 353,
    "mrp": 380,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-city-pharmacy-prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "storeId": "store-jamui-city-pharmacy",
    "productId": "prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "price": 277,
    "mrp": 315,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-medplus-health-prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "storeId": "store-jamui-medplus-health",
    "productId": "prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "price": 293,
    "mrp": 315,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-sanjivani-medico-prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "storeId": "store-jamui-sanjivani-medico",
    "productId": "prod-pharmacy-10-nestle-cerelac-wheat-apple-bab",
    "price": 258,
    "mrp": 315,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-1-fortune-biryani-special-super-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-1-fortune-biryani-special-super-",
    "price": 554,
    "mrp": 675,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-1-fortune-biryani-special-super-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-1-fortune-biryani-special-super-",
    "price": 594,
    "mrp": 675,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-1-fortune-biryani-special-super-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-1-fortune-biryani-special-super-",
    "price": 628,
    "mrp": 675,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "price": 242,
    "mrp": 275,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "price": 256,
    "mrp": 275,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-2-aashirvaad-superior-mp-sharbat",
    "price": 226,
    "mrp": 275,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-3-india-gate-basmati-rice-classi",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-3-india-gate-basmati-rice-classi",
    "price": 730,
    "mrp": 890,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-3-india-gate-basmati-rice-classi",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-3-india-gate-basmati-rice-classi",
    "price": 783,
    "mrp": 890,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-3-india-gate-basmati-rice-classi",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-3-india-gate-basmati-rice-classi",
    "price": 828,
    "mrp": 890,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "price": 748,
    "mrp": 850,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "price": 791,
    "mrp": 850,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-4-fortune-premium-kachi-ghani-pu",
    "price": 697,
    "mrp": 850,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-5-tata-sampann-unpolished-toor-d",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-5-tata-sampann-unpolished-toor-d",
    "price": 172,
    "mrp": 210,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-5-tata-sampann-unpolished-toor-d",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-5-tata-sampann-unpolished-toor-d",
    "price": 185,
    "mrp": 210,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-5-tata-sampann-unpolished-toor-d",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-5-tata-sampann-unpolished-toor-d",
    "price": 195,
    "mrp": 210,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-6-fortune-sunlite-refined-sunflo",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-6-fortune-sunlite-refined-sunflo",
    "price": 136,
    "mrp": 155,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-6-fortune-sunlite-refined-sunflo",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-6-fortune-sunlite-refined-sunflo",
    "price": 144,
    "mrp": 155,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-6-fortune-sunlite-refined-sunflo",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-6-fortune-sunlite-refined-sunflo",
    "price": 127,
    "mrp": 155,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-7-tata-sampann-fine-unpolished-m",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-7-tata-sampann-fine-unpolished-m",
    "price": 152,
    "mrp": 185,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-7-tata-sampann-fine-unpolished-m",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-7-tata-sampann-fine-unpolished-m",
    "price": 163,
    "mrp": 185,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-7-tata-sampann-fine-unpolished-m",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-7-tata-sampann-fine-unpolished-m",
    "price": 172,
    "mrp": 185,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-8-aashirvaad-select-100-sharbati",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-8-aashirvaad-select-100-sharbati",
    "price": 493,
    "mrp": 560,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-8-aashirvaad-select-100-sharbati",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-8-aashirvaad-select-100-sharbati",
    "price": 521,
    "mrp": 560,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-8-aashirvaad-select-100-sharbati",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-8-aashirvaad-select-100-sharbati",
    "price": 459,
    "mrp": 560,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "price": 213,
    "mrp": 260,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "price": 229,
    "mrp": 260,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-9-madhur-pure-hygienic-sulphurle",
    "price": 242,
    "mrp": 260,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "price": 26,
    "mrp": 30,
    "discountPercent": 13,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "price": 28,
    "mrp": 30,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-10-tata-salt-vacuum-evaporated-io",
    "price": 25,
    "mrp": 30,
    "discountPercent": 17,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-1-amul-pure-cow-ghee-traditional",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-1-amul-pure-cow-ghee-traditional",
    "price": 541,
    "mrp": 660,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-1-amul-pure-cow-ghee-traditional",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-1-amul-pure-cow-ghee-traditional",
    "price": 581,
    "mrp": 660,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-1-amul-pure-cow-ghee-traditional",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-1-amul-pure-cow-ghee-traditional",
    "price": 614,
    "mrp": 660,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-2-amul-butter-pasteurized-salted",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-2-amul-butter-pasteurized-salted",
    "price": 242,
    "mrp": 275,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-2-amul-butter-pasteurized-salted",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-2-amul-butter-pasteurized-salted",
    "price": 256,
    "mrp": 275,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-2-amul-butter-pasteurized-salted",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-2-amul-butter-pasteurized-salted",
    "price": 226,
    "mrp": 275,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "price": 28,
    "mrp": 34,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "price": 30,
    "mrp": 34,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-3-amul-gold-full-cream-fresh-hom",
    "price": 32,
    "mrp": 34,
    "discountPercent": 6,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-4-amul-taaza-homogenised-toned-m",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-4-amul-taaza-homogenised-toned-m",
    "price": 65,
    "mrp": 74,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-4-amul-taaza-homogenised-toned-m",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-4-amul-taaza-homogenised-toned-m",
    "price": 69,
    "mrp": 74,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-4-amul-taaza-homogenised-toned-m",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-4-amul-taaza-homogenised-toned-m",
    "price": 61,
    "mrp": 74,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "price": 566,
    "mrp": 690,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "price": 607,
    "mrp": 690,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-5-mother-dairy-pure-buffalo-ghee",
    "price": 642,
    "mrp": 690,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "price": 84,
    "mrp": 95,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "price": 88,
    "mrp": 95,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-6-amul-malai-fresh-paneer-cube-b",
    "price": 78,
    "mrp": 95,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-7-amul-processed-diced-cheese-bl",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-7-amul-processed-diced-cheese-bl",
    "price": 119,
    "mrp": 145,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-7-amul-processed-diced-cheese-bl",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-7-amul-processed-diced-cheese-bl",
    "price": 128,
    "mrp": 145,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-7-amul-processed-diced-cheese-bl",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-7-amul-processed-diced-cheese-bl",
    "price": 135,
    "mrp": 145,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-8-nestle-everyday-dairy-whitener",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-8-nestle-everyday-dairy-whitener",
    "price": 475,
    "mrp": 540,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-8-nestle-everyday-dairy-whitener",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-8-nestle-everyday-dairy-whitener",
    "price": 502,
    "mrp": 540,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-8-nestle-everyday-dairy-whitener",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-8-nestle-everyday-dairy-whitener",
    "price": 443,
    "mrp": 540,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-9-mother-dairy-classic-dahi-plai",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-9-mother-dairy-classic-dahi-plai",
    "price": 37,
    "mrp": 45,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-9-mother-dairy-classic-dahi-plai",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-9-mother-dairy-classic-dahi-plai",
    "price": 40,
    "mrp": 45,
    "discountPercent": 11,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-9-mother-dairy-classic-dahi-plai",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-9-mother-dairy-classic-dahi-plai",
    "price": 42,
    "mrp": 45,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-10-epigamia-greek-yogurt-natural-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-10-epigamia-greek-yogurt-natural-",
    "price": 53,
    "mrp": 60,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-10-epigamia-greek-yogurt-natural-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-10-epigamia-greek-yogurt-natural-",
    "price": 56,
    "mrp": 60,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-10-epigamia-greek-yogurt-natural-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-10-epigamia-greek-yogurt-natural-",
    "price": 49,
    "mrp": 60,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "price": 271,
    "mrp": 330,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "price": 290,
    "mrp": 330,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-1-tata-tea-gold-rich-aroma-ctc-t",
    "price": 307,
    "mrp": 330,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-2-nescafe-classic-instant-pure-c",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-2-nescafe-classic-instant-pure-c",
    "price": 299,
    "mrp": 340,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-2-nescafe-classic-instant-pure-c",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-2-nescafe-classic-instant-pure-c",
    "price": 316,
    "mrp": 340,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-2-nescafe-classic-instant-pure-c",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-2-nescafe-classic-instant-pure-c",
    "price": 279,
    "mrp": 340,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "price": 148,
    "mrp": 180,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "price": 158,
    "mrp": 180,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-3-cadbury-dairy-milk-silk-chocol",
    "price": 167,
    "mrp": 180,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "price": 44,
    "mrp": 50,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "price": 47,
    "mrp": 50,
    "discountPercent": 6,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-4-lay-s-india-s-magic-masala-pot",
    "price": 41,
    "mrp": 50,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "price": 238,
    "mrp": 290,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-5-haldiram-s-nagpur-bhujia-sev-c",
    "price": 270,
    "mrp": 290,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "price": 106,
    "mrp": 120,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "price": 112,
    "mrp": 120,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-6-parle-g-gold-glucose-biscuits-",
    "price": 98,
    "mrp": 120,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-7-britannia-good-day-butter-rich",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-7-britannia-good-day-butter-rich",
    "price": 115,
    "mrp": 140,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-7-britannia-good-day-butter-rich",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-7-britannia-good-day-butter-rich",
    "price": 123,
    "mrp": 140,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-7-britannia-good-day-butter-rich",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-7-britannia-good-day-butter-rich",
    "price": 130,
    "mrp": 140,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-8-red-bull-energy-drink-carbonat",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-8-red-bull-energy-drink-carbonat",
    "price": 110,
    "mrp": 125,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-8-red-bull-energy-drink-carbonat",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-8-red-bull-energy-drink-carbonat",
    "price": 116,
    "mrp": 125,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-8-red-bull-energy-drink-carbonat",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-8-red-bull-energy-drink-carbonat",
    "price": 103,
    "mrp": 125,
    "discountPercent": 18,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-9-maggi-2-minute-masala-instant-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-9-maggi-2-minute-masala-instant-",
    "price": 138,
    "mrp": 168,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-9-maggi-2-minute-masala-instant-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-9-maggi-2-minute-masala-instant-",
    "price": 148,
    "mrp": 168,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-9-maggi-2-minute-masala-instant-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-9-maggi-2-minute-masala-instant-",
    "price": 156,
    "mrp": 168,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-10-tropicana-100-real-orange-juic",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-10-tropicana-100-real-orange-juic",
    "price": 128,
    "mrp": 145,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-10-tropicana-100-real-orange-juic",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-10-tropicana-100-real-orange-juic",
    "price": 135,
    "mrp": 145,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-10-tropicana-100-real-orange-juic",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-10-tropicana-100-real-orange-juic",
    "price": 119,
    "mrp": 145,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "price": 279,
    "mrp": 340,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "price": 299,
    "mrp": 340,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-1-mdh-deggi-mirch-natural-red-co",
    "price": 316,
    "mrp": 340,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-2-catch-super-garam-masala-whole",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-2-catch-super-garam-masala-whole",
    "price": 141,
    "mrp": 160,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-2-catch-super-garam-masala-whole",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-2-catch-super-garam-masala-whole",
    "price": 149,
    "mrp": 160,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-2-catch-super-garam-masala-whole",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-2-catch-super-garam-masala-whole",
    "price": 131,
    "mrp": 160,
    "discountPercent": 18,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-3-everest-turmeric-powder-pure-h",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-3-everest-turmeric-powder-pure-h",
    "price": 139,
    "mrp": 170,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-3-everest-turmeric-powder-pure-h",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-3-everest-turmeric-powder-pure-h",
    "price": 150,
    "mrp": 170,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-3-everest-turmeric-powder-pure-h",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-3-everest-turmeric-powder-pure-h",
    "price": 158,
    "mrp": 170,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-4-everest-coriander-powder-pure-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-4-everest-coriander-powder-pure-",
    "price": 145,
    "mrp": 165,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-4-everest-coriander-powder-pure-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-4-everest-coriander-powder-pure-",
    "price": 153,
    "mrp": 165,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-4-everest-coriander-powder-pure-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-4-everest-coriander-powder-pure-",
    "price": 135,
    "mrp": 165,
    "discountPercent": 18,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "price": 61,
    "mrp": 75,
    "discountPercent": 19,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "price": 66,
    "mrp": 75,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-5-mdh-chunky-chat-masala-tangy-s",
    "price": 70,
    "mrp": 75,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "price": 167,
    "mrp": 190,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "price": 177,
    "mrp": 190,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-6-tata-sampann-whole-cumin-seeds",
    "price": 156,
    "mrp": 190,
    "discountPercent": 18,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-7-catch-shahi-biryani-masala-aut",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-7-catch-shahi-biryani-masala-aut",
    "price": 78,
    "mrp": 95,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-7-catch-shahi-biryani-masala-aut",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-7-catch-shahi-biryani-masala-aut",
    "price": 84,
    "mrp": 95,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-7-catch-shahi-biryani-masala-aut",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-7-catch-shahi-biryani-masala-aut",
    "price": 88,
    "mrp": 95,
    "discountPercent": 7,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-8-everest-meat-masala-for-mutton",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-8-everest-meat-masala-for-mutton",
    "price": 77,
    "mrp": 88,
    "discountPercent": 13,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-8-everest-meat-masala-for-mutton",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-8-everest-meat-masala-for-mutton",
    "price": 82,
    "mrp": 88,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-8-everest-meat-masala-for-mutton",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-8-everest-meat-masala-for-mutton",
    "price": 72,
    "mrp": 88,
    "discountPercent": 18,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "price": 57,
    "mrp": 70,
    "discountPercent": 19,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "price": 62,
    "mrp": 70,
    "discountPercent": 11,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-9-catch-kasuri-methi-dried-fenug",
    "price": 65,
    "mrp": 70,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "price": 75,
    "mrp": 85,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "price": 79,
    "mrp": 85,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-10-mdh-kitchen-king-all-in-one-cu",
    "price": 70,
    "mrp": 85,
    "discountPercent": 18,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-1-surf-excel-matic-front-load-de",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-1-surf-excel-matic-front-load-de",
    "price": 402,
    "mrp": 490,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-1-surf-excel-matic-front-load-de",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-1-surf-excel-matic-front-load-de",
    "price": 431,
    "mrp": 490,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-1-surf-excel-matic-front-load-de",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-1-surf-excel-matic-front-load-de",
    "price": 456,
    "mrp": 490,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "price": 185,
    "mrp": 210,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "price": 195,
    "mrp": 210,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-2-vim-dishwash-gel-lemon-concent",
    "price": 172,
    "mrp": 210,
    "discountPercent": 18,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-3-lizol-disinfectant-surface-flo",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-3-lizol-disinfectant-surface-flo",
    "price": 336,
    "mrp": 410,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-3-lizol-disinfectant-surface-flo",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-3-lizol-disinfectant-surface-flo",
    "price": 361,
    "mrp": 410,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-3-lizol-disinfectant-surface-flo",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-3-lizol-disinfectant-surface-flo",
    "price": 381,
    "mrp": 410,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-4-harpic-power-plus-original-dis",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-4-harpic-power-plus-original-dis",
    "price": 198,
    "mrp": 225,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-4-harpic-power-plus-original-dis",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-4-harpic-power-plus-original-dis",
    "price": 209,
    "mrp": 225,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-4-harpic-power-plus-original-dis",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-4-harpic-power-plus-original-dis",
    "price": 185,
    "mrp": 225,
    "discountPercent": 18,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-5-colin-glass-and-surface-cleane",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-5-colin-glass-and-surface-cleane",
    "price": 94,
    "mrp": 115,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-5-colin-glass-and-surface-cleane",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-5-colin-glass-and-surface-cleane",
    "price": 101,
    "mrp": 115,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-5-colin-glass-and-surface-cleane",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-5-colin-glass-and-surface-cleane",
    "price": 107,
    "mrp": 115,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-6-ariel-complete-matic-liquid-de",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-6-ariel-complete-matic-liquid-de",
    "price": 229,
    "mrp": 260,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-6-ariel-complete-matic-liquid-de",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-6-ariel-complete-matic-liquid-de",
    "price": 242,
    "mrp": 260,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-6-ariel-complete-matic-liquid-de",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-6-ariel-complete-matic-liquid-de",
    "price": 213,
    "mrp": 260,
    "discountPercent": 18,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "price": 115,
    "mrp": 140,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "price": 123,
    "mrp": 140,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-7-scotch-brite-heavy-duty-scrub-",
    "price": 130,
    "mrp": 140,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-8-good-knight-gold-flash-liquid-",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-8-good-knight-gold-flash-liquid-",
    "price": 154,
    "mrp": 175,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-8-good-knight-gold-flash-liquid-",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-8-good-knight-gold-flash-liquid-",
    "price": 163,
    "mrp": 175,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-8-good-knight-gold-flash-liquid-",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-8-good-knight-gold-flash-liquid-",
    "price": 144,
    "mrp": 175,
    "discountPercent": 18,
    "stockQuantity": 0,
    "status": "out_of_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-9-comfort-after-wash-morning-fre",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-9-comfort-after-wash-morning-fre",
    "price": 193,
    "mrp": 235,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-9-comfort-after-wash-morning-fre",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-9-comfort-after-wash-morning-fre",
    "price": 207,
    "mrp": 235,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-9-comfort-after-wash-morning-fre",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-9-comfort-after-wash-morning-fre",
    "price": 219,
    "mrp": 235,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-krishna-kirana-prod-grocery-10-hit-flying-insect-killer-mosqu",
    "storeId": "store-jamui-krishna-kirana",
    "productId": "prod-grocery-10-hit-flying-insect-killer-mosqu",
    "price": 202,
    "mrp": 230,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-fresh-mart-prod-grocery-10-hit-flying-insect-killer-mosqu",
    "storeId": "store-jamui-fresh-mart",
    "productId": "prod-grocery-10-hit-flying-insect-killer-mosqu",
    "price": 214,
    "mrp": 230,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-apna-bazaar-prod-grocery-10-hit-flying-insect-killer-mosqu",
    "storeId": "store-jamui-apna-bazaar",
    "productId": "prod-grocery-10-hit-flying-insect-killer-mosqu",
    "price": 189,
    "mrp": 230,
    "discountPercent": 18,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-1-stanley-12-piece-cushion-grip-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-1-stanley-12-piece-cushion-grip-",
    "price": 1065,
    "mrp": 1299,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-1-stanley-12-piece-cushion-grip-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-1-stanley-12-piece-cushion-grip-",
    "price": 1143,
    "mrp": 1299,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-2-bosch-gsb-500w-professional-im",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-2-bosch-gsb-500w-professional-im",
    "price": 3696,
    "mrp": 4200,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-2-bosch-gsb-500w-professional-im",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-2-bosch-gsb-500w-professional-im",
    "price": 3906,
    "mrp": 4200,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-3-taparia-8-inch-steel-combinati",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-3-taparia-8-inch-steel-combinati",
    "price": 254,
    "mrp": 310,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-3-taparia-8-inch-steel-combinati",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-3-taparia-8-inch-steel-combinati",
    "price": 273,
    "mrp": 310,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-4-taparia-10-inch-heavy-duty-adj",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-4-taparia-10-inch-heavy-duty-adj",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-4-taparia-10-inch-heavy-duty-adj",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-4-taparia-10-inch-heavy-duty-adj",
    "price": 446,
    "mrp": 480,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-5-bosch-gws-600w-professional-4-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-5-bosch-gws-600w-professional-4-",
    "price": 2542,
    "mrp": 3100,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-5-bosch-gws-600w-professional-4-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-5-bosch-gws-600w-professional-4-",
    "price": 2728,
    "mrp": 3100,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-6-stanley-5-meter-steel-metric-m",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-6-stanley-5-meter-steel-metric-m",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-6-stanley-5-meter-steel-metric-m",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-6-stanley-5-meter-steel-metric-m",
    "price": 270,
    "mrp": 290,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-7-taparia-500g-drop-forged-carbo",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-7-taparia-500g-drop-forged-carbo",
    "price": 320,
    "mrp": 390,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-7-taparia-500g-drop-forged-carbo",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-7-taparia-500g-drop-forged-carbo",
    "price": 343,
    "mrp": 390,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-8-stanley-9-piece-hex-ball-end-a",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-8-stanley-9-piece-hex-ball-end-a",
    "price": 370,
    "mrp": 420,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-8-stanley-9-piece-hex-ball-end-a",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-8-stanley-9-piece-hex-ball-end-a",
    "price": 391,
    "mrp": 420,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-9-dongcheng-800w-rotary-hammer-2",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-9-dongcheng-800w-rotary-hammer-2",
    "price": 3279,
    "mrp": 3999,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-9-dongcheng-800w-rotary-hammer-2",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-9-dongcheng-800w-rotary-hammer-2",
    "price": 3519,
    "mrp": 3999,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-10-taparia-86-piece-master-socket",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-10-taparia-86-piece-master-socket",
    "price": 4356,
    "mrp": 4950,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-10-taparia-86-piece-master-socket",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-10-taparia-86-piece-master-socket",
    "price": 4604,
    "mrp": 4950,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-1-havells-lifeline-plus-1-5-sq-m",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-1-havells-lifeline-plus-1-5-sq-m",
    "price": 1763,
    "mrp": 2150,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-1-havells-lifeline-plus-1-5-sq-m",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-1-havells-lifeline-plus-1-5-sq-m",
    "price": 1892,
    "mrp": 2150,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-2-polycab-optima-plus-2-5-sq-mm-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-2-polycab-optima-plus-2-5-sq-mm-",
    "price": 2992,
    "mrp": 3400,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-2-polycab-optima-plus-2-5-sq-mm-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-2-polycab-optima-plus-2-5-sq-mm-",
    "price": 3162,
    "mrp": 3400,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-3-anchor-roma-classic-6a-1-way-m",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-3-anchor-roma-classic-6a-1-way-m",
    "price": 312,
    "mrp": 380,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-3-anchor-roma-classic-6a-1-way-m",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-3-anchor-roma-classic-6a-1-way-m",
    "price": 334,
    "mrp": 380,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-4-anchor-roma-16a-3-pin-power-so",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-4-anchor-roma-16a-3-pin-power-so",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-4-anchor-roma-16a-3-pin-power-so",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-4-anchor-roma-16a-3-pin-power-so",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-5-havells-9w-cool-day-white-b22-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-5-havells-9w-cool-day-white-b22-",
    "price": 426,
    "mrp": 520,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-5-havells-9w-cool-day-white-b22-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-5-havells-9w-cool-day-white-b22-",
    "price": 458,
    "mrp": 520,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-6-schneider-electric-acti9-32a-d",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-6-schneider-electric-acti9-32a-d",
    "price": 607,
    "mrp": 690,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-6-schneider-electric-acti9-32a-d",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-6-schneider-electric-acti9-32a-d",
    "price": 642,
    "mrp": 690,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-7-orient-electric-1200mm-apex-fx",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-7-orient-electric-1200mm-apex-fx",
    "price": 1796,
    "mrp": 2190,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-7-orient-electric-1200mm-apex-fx",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-7-orient-electric-1200mm-apex-fx",
    "price": 1927,
    "mrp": 2190,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-8-luminous-zelio-1100-pure-sine-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-8-luminous-zelio-1100-pure-sine-",
    "price": 6591,
    "mrp": 7490,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-8-luminous-zelio-1100-pure-sine-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-8-luminous-zelio-1100-pure-sine-",
    "price": 6966,
    "mrp": 7490,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-9-anchor-pvc-self-adhesive-elect",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-9-anchor-pvc-self-adhesive-elect",
    "price": 74,
    "mrp": 90,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-9-anchor-pvc-self-adhesive-elect",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-9-anchor-pvc-self-adhesive-elect",
    "price": 79,
    "mrp": 90,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-10-gm-4-outlet-heavy-duty-spike-g",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-10-gm-4-outlet-heavy-duty-spike-g",
    "price": 607,
    "mrp": 690,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-10-gm-4-outlet-heavy-duty-spike-g",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-10-gm-4-outlet-heavy-duty-spike-g",
    "price": 642,
    "mrp": 690,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-1-astral-cpvc-pro-1-inch-pipe-cl",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-1-astral-cpvc-pro-1-inch-pipe-cl",
    "price": 394,
    "mrp": 480,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-1-astral-cpvc-pro-1-inch-pipe-cl",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-1-astral-cpvc-pro-1-inch-pipe-cl",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-2-supreme-upvc-3-4-inch-ball-val",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-2-supreme-upvc-3-4-inch-ball-val",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-2-supreme-upvc-3-4-inch-ball-val",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-2-supreme-upvc-3-4-inch-ball-val",
    "price": 270,
    "mrp": 290,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-3-hindware-f160013-brass-pillar-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-3-hindware-f160013-brass-pillar-",
    "price": 976,
    "mrp": 1190,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-3-hindware-f160013-brass-pillar-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-3-hindware-f160013-brass-pillar-",
    "price": 1047,
    "mrp": 1190,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-4-cera-2-in-1-wall-mixer-with-pr",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-4-cera-2-in-1-wall-mixer-with-pr",
    "price": 3036,
    "mrp": 3450,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-4-cera-2-in-1-wall-mixer-with-pr",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-4-cera-2-in-1-wall-mixer-with-pr",
    "price": 3209,
    "mrp": 3450,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-5-astral-bondtite-solvent-cement",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-5-astral-bondtite-solvent-cement",
    "price": 131,
    "mrp": 160,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-5-astral-bondtite-solvent-cement",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-5-astral-bondtite-solvent-cement",
    "price": 141,
    "mrp": 160,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-6-kohler-multi-flow-chrome-overh",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-6-kohler-multi-flow-chrome-overh",
    "price": 2631,
    "mrp": 2990,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-6-kohler-multi-flow-chrome-overh",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-6-kohler-multi-flow-chrome-overh",
    "price": 2781,
    "mrp": 2990,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-7-supreme-4-inch-swr-pvc-drainag",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-7-supreme-4-inch-swr-pvc-drainag",
    "price": 558,
    "mrp": 680,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-7-supreme-4-inch-swr-pvc-drainag",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-7-supreme-4-inch-swr-pvc-drainag",
    "price": 598,
    "mrp": 680,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-8-pidilite-m-seal-epoxy-compound",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-8-pidilite-m-seal-epoxy-compound",
    "price": 31,
    "mrp": 35,
    "discountPercent": 11,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-8-pidilite-m-seal-epoxy-compound",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-8-pidilite-m-seal-epoxy-compound",
    "price": 33,
    "mrp": 35,
    "discountPercent": 6,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-9-ptfe-teflon-pipe-thread-sealin",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-9-ptfe-teflon-pipe-thread-sealin",
    "price": 123,
    "mrp": 150,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-9-ptfe-teflon-pipe-thread-sealin",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-9-ptfe-teflon-pipe-thread-sealin",
    "price": 132,
    "mrp": 150,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-10-jaquar-health-faucet-with-1-2m",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-10-jaquar-health-faucet-with-1-2m",
    "price": 1276,
    "mrp": 1450,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-10-jaquar-health-faucet-with-1-2m",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-10-jaquar-health-faucet-with-1-2m",
    "price": 1349,
    "mrp": 1450,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-1-asian-paints-apex-ultima-exter",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-1-asian-paints-apex-ultima-exter",
    "price": 1517,
    "mrp": 1850,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-1-asian-paints-apex-ultima-exter",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-1-asian-paints-apex-ultima-exter",
    "price": 1628,
    "mrp": 1850,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-2-asian-paints-royale-luxury-int",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-2-asian-paints-royale-luxury-int",
    "price": 1892,
    "mrp": 2150,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-2-asian-paints-royale-luxury-int",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-2-asian-paints-royale-luxury-int",
    "price": 2000,
    "mrp": 2150,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-3-birla-white-wall-care-putty-wa",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-3-birla-white-wall-care-putty-wa",
    "price": 697,
    "mrp": 850,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-3-birla-white-wall-care-putty-wa",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-3-birla-white-wall-care-putty-wa",
    "price": 748,
    "mrp": 850,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-4-asian-paints-tractor-emulsion-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-4-asian-paints-tractor-emulsion-",
    "price": 1716,
    "mrp": 1950,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-4-asian-paints-tractor-emulsion-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-4-asian-paints-tractor-emulsion-",
    "price": 1814,
    "mrp": 1950,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-5-berger-walmasta-exterior-antif",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-5-berger-walmasta-exterior-antif",
    "price": 1550,
    "mrp": 1890,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-5-berger-walmasta-exterior-antif",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-5-berger-walmasta-exterior-antif",
    "price": 1663,
    "mrp": 1890,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-6-dr-fixit-101-lw-waterproofing-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-6-dr-fixit-101-lw-waterproofing-",
    "price": 660,
    "mrp": 750,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-6-dr-fixit-101-lw-waterproofing-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-6-dr-fixit-101-lw-waterproofing-",
    "price": 698,
    "mrp": 750,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-7-asian-paints-decoprime-wall-pr",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-7-asian-paints-decoprime-wall-pr",
    "price": 640,
    "mrp": 780,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-7-asian-paints-decoprime-wall-pr",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-7-asian-paints-decoprime-wall-pr",
    "price": 686,
    "mrp": 780,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-8-asian-paints-9-inch-soft-grip-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-8-asian-paints-9-inch-soft-grip-",
    "price": 308,
    "mrp": 350,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-8-asian-paints-9-inch-soft-grip-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-8-asian-paints-9-inch-soft-grip-",
    "price": 326,
    "mrp": 350,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-9-fevicol-sh-synthetic-resin-adh",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-9-fevicol-sh-synthetic-resin-adh",
    "price": 238,
    "mrp": 290,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-9-fevicol-sh-synthetic-resin-adh",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-9-fevicol-sh-synthetic-resin-adh",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-10-dr-fixit-raincoat-waterproof-e",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-10-dr-fixit-raincoat-waterproof-e",
    "price": 1452,
    "mrp": 1650,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-10-dr-fixit-raincoat-waterproof-e",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-10-dr-fixit-raincoat-waterproof-e",
    "price": 1535,
    "mrp": 1650,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-1-godrej-nav-tal-7-levers-high-s",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-1-godrej-nav-tal-7-levers-high-s",
    "price": 508,
    "mrp": 620,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-1-godrej-nav-tal-7-levers-high-s",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-1-godrej-nav-tal-7-levers-high-s",
    "price": 546,
    "mrp": 620,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-2-europa-high-security-rim-main-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-2-europa-high-security-rim-main-",
    "price": 2156,
    "mrp": 2450,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-2-europa-high-security-rim-main-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-2-europa-high-security-rim-main-",
    "price": 2279,
    "mrp": 2450,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-3-heavy-duty-stainless-steel-304",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-3-heavy-duty-stainless-steel-304",
    "price": 615,
    "mrp": 750,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-3-heavy-duty-stainless-steel-304",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-3-heavy-duty-stainless-steel-304",
    "price": 660,
    "mrp": 750,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-4-zinc-plated-steel-self-drillin",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-4-zinc-plated-steel-self-drillin",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-4-zinc-plated-steel-self-drillin",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-4-zinc-plated-steel-self-drillin",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-5-godrej-classic-cylindrical-sta",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-5-godrej-classic-cylindrical-sta",
    "price": 1025,
    "mrp": 1250,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-5-godrej-classic-cylindrical-sta",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-5-godrej-classic-cylindrical-sta",
    "price": 1100,
    "mrp": 1250,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-6-fischer-nylon-wall-plugs-rawl-",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-6-fischer-nylon-wall-plugs-rawl-",
    "price": 282,
    "mrp": 320,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-6-fischer-nylon-wall-plugs-rawl-",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-6-fischer-nylon-wall-plugs-rawl-",
    "price": 298,
    "mrp": 320,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-7-ozone-hydraulic-automatic-alum",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-7-ozone-hydraulic-automatic-alum",
    "price": 1189,
    "mrp": 1450,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-7-ozone-hydraulic-automatic-alum",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-7-ozone-hydraulic-automatic-alum",
    "price": 1276,
    "mrp": 1450,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-8-heavy-duty-solid-brass-tower-b",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-8-heavy-duty-solid-brass-tower-b",
    "price": 370,
    "mrp": 420,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-8-heavy-duty-solid-brass-tower-b",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-8-heavy-duty-solid-brass-tower-b",
    "price": 391,
    "mrp": 420,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-9-high-tensile-grade-8-8-hex-bol",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-9-high-tensile-grade-8-8-hex-bol",
    "price": 394,
    "mrp": 480,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-9-high-tensile-grade-8-8-hex-bol",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-9-high-tensile-grade-8-8-hex-bol",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-hardware-tools-prod-hardware-10-dorset-stainless-steel-main-do",
    "storeId": "store-jamui-hardware-tools",
    "productId": "prod-hardware-10-dorset-stainless-steel-main-do",
    "price": 1012,
    "mrp": 1150,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-metro-sanitary-prod-hardware-10-dorset-stainless-steel-main-do",
    "storeId": "store-jamui-metro-sanitary",
    "productId": "prod-hardware-10-dorset-stainless-steel-main-do",
    "price": 1070,
    "mrp": 1150,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-1-classmate-long-notebook-single",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-1-classmate-long-notebook-single",
    "price": 344,
    "mrp": 420,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-1-classmate-long-notebook-single",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-1-classmate-long-notebook-single",
    "price": 370,
    "mrp": 420,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-2-classmate-pulse-spiral-bound-n",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-2-classmate-pulse-spiral-bound-n",
    "price": 343,
    "mrp": 390,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-2-classmate-pulse-spiral-bound-n",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-2-classmate-pulse-spiral-bound-n",
    "price": 363,
    "mrp": 390,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-3-navneet-youva-hard-bound-accou",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-3-navneet-youva-hard-bound-accou",
    "price": 230,
    "mrp": 280,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-3-navneet-youva-hard-bound-accou",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-3-navneet-youva-hard-bound-accou",
    "price": 246,
    "mrp": 280,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-4-classmate-soft-cover-ruled-not",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-4-classmate-soft-cover-ruled-not",
    "price": 422,
    "mrp": 480,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-4-classmate-soft-cover-ruled-not",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-4-classmate-soft-cover-ruled-not",
    "price": 446,
    "mrp": 480,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-5-camlin-kokuyo-spiral-drawing-b",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-5-camlin-kokuyo-spiral-drawing-b",
    "price": 148,
    "mrp": 180,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-5-camlin-kokuyo-spiral-drawing-b",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-5-camlin-kokuyo-spiral-drawing-b",
    "price": 158,
    "mrp": 180,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-6-navneet-youva-practical-journa",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-6-navneet-youva-practical-journa",
    "price": 84,
    "mrp": 95,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-6-navneet-youva-practical-journa",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-6-navneet-youva-practical-journa",
    "price": 88,
    "mrp": 95,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-7-factor-notes-weekly-planner-pr",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-7-factor-notes-weekly-planner-pr",
    "price": 409,
    "mrp": 499,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-7-factor-notes-weekly-planner-pr",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-7-factor-notes-weekly-planner-pr",
    "price": 439,
    "mrp": 499,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-8-jk-cedar-executive-hardcover-r",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-8-jk-cedar-executive-hardcover-r",
    "price": 229,
    "mrp": 260,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-8-jk-cedar-executive-hardcover-r",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-8-jk-cedar-executive-hardcover-r",
    "price": 242,
    "mrp": 260,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-9-classmate-geometry-practical-l",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-9-classmate-geometry-practical-l",
    "price": 53,
    "mrp": 65,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-9-classmate-geometry-practical-l",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-9-classmate-geometry-practical-l",
    "price": 57,
    "mrp": 65,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-10-navneet-graph-notebook-centime",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-10-navneet-graph-notebook-centime",
    "price": 40,
    "mrp": 45,
    "discountPercent": 11,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-10-navneet-graph-notebook-centime",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-10-navneet-graph-notebook-centime",
    "price": 42,
    "mrp": 45,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-1-parker-vector-matte-black-foun",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-1-parker-vector-matte-black-foun",
    "price": 533,
    "mrp": 650,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-1-parker-vector-matte-black-foun",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-1-parker-vector-matte-black-foun",
    "price": 572,
    "mrp": 650,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-2-reynolds-045-fine-carbide-tip-",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-2-reynolds-045-fine-carbide-tip-",
    "price": 176,
    "mrp": 200,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-2-reynolds-045-fine-carbide-tip-",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-2-reynolds-045-fine-carbide-tip-",
    "price": 186,
    "mrp": 200,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-3-uniball-eye-ub-150-micro-0-5mm",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-3-uniball-eye-ub-150-micro-0-5mm",
    "price": 221,
    "mrp": 270,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-3-uniball-eye-ub-150-micro-0-5mm",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-3-uniball-eye-ub-150-micro-0-5mm",
    "price": 238,
    "mrp": 270,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-4-doms-water-colour-cakes-24-vib",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-4-doms-water-colour-cakes-24-vib",
    "price": 132,
    "mrp": 150,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-4-doms-water-colour-cakes-24-vib",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-4-doms-water-colour-cakes-24-vib",
    "price": 140,
    "mrp": 150,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-5-faber-castell-24-tri-colour-tr",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-5-faber-castell-24-tri-colour-tr",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-5-faber-castell-24-tri-colour-tr",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-5-faber-castell-24-tri-colour-tr",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-6-pilot-v5-liquid-ink-high-preci",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-6-pilot-v5-liquid-ink-high-preci",
    "price": 211,
    "mrp": 240,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-6-pilot-v5-liquid-ink-high-preci",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-6-pilot-v5-liquid-ink-high-preci",
    "price": 223,
    "mrp": 240,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-7-doms-smart-drawing-kit-8-in-1-",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-7-doms-smart-drawing-kit-8-in-1-",
    "price": 287,
    "mrp": 350,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-7-doms-smart-drawing-kit-8-in-1-",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-7-doms-smart-drawing-kit-8-in-1-",
    "price": 308,
    "mrp": 350,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-8-camlin-artist-acrylic-colour-1",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-8-camlin-artist-acrylic-colour-1",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-8-camlin-artist-acrylic-colour-1",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-8-camlin-artist-acrylic-colour-1",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-9-cello-butterflow-classic-blue-",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-9-cello-butterflow-classic-blue-",
    "price": 164,
    "mrp": 200,
    "discountPercent": 18,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-9-cello-butterflow-classic-blue-",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-9-cello-butterflow-classic-blue-",
    "price": 176,
    "mrp": 200,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-10-staedtler-mars-lumograph-profe",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-10-staedtler-mars-lumograph-profe",
    "price": 546,
    "mrp": 620,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-10-staedtler-mars-lumograph-profe",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-10-staedtler-mars-lumograph-profe",
    "price": 577,
    "mrp": 620,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-1-jk-copier-a4-paper-75-gsm-high",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-1-jk-copier-a4-paper-75-gsm-high",
    "price": 312,
    "mrp": 380,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-1-jk-copier-a4-paper-75-gsm-high",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-1-jk-copier-a4-paper-75-gsm-high",
    "price": 334,
    "mrp": 380,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-2-kangaroo-heavy-duty-desktop-pa",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-2-kangaroo-heavy-duty-desktop-pa",
    "price": 141,
    "mrp": 160,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-2-kangaroo-heavy-duty-desktop-pa",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-2-kangaroo-heavy-duty-desktop-pa",
    "price": 149,
    "mrp": 160,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-3-casio-mj-120d-plus-desktop-che",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-3-casio-mj-120d-plus-desktop-che",
    "price": 447,
    "mrp": 545,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-3-casio-mj-120d-plus-desktop-che",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-3-casio-mj-120d-plus-desktop-che",
    "price": 480,
    "mrp": 545,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-4-kores-white-glow-dry-correctio",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-4-kores-white-glow-dry-correctio",
    "price": 75,
    "mrp": 85,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-4-kores-white-glow-dry-correctio",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-4-kores-white-glow-dry-correctio",
    "price": 79,
    "mrp": 85,
    "discountPercent": 7,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-5-kangaro-heavy-duty-2-hole-pape",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-5-kangaro-heavy-duty-2-hole-pape",
    "price": 238,
    "mrp": 290,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-5-kangaro-heavy-duty-2-hole-pape",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-5-kangaro-heavy-duty-2-hole-pape",
    "price": 255,
    "mrp": 290,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-6-solo-premium-a4-button-file-fo",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-6-solo-premium-a4-button-file-fo",
    "price": 220,
    "mrp": 250,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-6-solo-premium-a4-button-file-fo",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-6-solo-premium-a4-button-file-fo",
    "price": 233,
    "mrp": 250,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-7-scotch-3m-transparent-strong-a",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-7-scotch-3m-transparent-strong-a",
    "price": 98,
    "mrp": 120,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-7-scotch-3m-transparent-strong-a",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-7-scotch-3m-transparent-strong-a",
    "price": 106,
    "mrp": 120,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-8-casio-fx-991cw-scientific-calc",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-8-casio-fx-991cw-scientific-calc",
    "price": 1404,
    "mrp": 1595,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-8-casio-fx-991cw-scientific-calc",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-8-casio-fx-991cw-scientific-calc",
    "price": 1483,
    "mrp": 1595,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-9-canon-pg-745-black-genuine-ink",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-9-canon-pg-745-black-genuine-ink",
    "price": 980,
    "mrp": 1195,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-9-canon-pg-745-black-genuine-ink",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-9-canon-pg-745-black-genuine-ink",
    "price": 1052,
    "mrp": 1195,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-10-kangaro-chrome-plated-paper-ge",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-10-kangaro-chrome-plated-paper-ge",
    "price": 53,
    "mrp": 60,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-10-kangaro-chrome-plated-paper-ge",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-10-kangaro-chrome-plated-paper-ge",
    "price": 56,
    "mrp": 60,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-1-skybags-bravo-3-compartment-wa",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-1-skybags-bravo-3-compartment-wa",
    "price": 1803,
    "mrp": 2199,
    "discountPercent": 18,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-1-skybags-bravo-3-compartment-wa",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-1-skybags-bravo-3-compartment-wa",
    "price": 1935,
    "mrp": 2199,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-2-american-tourister-casual-32l-",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-2-american-tourister-casual-32l-",
    "price": 2191,
    "mrp": 2490,
    "discountPercent": 12,
    "stockQuantity": 17,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-2-american-tourister-casual-32l-",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-2-american-tourister-casual-32l-",
    "price": 2316,
    "mrp": 2490,
    "discountPercent": 7,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "3 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-3-camlin-kokuyo-scholar-geometry",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-3-camlin-kokuyo-scholar-geometry",
    "price": 148,
    "mrp": 180,
    "discountPercent": 18,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-3-camlin-kokuyo-scholar-geometry",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-3-camlin-kokuyo-scholar-geometry",
    "price": 158,
    "mrp": 180,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "6 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-4-milton-thermosteel-flip-lid-in",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-4-milton-thermosteel-flip-lid-in",
    "price": 615,
    "mrp": 699,
    "discountPercent": 12,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-4-milton-thermosteel-flip-lid-in",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-4-milton-thermosteel-flip-lid-in",
    "price": 650,
    "mrp": 699,
    "discountPercent": 7,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "9 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-5-classmate-victor-metal-geometr",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-5-classmate-victor-metal-geometr",
    "price": 180,
    "mrp": 220,
    "discountPercent": 18,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-5-classmate-victor-metal-geometr",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-5-classmate-victor-metal-geometr",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "12 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-6-cello-maxfresh-stainless-steel",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-6-cello-maxfresh-stainless-steel",
    "price": 748,
    "mrp": 850,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-6-cello-maxfresh-stainless-steel",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-6-cello-maxfresh-stainless-steel",
    "price": 791,
    "mrp": 850,
    "discountPercent": 7,
    "stockQuantity": 14,
    "status": "in_stock",
    "lastUpdated": "15 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-7-safari-seek-35l-water-resistan",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-7-safari-seek-35l-water-resistan",
    "price": 2206,
    "mrp": 2690,
    "discountPercent": 18,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-7-safari-seek-35l-water-resistan",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-7-safari-seek-35l-water-resistan",
    "price": 2367,
    "mrp": 2690,
    "discountPercent": 12,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "18 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-8-faber-castell-pvc-free-dust-fr",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-8-faber-castell-pvc-free-dust-fr",
    "price": 88,
    "mrp": 100,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-8-faber-castell-pvc-free-dust-fr",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-8-faber-castell-pvc-free-dust-fr",
    "price": 93,
    "mrp": 100,
    "discountPercent": 7,
    "stockQuantity": 20,
    "status": "in_stock",
    "lastUpdated": "21 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-9-doms-neon-apsara-platinum-extr",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-9-doms-neon-apsara-platinum-extr",
    "price": 57,
    "mrp": 70,
    "discountPercent": 19,
    "stockQuantity": 18,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-9-doms-neon-apsara-platinum-extr",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-9-doms-neon-apsara-platinum-extr",
    "price": 62,
    "mrp": 70,
    "discountPercent": 11,
    "stockQuantity": 23,
    "status": "in_stock",
    "lastUpdated": "24 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-10-funskool-hardtop-embossed-3d-a",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-10-funskool-hardtop-embossed-3d-a",
    "price": 351,
    "mrp": 399,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-10-funskool-hardtop-embossed-3d-a",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-10-funskool-hardtop-embossed-3d-a",
    "price": 371,
    "mrp": 399,
    "discountPercent": 7,
    "stockQuantity": 26,
    "status": "in_stock",
    "lastUpdated": "27 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-1-lucent-s-general-knowledge-sam",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-1-lucent-s-general-knowledge-sam",
    "price": 295,
    "mrp": 360,
    "discountPercent": 18,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-1-lucent-s-general-knowledge-sam",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-1-lucent-s-general-knowledge-sam",
    "price": 317,
    "mrp": 360,
    "discountPercent": 12,
    "stockQuantity": 29,
    "status": "in_stock",
    "lastUpdated": "5 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-2-quantitative-aptitude-for-comp",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-2-quantitative-aptitude-for-comp",
    "price": 703,
    "mrp": 799,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-2-quantitative-aptitude-for-comp",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-2-quantitative-aptitude-for-comp",
    "price": 743,
    "mrp": 799,
    "discountPercent": 7,
    "stockQuantity": 32,
    "status": "in_stock",
    "lastUpdated": "8 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-3-a-modern-approach-to-verbal-no",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-3-a-modern-approach-to-verbal-no",
    "price": 697,
    "mrp": 850,
    "discountPercent": 18,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-3-a-modern-approach-to-verbal-no",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-3-a-modern-approach-to-verbal-no",
    "price": 748,
    "mrp": 850,
    "discountPercent": 12,
    "stockQuantity": 15,
    "status": "in_stock",
    "lastUpdated": "11 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-4-ncert-indian-history-class-6-1",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-4-ncert-indian-history-class-6-1",
    "price": 396,
    "mrp": 450,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-4-ncert-indian-history-class-6-1",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-4-ncert-indian-history-class-6-1",
    "price": 419,
    "mrp": 450,
    "discountPercent": 7,
    "stockQuantity": 2,
    "status": "low_stock",
    "lastUpdated": "14 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-5-fast-track-objective-arithmeti",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-5-fast-track-objective-arithmeti",
    "price": 349,
    "mrp": 425,
    "discountPercent": 18,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "10 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-5-fast-track-objective-arithmeti",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-5-fast-track-objective-arithmeti",
    "price": 374,
    "mrp": 425,
    "discountPercent": 12,
    "stockQuantity": 21,
    "status": "in_stock",
    "lastUpdated": "17 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-6-general-science-for-railway-ss",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-6-general-science-for-railway-ss",
    "price": 194,
    "mrp": 220,
    "discountPercent": 12,
    "stockQuantity": 19,
    "status": "in_stock",
    "lastUpdated": "13 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-6-general-science-for-railway-ss",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-6-general-science-for-railway-ss",
    "price": 205,
    "mrp": 220,
    "discountPercent": 7,
    "stockQuantity": 24,
    "status": "in_stock",
    "lastUpdated": "20 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-7-english-grammar-composition-by",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-7-english-grammar-composition-by",
    "price": 409,
    "mrp": 499,
    "discountPercent": 18,
    "stockQuantity": 22,
    "status": "in_stock",
    "lastUpdated": "16 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-7-english-grammar-composition-by",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-7-english-grammar-composition-by",
    "price": 439,
    "mrp": 499,
    "discountPercent": 12,
    "stockQuantity": 27,
    "status": "in_stock",
    "lastUpdated": "23 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-8-oxford-student-atlas-for-india",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-8-oxford-student-atlas-for-india",
    "price": 330,
    "mrp": 375,
    "discountPercent": 12,
    "stockQuantity": 25,
    "status": "in_stock",
    "lastUpdated": "19 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-8-oxford-student-atlas-for-india",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-8-oxford-student-atlas-for-india",
    "price": 349,
    "mrp": 375,
    "discountPercent": 7,
    "stockQuantity": 30,
    "status": "in_stock",
    "lastUpdated": "26 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-9-bpsc-bihar-special-gk-bihar-sa",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-9-bpsc-bihar-special-gk-bihar-sa",
    "price": 287,
    "mrp": 350,
    "discountPercent": 18,
    "stockQuantity": 28,
    "status": "in_stock",
    "lastUpdated": "22 mins ago",
    "isBestPrice": true
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-9-bpsc-bihar-special-gk-bihar-sa",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-9-bpsc-bihar-special-gk-bihar-sa",
    "price": 308,
    "mrp": 350,
    "discountPercent": 12,
    "stockQuantity": 33,
    "status": "in_stock",
    "lastUpdated": "4 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-stationery-books-prod-stationery-10-drishti-ias-current-affairs-ye",
    "storeId": "store-jamui-stationery-books",
    "productId": "prod-stationery-10-drishti-ias-current-affairs-ye",
    "price": 246,
    "mrp": 280,
    "discountPercent": 12,
    "stockQuantity": 31,
    "status": "in_stock",
    "lastUpdated": "25 mins ago",
    "isBestPrice": false
  },
  {
    "id": "inv-store-jamui-student-corner-prod-stationery-10-drishti-ias-current-affairs-ye",
    "storeId": "store-jamui-student-corner",
    "productId": "prod-stationery-10-drishti-ias-current-affairs-ye",
    "price": 260,
    "mrp": 280,
    "discountPercent": 7,
    "stockQuantity": 16,
    "status": "in_stock",
    "lastUpdated": "7 mins ago",
    "isBestPrice": false
  }
],
  demands: [
    {
      id: 'dem-001',
      productId: 'prod-automobile-1-honda-cb-shine-front-disc-brak',
      productName: 'Honda CB Shine Front Disc Brake Pad (Genuine OEM)',
      brand: 'Honda',
      categoryId: 'cat-automobile',
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
      storeId: 'store-jamui-gadget-point',
      storeName: 'Jamui Gadget & Mobile World',
      storeArea: 'Cinema Road / Commercial Hub',
      productId: 'prod-electronics-1-apple-iphone-15-128gb-black-dy',
      productName: 'Apple iPhone 15 (128GB, Black) - Dynamic Island & 48MP Camera',
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
      storeId: 'store-jamui-sharma-auto',
      storeName: 'Jamui Sharma Auto Spares & Bike Clinic',
      customerId: 'usr-customer-1',
      customerName: 'Aakash Kumar',
      customerPhone: '+91 98450 12345',
      customerMessage: 'Do you have original Motul 7100 10W-50 with unbroken seal in stock?',
      productId: 'prod-automobile-1-motul-7100-4t-10w-50-100-synth',
      productName: 'Motul 7100 4T 10W-50 100% Synthetic Ester Motorcycle Engine Oil (1L)',
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
      storeId: 'store-jamui-sharma-auto',
      productId: 'prod-automobile-1-motul-7100-4t-10w-50-100-synth',
      customerName: 'Karthik Rao',
      rating: 5,
      comment: 'Got genuine Motul 7100 at ₹880 compared to online ₹1045. Verified barcode and seal. Best local shop!',
      date: '2026-08-20',
      verifiedPurchase: true
    }
  ],
  users: [
    { id: 'usr-customer-1', name: 'Aakash Kumar', email: 'aakash@dhoondo.local', phone: '+91 98450 12345', role: 'customer' },
    { id: 'usr-retailer-1', name: 'Rajesh Sharma', email: 'sharma.autoparts@gmail.com', phone: '+91 98450 12345', role: 'retailer', storeId: 'store-jamui-sharma-auto' },
    { id: 'usr-admin-1', name: 'Admin Master', email: 'admin@dhoondo.in', phone: '+91 80 4000 8000', role: 'admin' },
  ],
};

const isDbConnected = () => {
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;
};

module.exports = { mockData, isDbConnected };
