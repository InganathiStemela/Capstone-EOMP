import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config()


const { sign, verify } = jwt ;

function createToken(user){
    return sign({
        email: user.email,
        password: user.password
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    
    })
}
function verifyToken(token, res, next) {
    if (!token) {
        return res.status(401).json({
            status: 401,
            msg: 'Please provide a valid token'
        });
    }

    try {
        if (verify(token, process.env.SECRET_KEY)) {
            next();
        } else {
            return res.status(401).json({
                status: 401,
                msg: 'Incorrect email or password'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }
}

export{
    createToken,
    verifyToken
}