// backend/middleware/authMiddleware.js
const admin = require('../config/firebase');

// Middleware to verify Firebase ID token
const authenticateFirebaseToken = async (req, res, next) => {
  const idToken = req.headers.authorization;

  if (!idToken || !idToken.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Authorization token is missing or invalid.' });
  }

  const token = idToken.split(' ')[1];

  try {
    // Verify the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;  // Attach user info to request
    next();  // Proceed to the next middleware or controller
  } catch (error) {
    return res.status(403).json({ message: 'Unauthorized user.' });
  }
};

module.exports = authenticateFirebaseToken;
