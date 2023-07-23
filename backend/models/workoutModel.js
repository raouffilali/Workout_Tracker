// !MINE
const mongoos = require("mongoose");

const Schema = mongoos.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoos.model("workout", workoutSchema);
