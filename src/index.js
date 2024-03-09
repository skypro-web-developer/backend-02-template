const express = require("express");
const app = express();
const dotenv = require("dotenv");

const { PORT = 3000, HOST = "http://127.0.0.1" } = process.env;
dotenv.config();


app.listen(PORT, () => console.log(`Server is listening on ${HOST}:${PORT}`));
