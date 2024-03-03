const path = require("path")
const fs = require("fs")

const getUsers = () => {
    const watToData = path.join(__dirname,  "../data/users.json")
    return fs.readFileSync(watToData)
}

module.exports = getUsers