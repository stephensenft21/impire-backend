// backend/services/merchService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all merch
const getAllMerch = async () => {
  return await prisma.merch.findMany();
};

module.exports = {
  getAllMerch,
};
    