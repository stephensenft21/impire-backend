// backend/controllers/dietControllers/ketoDietController.js
const ketoDietService = require('../../services/dietServices/ketoDietService');

// Get the Keto Diet Plan
const getKetoDietPlan = async (req, res) => {
  try {
    const dietPlan = await ketoDietService.getKetoDietPlan();
    res.status(200).json(dietPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Keto diet plan' });
  }
};

// Create a new Keto Diet Plan
const createKetoDietPlan = async (req, res) => {
  const { userId, planName, targetCarbs, targetFat, targetProtein, isLowCarbFriendly } = req.body;

  // Ensure data is in the right format (TypeScript's interfaces will help with this)
  const newDietPlan = {
    userId,
    planName,
    targetCarbs,
    targetFat,
    targetProtein,
    isLowCarbFriendly,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const createdDietPlan = await ketoDietService.createKetoDietPlan(newDietPlan);
    res.status(201).json(createdDietPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Keto diet plan' });
  }
};

module.exports = {
  getKetoDietPlan,
  createKetoDietPlan,
};
