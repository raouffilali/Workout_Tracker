const { body, param, validationResult } = require("express-validator");
const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all workout
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  // Validate if the ID is a valid MongoDB ObjectId
  await param("id").isMongoId().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(404)
      .json({ error: "ID not valid. Please try again with a valid one." });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "Workout not found." });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  // Validate request body using express-validator
  await body("title").notEmpty().trim().run(req);
  await body("reps").notEmpty().isInt().toInt().run(req);
  await body("load").notEmpty().isFloat().toFloat().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // Validate if the ID is a valid MongoDB ObjectId
  await param("id").isMongoId().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(404)
      .json({ error: "ID not valid. Please try again with a valid one." });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "Workout not found." });
  }

  res.status(200).json({ message: "Workout deleted successfully." });
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;

  // Validate if the ID is a valid MongoDB ObjectId
  await param("id").isMongoId().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(404)
      .json({ error: "ID not valid. Please try again with a valid one." });
  }

  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    { title, reps, load },
    { new: true }
  );
  if (!workout) {
    return res.status(400).json({ error: "Workout not found." });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};

// -----------------------METHOD 1 --------------------------
/**const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} */
// -------------------------------------- METHOD 2---------------------------------

// const Workout = require("../models/workoutModel");
// const mongoos = require("mongoose");

// // Get all workout

// const getWorkouts = async (req, res) => {
//   try {
//     const workouts = await Workout.find({}).sort({ createdAt: -1 });
//     res.status(200).json(workouts);
//   } catch (error) {
//     res.status(400).json({
//       error: error.message,
//     });
//   }
// };

// // get single workout
// const getSingleWorkout = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoos.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ error: "ID not valid try again with a valid one" });
//   }

//   const workout = await Workout.findById(id);
//   if (!workout) {
//     return res.status(400).json({ error: "workout not found" });
//   }
//   res.status(200).json(workout);
// };

// // create new workout
// const createWorkout = async (req, res) => {
//   const { title, reps, load } = req.body;
//   try {
//     const workout = await Workout.create({ title, load, reps });
//     res.status(200).json(workout);
//   } catch (error) {
//     res.status(400).json({
//       error: error.message,
//     });
//   }
// };

// // delete workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoos.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ error: "ID not valid try again with a valid one" });
//   }
//   const workout = await Workout.findByIdAndDelete({ _id: id });
//   if (!workout) {
//     return res.status(400).json({ error: "workout not found" });
//   }
//   res.status(200).json({ message: "workout deleted successfully" });
// };

// // update workout
// const updateWorkout = async (req, res) => {
//   const { id } = req.params;
//   const { title, reps, load } = req.body;
//   if (!mongoos.Types.ObjectId.isValid(id)) {
//     return res

//       .status(404)
//       .json({ error: "ID not valid try again with a valid one" });
//   }
//   const workout = await Workout.findByIdAndUpdate(
//     { _id: id },
//     { title, reps, load },
//     { new: true }
//   );
//   if (!workout) {
//     return res.status(400).json({ error: "workout not found" });
//   }
//   res.status(200).json(workout);
// };

// module.exports = {
//   createWorkout,
//   getSingleWorkout,
//   getWorkouts,
//   deleteWorkout,
//   updateWorkout,
// };
