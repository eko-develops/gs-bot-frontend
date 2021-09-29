require('dotenv').config();
const express = require('express');
const app = express();

const Database = require('./classes/Database.js');  //require the Database class
const db = new Database(process.env.MONGO_SRV, process.env.PORT); //Initialize a new Database object

db.connect(); //connect to the db

app.listen(db.getPort(), () => console.log('Listening on port:', db.getPort()));

app.get('/api/rolls', async (req, res) =>{
    res.json(await db.getAll(db.getUserRollModel()));
});