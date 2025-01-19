// backend/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-file.json'); // Path to your Firebase service account JSON file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
