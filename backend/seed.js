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
const { mockData } = require('./src/utils/mockStore');

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

    // Seed from master mockData
    await Category.insertMany(mockData.categories);
    console.log(`✅ Seeded ${mockData.categories.length} Categories`);

    await Store.insertMany(mockData.stores);
    console.log(`✅ Seeded ${mockData.stores.length} Retailer Stores`);

    await Product.insertMany(mockData.products);
    console.log(`✅ Seeded ${mockData.products.length} Products`);

    await Inventory.insertMany(mockData.inventory);
    console.log(`✅ Seeded ${mockData.inventory.length} Inventory items`);

    if (mockData.offers.length > 0) await Offer.insertMany(mockData.offers);
    if (mockData.demands.length > 0) await Demand.insertMany(mockData.demands);
    if (mockData.enquiries.length > 0) await Enquiry.insertMany(mockData.enquiries);
    if (mockData.reviews.length > 0) await Review.insertMany(mockData.reviews);

    for (const u of mockData.users) {
      await User.create({ ...u, password: 'password123' });
    }
    console.log(`✅ Seeded ${mockData.users.length} Users`);

    console.log('🎉 10 Retailers Database Seeding Complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();
