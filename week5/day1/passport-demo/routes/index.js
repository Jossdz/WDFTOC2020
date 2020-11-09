const express = require("express")
const router = express.Router()
const {
  signupView,
  signupProcess,
  loginView,
  loginProcess,
  privatePage,
  logout
} = require("../controllers/auth")
// const passport = require('../config/passport')
/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.user)
  res.render("index")
})

//====================Auth====================
router.get("/signup", signupView)
router.post("/signup", signupProcess)
router.get("/login", loginView)
// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }))
router.post("/login", loginProcess)

router.get("/private-page", privatePage)

router.get("/logout", logout)
module.exports = router
