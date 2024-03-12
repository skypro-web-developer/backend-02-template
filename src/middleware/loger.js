const logerUrl = (req, res, next) => {
     console.log(`Запрос на адрес${req.originalUrl}`);
    next()
}

module.exports = logerUrl;