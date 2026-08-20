const Review = require('../models/Review');
const Store = require('../models/Store');

// @desc    Get reviews for a store
// @route   GET /api/reviews/store/:storeId
// @access  Public
const getStoreReviews = async (req, res) => {
  try {
    const { storeId } = req.params;
    const reviews = await Review.find({ storeId }).sort({ createdAt: -1 });
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add a review for store / product
// @route   POST /api/reviews
// @access  Public / Customer
const createReview = async (req, res) => {
  try {
    const { storeId, productId, customerName, customerAvatar, rating, comment } = req.body;
    const reviewId = `rev-${Date.now()}`;

    const review = await Review.create({
      id: reviewId,
      storeId,
      productId,
      customerName: customerName || 'Verified Buyer',
      customerAvatar,
      rating: Number(rating) || 5,
      comment,
      date: new Date().toISOString().split('T')[0],
      verifiedPurchase: true,
    });

    // Update store average rating
    const storeReviews = await Review.find({ storeId });
    if (storeReviews.length > 0) {
      const avg = storeReviews.reduce((acc, r) => acc + r.rating, 0) / storeReviews.length;
      await Store.findOneAndUpdate(
        { $or: [{ id: storeId }, { _id: storeId }] },
        { rating: parseFloat(avg.toFixed(1)), reviewCount: storeReviews.length }
      );
    }

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStoreReviews, createReview };
