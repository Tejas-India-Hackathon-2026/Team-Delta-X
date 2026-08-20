const Inventory = require('../models/Inventory');
const Product = require('../models/Product');
const { mockData, isDbConnected } = require('../utils/mockStore');

// @desc    Get store inventory
// @route   GET /api/inventory/store/:storeId
// @access  Public
const getStoreInventory = async (req, res) => {
  try {
    const { storeId } = req.params;

    if (isDbConnected()) {
      const inventory = await Inventory.find({ storeId });
      const productIds = inventory.map(i => i.productId);
      const products = await Product.find({ id: { $in: productIds } });
      const productMap = new Map(products.map(p => [p.id, p]));

      const enriched = inventory.map(item => ({
        ...item.toObject(),
        product: productMap.get(item.productId) || null,
      }));

      return res.json({ success: true, count: enriched.length, data: enriched });
    }

    const inventory = mockData.inventory.filter(i => i.storeId === storeId);
    const productMap = new Map(mockData.products.map(p => [p.id, p]));

    const enriched = inventory.map(item => ({
      ...item,
      product: productMap.get(item.productId) || null,
    }));

    return res.json({ success: true, count: enriched.length, data: enriched });
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
    const payload = {
      id: inventoryId,
      storeId,
      productId,
      price: Number(price),
      mrp: Number(mrp) || Number(price),
      discountPercent,
      stockQuantity: qty,
      status: calculatedStatus,
      lastUpdated: new Date().toISOString(),
    };

    if (isDbConnected()) {
      const item = await Inventory.findOneAndUpdate(
        { storeId, productId },
        { $set: payload },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      return res.status(200).json({ success: true, data: item });
    }

    const idx = mockData.inventory.findIndex(i => i.storeId === storeId && i.productId === productId);
    if (idx !== -1) {
      mockData.inventory[idx] = { ...mockData.inventory[idx], ...payload };
      return res.status(200).json({ success: true, data: mockData.inventory[idx] });
    }

    mockData.inventory.push(payload);
    res.status(200).json({ success: true, data: payload });
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
    if (isDbConnected()) {
      await Inventory.findOneAndDelete({ storeId, productId });
    } else {
      mockData.inventory = mockData.inventory.filter(i => !(i.storeId === storeId && i.productId === productId));
    }
    res.json({ success: true, message: 'Inventory item removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all inventory
// @route   GET /api/inventory
// @access  Public
const getAllInventory = async (req, res) => {
  try {
    if (isDbConnected()) {
      const items = await Inventory.find({});
      return res.json({ success: true, count: items.length, data: items });
    }
    res.json({ success: true, count: mockData.inventory.length, data: mockData.inventory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllInventory, getStoreInventory, upsertInventory, deleteInventoryItem };
