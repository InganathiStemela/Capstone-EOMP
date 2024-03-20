import {usersRouter, express} from './controller/users.js';
import {productRouter} from './controller/products.js';
import cookieParser from 'cookie-parser';
import {errHandling} from './middleware/errorHandling.js';
import cors from 'cors';
import path from 'path';
import { addToCartRouter } from './controller/addToCart.js';

const app = express()
const port = +process.env.PORT || 3000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(
    express.static('./statics'),
    cors(),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser()
)

app.get('^/$|/naturalglow', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './statics/index.html'))
})

app.use('/users', usersRouter)
app.use('/products', productRouter)
app.use('/addToCart', addToCartRouter)
app.use(errHandling)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
