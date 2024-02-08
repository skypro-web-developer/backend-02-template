const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const logger = require("./middlewares/logger");

dotenv.config();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

const app = express();

app.use(cors());

app.use(logger);

app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () =>
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
);
