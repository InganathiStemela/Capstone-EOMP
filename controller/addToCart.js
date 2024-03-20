import express from 'express';
import bodyParser from 'body-parser';
import { addToCart } from '../models/index.js'; // Assuming you have a module for addToCart in your models

const addToCartRouter = express.Router();


addToCartRouter.get('/', (req, res)=>{
    try{
        addToCart.fetchCartProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product'
        })
    }
})
addToCartRouter.post('/addToCart', bodyParser.json(), (req, res)=>{
    addToCart.addToCart(req, res)
})
addToCartRouter.delete('/:ID', bodyParser.json(), (req, res)=>{
    try{
        addToCart.removeFromCart(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove from cart'
        })
    }
})


export {
    addToCartRouter
};
