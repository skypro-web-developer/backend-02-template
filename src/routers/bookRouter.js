const { getAllBooks, createBook, getBookById, updateBookByID, delBookById } = require("../controllers/booksControllers")
const router = require("express").Router()
const logerUrl = require("../middleware/loger")


router.use(logerUrl)

router.get("/books", getAllBooks)
router.get("/books/:book_id", getBookById)
router.post("/books", createBook)
router.patch("/books/:book_id", updateBookByID)
router.delete("/books/:book_id", delBookById)

module.exports = router;