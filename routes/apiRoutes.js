const router = require('express').Router();

const Fitness = require('../models/fitness');

router.get('/api/workouts', (req, res) => {
    Fitness.find({})
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    Fitness.find({})
    .limit(7)
    .then((dbExercise) => {
        res.json(dbExercise);        
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
    Fitness.create({body})
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    Fitness.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true})
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});