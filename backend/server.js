// backend/server.js
/*
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// === Middleware ===
// Enable CORS for all routes, so our React app can make requests to this server
app.use(cors());
// Enable the server to accept and parse JSON in request bodies
app.use(express.json());

// === API Routes ===
// Tell the server to use the product routes for any requests to '/api/products'
app.use('/api/products', require('./api/routes/products'));

// === Start the Server ===
app.listen(PORT, () => {
  console.log(`Vintage vibes are live on port ${PORT}!`);
});
*/
// ... find your other imports at the top
const express = require('express');
const cors = require('cors');
// ... etc.

const app = express();

// ... find your other middleware (app.use)
app.use(cors());
app.use(express.json()); // This line is VERY important for reading the body of POST requests

// ... find your existing routes
const productsRouter = require('./api/routes/products');
app.use('/api/products', productsRouter);

// ===> ADD THIS NEW BLOCK FOR THE CART ROUTES <===
const cartRouter = require('./api/routes/cart');
app.use('/api/cart', cartRouter);
// ===============================================

// ... find your port listening logic at the bottom
const PORT = process.env.PORT || 5000; // Or whatever port your backend runs on
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));