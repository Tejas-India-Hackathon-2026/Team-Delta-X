const express = require('express');
const router = express.Router();
const { getStoreReviews, createReview } = require('../controllers/reviewController');

router.get('/store/:storeId', getStoreReviews);
router.post('/', createReview);

module.exports = router;
