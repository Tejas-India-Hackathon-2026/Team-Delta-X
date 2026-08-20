const express = require('express');
const router = express.Router();
const { getOffers, createOffer, deleteOffer } = require('../controllers/offerController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/', getOffers);
router.post('/', protect, authorize('retailer', 'admin'), createOffer);
router.delete('/:id', protect, authorize('retailer', 'admin'), deleteOffer);

module.exports = router;
