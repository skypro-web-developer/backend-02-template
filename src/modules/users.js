const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const getUsers = () => {
    return fs.readFileSync(usersFilePath);
};

module.exports = getUsers;