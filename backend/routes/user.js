const express = require("express");

const { loginUser, signupUser,getUsers,getUser} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
