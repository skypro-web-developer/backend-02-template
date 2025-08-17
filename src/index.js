const http = require('http');
const getUsers = require('./modules/users.js');

const server = http.createServer((request, response) => {
    const url = request.url;

    if (url === '/?users') {
        try {
            response.statusCode = 200;
            response.statusMessage = "OK";
            response.header = 'Content-Type: application/json';
            response.write(getUsers());
            response.end();
        } catch (error) {
            response.statusCode = 500;
            response.statusMessage = "ERROR";
            response.end('Internal Server Error');
        }
        return;
    }

    if (url.startsWith('/?hello=')) {
        const name = url.substring('/?hello='.length); // для наглядности, можно было просто "8", позже надо попробовать с URLSearchParams
        if (name) {
            response.statusCode = 200;
            response.statusMessage = "OK";
            response.header = 'Content-Type: text/plain';
            response.end(`Hello, ${name}.`);
        } else {
            response.statusCode = 400;
            response.statusMessage = "ERROR";
            response.header = 'Content-Type: text/plain';
            response.end('Enter a name');
        }
        return;
    }

    if (url === '/') {
        response.statusCode = 200;
        response.statusMessage = "OK";
        response.header = 'Content-Type: text/plain';
        response.end('Hello, World!');
        return;
    }
    
    response.statusCode = 500;
    response.end();
});

server.listen(3003, '127.0.0.1', () => {
    console.log(`Сервер запущен по адресу http://127.0.0.1:3003`);
});