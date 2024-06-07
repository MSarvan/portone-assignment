const express = require("express");
const app = express();
const Stripe = require("stripe");
const bodyParser = require("body-parser");

const stripe = Stripe(process.env.STRIP_KEY);

app.use(bodyParser.json());

// config
const PORT = process.env.PORT || 3005;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

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
