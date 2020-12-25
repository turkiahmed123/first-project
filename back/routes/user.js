const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/authvalidator");
const isAuth = require("../middleware/passport");
const controllers = require("../controllers/auth")

// register
router.post("/register", registerRules(), validation, controllers.register);

//login
router.post("/login", loginRules(), validation, controllers.login);
// get current user
router.get("/current", isAuth(), controllers.current);

module.exports = router;
