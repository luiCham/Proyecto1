const { Schema, model } = require('mongoose');

const credentialsSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    }    
});

module.exports = model('credentials', credentialsSchema);