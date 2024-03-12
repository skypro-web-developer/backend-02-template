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
    User.findById(user_id)
    .then((user)=> {res.status(200).send(user)})
}
const updateUser = (req, res) => {
    const data = req.body
    const {user_id} = req.params
    User.findByIdAndUpdate(user_id, data)
    .then((user)=> {res.status(200).send(user)})
}
const getBooksUserById = (req, res) => {
  const { user_id } = req.params;
  User.findById(user_id).then((user) => {
    res.status(200).send(user.books);
  });
};

module.exports = {getUsers, addUsers, delUser, getUser,updateUser, getBooksUserById}