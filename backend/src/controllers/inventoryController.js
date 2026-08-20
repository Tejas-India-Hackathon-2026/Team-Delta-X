const Inventory = require('../models/Inventory');
const Product = require('../models/Product');

// @desc    Get store inventory
// @route   GET /api/inventory/store/:storeId
// @access  Public
const getStoreInventory = async (req, res) => {
  try {
    const { storeId } = req.params;
    const inventory = await Inventory.find({ storeId });

    // Join with product details
    const productIds = inventory.map(i => i.productId);
    const products = await Product.find({ id: { $in: productIds } });
    const productMap = new Map(products.map(p => [p.id, p]));

    const enriched = inventory.map(item => ({
      ...item.toObject(),
      product: productMap.get(item.productId) || null,
    }));

    res.json({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add or update inventory item (Retailer live stock/price update)
// @route   POST /api/inventory
// @access  Private / Retailer
const upsertInventory = async (req, res) => {
  try {
    const { storeId, productId, price, mrp, stockQuantity, status } = req.body;

    if (!storeId || !productId) {
      return res.status(400).json({ success: false, message: 'storeId and productId are required' });
    }

    let calculatedStatus = status;
    const qty = Number(stockQuantity);
    if (!calculatedStatus) {
      calculatedStatus = qty === 0 ? 'out_of_stock' : qty <= 3 ? 'low_stock' : 'in_stock';
    }

    const discountPercent = mrp && price && mrp > price 
      ? Math.round(((mrp - price) / mrp) * 100) 
      : 0;

    const inventoryId = `inv-${storeId}-${productId}`;

    const item = await Inventory.findOneAndUpdate(
      { storeId, productId },
      {
        $set: {
          id: inventoryId,
          price: Number(price),
          mrp: Number(mrp) || Number(price),
          discountPercent,
          stockQuantity: qty,
          status: calculatedStatus,
          lastUpdated: new Date().toISOString(),
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete item from store inventory
// @route   DELETE /api/inventory/:storeId/:productId
// @access  Private / Retailer
const deleteInventoryItem = async (req, res) => {
  try {
    const { storeId, productId } = req.params;
    await Inventory.findOneAndDelete({ storeId, productId });
    res.json({ success: true, message: 'Inventory item removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStoreInventory, upsertInventory, deleteInventoryItem };
