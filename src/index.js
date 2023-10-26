const http = require("http");
// const getUsers = require('./modules/users')
const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const filePath = path.join(__dirname, "./data/users.js");
  return fs.readFileSync(filePath);
};


const hostname = "127.0.0.1";
const port = 3003;
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.status = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "application/json");
    res.write = {};
    res.end();
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("bad");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.dir(path.join(__dirname, './data/users.js'));
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});

/* 
    // Написать обработчик запроса:
    // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
    // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
    // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
    // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
    // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
*/
