import {connection as db} from '../config/config.js';

class AddToCart {
    addToCart(req, res) {
        const qry = `INSERT INTO addToCart SET ?;`;
        db.query(qry, [req.body], (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                 msg: 'Added to cart successfully' });
            })
        }
    removeFromCart(req, res) {
        const qry = `DELETE FROM addToCart WHERE ID = ?;`;
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Succeccfully removed!'
            })
        })
    }
}

export { AddToCart };
