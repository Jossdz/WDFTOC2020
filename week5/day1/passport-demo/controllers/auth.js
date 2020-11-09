// Export individual
// {
// signupView: () => {}
//}
const bcrypt = require("bcrypt")
const User = require("../models/User")
const passport = require("../config/passport")

exports.signupView = (req, res) => res.render("auth/signup")

exports.signupProcess = async (req, res) => {
  // 1. extraer la informacion del form
  const { email, password } = req.body
  // 2. verificar que no nos envien campos vacios
  if (!email || !password) {
    return res.render("auth/signup", {
      errorMessage: "Indicate email and password"
    })
  }
  // 3. verificar que el usuario no exista con ese correo
  const user = await User.findOne({ email })
  if (user) {
    return res.render("auth/signup", {
      errorMessage: "Error ✖"
    })
  }
  // 4. Si el usuario no existe, hacemos el hash de la contrase~a
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  // 5. crear al user en la db
  await User.create({
    email,
    password: hashPass
  })

  res.redirect("/login")
}

exports.loginView = (req, res) => {
  res.render("auth/login", { errorMessage: req.flash("error") })
}

exports.loginProcess = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
})

exports.privatePage = (req, res) => {
  if (!req.user) return res.redirect("/")
  res.render("private")
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect("/login")
}
// Export por defecto
// module.exports = 1
