const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const FacebookStrategy = require("passport-facebook")

require("dotenv").config()

passport.use(
   new GoogleStrategy(
      {
         // Options for google
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         callbackURL: "/api/auth/google/redirect",
      },
      (accessToken, refreshToken, profile, cb) => {
         // Passport callback
         console.log(profile)
      }
   )
)
