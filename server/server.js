require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const UserRoll = require('./models/RollUser.js');

const dbConnect = require('./dbConnect.js');

dbConnect();    //Connect to the database

//Body Parsing Middleware
//https://expressjs.com/en/4x/api.html#req.body
//Do I need any of this stuff?
//app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(PORT, () => console.log('listening on port', process.env.PORT))

app.get('/api/rolls', (req, res) =>{

    /**
     * An empty query will get all records from the collection.
     * 
     * Because we are using the callback, we cannot use async/await.
     */
    UserRoll.find({}, (err, data) => {
        if(err){    //If there is an error, print to server console and send to client a message
            console.log('Error getting all user rolls', err);
            res.send({
                message: 'Error getting all user rolls',
                error: {
                    message: err.message
                }
            });
        } else {
            console.log('Retrieval from DB Success');
            if(data){   //If there were records found
                res.send({
                    message: 'Retrieval from DB Success',
                    data: data
                })
            } else {    //If there were no records found
                res.send({
                    message: 'There were no records found',
                    data: []    //We will pass back an empty array for no data found
                })
            }
        }
    });

    // await UserRoll.find({})   //await the results of this function
    // .then( (data) => {
    //     console.log('Get all user rolls successful');
    //     res.send({  //send the data back to the client
    //         results: data
    //     })
    // })
    // .catch( (err) => {
    //     console.log('Error searching database', err);   //log the error to the server
    //     res.send({  //send back a message to the client that fetch got an error
    //         message: 'Unable to retrieve data'
    //     });
    // });
});