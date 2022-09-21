const db = require ("../db/index")
const Post = require("../models/Post")
const User = require("../models/User")

const main = async () => {
    const herm = await User.find({ username: "herm"})
    const posts = [
        {
            title: "testing",
            description: "testing to make sure i am able to see my posts",
            userId: herm._id

        },
        {
            title: "testing again",
            description: "I wish i could do real world testing on the job",
            userId: herm._id

        },
    ];
    await Post.deleteMany()
    await Post.insertMany(posts);
    console.log("new post created", posts)
}
const run = async () => {
    await main();
    db.close();
}
run();