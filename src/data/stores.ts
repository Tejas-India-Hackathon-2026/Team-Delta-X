import { Store, StoreInventory, Product, RetailerSubscription } from '../types';

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

export const INITIAL_STORES: Store[] = [
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
];

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
      name: `${city} Sharma Auto Spares & Bike Clinic`,
      ownerName: 'Rajesh Sharma',
      phone: '+91 98450 12345',
      whatsapp: '919845012345',
      email: `sharma.auto.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-automobile'],
      rating: 4.8,
      reviewCount: 342,
      verified: true,
      openingHours: '8:30 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Genuine OEM Parts', 'Fitting Support', 'UPI Accepted', 'Counter Billing'],
      about: `Premier motorcycle and 4-wheeler parts distributor in ${city}, ${state}. Stocking genuine Motul, Castrol, Hero, Honda, and Exide batteries.`,
      gstNumber: '10AUTO1234F1Z5',
      joinedDate: '2023-01-10',
      viewsCount: 1540,
      enquiriesCount: 110
    },
    {
      name: `${city} Kumar Motors & Genuine Spares`,
      ownerName: 'Sunil Kumar',
      phone: '+91 98801 54321',
      whatsapp: '919880154321',
      email: `kumar.motors.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-automobile'],
      rating: 4.6,
      reviewCount: 198,
      verified: true,
      openingHours: '9:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      facilities: ['MRF Tyres Dealer', 'Wholesale Rates', 'Instant Installation'],
      about: `Authorized two-wheeler spares distributor in ${city}, stocking MRF Tyres, Amaron batteries, and clutch/brake parts.`,
      gstNumber: '10KUMAR8899K1Z4',
      joinedDate: '2023-04-12',
      viewsCount: 1420,
      enquiriesCount: 95
    },
    {
      name: `${city} Gadget & Mobile World`,
      ownerName: 'Arif Khan',
      phone: '+91 98805 77665',
      whatsapp: '919880577665',
      email: `gadgets.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-electronics'],
      rating: 4.8,
      reviewCount: 420,
      verified: true,
      openingHours: '10:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Apple & Samsung Store', '0% EMI', 'Tempered Glass Fitment'],
      about: `Smartphone and gadget showroom in ${city}, offering iPhone 15, OnePlus, boAt audio, and Anker fast chargers.`,
      gstNumber: '10GADGET1234P1Z2',
      joinedDate: '2023-02-15',
      viewsCount: 3200,
      enquiriesCount: 290
    },
    {
      name: `${city} Digital Electronics & Audio Point`,
      ownerName: 'Vikash Barnwal',
      phone: '+91 98765 44332',
      whatsapp: '919876544332',
      email: `digitalhub.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-electronics'],
      rating: 4.7,
      reviewCount: 265,
      verified: true,
      openingHours: '10:00 AM - 9:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Bluetooth Speakers', 'Smartwatches', 'Fast Chargers', 'Memory Cards'],
      about: `Authorized seller for boAt, Sony, Noise, JBL, and Fastrack smart wearables and sound systems in ${city}.`,
      gstNumber: '10DIGITAL5567R1Z9',
      joinedDate: '2022-10-15',
      viewsCount: 2100,
      enquiriesCount: 160
    },
    {
      name: `${city} Care 24x7 Chemist & Surgicals`,
      ownerName: 'Dr. Anita Desai',
      phone: '+91 98800 23456',
      whatsapp: '919880023456',
      email: `carepharmacy.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.9,
      reviewCount: 512,
      verified: true,
      openingHours: '24 Hours Open',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['24x7 Open', 'Cold Storage Insulin', 'Digital Rx OCR', 'Home Delivery in 15 Mins'],
      about: `Round-the-clock medical counter in ${city}, stocking Dolo 650, Dr. Morepen Glucometers, Omron BP monitors, and surgical items.`,
      gstNumber: '10PHARM5567R1Z9',
      joinedDate: '2022-08-15',
      viewsCount: 3450,
      enquiriesCount: 312
    },
    {
      name: `${city} MedPlus Pharmacy & Wellness`,
      ownerName: 'Dr. Suresh Reddy',
      phone: '+91 98860 77889',
      whatsapp: '919886077889',
      email: `medplus.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-pharmacy'],
      rating: 4.8,
      reviewCount: 390,
      verified: true,
      openingHours: '7:30 AM - 11:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1586015555751-63c252277d3f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Flat 15% Off', 'Prescription Verification', 'Diabetic Diet', 'Vitamins'],
      about: `Trusted pharmacy chain in ${city}, providing authentic branded healthcare, vitamins, blood pressure monitors, and wellness products.`,
      gstNumber: '10MEDPLUS3322L1Z6',
      joinedDate: '2023-01-25',
      viewsCount: 1980,
      enquiriesCount: 155
    },
    {
      name: `${city} Sri Krishna Super Store & Kirana`,
      ownerName: 'Gopalakrishna Rao',
      phone: '+91 99002 33445',
      whatsapp: '919900233445',
      email: `srikrishnakirana.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-grocery'],
      rating: 4.7,
      reviewCount: 480,
      verified: true,
      openingHours: '7:30 AM - 10:00 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Home Delivery in 20 Mins', 'Wholesale Rations', 'UPI Accepted'],
      about: `Wholesale & retail kirana store in ${city}, offering Fortune Basmati Rice, Aashirvaad Atta, Amul Ghee, Tata Tea, and authentic masalas.`,
      gstNumber: '10GROC1234K1Z2',
      joinedDate: '2022-11-01',
      viewsCount: 2310,
      enquiriesCount: 190
    },
    {
      name: `${city} Fresh Daily Needs & Grocery Mart`,
      ownerName: 'Sunil Agrawal',
      phone: '+91 98765 33445',
      whatsapp: '919876533445',
      email: `freshmart.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-grocery'],
      rating: 4.8,
      reviewCount: 315,
      verified: true,
      openingHours: '7:00 AM - 10:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Express Delivery', 'Dairy & Paneer', 'Cleaning Products', 'Packaged Foods'],
      about: `Complete family grocery mart in ${city}, stocking daily essentials, dairy, detergents, cooking oils, and packaged snacks.`,
      gstNumber: '10FRESH9982D1ZH',
      joinedDate: '2023-02-20',
      viewsCount: 2200,
      enquiriesCount: 175
    },
    {
      name: `${city} Mahalaxmi Hardware & Power Tools`,
      ownerName: 'Manoj Kumar Gupta',
      phone: '+91 98765 77881',
      whatsapp: '919876577881',
      email: `hardware.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-hardware'],
      rating: 4.8,
      reviewCount: 280,
      verified: true,
      openingHours: '8:30 AM - 8:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Stanley & Bosch Dealer', 'Asian Paints Center', 'Havells Wires', 'Astral Pipes'],
      about: `Industrial and household hardware supplier in ${city}, offering Stanley toolsets, Bosch drills, plumbing fixtures, and Godrej locks.`,
      gstNumber: '10HARD1234F1Z5',
      joinedDate: '2023-01-15',
      viewsCount: 1800,
      enquiriesCount: 140
    },
    {
      name: `${city} Vidya Sagar Book Depot & Stationery`,
      ownerName: 'Ramanand Mishra',
      phone: '+91 98765 88990',
      whatsapp: '919876588990',
      email: `stationery.${safeCitySlug}@dhoondo.local`,
      categoryIds: ['cat-stationery'],
      rating: 4.9,
      reviewCount: 380,
      verified: true,
      openingHours: '8:00 AM - 9:30 PM',
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
      facilities: ['Lucent & RS Aggarwal Books', 'Classmate Registers', 'Parker Pens', 'Color Xerox'],
      about: `Leading book depot in ${city}, specializing in competitive exam books (SSC, BPSC, UPSC, Railway), school notebooks, and fine art supplies.`,
      gstNumber: '10BOOK7788P1Z3',
      joinedDate: '2022-11-20',
      viewsCount: 2100,
      enquiriesCount: 165
    }
  ];

  // Coordinates strictly within 100m to 850m radius (Strictly under 1.0 km)
  const offsets = [
    { dLat: 0.0010, dLng: 0.0008, area: `Main Market / Gandhi Chowk, ${city}` }, // ~140m
    { dLat: -0.0022, dLng: 0.0018, area: `Station Road / Commercial Hub, ${city}` }, // ~320m
    { dLat: 0.0019, dLng: -0.0016, area: `Cinema Road / City Center, ${city}` }, // ~280m
    { dLat: -0.0032, dLng: -0.0024, area: `Tower Chowk / Court Area, ${city}` }, // ~460m
    { dLat: 0.0016, dLng: 0.0025, area: `Hospital Road / Sadar Hospital, ${city}` }, // ~340m
    { dLat: -0.0038, dLng: 0.0032, area: `Kutchery Road / LIC Complex, ${city}` }, // ~550m
    { dLat: -0.0014, dLng: -0.0011, area: `Gola Road / Purani Bazaar, ${city}` }, // ~190m
    { dLat: 0.0035, dLng: 0.0038, area: `Mahavir Chowk / By-Pass, ${city}` }, // ~580m
    { dLat: 0.0026, dLng: -0.0032, area: `Loha Mandi / Industrial Area, ${city}` }, // ~460m
    { dLat: -0.0018, dLng: 0.0035, area: `College Gate Road / Campus Area, ${city}` } // ~440m
  ];

  return templates.map((tmpl, idx) => {
    const offset = offsets[idx % offsets.length];
    return {
      ...tmpl,
      id: `store-${safeCitySlug}-${idx + 1}`,
      address: `Shop #${10 + idx * 5}, ${offset.area}`,
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
          id: `inv-${store.id}-${prod.id}`,
          storeId: store.id,
          productId: prod.id,
          price,
          mrp: prod.mrp,
          discountPercent: discount,
          stockQuantity,
          status,
          lastUpdated: `${((storeIdx + prodIdx) % 35) + 5} mins ago`,
          isBestPrice: multiplier <= 0.85
        });
      }
    });
  });

  return result;
};
