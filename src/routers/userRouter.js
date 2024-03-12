const router = require("express").Router()
const {getUsers, addUsers, delUser, getUser, updateUser, getBooksUserById} = require("../controllers/controllers")
const logerUrl = require("../middleware/loger")


router.use(logerUrl)

router.get("/users", getUsers)
router.get("/books", getUsers)
router.get("/users/:user_id", getUser)
router.get("/users/:user_id/books", getBooksUserById)
router.post("/users", addUsers)
router.patch("/users/:user_id", updateUser)
router.delete("/users/:user_id", delUser)

module.exports = router
