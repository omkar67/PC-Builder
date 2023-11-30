// rajatrathaurmatrix :- username
// w1s1TXWFmtVPlZdk :-password
//'mongodb+srv://rajatrathaurmatrix:w1s1TXWFmtVPlZdk@pc-builder-cluster1.vte5idg.mongodb.net/?retryWrites=true&w=majority'
import { Router } from "express";
import express from 'express'
import jwt from 'jsonwebtoken'
export function initialize(app, db) {
    app.use(express.json());


    app.get('/api/GPU', (req, res) => {
        const sql = 'SELECT * FROM gpu';  // Fetching from the gpu table
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    
    app.get('/api/CPU', (req, res) => {
        const sql = 'SELECT * FROM cpu';  // Assuming your table name is 'CPU'
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });

    app.get('/api/MOBO', (req, res) => {
        const sql = 'SELECT * FROM motherboard'; 
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/storage', (req, res) => {
        const sql = 'SELECT * FROM storage'; 
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/RAM', (req, res) => {
        const sql = 'SELECT * FROM ram'; 
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/Case', (req, res) => {
        const sql = 'SELECT * FROM pccase'; 
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/PSU', (req, res) => {
        const sql = 'SELECT * FROM psu'; 
    
        db.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getCPU/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM cpu WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getMOBO/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM motherboard WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getPSU/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM psu WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getRAM/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM ram WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getStorage/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM storage WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getGPU/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM gpu WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    app.get('/api/getCase/:id', (req, res) => {
        const cpuId = req.params.id;
        const sql = 'SELECT * FROM pccase WHERE id = ?';
    
        db.query(sql, [cpuId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });

    app.post('/api/signup', (req, res) => {
        const sql = 'INSERT INTO users (`name`, `email`, `username`, `password`, `mobile_number`) VALUES (?, ?, ?, ?, ?)';
        const values = [
            req.body.name,
            req.body.email,
            req.body.username,
            req.body.password,
            req.body.mobile_number
        ];
    
        db.query(sql, values, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(data);
        });


    });
    app.post('/api/login', (req , res)=>{
        
        const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

        db.query(sql, [req.body.username,
            req.body.password] ,(err, data)=>{
            if(err) return res.json("Login Failed");
            if(data.length > 0){
                const uid= data[0].uid
                const token = jwt.sign({uid}, "jwtSecretKey", {expiresIn :500})
                return res.json({Login:true, token, data})
            }else {
                    return res.json('No user found')
                }
            
        

        })


    });
    app.post('/api/proceedToCart', (req, res) => {
        const sql = 'INSERT INTO orders (`cpu_id`, `gpu_id`, `moboid`, `case_id`, `ram_id`,`storage_id`,`user_id`,`psu_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
          req.body[0], // Assuming the array index corresponds to the correct order
          req.body[1],
          req.body[2],
          req.body[3],
          req.body[4],
          req.body[5],
          req.body[6],
          req.body[7],
        ];
      
        db.query(sql, values, (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          return res.json(data);
        });
      });

      app.post('/api/makePayment', (req, res) => {
        const { address, pin_code, username } = req.body;
      
        const sql = 'UPDATE users SET `address` = ?, `pin_code` = ? WHERE username = ?';
        const values = [address, pin_code, username];
      
        db.query(sql, values, (err, data) => {
          if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: 'Error updating data in the database' });
          }
          return res.json(data);
        });
      });
      
      
      

   

   app.get('/api/getUser', (req, res) => {
    const userId = req.params.uid;
    const sql = 'SELECT * FROM users ';

    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/api/orders', (req, res) => {
    const orderId = req.params.orderid;
    const sql = 'SELECT * FROM orders ';

    db.query(sql, [orderId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});
app.get('/api/getUserID/:username', (req, res) => {
    const sql = 'SELECT uid FROM users WHERE username = ?';

    db.query(sql, [req.params.username], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


  

    
}

/* const userRouter = Router(); */


/* export default userRouter; */



