const router = require("express").Router()
const {getUsers, addUsers} = require("../controllers/controllers")
const logerUrl = require("../middleware/loger")


router.use(logerUrl)

router.get("/", getUsers)
router.post("/users", addUsers)

module.exports = router
