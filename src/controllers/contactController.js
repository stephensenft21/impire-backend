// backend/controllers/contactController.js
const contactService = require('../services/contactService');

// Get all contact messages
const getContactMessages = async (req, res) => {
  try {
    const messages = await contactService.getAllMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
};

module.exports = {
  getContactMessages,
};
