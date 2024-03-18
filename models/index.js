import {Users} from '../models/usersdb.js';
import {Products} from '../models/productsdb.js';
import {AddToCart} from '../models/addToCartdb.js'

let users = new Users()
let products = new Products()
let addToCart = new AddToCart()

export{
    users,
    products,
    addToCart
}