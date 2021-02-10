const express = require("express")
const next = require("next")
const passport = require("passport")
const cookieSession = require("cookie-session")
const googleStrategy = require("./config/passport-setup/google-strategy")
const gitHubStrategy = require("./config/passport-setup/github-strategy")
const localStrategy = require("./config/passport-setup/local-strategy")
const cors = require("cors")
const mongoose = require("mongoose")
const Cookies = require("universal-cookie")
const { ensureAuthenticated, forwardAuthenticated } = require("./config/helpers/helpers-func")

require("dotenv").config()

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   const server = express()

   // Body Parser
   server.use(express.json())
   server.use(express.urlencoded({ extended: false }))

   // Connect to MongoDB
   const optionsDB = { useUnifiedTopology: true, useNewUrlParser: true }
   mongoose.connect(process.env.CONNECT_DB, optionsDB, () => console.log(`> Connected to the DataBase...`))

   // set up session cookies
   server.use(
      cookieSession({
         maxAge: 24 * 60 * 60 * 1000,
         keys: [process.env.COOKIE_KEY],
      })
   )

   server.use(cors())

   // initialize passport
   server.use(passport.initialize())
   server.use(passport.session())

   //    Routes
   server.use("/api/auth", require("./routes/auth"))
   server.use("/api/userInfo", require("./routes/userInfo"))

   // Access Only If Logged In
   // redirect to login page if user is not logged in
   server.get("/user/*", ensureAuthenticated, (req, res) => handle(req, res))

   // Access Only If NOT Logged In
   // redirect to dashboard page if user is already logged in
   server.get("/login", forwardAuthenticated, (req, res) => handle(req, res))
   server.get("/signup", forwardAuthenticated, (req, res) => handle(req, res))

   //    Next Route
   server.get("*", (req, res) => handle(req, res))

   server.listen(port, (err) => console.log(`> Ready on http://localhost:${port}...`))
})
