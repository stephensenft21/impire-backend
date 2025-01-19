// backend/controllers/cartController.js
const cartService = require('../services/cartService');

// Get all items in the cart
const getCartItems = async (req, res) => {
  try {
    const cartItems = await cartService.getAllCartItems();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

module.exports = {
  getCartItems,
};
