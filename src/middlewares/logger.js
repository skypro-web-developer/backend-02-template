const logger = (request, response, next) => {
  console.log(`Request to: ${request.originalUrl}`);
  next();
};

module.exports = logger;
