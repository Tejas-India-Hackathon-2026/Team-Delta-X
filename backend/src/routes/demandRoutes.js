const express = require('express');
const router = express.Router();
const { getDemands, createDemand, fulfillDemand } = require('../controllers/demandController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleGuard');

router.get('/', getDemands);
router.post('/', createDemand);
router.patch('/:id/fulfill', protect, authorize('retailer', 'admin'), fulfillDemand);

module.exports = router;
