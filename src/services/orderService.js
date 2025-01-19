// backend/services/orderService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fetch all orders
const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      items: true,  // Include order items with the order
      user: true,   // Include user details
    },
  });
};

// Create a new order
const createOrder = async (data) => {
  return await prisma.order.create({
    data: {
      userId: data.userId,
      totalAmount: data.totalAmount,
      items: {
        create: data.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: true,
    },
  });
};

module.exports = {
  getAllOrders,
  createOrder,
};
