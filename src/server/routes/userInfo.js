const router = require("express").Router()
const User = require("../models/user-model")

/** ********************************************************************
 *  ====> UPDATE USER HISTORY
 *  *********************************************************************
 * @route   ==> /api/userInfo/history
 * @description
 */
router.put("/history", (req, res) => {
   const { history } = req.user

   if (req.user && history[history.length - 1].id !== req.body.postId) {
      User.updateOne({ email: req.user.email }, { $push: { history: { id: req.body.postId } } })
         .then((updateInfo) => {
            res.json({ HistoryUpdated: true, updateInfo })
         })
         .catch((err) => {
            console.log(err)
            res.json({ HistoryUpdated: false })
         })
   } else {
      res.json({ msg: "User Not Logged or somthing else..." })
   }
})

/** ********************************************************************
 *  ====> CLEAR USER HISTORY
 *  *********************************************************************
 * @route   ==> /api/userInfo/history
 * @description
 */
router.delete("/history", (req, res) => {
   if (req.user) {
      User.updateOne({ email: req.user.email }, { $set: { history: [] } }, { multi: true })
         .then((updateInfo) => {
            res.json({ HistoryCleared: true, updateInfo })
         })
         .catch((err) => {
            console.log(err)
            res.json({ HistoryCleared: false })
         })
   } else {
      res.json({ msg: "User Not Logged or something else..." })
   }
})

/** ********************************************************************
 *  ====> UPDATE USER BOOKMARK
 *  *********************************************************************
 * @route   ==> /api/userInfo/bookmark
 * @description
 */
router.put("/bookmarks", (req, res) => {
   const { bookmarks } = req.user

   if (req.user) {
      if (bookmarks.includes(req.body.postId)) {
         User.updateOne({ email: req.user.email }, { $pull: { bookmarks: req.body.postId } })
            .then((updateInfo) => {
               res.json({ msg: "Post Removed From Bookmarks", updateInfo })
            })
            .catch((err) => {
               console.log(err)
            })
      } else {
         User.updateOne({ email: req.user.email }, { $push: { bookmarks: req.body.postId } })
            .then((updateInfo) => {
               res.json({ msg: "Post Added To Bookmarks", bookmarked: true, updateInfo })
            })
            .catch((err) => {
               console.log(err)
            })
      }
   } else {
      res.json({ msg: "User Not Logged" })
   }
})

module.exports = router
