const url = require("url")

module.exports = {
   /**
    *
    * @description NOT accessing some urls if user is NOT Authenticed
    *  - check if the user is authenticated
    *  - if false he will be rediredcted to the Login Page
    */
   ensureAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
         return next()
      }
      res.redirect("/login")
   },

   /**
    *
    * @description NOT accessing some urls if user is Authenticed
    *  - check if the user is authenticated
    *  - if true he will be rediredcted to the Dashboard Page
    */
   forwardAuthenticated: (req, res, next) => {
      if (!req.isAuthenticated()) {
         return next()
      }
      res.redirect("/user/dashboard")
   },

   /**
    *
    * @param {*} req
    *  - return the website link
    *  - ex : if local => http://localhost:3000
    */
   fullUrl: (req) => {
      return url.format({ protocol: req.protocol, host: req.get("host") })
   },
}
