const logerUrl = (request, response, next) => {
     console.log(`Запрос на адрес${request.originalUrl}`);
    next()
}

module.exports = logerUrl;
