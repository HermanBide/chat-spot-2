const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongoDB."))
  .catch((e) => console.error("MongoDB Connection Error: ", e.message));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
