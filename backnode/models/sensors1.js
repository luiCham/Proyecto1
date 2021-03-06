const { Schema, model } = require('mongoose');

const sensors1Schema = new Schema({
    temp: {
        type: Number,
        trim: true
    },
    hum: {
        type: Number,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    }
});

module.exports = model('sensors', sensors1Schema);