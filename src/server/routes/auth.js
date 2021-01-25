const router = require("express").Router()
const passport = require("passport")

/**
 * @route   ==> /api/auth
 */
router.get("/", (req, res) => {
   res.json({ hello: "auth" })
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
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
   res.send("Successfuly Authenticated with google")
})

/** ********************************************************************
 *  ====> OAth WITH FACEBOOK
 *  *********************************************************************
 * @route   ==> /api/auth/facebook
 * @description User Authentication with facebook using passport
 */
router.get("/facebook", (req, res) => {
   res.send("Logging with facebook")
})

/** ********************************************************************
 *  ====> LOGGOUT
 *  *********************************************************************
 * @route   ==> /api/auth/logout
 * @description Logout the user
 */
router.get("/logout", (req, res) => {
   res.send("Loggout")
})

module.exports = router
