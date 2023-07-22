const express = require("express");

const router = express.Router();

// GET ALL workouts
router.get("/", (req, res) => {
  res.json({
    msg: "GET all workouts",
  });
});

// GET a SINGLE workout
router.get("/:id", (req, res) => {
  res.json({
    msg: "GET A ASIGNLE  workout",
  });
});

// POST a workout
router.post("/", (req, res) => {
  res.json({
    msg: "POST a workout",
  });
});
// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({
    msg: "DELETE A ASIGNLE  workout",
  });
});
// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({
    msg: "UPDATE A ASIGNLE  workout",
  });
});

module.exports = router;
