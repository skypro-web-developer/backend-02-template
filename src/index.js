const express = require("express")
const app = express()
const userRouter = require("./routers/userRouter")

const {port = 3005, url = "127.0.0.1"} = process.env

app.use(userRouter)
app.listen(port, () => console.log(`Сервер запущен на ${url}:${port}`))
