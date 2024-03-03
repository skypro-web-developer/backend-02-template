const http = require('http');
const getUsers = require("./modules/users")

const server = http.createServer((request, response) => {
if(request.url === "/users"){
    response.status = 200
    response.statusMessage = "Ok"
    response.header = "Content-type: application/json"
    response.write(getUsers())
    response.end()
    return 
}

});
server.listen(3003, () => console.log("Server is listened on http://127.0.0.1:3003"));
