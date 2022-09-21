// const router = require("express").Router()
const { Router } = require("express");
const catController  = require("../controllers/Category")

const catRouter = new Router();

catRouter.post('/', catController.createCat)
catRouter.get('/', catController.getCat)

module.exports = catRouter