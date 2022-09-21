const { Router } = require("express");
const userController = require("../controllers/User");

const userRouter = new Router();

userRouter.post('/users', userController.createUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/users/:id', userController.getUserById)
userRouter.put('/users/:id', userController.updateUser)
userRouter.delete('/users/:id', userController.deleteUser)

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/verify", userController.verifyUser);

module.exports = userRouter;
