// backend/services/trainingService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all training programs
const getAllPrograms = async () => {
  return await prisma.training.findMany();
};

module.exports = {
  getAllPrograms,
};
