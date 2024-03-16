import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../models/index.js';

const productRouter = express.Router()

productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
productRouter.get('/:ID', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product'
        })
    }
})
productRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        products.addProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add product'
        })
    }
})
productRouter.patch('/updateProduct/:ID', bodyParser.json(), (req, res)=>{
    try{
        products.updateProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update product'
        })
    }
})
productRouter.delete('/products/:ID', bodyParser.json(), (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete product'
        })
    }
})

export{
    productRouter
}