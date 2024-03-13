const router = require("express").Router()
const {getUsers, addUsers, delUser, getUser, updateUser} = require("../controllers/userControllers.js")
const logerUrl = require("../middleware/loger")


router.use(logerUrl)

router.get("/users", getUsers)
router.get("/users/:user_id", getUser)
router.post("/users", addUsers)
router.patch("/users/:user_id", updateUser)
router.delete("/users/:user_id", delUser)

module.exports = router
