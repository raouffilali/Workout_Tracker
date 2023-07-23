# WorkoutTracker

## Description

WorkoutTracker is a web application to track your workouts and exercises. Users can sign up for an account, log in, and track exercises by entering details like exercise name, weight lifted, number of reps, etc.

This app uses the MERN stack:

- MongoDB - NoSQL database to store exercise data
- Express - Node.js web application framework
- React - Front-end library for building user interfaces
- Node.js - Backend runtime environment

## Features

- User authentication with bcrypt password hashing
- Exercise tracking with details like name, weight, reps etc.
- View list of logged exercises
- Edit and delete exercises
- Responsive design

## Usage

### Sign Up

To use WorkoutTracker, first sign up for a new account with a username, email and password. Password is hashed for security using bcrypt.

### Log In

After signing up, you can log in with your username and password. JWT tokens are used to authenticate users.

### Add Exercise

To add an exercise, enter details like the name, weight lifted, number of reps completed, etc. Clicking submit saves the exercise to the database.

### View Exercises

The homepage shows a list of all your logged exercises. You can view details and filter exercises.

### Edit and Delete

Exercises can be edited or deleted by clicking the action buttons next to each entry.

## Deployment

This app is deployed on Heroku at: (Coming Soon !! )

The backend Express server uses a MongoDB Atlas cloud database.

## Setup for Local Development

### Install Dependencies

```
npm install
```

### Configure Environment Variables

Create a .env file with the following:

```
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### Run Locally

```
npm run dev
```

This concurrently runs and watches the React app on port 3000 and Express server on port 5000.

## Technology

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## License
