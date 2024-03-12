const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const userRouter = require("./routers/userRouter")

const {port = 3005, url = "127.0.0.1"} = process.env

mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => console.log("Подключение к БД"))
.catch((err) => console.log(err.message))


app.use(userRouter)
app.use(bodyParser.json())
app.listen(port, () => console.log(`Сервер запущен на ${url}:${port}`))
