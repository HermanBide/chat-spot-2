const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const api = require("./routes/index")
const userRoute = require("./routes/user")
require("./db/index")

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api", api);
app.use("/api/user", userRoute);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Express root route working!" });
  });
  
  app.listen(PORT, () => console.log(`You are listening to the port ${PORT}`));
