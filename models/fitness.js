const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type:Date,
        default:Date.now()
    },
    exercises:[{
        name:{
            type: String,
            trim: true,
            required: 'Please enter your workout name'
        },
        type:{
            type: String,
            trim: true,
            required: 'Please enter your workout type '
        },
        distance:{
            type: Number
        },
        duration:{
            type: Number,
            required: 'Please enter the duration of your workout'
        },
        weight:{
            type: Number
        },
        sets:{
            type: Number
        },
        reps:{
            type: Number
        }
    }]
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;