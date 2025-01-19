// backend/controllers/orderItemController.js
const orderItemService = require('../services/orderItemService');

// Get all order items
const getOrderItems = async (req, res) => {
  try {
    const orderItems = await orderItemService.getAllOrderItems();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

module.exports = {
  getOrderItems,
};
