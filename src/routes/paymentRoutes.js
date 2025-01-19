// backend/routes/paymentRoutes.js
const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: "Create a new payment"
 *     description: "Creates a new payment record."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: integer
 *               paymentStatus:
 *                 type: string
 *               amount:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: "Payment created successfully"
 *       400:
 *         description: "Invalid data"
 */
router.post('/payments', paymentController.createPayment);

module.exports = router;
