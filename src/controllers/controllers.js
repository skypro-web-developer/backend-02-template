const User = require("../models/userModels")

const getUsers = (req, res) => {
    User.find({})
    .then((user) => {res.status(200).send(user)})
}
const addUsers = (req, res) => {
    const data = req.body
    User.create(data)
    .then((user)=> {res.status(201).send(user)})
}
const delUser = (req, res) => {
    const {user_id} = req.params
    User.findByIdAndDelete(user_id)
    .then((user)=> {res.status(200).send(user)})
}
const getUser = (req, res) => {
    const {user_id} = req.params
    User.findByIdAndDelete(user_id)
    .then((user)=> {res.status(200).send(user)})
}


module.exports = {getUsers, addUsers, delUser, getUser}