const Post = require("../models/Post")

const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        return res.status(500).json("did not create post", {error: error.message})
    }
}
//GET ALL POST

const getPosts = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username})
        } else if(catName) {
            posts = await Post.find({categories: {
                $in:[catName]
            }})
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json("Could not find posts", {error: error.message})
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params
        //use post model
        const post = await Post.findById(id)
        if(post) {
            return res.status(200).json(post)
        } else if (!post) {
            return  res.status(404).json({ error: " post by this ID not found"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        //use post model
        Post.findByIdAndUpdate(id, req.body, {new: true}, (err, post) => {
            if (err) {
                return res.status(500).json({ error: err.message });
              }
              if (!post) {
                return res.status(404).json({ message: "post not found" });
              }
              res.status(200).json(post);
        });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        //use post model
        Post.findByIdAndDelete( id, (err, Post) => {
            if(err) {
                return res.status(500).json({error: err.message})
            }
            if(!Post) {
                return res.status(404).json({ error: `user post ${id} not found`})
            }
            res.status(200).json(`post id ${id} successfully deleted`)
            
        })
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    getPostById,
    deletePost,

  }