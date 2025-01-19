// backend/routes/contactRoutes.js
const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

router.get('/contact', contactController.getContactMessages);

module.exports = router;
