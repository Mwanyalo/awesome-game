const express = require("express");
const router = express.Router();

const {
  registerValidationRules,
  loginValidationRules,
} = require("./validators/auth");
const { validate } = require("./middlewares/validationMiddleware");
const { login } = require("./controllers/LoginController");
const { register } = require("./controllers/RegisterController");
const { updateUserById, getUserById } = require("./controllers/UserController");

router.post("/login", loginValidationRules(), validate, login);
router.post("/register", registerValidationRules(), validate, register);
router.post("/game/:id", updateUserById);
router.post("/user/:id", getUserById);

module.exports = router;
