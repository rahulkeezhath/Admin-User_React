const mongoose = require('mongoose');

const db = async()=>{
    try {
        const connection = await mongoose.connect('mongodb://0.0.0.0:27017/sampleReact', {
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`MongoDb  Successfully Connected : ${connection.connection.host} `);

    } catch (error) {
        console.log("error",error);
    }
}

module.exports = db;