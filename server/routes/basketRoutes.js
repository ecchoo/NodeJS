const express = require('express')
const { index, store, update, remove } = require('../controllers/basketContoller')

const basketRouter = express.Router()

basketRouter.get('/', index)
basketRouter.post('/add', store)
basketRouter.put('/updateCount', update)
basketRouter.delete('/delete', remove)


module.exports = basketRouter