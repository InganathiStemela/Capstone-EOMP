import {createPool} from 'mysql2'
import 'dotenv/config'

const connection = createPool({
    host: process.env.DB_host,
    user: process.env.DB_user,
    database: process.env.DB_database,
    password: process.env.DB_password,
    connectionLimit: 30
})

export{
    connection
}