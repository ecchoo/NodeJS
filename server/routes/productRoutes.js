const express = require('express')
const { index } = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('/', index)

module.exports = productRouter