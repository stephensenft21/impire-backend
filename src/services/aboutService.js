const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get the About content
const getData = async () => {
  try {
    // Fetch the first record from the About table
    const data = await prisma.about.findFirst();

    // If no data is found, return null
    if (!data) {
      return null;
    }

    // Return the found data
    return data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching About data:', error);

    // Throw the error so it can be handled by the controller
    throw new Error('Error fetching About data');
  }
};

export default getData
