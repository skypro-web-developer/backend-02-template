const http = require('http');
const getUsers = require('./modules/users');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader('Content-type', 'text/plain');
        response.write('Hello, world');
        response.end();

        return;
    }

    if (request.url === '/?users') {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader('Content-type', 'application/json');
        response.write(getUsers());
        response.end();

        return;
    }

    if (request.url.includes('/?hello=')) {
        const urlParams = new URLSearchParams(request.url);

        urlParams.set('?hello', request.url.split('=')[1]);

        const name = urlParams.get('?hello');

        if (Boolean(name)) {
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.setHeader('Content-type', 'text/plain');
            response.write(`Hello, ${name}`);
            response.end();

            return;
        }

        response.statusCode = 400;
        response.setHeader('Content-type', 'text/plain');
        response.write('Enter a name');
        response.end();

        return;
    }

    response.statusCode = 500;
    response.end();
});

server.listen(3003, '127.0.0.1', () => {
    console.log('Сервер запущен по адресу: http://127.0.0.1:3003');
});