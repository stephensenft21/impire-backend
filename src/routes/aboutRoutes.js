// backend/routes/aboutRoutes.js
const express = require('express');
const aboutController = require('../controllers/aboutController');
const router = express.Router();

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: "Get About content"
 *     description: "Fetches the About content of the API."
 *     responses:
 *       200:
 *         description: "About content fetched successfully"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 content:
 *                   type: string
 *                   example: "This is the about content"
 *       500:
 *         description: "Failed to fetch About content"
 */
router.get('/about', aboutController.getAboutData);

module.exports = router;
