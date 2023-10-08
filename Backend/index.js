import express from 'express';
import mongoose from 'mongoose';
import { addSampleUser } from './queriesDB.js';

const app = express();
const port = 3000;
///////////////

import mysql from 'mysql';
const db = mysql.createConnection({
    host: "db4free.net",
    user: "rajatmit",
    password: "rajat@123",
    database: "myinventory"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});





//////////////////
// Connect to MongoDB Atlas
/* mongoose.connect('mongodb+srv://rajatrathaurmatrix:w1s1TXWFmtVPlZdk@pc-builder-cluster1.vte5idg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("Could not connect to MongoDB Atlas", err));

app.get('/', async (req, res) => {
    const result = await addSampleUser();

    if (result.success) {
        res.send('Hello World! User saved.');
    } else {
        console.error(result.message);
        res.send('Hello World! Error saving user.');
    }
});
 */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
