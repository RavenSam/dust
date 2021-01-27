const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const User = require("../../models/user-model")

passport.use(
   new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //Match User
      User.findOne({ email })
         .then((user) => {
            if (!user) {
               return done(null, false, { message: "That email is not registered" })
            }

            //Match PW
            bcrypt.compare(password, user.password, (err, isMatch) => {
               if (err) throw err

               if (isMatch) {
                  return done(null, user)
               } else {
                  return done(null, false, { message: "Password Incorrect" })
               }
            })
         })
         .catch((err) => console.log(err))
   })
)

passport.serializeUser((user, done) => {
   done(null, user.id)
})

passport.deserializeUser((id, done) => {
   User.findById(id).then((user) => {
      done(null, user)
   })
})