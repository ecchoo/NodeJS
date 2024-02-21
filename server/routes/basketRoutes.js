const express = require('express')
const { index, store, update, remove } = require('../controllers/basketContoller')
const { authenticateUser } = require('../middlewares/auth')

const basketRouter = express.Router()

basketRouter.use(authenticateUser)

basketRouter.get('/', index)
basketRouter.post('/add', store)
basketRouter.put('/updateCount', update)
basketRouter.delete('/delete', remove)


module.exports = basketRouter