const express = require("express")
const router = express.Router()
const {
  signupView,
  signupProcess,
  loginView,
  loginProcess,
  privatePage,
  logout,
  padrinoPage,
  editorPage,
  invitadoPage,
  slackInit,
  slackCb,
  googleInit,
  googleCb
} = require("../controllers/auth")
const { isAuth, isNotAuth, checkRoles } = require("../middlewares")
// const passport = require('../config/passport')
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

//====================Auth====================
router.get("/signup", isNotAuth, signupView)
router.post("/signup", isNotAuth, signupProcess)
router.get("/login", isNotAuth, loginView)
// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }))
// Pasamos el middleware que restringe el acceso a esta ruta al post para que no nos envien informacion desde herramientas de terceros (POSTMAN)
router.post("/login", isNotAuth, loginProcess)

router.get("/private-page", isAuth, privatePage)

router.get("/padrino", isAuth, checkRoles(["ELPADRINO"]), padrinoPage)
router.get("/editor", isAuth, checkRoles(["EDITOR", "ELPADRINO"]), editorPage)
router.get("/invitado", invitadoPage)

router.get("/logout", logout)

// ==================SOCIAL===================

router.get("/auth/slack", slackInit)
router.get("/auth/slack/callback", slackCb)

router.get("/auth/google", googleInit)
router.get("/auth/google/callback", googleCb)

module.exports = router
