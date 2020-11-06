const { genSaltSync } = require("bcrypt")
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")

router.get("/signup", (req, res) => {
  res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
  // 1. Tomar la informacion del form
  const { username, email, password } = req.body
  // 2. evaluar si nos enviaron campos vacios
  if (username === "" || email === "" || password === "") {
    // 2.1 si es asi, enviar un mensaje de error
    res.render("auth/signup", { error: "Missing fields" })
  } else {
    // 3. hashear la contrase~a
    const salt = bcrypt.genSaltSync(12)
    const hashpwd = bcrypt.hashSync(password, salt)
    // 3.1 Si nos dieron  la informacion correcta, podemos guardar al usuario en la db
    await User.create({
      username,
      email,
      password: hashpwd
    })
    // 5. responder al usuario de alguna forma (redirect('/profile'))
    res.redirect("/profile")
  }
})

router.get("/profile", (req, res) => {
  res.render("auth/profile")
})

module.exports = router
