const { request, response } = require("express");

const logger = (request, response, next) => {
  console.log(`Запрос пришел по адресу: ${request.originalUrl}`);
  next();
};

module.exports = logger;
