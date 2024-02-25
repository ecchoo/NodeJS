const express = require('express')

const {
    list: listProducts,
    index: indexProduct,
    create: createProduct,
    update: updateProduct,
    remove: removeProduct
} = require('../controllers/Admin/productController')
const {
    list: listCategories,
    index: indexCategory,
    create: createCategory,
    update: updateCategory,
    remove: removeCategory
} = require('../controllers/Admin/categotyController')

const { createProductValidation } = require('../requests/Admin/Product/create')
const { updateProductValidation } = require('../requests/Admin/Product/update')

const { createCategoryValidation } = require('../requests/Admin/Category/create')
const { updateCategoryValidation } = require('../requests/Admin/Category/update')

const adminRouter = express.Router()

adminRouter.get('/products/', listProducts)
adminRouter.get('/product/', indexProduct)
adminRouter.post('/product/create', createProductValidation(), createProduct)
adminRouter.put('/product/update', updateProductValidation(), updateProduct)
adminRouter.delete('/product/delete', removeProduct)

adminRouter.get('/categories/', listCategories)
adminRouter.get('/category/', indexCategory)
adminRouter.post('/category/create', createCategoryValidation(), createCategory)
adminRouter.put('/category/update', updateCategoryValidation(), updateCategory)
adminRouter.delete('/category/delete', removeCategory)

module.exports = adminRouter