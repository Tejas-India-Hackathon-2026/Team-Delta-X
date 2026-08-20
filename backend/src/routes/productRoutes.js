const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, authorize('retailer', 'admin'), createProduct);

module.exports = router;
