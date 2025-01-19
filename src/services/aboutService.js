// backend/services/aboutService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get the About content
const getData = async (data) => {
    return await prisma.about.findFirst();

};
console
module.exports = {
  getData,
};
