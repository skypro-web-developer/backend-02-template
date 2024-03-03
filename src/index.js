const http = require("http");
const getUsers = require("./modules/users");
const port = 3003;
const hostName = "http://127.0.0.1";

const server = http.createServer((request, response) => {
    const ipAddress = "http://127.0.0.1";
    const url = new URL(request.url, ipAddress);
    const userName = url.searchParams.get("hello")

    if (userName) {
      response.statusCode = 200;
      response.statusMessage = "Ok";
      response.setHeader("Content-Type", "text/plain");
      response.write(`Hello ${userName}`);
      response.end();

      return;
    }

 switch (request.url) { 
    case "/?hello":
        response.statusCode = 400;
        response.statusMessage = "Bad request";
        response.setHeader("Content-Type", "text/plain");
        response.write("Enter a name");
        response.end();
        break;
    case "/users":
        response.statusCode = 200;
        response.statusMessage = "Ok";
        response.setHeader("Content-Type", "application/json");
        response.write(getUsers());
        response.end();
        break;
   case "/":
     response.statusCode = 200;
     response.statusMessage = "Ok";
     response.setHeader("Content-Type", "text/plain");
     response.write("Hello, World!");
     response.end();
     break;
   default:
    response.statusCode = 500;
     response.statusMessage = "Bad request";
     response.setHeader("Content-Type", "text/plain");
     response.write("Something gone wrong!");
     response.end();
     break;
 }
})    

server.listen(port, () =>
  console.log(`Server is listened on ${hostName}:${port} `)
);
