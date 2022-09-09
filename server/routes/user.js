const { Router } = require("express");
const userController = require("../controllers/User");
// const Post = require("../models/Post");
// const User = require("../models/User");
const { restrictAccess } = require("../utils/index");
// const User = require("../models/User")
// const bcrypt = require("bcrypt");

const userRouter = new Router();
// userRouter.put("/:id"),
//   async (req, res) => {
//     if (req.body.userId === req.params.id) {
//       if (req.body.password) {
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//       }
//       try {
//         const updatedUser = await findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedUser);
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     } else {
//       res.status(401).json("You can update only your account!");
//     }
//   };

// userRouter.delete("/:id"),
//   async (req, res) => {
//     if (req.body.userId === req.params.id) {
//       try {
            // await Post.deleteMany({username: user.username})
//         const user = await User.findById(req.params.id);
//         try {

//           await User.findByIdAndDelete(req.params.id);
//           res.status(200).json("User has been Deleted...");
//         } catch (error) {
//           res.status(500).json(error);
//         }
//       } catch (error) {
//         res.status(404).json("User not found ");
//       }
//     } else {
//       res.status(401).json("YOu can delete only your account");
//     }
//   };

userRouter.post('/newUser', userController.createUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/users/:id', userController.getUserById)
userRouter.put('/users/:id', userController.updateUser)
userRouter.delete('/users/:id', userController.deleteUser)

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/verify", restrictAccess, userController.verifyUser);

module.exports = userRouter;
