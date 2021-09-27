const mongoose = require('mongoose');


const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_SRV)
    .then( () => console.log('Connected to database'))
    .catch( (err) => console.log('\n\nDatabase authentication failed\n'))
}

module.exports = dbConnect