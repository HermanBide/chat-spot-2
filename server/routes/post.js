const postController = require("../controllers/Post")
const { Router } = require("express");


const postRouter = new Router();

postRouter.post('/posts', postController.createPost)
postRouter.get('/', postController.getPosts)
postRouter.get('/posts/:id', postController.getPostById)
postRouter.put('/posts/:id', postController.updatePost)
postRouter.delete('/posts/:id', postController.deletePost)


module.exports = postRouter;

