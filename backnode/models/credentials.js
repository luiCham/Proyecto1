const { Schema, model } = require('mongoose');

const credentialsSchema = new Schema({
    email: {
        type: Number,
        trim: true
    },
    password: {
        type: Number,
        trim: true
    },
    name:{
        type: String,
        trim: true
    }    
});

module.exports = model('credentials', credentialsSchema);