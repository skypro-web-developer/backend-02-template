require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3005;
const MONGODB_URI = process.env.MONGODB_URI;

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");

    app.listen(PORT, "127.0.0.1", () => {
      console.log(`Server started at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();