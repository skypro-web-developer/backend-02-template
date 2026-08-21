const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 3003;

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${HOST}`);
    const searchParams = url.searchParams;

    // Если параметров нет
    if (searchParams.size === 0) {
        response.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
        });

        response.end('Hello, World!');
        return;
    }

    // ?hello=<name>
    if (searchParams.size === 1 && searchParams.has('hello')) {
        const name = searchParams.get('hello');

        if (!name) {
            response.writeHead(400, {
                'Content-Type': 'text/plain; charset=utf-8',
            });

            response.end('Enter a name');
            return;
        }

        response.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
        });

        response.end(`Hello, ${name}.`);
        return;
    }

    // ?users
    if (
        searchParams.size === 1 &&
        searchParams.has('users') &&
        searchParams.get('users') === ''
    ) {
        const usersPath = path.join(__dirname, 'data', 'users.json');

        fs.readFile(usersPath, 'utf8', (error, data) => {
            if (error) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8',
                });

                response.end();
                return;
            }

            response.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
            });

            response.end(data);
        });

        return;
    }

    // Все остальные параметры
    response.writeHead(500, {
        'Content-Type': 'text/plain; charset=utf-8',
    });

    response.end();
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});