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
        duration:{
            type: Number,
            required: 'Please enter the duration of your workout'
        },
        weight:{
            type: Number
        },
        reps:{
            type: Number
        },
        sets:{
            type: Number
        },
        distance:{
            type: Number
        }
    }]
});

const Workout = mongoose.model('Workout', fitnessSchema);

module.exports = Workout;