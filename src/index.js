const http = require("http");
const url = require("node:url");
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, "http://127.0.0.1");
  const query = myURL.searchParams;

  if (query.has("users")) {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "application/json");
    res.write = getUsers();
    res.end(getUsers());
    return;
  } else if (query.has("hello")) {
    if (query.get("hello")) {
      const name = query.get("hello");
      res.res.statusCode = 200;
      res.statusMessage = "OK";
      res.setHeader("Content-Type", "text/plain");
      res.write = getUsers();
      res.end(`Hello, ${name}`);
      return;
    } else {
      res.statusCode = 400;
      res.statusMessage = "OK";
      res.setHeader("Content-Type", "text/plain");
      res.write = getUsers();
      res.end("Enter a name");
      return;
    }
  } else if (myURL.pathname === "/favicon.ico") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "image/x-icon");
    res.write = "favicon.ico";
    res.end("favicon.ico");
    return;
  } else if (
    !query.has("users") ||
    !query.has("Hello") ||
    !query.has("hello") ||
    myURL.pathname !== "/favicon.ico"
  ) {
    res.statusCode = 500;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "text/plain");
    res.write = "";
    res.end(null);
    return;
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello, World!");
    res.end("Hello World\n");
  }
});

server.listen(port, hostname, () => {
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
