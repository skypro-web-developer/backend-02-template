const User = require("../models/userModels")

const getUsers = (req, res) => {
    User.find({})
    .then((user) => {res.status(200).send(user)})
    .catch((err)=> {
    res.status(404).send(err.message)
    res.status(500).send(err.message);
    })
}
const addUsers = (req, res) => {
    const data = req.body
    User.create(data)
    .then((user)=> {res.status(201).send(user)})
    .catch((err)=> {
    res.status(404).send(err.message)
	res.status(500).send(err.message);
    })
}
const delUser = (req, res) => {
    const {user_id} = req.params
    User.findByIdAndDelete(user_id)
    .then((user)=> {
        if (!user) {
            res.status(404);
          } else {
            res.status(200).send(user);
          }
    })
    .catch((err)=> res.status(500).send(err.message))
}
const getUser = (req, res) => {
    const {user_id} = req.params
    User.findById(user_id)
    .then((user)=> {
        if (!user) {
            res.status(404);
          } else {
            res.status(200).send(user);
          }
        })
    .catch((err)=> res.status(500).send(err.message))
}

const updateUser = (req, res) => {
    const data = req.body
    const {user_id} = req.params
    User.findByIdAndUpdate(user_id, data)
    .then((user)=> {
        if (!user) {
            res.status(404);
          } else {
            res.status(200).send(user);
          }
        })
    .catch((err)=> res.status(500).send(err.message))
}

module.exports = {getUsers, addUsers, delUser, getUser, updateUser}