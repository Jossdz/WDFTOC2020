const bcrypt = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const SlackStrategy = require("passport-slack").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      const user = await User.findOne({ email })
      if (!user) {
        return done(null, false, { message: "Incorrect email" })
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect password" })
      }

      done(null, user) // envia el usuario a serializeUser
    }
  )
)

passport.use(
  new SlackStrategy(
    {
      clientID: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
      callbackURL: "/auth/slack/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ slackID: profile.id })
        if (user) {
          return done(null, user)
        }

        const newUser = await User.create({
          email: profile.user.email,
          slackID: profile.id
        })

        done(null, newUser)
      } catch (err) {
        done(err)
      }
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (_, __, profile, done) => {
      const user = await User.findOne({ googleID: profile.id })

      if (user) {
        return done(null, user)
      }

      const newUser = await User.create({
        googleID: profile.id,
        email: profile.emails[0].value
      })

      done(null, newUser)
    }
  )
)

passport.serializeUser((user, cb) => {
  cb(null, user._id)
})

passport.deserializeUser(async (id, cb) => {
  const user = await User.findById(id)
  user.password = null
  cb(null, user) // Guarda lo que le enviamos como segundo argumento en la sesion como req.user
})

module.exports = passport
