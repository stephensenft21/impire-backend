// backend/services/dietServices/ketoDietService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get the Keto Diet Plan from the database
const getKetoDietPlan = async () => {
  try {
    return await prisma.ketoDietMealPlan.findMany();  // Assuming the table is called `ketoDietMealPlan`
  } catch (error) {
    throw new Error('Error fetching Keto diet plan');
  }
};

// Create a new Keto Diet Plan
const createKetoDietPlan = async (data) => {
  try {
    return await prisma.ketoDietMealPlan.create({
      data,
    });
  } catch (error) {
    throw new Error('Error creating Keto diet plan');
  }
};

module.exports = {
  getKetoDietPlan,
  createKetoDietPlan,
};
