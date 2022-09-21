const { Router } = require("express");
const postRouter = require("./post");
const catRouter = require("./category")
const userRouter = require("./user")
const apiRouter = new Router();


apiRouter.use("/auth", userRouter);
apiRouter.use("/posts", postRouter);
apiRouter.use("/cat", catRouter);

module.exports = apiRouter