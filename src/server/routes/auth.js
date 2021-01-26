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
router.get("/google/redirect", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
   // res.send(req.user);
   res.redirect("/dashboard")
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
   res.redirect("/dashboard")
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
