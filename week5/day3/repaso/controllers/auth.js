const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../config/passport')


exports.signupView = (req, res) => res.render('auth/signup')

exports.signupProcess = async(req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.render('auth/signup', { message: "por favor indica el password y el email" })
    }

    const user = await User.findOne({ email })
    if (user) {
        return res.render('auth/signup', { message: 'Hijole joven este usuario ya existe' })
    }
    const salt = bcrypt.genSaltSync(12)
    const hasPass = bcrypt.hashSync(password, salt)

    await User.create({ email, password: hasPass })
    res.redirect('/login')
}