require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

let PORT = process.env.PORT;
let MONGO_URI = process.env.MONGO_URI;
// express App
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route Handler
app.use("/api/workouts", workoutRoutes);

// Connect to mongoos
mongoose
  .connect(MONGO_URI)
  .then(() => {

    // listen for request
    app.listen(PORT, () => {
      console.log(`MONGODB connected && Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
