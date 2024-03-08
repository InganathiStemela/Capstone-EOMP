import {usersRouter, express} from './controller/users.js';
import {productRouter} from './controller/products.js';
import cookieParser from 'cookie-parser';
import {errHandling} from './middleware/errorHandling.js';
import cors from 'cors';
import path from 'path';

const app = express()
const port = +process.env.PORT || 6300

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
app.use(errHandling)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
