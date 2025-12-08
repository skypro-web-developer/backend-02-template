const http = require('http');
const getUsers = require("./modules/users");
const PORT = 3001;

const server = http.createServer((request, response) => {

    response.header = "Content-Type: text/plain";

    try {
        const baseURL = `http://127.0.0.1:${PORT}`;
        const url = new URL(request.url, baseURL);
        const path = url.pathname;
        const searchParams = url.searchParams;
        
        if (path === '/hello') {
            const name = searchParams.get('name'); 

            if (name) {
                response.status = 200;
                response.statusMessage ="OK";
                response.header = "Content-Type: text/plain";
                response.write(`Hello, ${name}.`);
                response.end();
            } else {
                response.status = 400;
                response.statusMessage ="Bad Request";
                response.header = "Content-Type: text/plain";
                response.write("Enter a name");
                response.end();
            }
            return;
        }

        if (path === "/users") {
            response.status = 200;
            response.statusMessage ="OK";
            response.header = "Content-Type: application/json";
            response.write(getUsers());
            response.end();
            return;
        }

        if (path === '/' && searchParams.size === 0) {
            response.status = 200;
            response.statusMessage ="OK";
            response.header = "Content-Type: text/plain";
            response.write("Hello, World!");
            response.end();
            return;
        }

        response.status = 500;
        response.end(); 
        return;

    } catch (error) {
        response.status = 500;
        response.end();
        console.error("Request error:", error);
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://127.0.0.1:${PORT}`);
});

