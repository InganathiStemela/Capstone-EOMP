import {connection as db} from '../config/config.js';
import {hash, compare} from 'bcrypt';
import {createToken} from '../middleware/userAuthenticate.js';

class Users{
    fetchUsers(req, res){
        const qry = `SELECT  * FROM users;`
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const qry = `SELECT  * FROM users WHERE ID = '${req.params.ID}';`
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: results[0]
            })
        })
    }
    async register(req, res){
        const data = req.body;
        data.PASSWORD = await hash(data.PASSWORD, 15);

        const user = {
            EMAIL: data.EMAIL,
            PASSWORD: data.PASSWORD
        };
        const query = `INSERT INTO users SET ?;`
        db.query(query, [data], (err)=>{
            if(err) throw err;
            let token = createToken(user);
            res.json({
                status: res.statusCode,
                msg: 'You are registered',
            });
        });
    }
    login(req, res){
        const {EMAIL, PASSWORD} = req.body;
        
        const qry = `SELECT * FROM users WHERE EMAIL = '${EMAIL}';`
        db.query(qry, async(err, results)=>{
            if(err) throw err
            if(!results?.length){
                res.json({
                    status: res.statusCode,
                    msg: 'You provided wrong email address'
                })

            }else{
                const validPassword = await compare(PASSWORD, results[0].PASSWORD)
                if(validPassword){
                    const token = createToken({
                        EMAIL,
                        PASSWORD
                    })
                res.json({
                    status: res.statusCode,
                    msg: 'Welcome back!',
                    token,
                    result: results[0]
                })
            }else{
                res.json({
                    status: res.statusCode,
                    msg: 'Incorrect password'
                })
            }
        }
            
        })
    }
    updateUser(req, res) {
        const data = req.body;
        if (data.PASSWORD) {
          data.PASSWORD = hash(data.PASSWORD, 15);
        }
        const query = `
            UPDATE users
            SET ?
            WHERE ID = ?
            `;
        db.query(query, [data, req.params.ID], (err) => {
            if (err) {
                console.error('Error updating user:', err);
                res.status(500).json({
                    status: 500,
                    msg: 'Failed to update user record.'
                });
            } else {
                res.json({
                    status: res.statusCode,
                    msg: 'The user record was updated.'
                });
            }
        });
      }
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    msg: 'An error occurred while logging out'
                });
            } else {
                res.json({
                    status: 200,
                    msg: 'Logged out successfully'
                });
            }
        });
    }
    deleteUser(req, res){
        const qry = `DELETE FROM users WHERE ID = '${req.params.ID}';`
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Succeccfully deleted!'
            })
        })
    }

    
}

export{
    Users
}