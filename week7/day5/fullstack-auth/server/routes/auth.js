const express = require("express");
const passport = require('passport');
const router = express.Router();

const { signup, login, logout, currentUser } = require('../controllers/auth')
// Bcrypt to encrypt passwords


router.post("/login", login);


router.post("/signup", signup);

router.get('/current-user', currentUser)

router.get("/logout", logout);

module.exports = router;
