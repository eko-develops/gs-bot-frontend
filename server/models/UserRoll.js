const Mongoose = require('../classes/Mongoose.js');

console.log('from /models/UserRoll.js', Mongoose);

const schema = [{
    _id: {
        type: String,
        required: true,
    },
    username: String,
    weekly: Number,
    totalCredits: Number,
}, {
    timestamps: true
}];

const UserRoll = Mongoose.newModel(schema, "Roll");

module.exports = UserRoll;