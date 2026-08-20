const express = require('express');
const router = express.Router();
const { getAllInventory, getStoreInventory, upsertInventory, deleteInventoryItem } = require('../controllers/inventoryController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/', getAllInventory);
router.get('/store/:storeId', getStoreInventory);
router.post('/', protect, authorize('retailer', 'admin'), upsertInventory);
router.delete('/:storeId/:productId', protect, authorize('retailer', 'admin'), deleteInventoryItem);

module.exports = router;
