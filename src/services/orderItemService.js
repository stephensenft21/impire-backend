// backend/services/orderItemService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all order items
const getAllOrderItems = async () => {
  return await prisma.orderItem.findMany();
};

module.exports = {
  getAllOrderItems,
};
