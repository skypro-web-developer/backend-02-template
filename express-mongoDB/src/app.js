const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const userBooksRouter = require('./routes/userBooks');
const notFoundHandler = require('./middlewares/notFoundHandler');
const loggerURL = require('./middlewares/loggerURL');

dotenv.config();
const {
  PORT = 3000,
  API_URL = 'http://127.0.0.1',
  MONGO_URL = 'mongodb://127.0.0.1:27017/mongo',
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Соединение с MongoDB установлено успешно');
  })
  .catch((error) => {
    console.error('Ошибка при соединении с MongoDB:', error);
  });

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send('Hello World!');
};

app.use(cors());
app.use(bodyParser.json());
app.use(loggerURL);

app.get('/', helloWorld);

app.use(userRouter);
app.use(bookRouter);
app.use(userBooksRouter);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
