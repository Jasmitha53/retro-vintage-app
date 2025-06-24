const express = require('express');
const router = express.Router();
const db = require('../db'); // Make sure this path to your db.js file is correct

// GET /api/cart - Fetch all items from the cart
router.get('/', (req, res) => {
    // We use a JOIN to get product details (name, price, image) along with cart data
    const sql = `
        SELECT cart.id, cart.quantity, products.id as productId, products.name, products.price, products.image 
        FROM cart 
        JOIN products ON cart.product_id = products.id
        ORDER BY cart.added_at DESC
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
});

// POST /api/cart - Add an item to the cart
router.post('/', (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).send('Product ID is required');
    }

    // A simple version that just adds the item.
    // A more advanced version would check if the item exists and update the quantity instead.
    const sql = 'INSERT INTO cart (product_id) VALUES (?)';
    db.query(sql, [productId], (err, result) => {
        if (err) {
            // Check for a foreign key constraint error, which means the product doesn't exist
            if (err.code === 'ER_NO_REFERENCED_ROW_2') {
                return res.status(404).send('Product not found.');
            }
            console.error(err);
            return res.status(500).send('Server error');
        }
        // Respond with the newly created cart item's ID and the product ID
        res.status(201).json({ id: result.insertId, productId: productId });
    });
});

// DELETE /api/cart/:id - Remove an item from the cart
router.delete('/:id', (req, res) => {
    const { id } = req.params; // This is the cart item ID, not the product ID
    const sql = 'DELETE FROM cart WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Cart item not found');
        }
        res.status(200).send('Item removed from cart');
    });
});

module.exports = router;