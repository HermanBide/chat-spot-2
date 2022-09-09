const { Router } = require("express");
const postRouter = require("./post");
const userRouter = require("./user")
const apiRouter = new Router();


apiRouter.use("/auth", userRouter);
apiRouter.use("/", postRouter);

module.exports = apiRouter