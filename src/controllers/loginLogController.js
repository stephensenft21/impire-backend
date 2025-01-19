// backend/controllers/loginLogController.js
const loginLogService = require('../services/loginLogService');

// Get login logs
const getLoginLogs = async (req, res) => {
  try {
    const logs = await loginLogService.getAllLogs();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch login logs' });
  }
};

module.exports = {
  getLoginLogs,
};
