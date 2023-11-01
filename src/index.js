const http = require("http");
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;

// создание сервера происходит при помощи функции createServer
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${hostname}`);
  const query = url.searchParams;
  //   console.log(url);
  //   console.log(url.searchParams);

  if (query.has("hello")) {
    // если запрос на ?hello=<name>
    const name = query.get("hello");

    if (name) {
      response.statusCode = 200;
      response.header = "Content-Type: text/plain";
      response.write(`Hello, ${name}!`);
      response.end();
      return;
    }
    response.statusCode = 400;
    response.header = "Content-Type: text/plain";
    response.write("Enter a name");
    response.end();
    return;
  }
  // если запрос для /users
  else if (request.url === "/users") {
    response.statusCode = 200;
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;

    // если никакие параметры не переданы
  } else if (url.search === "") {
    response.statusCode = 200;
    response.header = "Content-Type: text/plain";
    response.write("Hello, world !");
    response.end();
  }
  // если переданы какие-либо другие параметры
  else {
    response.statusCode = 500;
    response.end();
    return;
  }
});

// запуск сервера выполняется командой .listen
server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
