const Database = require('../classes/Database.js');

console.log('from RollUser.js', Database);

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

const UserRoll = Database.getModel(schema, "Roll");

module.exports = UserRoll;