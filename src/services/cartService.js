// backend/services/cartService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all cart items
const getAllCartItems = async () => {
  return await prisma.cart.findMany();
};

module.exports = {
  getAllCartItems,
};
