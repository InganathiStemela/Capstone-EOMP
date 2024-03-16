import express from 'express';
import bodyParser from 'body-parser';
import { verifyToken } from  '../middleware/userAuthenticate.js';
import {users} from '../models/index.js';

const usersRouter = express.Router()

usersRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
usersRouter.post('/register', bodyParser.json(), (req, res)=>{
        users.register(req, res)
})
usersRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'There was an error logging you in'
        })
    }
})
usersRouter.patch('/update/:ID', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update a user'
        })
    }
})
usersRouter.delete('/:ID', bodyParser.json(), (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a user'
        })
    }
})
usersRouter.post('/logout', (req, res) => {
    try {
        users.logout(req, res);
    } catch (e) {
        res.status(200).json({
            status: 200,
            msg: 'You have successfully logged out'
        });
    }
})

export{
    usersRouter,
    express
}
