// backend/services/contactService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all contact messages
const getAllMessages = async () => {
  return await prisma.contact.findMany();
};

module.exports = {
  getAllMessages,
};
