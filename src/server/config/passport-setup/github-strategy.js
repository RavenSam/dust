const passport = require("passport")
const GitHubStrategy = require("passport-github2").Strategy
const User = require("../../models/user-model")

require("dotenv").config()

passport.use(
   new GitHubStrategy(
      {
         // Options for google
         clientID: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET,
         callbackURL: "/api/auth/github/redirect",
         scope: ["user:email"],
      },
      (accessToken, refreshToken, profile, done) => {
         // Passport callback
         const { provider, displayName, username, id, emails, photos } = profile
         const email = emails[0].value

         User.findOne({ email }).then((user) => {
            if (user) {
               // If User With THAT email Exist
               done(null, user)
            } else {
               // If User With THAT email Do Not Exist
               const newUser = {
                  full_name: displayName,
                  username,
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
