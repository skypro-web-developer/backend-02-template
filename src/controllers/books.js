const { request, response } = require("express");
const Book = require("../models/book");

const getBooks = (request, response) => {
  return Book.find({}).then((books) => {
    response.statusCode = 200;
    response.send(books);
  });
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id).then((book) => {
    response.statusCode = 200;
    response.send(book);
  });
};

const createBook = (request, response) => {
  return Book.create({ ...request.body }).then((book) => {
    response.statusCode = 201;
    response.send(book);
  });
};

const updateBook = (request, response) => {
  //Update book
};

const deleteBook = (request, response) => {
  //Delete book
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
