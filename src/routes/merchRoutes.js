// backend/routes/merchRoutes.js
const express = require('express');
const merchController = require('../controllers/merchController');
const router = express.Router();

router.get('/merch', merchController.getMerch);

module.exports = router;
