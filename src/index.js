const http = require("http");
const url = require("node:url");
const getUsers = require("./modules/users");

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const params = url.searchParams;
  const name = params.get("hello");

  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "ok";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
  }

  if (params.has("hello")) {
    if (name === "") {
      response.statusCode = 400;
      response.statusMessage = "Error";
      (response.setHeader = "Content-Type"), "text/plain";
      response.write("Enter a name");
      response.end();
    } else {
      response.statusCode = 200;
      response.statusMessage = "OK";
      (response.setHeader = "Content-Type"), "text/plain";
      response.write(`Hello,${name}`);
      response.end();
      return;
    }
  }

  if (request.url === "/") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    (response.setHeader = "Content-Type"), "text/plain";
    response.write("Hello world");
    response.end();

    return;
  }

  if (!params.has("hello")) {
    response.statusCode = 500;
    response.statusMessage = "not OK";
    (response.setHeader = "Content-Type"), "text/plain";
    response.end();
  }
});

server.listen(3003, () => {
  console.log("сервер успешно запущен на сервере 127.0.0.1:3003");
});
