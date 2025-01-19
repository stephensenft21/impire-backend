// backend/routes/dietRoutes/ketoDietRoutes.js
const express = require('express');
const ketoDietController = require('../../controllers/dietControllers/ketoDietController');
const router = express.Router();

/**
 * @swagger
 * /api/diet/keto:
 *   get:
 *     summary: "Get Keto Diet Plan"
 *     description: "Fetches the details of a Keto diet plan."
 *     responses:
 *       200:
 *         description: "Keto diet plan fetched successfully"
 *       500:
 *         description: "Failed to fetch Keto diet plan"
 */
router.get('/keto', ketoDietController.getKetoDietPlan);

/**
 * @swagger
 * /api/diet/keto:
 *   post:
 *     summary: "Create a Keto Diet Plan"
 *     description: "Creates a new Keto diet plan."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               planName:
 *                 type: string
 *               targetCarbs:
 *                 type: number
 *                 format: float
 *               targetFat:
 *                 type: number
 *                 format: float
 *               targetProtein:
 *                 type: number
 *                 format: float
 *               isLowCarbFriendly:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: "Keto diet plan created successfully"
 *       400:
 *         description: "Invalid input"
 */
router.post('/keto', ketoDietController.createKetoDietPlan);

module.exports = router;
