const express = require('express');
const router = express.Router();
const {
  getStores,
  getStoreById,
  registerStore,
  updateStore,
  toggleStoreVerification,
} = require('../controllers/storeController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/', getStores);
router.get('/:id', getStoreById);
router.post('/', protect, authorize('retailer', 'admin'), registerStore);
router.put('/:id', protect, updateStore);
router.patch('/:id/verify', protect, authorize('admin'), toggleStoreVerification);

module.exports = router;
