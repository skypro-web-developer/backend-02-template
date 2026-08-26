const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users.routes");
const booksRoutes = require("./routes/books.routes");

const logger = require("./middlewares/logger.middleware");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/error.middleware");

const app = express();

app.use(
  cors({
    origin: /^http:\/\/localhost(:\d+)?$/,
  })
);

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Library API is running",
  });
});

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;