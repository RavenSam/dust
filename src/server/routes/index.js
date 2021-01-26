const router = require("express").Router()

router.get("/", (req, res) => {
   res.json({ greating: "Hello from server" })
})

module.exports = router
