// backend/controllers/orderController.js
const orderService = require('../services/orderService');

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  const { userId, totalAmount, items } = req.body;
  try {
    const newOrder = await orderService.createOrder({ userId, totalAmount, items });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

module.exports = {
  getOrders,
  createOrder,
};
