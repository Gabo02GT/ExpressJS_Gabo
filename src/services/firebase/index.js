const { initializeApp, cert} = require("firebase-admin");

const serviceAccount = require("../../utils/constanst/firebase-admin.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://dsm-3b-gabriel.firebaseio.com"
});

module.exports = app;
