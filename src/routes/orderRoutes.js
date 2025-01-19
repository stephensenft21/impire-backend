// backend/routes/orderRoutes.js
const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: "Get all orders"
 *     description: "Fetches all orders from the database."
 *     responses:
 *       200:
 *         description: "List of all orders"
 *       500:
 *         description: "Failed to fetch orders"
 */
router.get('/orders', orderController.getOrders);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: "Create a new order"
 *     description: "Creates a new order."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               totalAmount:
 *                 type: number
 *                 format: float
 *                 example: 100.50
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *                     price:
 *                       type: number
 *                       format: float
 *     responses:
 *       201:
 *         description: "Order created successfully"
 *       400:
 *         description: "Invalid data"
 */
router.post('/orders', orderController.createOrder);

module.exports = router;
