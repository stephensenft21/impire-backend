// backend/controllers/paymentController.js
const paymentService = require('../services/paymentService');

// Create a new payment
const createPayment = async (req, res) => {
  const { orderId, paymentStatus, amount } = req.body;
  try {
    const newPayment = await paymentService.createPayment({ orderId, paymentStatus, amount });
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

module.exports = {
  createPayment,
};
