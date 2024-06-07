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
