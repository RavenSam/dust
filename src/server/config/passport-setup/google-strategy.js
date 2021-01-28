const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../../models/user-model")

require("dotenv").config()

passport.use(
   new GoogleStrategy(
      {
         // Options for google
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         callbackURL: "/api/auth/google/redirect",
      },
      (accessToken, refreshToken, profile, done) => {
         // Passport callback
         const { provider, displayName, id, emails, name, photos } = profile
         const email = emails[0].value

         User.findOne({ email }).then((user) => {
            if (user) {
               // If User With THAT email Exist
               done(null, user)
            } else {
               // If User With THAT email Do Not Exist
               const newUser = {
                  name: `${name.familyName} ${name.givenName}`,
                  username: displayName,
                  email,
                  thumbnail: photos[0].value,
                  provider,
                  providerId: id,
               }

               new User(newUser).save().then((savedUser) => {
                  done(null, savedUser)
               })
            }
         })
      }
   )
)

passport.serializeUser((user, done) => {
   done(null, user.id)
})

passport.deserializeUser((id, done) => {
   User.findById(id).then((user) => {
      done(null, user)
   })
})
