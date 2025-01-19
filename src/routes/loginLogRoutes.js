// backend/routes/loginLogRoutes.js
const express = require('express');
const loginLogController = require('../controllers/loginLogController');
const router = express.Router();

router.get('/loginLogs', loginLogController.getLoginLogs);

module.exports = router;
