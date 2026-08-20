const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const { notFound, errorHandler } = require('./src/middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Dhoondo Hyperlocal Retailer API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// Mount Feature API Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/categories', require('./src/routes/categoryRoutes'));
app.use('/api/stores', require('./src/routes/storeRoutes'));
app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/inventory', require('./src/routes/inventoryRoutes'));
app.use('/api/demands', require('./src/routes/demandRoutes'));
app.use('/api/offers', require('./src/routes/offerRoutes'));
app.use('/api/enquiries', require('./src/routes/enquiryRoutes'));
app.use('/api/reviews', require('./src/routes/reviewRoutes'));

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Dhoondo backend server running on http://localhost:${PORT}`);
  console.log(`🩺 Health check available at: http://localhost:${PORT}/api/health`);
});
