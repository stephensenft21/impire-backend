// backend/services/loginLogService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all login logs
const getAllLogs = async () => {
  return await prisma.loginLog.findMany();
};

module.exports = {
  getAllLogs,
};
