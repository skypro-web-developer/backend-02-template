const Books = require("../models/bookModels")


const getAllBooks = (req, res) => {
    Books.find({})
        .then((books) => res.status(200).send(books))
        .catch((err) => res.status(404).send(err.message))
        .catch((err) => res.status(500).send(err.message))
}
const getBookById = (req, res) => {
    const {book_id} = req.params
    Books.findById(book_id)
    .then((book) => {
        if(!book){
            res.status(404)
        }else{
            res.status(200)
        }
    })
    .catch((err) => res.status(500).send(err.message))
}
const createBook = (req, res) => {
    const book = req.body
    Books.create(book)
        .then((book) => res.status(201).send(book))
        .catch((err) => res.status(404).send(err.message))
        .catch((err) => res.status(500).send(err.message))
}
const updateBookByID = (req, res) => {
    const book = req.body
    const {book_id} = req.params
    Books.findByIdAndUpdate(book_id, book)
    .then((book) => {
        if(!book){
            res.status(404)
        }else{
            res.status(200)
        }
    })
    .catch((err) => res.status(500).send(err.message))
}
const delBookById = (req, res) => {
    const {book_id} = req.params
    Books.findByIdAndDelete(book_id)
        .then((book) => {
            if(!book){
                res.status(404).send("Пользователь ней найден")
            }else{
                res.status(200)
            }
        })
        .catch((err) => res.status(500).send(err.message))
}

module.exports = {getAllBooks, createBook, getBookById, updateBookByID, delBookById}