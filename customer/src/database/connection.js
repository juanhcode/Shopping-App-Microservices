const mongoose = require('mongoose');
const { DB_URL } = require('../config');
console.log(DB_URL);
module.exports = async() => {

    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).catch(err=>{
            console.log(err);
        })
        mongoose.connection.on('open',_=>{
            console.log("Base de datos conectada",DB_URL);
        })
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 