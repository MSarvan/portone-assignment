## Overview:
This document provides details on the API endpoints available for creating, capturing, and refunding payment intents, as well as retrieving a list of all payment intents. These endpoints are built using Node.js, Express, and the Stripe API.

## Prerequisites:
Ensure you have the following installed:
- Node.js
- npm
- Stripe account

## Installation:
1. Clone the repository: git clone https://github.com/MSarvan/portone-assignment
2. Install the dependencies: npm install
3. Set up environment variables: 
    - Create a .env file in the root of the project and add PORT and Stripe secret key.
    - PORT=3005
    - STRIPE_KEY=sk_test_51POhm6P079xe7DONWinxZblVyrHzo66MJGBtJyekOmUDgiVhZ1Gugy60jCoJKdg6d3IEHaOp1DJuP6IT33BMtKxS00NdSzHjrQ
4. Start the server: npm run dev (The server will run on http://localhost:3005)

## API Endpoints
1. Create Intent
- Endpoint: POST /api/v1/create_intent
- Description: Creates a new payment intent

2. Capture Intent
- Endpoint: POST /api/v1/capture_intent/:id
- Description: Captures a previously created payment intent

3. Create Refund
- Endpoint: POST /api/v1/create_refund/:id
- Description: Creates a refund for a captured payment intent

4. Get All Intents
- Endpoint: GET /api/v1/get_intents
- Description: Retrieves a list of all payment intents

## References
- Stripe API docs (https://docs.stripe.com/api/payment_intents)
- Payment Intents (https://docs.stripe.com/payments/payment-intents)