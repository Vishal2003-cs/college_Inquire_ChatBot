const { initializeApp, cert } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database");

const serviceAccount = require("./firebase-service-account.json");

initializeApp({
  credential: cert(serviceAccount),
  databaseURL:
    "https://college-chatbot-1a8d9-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = getDatabase();

module.exports = db;