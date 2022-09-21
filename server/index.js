const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const api = require("./routes/index")
const postRoute = require("./routes/post")
// const userRoute = require("./routes/user")
// const postRoute = require("./routes/post")
const multer = require("multer")
require("./db/index")

const PORT = process.env.PORT || 3002;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, "images")
  }, 
  
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({storage})
app.post('/api/upload', upload.single("file"),(req,res) => {
  res.status(200).json("file has been uploaded")
});
 
app.use("/api", api);
app.use("api/posts", postRoute)
// app.use("/api/user", userRoute);
// app.use("/api/user", userRoute);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Express root route working!" });
  });
  
  app.listen(PORT, () => console.log(`You are listening to the port ${PORT}`));
