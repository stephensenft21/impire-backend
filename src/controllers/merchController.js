// backend/controllers/merchController.js
const merchService = require('../services/merchService');

// Get all merch
const getMerch = async (req, res) => {
  try {
    const merch = await merchService.getAllMerch();
    res.json(merch);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch merch' });
  }
};

module.exports = {
  getMerch,
};
