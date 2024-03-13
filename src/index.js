// const http = require('http');

// const server = http.createServer((request, response) => {

//     // Написать обработчик запроса:
//     // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
//     // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
//     // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
//     // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
//     // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500

// });

const http = require("http");
const hostname = "127.0.0.1";
const port = 3003;
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  const ipAddress = "http://127.0.0.1";
  const url = new URL(request.url, ipAddress);
  const userName = url.searchParams.get("hello");
  if (userName) {
    response.status = 200;
    response.statusMessage = "ok";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello, ${userName}`);
    response.end();
    return;
  }
  switch (request.url) {
    case "/users":
      response.status = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "application/json");
      response.write(getUsers());
      response.end();
      break;

    case "/?hello":
      response.status = 400;
      response.statusMessage = "Bad Request";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Enter a name`);
      response.end();
      break;

    case "/":
      response.status = 200;
      response.statusMessage = "OK";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Hello, world`);
      response.end();
      break;

    default:
      response.status = 500;
      response.statusMessage = "Server Error";
      response.setHeader("Content-Type", "text/plain");
      response.write(""
        //"error500"
        );
      response.end();
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
