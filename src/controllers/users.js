const { request, response } = require("express");

const getUsers = (request, response) => {
  response.statusCode = 200;
  response.send("There will be users");
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.statusCode = 200;
  response.send(`User with ID ${user_id}`);
};

const updateUser = (request, response) => {
  response.statusCode = 201;
  response.send(request);
};

const deleteUser = (request, response) => {
  //Delete user
};

module.exports = { getUsers, getUser, updateUser, deleteUser };
