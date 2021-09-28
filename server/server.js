require('dotenv').config();
const express = require('express');
const app = express();

const UserRollModel = require('./models/RollUser');

const Database = require('./classes/Database.js');  //require the Database class
const database = new Database(process.env.MONGO_SRV, process.env.PORT); //Initialize a new Database object

database.connect(); //connect to the db


app.listen(database.getPort(), () => console.log('Listening on port:', database.getPort()))

app.get('/api/rolls', async (req, res) =>{
    res.send(await database.getAllUserRolls());
});