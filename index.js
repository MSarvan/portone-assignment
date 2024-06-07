const express = require("express");
const app = express();
const Stripe = require("stripe");
const bodyParser = require("body-parser");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

app.use(bodyParser.json());

// config
const PORT = process.env.PORT || 3005;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// 1. Create intent for payment
app.post("/api/v1/create_intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(req.body);
    res.json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Get a list of all intents
app.get("/api/v1/get_intents", async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list();
    res.json(paymentIntents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Capture the created intent
app.post("/api/v1/capture_intent/:id", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(req.params.id);
    res.json(paymentIntent);
  } catch (error) {
    console.log(error, "error in capturing intent");
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  return res.status(200).json({ status: true, message: "App is running" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
