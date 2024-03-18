import {connection as db} from '../config/config.js';

class AddToCart {
    addToCart(req, res) {
        const { NAME, IMAGE, PRICE, QUANTITY } = req.body;
        const qry = `INSERT INTO addToCart WHERE ID = ?;`;
        db.query(qry, [NAME, IMAGE, PRICE, QUANTITY], (err) => {
            if (err) {
                console.error('Error adding to cart:', err);
                res.status(500).json({ message: 'Failed to add to cart' });
            } else {
                res.json({ message: 'Added to cart successfully' });
            }
        });
    }

    removeFromCart(req, res) {
        const cartItemID = req.params.ID;
        const qry = `DELETE FROM addToCart WHERE ID = ?;`;
        db.query(qry, [cartItemID], (err) => {
            if (err) {
                console.error('Error removing from cart:', err);
                res.status(500).json({ message: 'Failed to remove from cart' });
            } else {
                res.json({ message: 'Removed from cart successfully' });
            }
        });
    }
}

export { AddToCart };
