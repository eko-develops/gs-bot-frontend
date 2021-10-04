const Mongoose = require('./Mongoose.js');

class Database{

    #mongoSRV;
    #port;

    constructor(mongoSRV, port = 3000){ //set a default port if none is given
        this.#mongoSRV = mongoSRV;
        this.#port = port;
    }

    /**Set up stuff for the database */
    
    //Method to get assigned port
    #activePort(){
        return this.#port;
    }
    getPort(){
        return this.#activePort();
    }

    #activeMongoSRV(){
        return this.#mongoSRV;
    }

    //Method to connect to the database
    connect(){
        Mongoose.startConnection(this.#activeMongoSRV())
    }

    findAllRecords(){
        return Mongoose.getAll();
    }

    static getModel(schema, modelName){
        return Mongoose.newModel(schema, modelName);
    }

}

module.exports = Database;