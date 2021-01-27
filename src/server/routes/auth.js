const router = require("express").Router()
const passport = require("passport")
const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
var url = require("url")

function fullUrl(req) {
   return url.format({ protocol: req.protocol, host: req.get("host") })
}

/**
 * @route   ==> /api/auth
 */
router.get("/", (req, res) => {
   res.json({ hello: "auth" })
})

/** ********************************************************************
 *  ====> SIGN UP
 *  *********************************************************************
 * @route   ==> /api/auth/signup
 * @description User Authentication (register) with email using passport
 */
router.post("/signup", (req, res) => {
   let errors = []
   const { username, email, password } = req.body
   const thumbnail = `${fullUrl(req)}/img/avatar/profil.svg`

   User.findOne({ email }).then((user) => {
      if (user) {
         // User exist
         errors.push({ msg: "Email already registered" })

         // TRY USE FLASH
         res.json({ errors, status: "Account already exist" })
      } else {
         const newUser = new User({ username, email, password, thumbnail, provider: "local" })

         bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) throw err

               newUser.password = hash

               // Save The User
               newUser
                  .save()
                  .then((user) => {
                     // req.flash("success_msg", "You ara now registered and can Login")
                     console.log(user)

                     // TRY USE FLASH
                     res.json({ errors, status: "You Have Successfuly Registred", user })
                  })
                  .catch((err) => console.log(err))
            })
         )
      }
   })
})

/** ********************************************************************
 *  ====> LOG IN
 *  *********************************************************************
 * @route   ==> /api/auth/login
 * @description User Authentication (log in) with email using passport
 */
router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
   res.send("log in")
})

/** ********************************************************************
 *  ====> OAth WITH GOOGLE
 *  *********************************************************************
 * @route   ==> /api/auth/google
 * @description User Authentication with google using passport
 */
router.get(
   "/google",
   passport.authenticate("google", {
      scope: ["profile", "https://www.googleapis.com/auth/userinfo.email"],
   })
)

/** ********************************************************************
 *  ====> GOOGLE REDIRECT
 *  *********************************************************************
 * @route   ==> /api/auth/google/redirect
 * @description Redirect User after successful Authentication
 */
router.get("/google/redirect", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
   // res.send(req.user)
   res.redirect("/user/dashboard")
})

/** ********************************************************************
 *  ====> OAth WITH GITHUB
 *  *********************************************************************
 * @route   ==> /api/auth/github
 * @description User Authentication with github using passport
 */
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }))

/** ********************************************************************
 *  ====> GITHUB REDIRECT
 *  *********************************************************************
 * @route   ==> /api/auth/github/redirect
 * @description Redirect User after successful Authentication
 */
router.get("/github/redirect", passport.authenticate("github", { failureRedirect: "/login" }), (req, res) => {
   // res.send(req.user);
   res.redirect("/user/dashboard")
})

/** ********************************************************************
 *  ====> LOGGOUT
 *  *********************************************************************
 * @route   ==> /api/auth/logout
 * @description Logout the user
 */
router.get("/logout", (req, res) => {
   req.logout()
   res.redirect("/")
})

module.exports = router
