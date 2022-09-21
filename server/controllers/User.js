const User = require("../models/User")
const { comparePasswords, createUserInfo, hashPassword, createToken } = require('../utils')

const register = async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashPassword(req.body.password)
        } 
        const user = await User.create(newUser);
        const userInfo = createUserInfo(user);
        const token = createToken(userInfo);
        return res.status(201).json({user: userInfo, token})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const login = async (req, res) => {
    try {
        //deconstruct the use value 
        const [user] = await User.find({username: req.body.username})
        if(!user) {
            return res.status(500).json({message: "Username does not match try Again"})
        }
        if (comparePasswords(req.body.password, user.password)){
            const userInfo = createUserInfo(user);
            const token = createToken(userInfo)
            return res.status(200).json({ user: userInfo, token })
        } else {
            return res.status(401).json({message: "Wrong password ⛔️"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const verifyUser = async (req, res) => {
    try {
        const userInfo = createUserInfo(res.locals.user)
        return res.status(200).json({ user: userInfo })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};


const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).send('User with the specified Id does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!user) {
                res.status(500).send('User not found!');
            }
            return res.status(200).json('User has been updated',user);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    register,
    login,
    verifyUser,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}