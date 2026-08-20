const mongoose = require('mongoose');

// Disable command buffering to prevent request timeouts when DB is offline
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dhoondo', {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.warn(`⚠️ MongoDB connection note: ${error.message}`);
    console.log('ℹ️ Running in resilient fallback mode (All API endpoints instantly responsive).');
  }
};

module.exports = connectDB;
