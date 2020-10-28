const express = require('express')
const router = express.Router()

// @route   GET api/workouts
// @desc    Get all workouts
// @access  Public
router.get('/', (req, res) => res.send('Workouts route'))


// @route   GET api/workouts/:id
// @desc    Get single workout
// @access  Public
router.get('/:id', (req, res) => res.send('Get single workout'))

// @route   POST api/workouts
// @desc    Create new workout
// @access  Public
router.post('/', (req, res) => res.send('Post a workout'))


// @route   PUT api/workouts/:id
// @desc    Update workout
// @access  Public
router.put('/:id', (req, res) => res.send("Update a workout"))

// @route   DELETE api/workouts/:id
// @desc    Delete workout
// @access  Public
router.delete('/:id', (req, res) => res.send("Delete a workout"))

module.exports = router