const router = require("express").Router()
const logerUrl = require("../middleware/loger")


router.use(logerUrl)
// router("/", getUsers)

module.exports = router
