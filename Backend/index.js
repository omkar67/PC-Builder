import express from 'express';
import { initialize } from './queriesDB.js';
import cors from 'cors'
import mysql from 'mysql';


const app = express();
const port = 3000;
app.use(cors())

/* const db = mysql.createConnection({
    host: "82.180.140.5",
    user: "u416017694_dsfgdfgdfgf",
    password: "G6ggzw353i8?",
    database: "u416017694_dfgdfgdgdg",
    port:"3306"
});
 */


/*
const db = mysql.createConnection({
    host: "db4free.net",
    user: "rajatmit",
    password: "rajat@123",
    database: "myinventory"
});*/

const db = mysql.createConnection({
    host: 'localhost', // Your local MySQL server host
    user: 'root', // Your MySQL username
    password: 'root', // Your MySQL password
    database: 'pcbuilder', // Your database name
}); 

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
app.get('/', (req, res) => {
    res.send('Hello from my server!');
  });

  initialize(app, db)
  





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

