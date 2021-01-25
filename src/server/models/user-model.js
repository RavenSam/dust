const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },

   username: {
      type: String,
      required: true,
   },

   email: {
      type: String,
      required: true,
   },

   provider: {
      type: String,
      required: true,
   },

   providerId: String,

   createdAt: {
      type: Date,
      default: Date.now,
   },
})

module.exports = mongoose.model("user", userSchema)
