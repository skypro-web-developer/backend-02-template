const { request, response } = require("express");
const Book = require("../models/book");

const getBooks = (request, response) => {
  response.statusCode = 200;
  response.send("There will be books");
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  response.statusCode = 200;
  response.send(`Book with ID ${book_id}`);
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
