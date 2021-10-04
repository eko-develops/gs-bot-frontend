const mongoose = require('mongoose');
const models = require('../models/model');
const Schema = mongoose.Schema;

class Mongoose{
    // constructor(){

    // }

    static async startConnection(MONGO_SRV){
        await mongoose.connect(MONGO_SRV)
        .then( () => console.log('Connected to database'))
        .catch( (err) => console.log('\n\nDatabase authentication failed\n', err));
    }

    getUserRollsModel(){
        return models.UserRoll;
    }

        //Get all records from a model
    static async getAll(){
        return await getUserRollsModel().find({}).exec()   //empty query to search for all records
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

    static newModel(schema, modelName){
        const schemaObj = new Schema(...schema);
        const model = mongoose.model(modelName, schemaObj);
        return model;
    }


}

module.exports = Mongoose;