// backend/services/paymentService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new payment
const createPayment = async (data) => {
  return await prisma.payment.create({
    data: {
      orderId: data.orderId,
      paymentStatus: data.paymentStatus,
      amount: data.amount,
    },
  });
};

module.exports = {
  createPayment,
};
