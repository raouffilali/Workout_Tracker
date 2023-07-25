const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentification
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .send({ error: "You must be logged in. Authorization token required" });
  }

  // extract token from authorization header
  const token = authorization.replace("Bearer ", "");
  // ? this is a second methode with split :const token = authorization.split(' ')[1];

  // verify token
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(_id).select("_id");
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .send({ error: "Request is not authorized.You must be logged in" });
  }
};

module.exports = requireAuth;
