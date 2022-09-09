const { Router } = require("express");
const postController = require("../controllers/Post");

const { restrictAccess } = require("../utils");


const postRouter = Router();

postRouter.get("/posts", postController.getPosts);
postRouter.get("/post/:id", restrictAccess, postController.getPostById);
postRouter.post("/new=post", restrictAccess, postController.createPost);
postRouter.put("/update=post/:id", restrictAccess, postController.updatePost);
postRouter.delete("/post/:id", restrictAccess, postController.deletePost);

module.exports = postRouter;