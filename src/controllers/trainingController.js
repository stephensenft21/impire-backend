// backend/controllers/trainingController.js
const trainingService = require('../services/trainingService');

// Get all training programs
const getTrainingPrograms = async (req, res) => {
  try {
    const programs = await trainingService.getAllPrograms();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch training programs' });
  }
};

module.exports = {
  getTrainingPrograms,
};
