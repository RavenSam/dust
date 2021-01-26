const express = require("express")
const next = require("next")
const passport = require("passport")
const googleStrategy = require("./config/passport-setup/google-strategy")
const gitHubStrategy = require("./config/passport-setup/github-strategy")
const mongoose = require("mongoose")

require("dotenv").config()

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   const server = express()

   // Connect to MongoDB
   const optionsDB = { useUnifiedTopology: true, useNewUrlParser: true }
   mongoose.connect(process.env.CONNECT_DB, optionsDB, () => console.log(`> Connected to the DataBase...`))

   // initialize passport
   server.use(passport.initialize())
   server.use(passport.session())

   //    Routes
   server.use("/api/server", require("./routes"))
   server.use("/api/auth", require("./routes/auth"))

   //    Next Route
   server.get("*", (req, res) => handle(req, res))

   server.listen(port, (err) => console.log(`> Ready on http://localhost:${port}...`))
})
