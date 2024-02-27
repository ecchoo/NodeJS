const express = require('express')
const { create } = require('../controllers/orderController')
const { authenticateUser } = require('../middlewares/auth')

const orderRouter = express.Router()

orderRouter.use(authenticateUser)

orderRouter.post('/', create)

module.exports = orderRouter