const mongoose = require("mongoose");
const keys = require("../config/keys");
const URI = keys.MONGO_URL;

const Connect = function(){
    console.log("connecting");
    mongoose.connect(URI, (error) => {
        if (error) {
            console.log(error)
        } 
    });
    
    mongoose.connection.on('connected', () => {
        console.log('connected');
        console.log(mongoose.connection.readyState); //logs 1
    });
};

module.exports = Connect();