const mongoose = require('mongoose');
const model = require('../models/model');

class Database{
    constructor(mongoSRV, port = 3000){ //set a default port if none is given
        this._mongoSRV = mongoSRV;
        this._port = port;
    }

    getUserRollModel(){
        return model.UserRoll
    }

    /**Set up stuff for the database */

    //Method to get assigned port
    getPort(){
        return this._port;
    }

    //Method to connect to the database
    async connect(){
            await mongoose.connect(this._mongoSRV)
            .then( () => console.log('Connected to database'))
            .catch( (err) => console.log('\n\nDatabase authentication failed\n', err));
    }

    /**Helper methods to query database */

    //Get all records from a model
    async getAll(model){
        return await model.find({}).exec()   //empty query to search for all records
        .then( (data) => {
            if(data){
                console.log('Retrieval from database success')
                return {
                    message: 'Retrieval from database success',
                    data
                }
            } else {    //If there were no records found
                console.log('There were no records found')
                return {
                    message: 'There were no records found',
                    data: []    //We will pass back an empty array for no data found
                }
            }
        })
        .catch( (err) => {
            console.log('Error getting data from database\n', err);//log to server
            return {
                message: 'Error getting data from database',
                error: {
                    message: err.message
                }
            };
        });
    }




}

module.exports = Database;