const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

dotenv.config();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

const app = express();

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () =>
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
);
