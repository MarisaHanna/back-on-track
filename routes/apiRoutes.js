const router = require('express').Router();

const Fitness = require('../models/fitness');

router.get('/api/workouts', (req, res) => {
Fitness.aggregate([
    {
        $addFields:{
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }
])
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    Fitness.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
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
    Fitness.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;