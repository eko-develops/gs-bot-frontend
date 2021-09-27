require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

//body parsing middleware
//https://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(PORT, () => console.log('listening on port', process.env.PORT))

app.get('/', (req, res) =>{
    res.send({
        message: "Hello World"
    })
})