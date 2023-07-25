const express = require("express");
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// Protect all routes after this middleware
router.use(requireAuth);
// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;

// MINE
// const express = require("express");
// const {
//   createWorkout,
//   getWorkout,
//   getWorkouts,
//   deleteWorkout,
//   updateWorkout,
// } = require("../controllers/workoutControllers");

// const router = express.Router();

// // GET ALL workouts
// router.get("/", getWorkouts);

// // GET a SINGLE workout
// router.get("/:id", getWorkout);

// // POST a workout
// router.post("/", createWorkout);

// // DELETE a workout
// router.delete("/:id", deleteWorkout);

// // UPDATE a workout
// router.patch("/:id", updateWorkout);

// module.exports = router;
