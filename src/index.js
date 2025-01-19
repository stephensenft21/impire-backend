// backend/server.js
require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
// const cors = require('cors');

// Import the middleware for authentication
// const authenticateFirebaseToken = require('./middleware/authMiddleware');

// Import route files
const aboutRoutes = require('./routes/aboutRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const contactRoutes = require('./routes/contactRoutes');
const merchRoutes = require('./routes/merchRoutes');
const loginLogRoutes = require('./routes/loginLogRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Import Diet Routes
const ketoDietRoutes = require('./routes/dietRoutes/ketoDietRoutes');


// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Allow CORS for development (can restrict in production)
// app.use(cors({
//   origin: 'http://localhost:3000', // specify your frontend URL here
// }));

// Swagger configuration
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Impire API',
//       version: '1.0.0',
//       description: 'API documentation for the Impire application',
//     },
//     servers: [
//       {
//         url: `http://localhost:${process.env.PORT || 5000}`,
//       },
//     ],
//   },
//   apis: ['./backend/routes/*.js'], // Path to the API route files
// };

// // Initialize swagger-jsdoc
// const swaggerDocs = swaggerJsdoc(swaggerOptions);

// // Serve Swagger UI
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Register routes with app.use()

// Public Routes (no authentication required)
app.use('/api/about', aboutRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/merch', merchRoutes);
app.use('/api/loginLogs', loginLogRoutes);

// Protected Routes (requires Firebase authentication)
// app.use('/api/orderItems', authenticateFirebaseToken, orderItemRoutes);
// app.use('/api/carts', authenticateFirebaseToken, cartRoutes);
// app.use('/api/diet', authenticateFirebaseToken, ketoDietRoutes);

// Set port from environment variable or default to 5000
const port = process.env.PORT || 5001;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5001;

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });