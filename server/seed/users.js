const db = require ("../db/index")
const User = require("../models/User")
const { hashPassword } = require('../utils/index')

const createUsers = async () => {
    const users = [
        {
            username: "hb1234",
            email: "hb1234@smile.com",
            password: hashPassword("pass123")

        },
        {
            username: "user123",
            email: "user123@smile.com",
            password: hashPassword("pass456")

        },
    ];
    await User.deleteMany()
    await User.insertMany(users);
    console.log("new user created", users)
}


const run = async () => {
    await createUsers();
    db.close();
}
run();