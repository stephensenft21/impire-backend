// backend/routes/orderItemRoutes.js
const express = require('express');
const orderItemController = require('../controllers/orderItemController');
const router = express.Router();

router.get('/orderItems', orderItemController.getOrderItems);

module.exports = router;
    