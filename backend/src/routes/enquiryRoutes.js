const express = require('express');
const router = express.Router();
const { getStoreEnquiries, createEnquiry, replyEnquiry } = require('../controllers/enquiryController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/store/:storeId', getStoreEnquiries);
router.post('/', createEnquiry);
router.patch('/:id/reply', protect, authorize('retailer', 'admin'), replyEnquiry);

module.exports = router;
