// rajatrathaurmatrix :- username
// w1s1TXWFmtVPlZdk :-password
//'mongodb+srv://rajatrathaurmatrix:w1s1TXWFmtVPlZdk@pc-builder-cluster1.vte5idg.mongodb.net/?retryWrites=true&w=majority'
import { Router } from "express";

export function initialize(app, db) {
 

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
    
}

/* const userRouter = Router(); */


/* export default userRouter; */



