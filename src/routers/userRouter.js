const router = require("express").Router()
const {getUsers, addUsers, delUser} = require("../controllers/controllers")
const logerUrl = require("../middleware/loger")


router.use(logerUrl)

router.get("/users", getUsers)
router.post("/users", addUsers)
router.delete("/users/:user_id", delUser)

module.exports = router
