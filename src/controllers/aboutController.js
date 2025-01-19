// backend/controllers/aboutController.js
const aboutService = require('../services/aboutService');

// Get About content
const getAboutData = async (req, res) => {
  try {
    const data = await aboutService.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch About content' });
  }
};

module.exports = {
  getAboutData,
};
