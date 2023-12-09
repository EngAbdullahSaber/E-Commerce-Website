/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NxswbCdwEEN6PeMF0seLIFhFywcbHehvN6GbgA3F6NghUF5njN6PixWefOaqTiyWhBb48Zh1JcQ9KKUqDrA3fzf00SJJrAcRz"
);

// App config
const app = express();

//http://127.0.0.1:5001/markets-hub-b3e65/us-central1/api

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/checkout/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // Ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

exports.api = functions.https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
