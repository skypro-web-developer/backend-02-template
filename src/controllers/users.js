const { request, response } = require("express");
const User = require("../models/user");

const getUsers = (request, response) => {
  response.statusCode = 200;
  response.send("There will be users");
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.statusCode = 200;
  response.send(`User with ID ${user_id}`);
};

const createUser = (request, response) => {
  return User.create({ ...request.body }).then((user) => {
    response.statusCode = 201;
    response.send(user);
  });
};

const updateUser = (request, response) => {
  response.statusCode = 201;
  response.send(request);
};

const deleteUser = (request, response) => {
  //Delete user
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
