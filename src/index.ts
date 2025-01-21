import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import aboutRoutes from './routes/aboutRoutes';
import trainingRoutes from './routes/trainingRoutes';
import contactRoutes from './routes/contactRoutes';
import merchRoutes from './routes/merchRoutes';
import loginLogRoutes from './routes/loginLogRoutes';
import orderItemRoutes from './routes/orderItemRoutes';
import cartRoutes from './routes/cartRoutes';

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Impire API',
      version: '1.0.0',
      description: 'API documentation for the Impire application',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5001}`,
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API route files
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Register routes with app.use()
app.use('/api/about', aboutRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/merch', merchRoutes);
app.use('/api/loginLogs', loginLogRoutes);

// Set port from environment variable or default to 5001
const port = process.env.PORT || 5001;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
