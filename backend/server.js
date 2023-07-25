require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

let PORT = process.env.PORT;
let MONGO_URI = process.env.MONGO_URI;
// express App
const app = express();
// require corse
const cors = require("cors");
// use cors
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route Handler
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

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

// MINE
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const workoutRoutes = require("./routes/workouts");

// // express app
// const app = express();

// // middleware
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// // routes
// app.use("/api/workouts", workoutRoutes);

// // connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("connected to database");
//     // listen to port
//     app.listen(process.env.PORT, () => {
//       console.log("listening for requests on port", process.env.PORT);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
