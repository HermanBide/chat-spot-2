const Category = require("../models/Category")

const createCat = async (req, res) => {
    try {
        const newCat = new Category(req.body)
        const savedCat = await newCat.save()
        res.status(201).json(savedCat);
    } catch (error) {
        res.status(500).json(error);
    }
}
//GET ALL POST

const getCat = async (req, res) => {
    try {
        const cats = await Category.find()
        res.status(201).json(cats);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

module.exports = {
    getCat,
    createCat
  }