// backend/routes/trainingRoutes.js
const express = require('express');
const trainingController = require('../controllers/trainingController');
const router = express.Router();

router.get('/training', trainingController.getTrainingPrograms);

module.exports = router;
