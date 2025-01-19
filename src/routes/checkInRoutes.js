// backend/routes/checkInRoutes.js
const express = require('express');
const checkInController = require('../controllers/checkInController');
const authenticateFirebaseToken = require('../middleware/authMiddleware');
const router = express.Router();

// Protect the route with authentication middleware
router.get('/checkins', authenticateFirebaseToken, checkInController.getCheckIns);
router.post('/checkins', authenticateFirebaseToken, checkInController.createCheckIn);

module.exports = router;
