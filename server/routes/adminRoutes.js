const express = require('express')
const { index, create, update, remove, list } = require('../controllers/Admin/productController')
const { createProductValidation } = require('../requests/Admin/Product/create')
const { updateProductValidation } = require('../requests/Admin/Product/update')

const adminRouter = express.Router()

adminRouter.get('/products/', list)
adminRouter.get('/product/', index)
adminRouter.post('/product/create', createProductValidation(), create)
adminRouter.put('/product/update', updateProductValidation(), update)
adminRouter.delete('/product/delete', remove)


module.exports = adminRouter