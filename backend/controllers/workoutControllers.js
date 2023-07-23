const Workout = require("../models/workoutModel");
const mongoos = require("mongoose");

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

  if (!mongoos.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "ID not valid try again with a valid one" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "workout not found" });
  }
  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
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
  if (!mongoos.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "ID not valid try again with a valid one" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "workout not found" });
  }
  res.status(200).json({ message: "workout deleted successfully" });
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;
  if (!mongoos.Types.ObjectId.isValid(id)) {
    return res

      .status(404)
      .json({ error: "ID not valid try again with a valid one" });
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    { title, reps, load },
    { new: true }
  );
  if (!workout) {
    return res.status(400).json({ error: "workout not found" });
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
