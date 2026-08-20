const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Category = require('./src/models/Category');
const Store = require('./src/models/Store');
const Product = require('./src/models/Product');
const Inventory = require('./src/models/Inventory');
const Offer = require('./src/models/Offer');
const Demand = require('./src/models/Demand');
const Enquiry = require('./src/models/Enquiry');
const Review = require('./src/models/Review');
const User = require('./src/models/User');

const seedDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dhoondo');
    console.log(`Connected to MongoDB for Seeding: ${conn.connection.host}`);

    // Clear existing collections
    await Category.deleteMany({});
    await Store.deleteMany({});
    await Product.deleteMany({});
    await Inventory.deleteMany({});
    await Offer.deleteMany({});
    await Demand.deleteMany({});
    await Enquiry.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});

    console.log('🧹 Cleared existing database records.');

    // 1. Seed Categories
    const categoriesData = [
      { id: 'cat-automobile', name: 'Automobile & Spares', slug: 'automobile-spares', emoji: '🚗', iconName: 'Car', description: 'Genuine bike & car spare parts, engine oils, batteries, and accessories.', color: 'from-amber-500 to-orange-600', subcategories: ['Two Wheeler Parts', 'Engine Oils & Fluids', 'Car Accessories', 'Batteries & Electricals', 'Tyres & Tubes'] },
      { id: 'cat-electronics', name: 'Electronics & Mobiles', slug: 'electronics-mobiles', emoji: '📱', iconName: 'Smartphone', description: 'Smartphones, audio, smart wearables, cables, and home appliances.', color: 'from-blue-500 to-indigo-600', subcategories: ['Smartphones & Tablets', 'Audio & Headphones', 'Cables, Chargers & Hubs', 'Smart Wearables', 'Storage & Pendrives'] },
      { id: 'cat-pharmacy', name: 'Pharmacy & Health', slug: 'pharmacy-health', emoji: '💊', iconName: 'Pill', description: 'Prescription medicines, wellness products, surgicals, and vitamins.', color: 'from-emerald-500 to-teal-600', subcategories: ['OTC & Daily Care', 'First Aid & Surgicals', 'Vitamins & Supplements', 'Diabetes & BP Care', 'Baby & Mother Care'] },
      { id: 'cat-grocery', name: 'Kirana & Daily Needs', slug: 'kirana-daily-needs', emoji: '🛒', iconName: 'ShoppingBag', description: 'Daily staple rations, snacks, dairy products, spices, and cleaning supplies.', color: 'from-green-500 to-emerald-600', subcategories: ['Staples, Atta & Rice', 'Dairy, Milk & Ghee', 'Snacks & Beverages', 'Spices & Masalas', 'Cleaning & Household'] },
      { id: 'cat-hardware', name: 'Hardware & Sanitary', slug: 'hardware-sanitary', emoji: '🔧', iconName: 'Wrench', description: 'Tools, electrical wires, pipes, bathroom fittings, and power tools.', color: 'from-slate-600 to-slate-800', subcategories: ['Hand & Power Tools', 'Electricals & Wiring', 'Plumbing & Pipes', 'Paints & Wall Care', 'Fasteners & Hardware'] },
      { id: 'cat-stationery', name: 'Stationery & Books', slug: 'stationery-books', emoji: '📚', iconName: 'BookOpen', description: 'School supplies, office stationery, textbooks, and art materials.', color: 'from-purple-500 to-pink-600', subcategories: ['Notebooks & Registers', 'Pens, Art & Drawing', 'Office & Printing', 'School Bags & Boxes', 'Competitive Books'] },
    ];
    await Category.insertMany(categoriesData);
    console.log(`✅ Seeded ${categoriesData.length} Categories`);

    // 2. Seed Stores with GeoJSON Point
    const storesData = [
      {
        id: 'store-sharma-auto',
        name: 'Sharma Auto Spares & Service Hub',
        ownerName: 'Rajesh Sharma',
        phone: '+91 98450 12345',
        whatsapp: '+91 98450 12345',
        email: 'sharma.autoparts@gmail.com',
        categoryIds: ['cat-automobile', 'cat-hardware'],
        rating: 4.8,
        reviewCount: 142,
        verified: true,
        address: 'Shop #14, 80 Feet Road, 4th Block',
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
        reviewCount: 310,
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
    ];
    await Store.insertMany(storesData);
    console.log(`✅ Seeded ${storesData.length} Stores`);

    // 3. Seed Products
    const productsData = [
      {
        id: 'prod-honda-shine-brakepad',
        name: 'Honda CB Shine Disc Brake Pad Set (OEM Genuine)',
        brand: 'Honda Genuine Parts',
        categoryId: 'cat-automobile',
        subcategory: 'Two Wheeler Parts',
        sku: 'HND-BRK-092',
        description: 'Original Honda factory specification asbestos-free organic brake friction pads.',
        specifications: { 'Compatibility': 'Honda CB Shine 125 (2018-2024)', 'Material': 'Semi-Metallic Sintered', 'Pack Includes': '1 Front Brake Pad Set (2 Pieces)' },
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
        keywords: ['honda', 'shine', 'brake', 'pad', 'disc', 'parts'],
        basePrice: 380,
        mrp: 440,
      },
      {
        id: 'prod-dolo-650',
        name: 'Dolo 650mg Paracetamol Tablets (15 Tabs Strip)',
        brand: 'Micro Labs',
        categoryId: 'cat-pharmacy',
        subcategory: 'OTC & Daily Care',
        sku: 'MIC-DOLO-650',
        description: 'Fast relieving antipyretic and analgesic for fever, headache, body aches, and viral discomfort.',
        specifications: { 'Salt Composition': 'Paracetamol IP 650 mg', 'Packaging': '1 Strip of 15 Tablets' },
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
        keywords: ['dolo', 'paracetamol', 'fever', 'headache', 'medicine'],
        basePrice: 30,
        mrp: 34,
      },
    ];
    await Product.insertMany(productsData);
    console.log(`✅ Seeded ${productsData.length} Products`);

    // 4. Seed Inventory
    const inventoryData = [
      { id: 'inv-1', storeId: 'store-sharma-auto', productId: 'prod-honda-shine-brakepad', price: 375, mrp: 440, discountPercent: 15, stockQuantity: 18, status: 'in_stock', isBestPrice: true },
      { id: 'inv-2', storeId: 'store-apollo-meds', productId: 'prod-dolo-650', price: 30, mrp: 34, discountPercent: 12, stockQuantity: 140, status: 'in_stock', isBestPrice: true },
    ];
    await Inventory.insertMany(inventoryData);
    console.log(`✅ Seeded ${inventoryData.length} Inventory items`);

    // 5. Seed Users
    const usersData = [
      { name: 'Aakash Kumar', email: 'aakash@dhoondo.local', phone: '+91 98450 12345', password: 'password123', role: 'customer' },
      { name: 'Rajesh Sharma', email: 'sharma.autoparts@gmail.com', phone: '+91 98450 12345', password: 'password123', role: 'retailer', storeId: 'store-sharma-auto' },
      { name: 'Admin Master', email: 'admin@dhoondo.in', phone: '+91 80 4000 8000', password: 'adminpassword123', role: 'admin' },
    ];
    for (const u of usersData) {
      await User.create(u);
    }
    console.log(`✅ Seeded ${usersData.length} Users`);

    console.log('🎉 Database Seeding Complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();
