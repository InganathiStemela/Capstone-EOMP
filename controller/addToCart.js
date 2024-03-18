import express from 'express';
import bodyParser from 'body-parser';
import { addToCart } from '../models/index.js'; // Assuming you have a module for addToCart in your models

const addToCartRouter = express.Router();

addToCartRouter.post('/addToCart/:ID', bodyParser.json(), (req, res) => {
    try {
        addToCart.addToCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add to cart'
        });
    }
});
addToCartRouter.delete('/removeFromCart/:ID', (req, res) => {
    try {
        addToCart.removeFromCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove from cart'
        });
    }
});

export {
    addToCartRouter
};
