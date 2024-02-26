const express = require('express')
const { authenticateUser } = require('../middlewares/auth')
const { updateAddress, index, createAddress, updatePersonalData } = require('../controllers/profileController')

const { createAddressValidation } = require('../requests/Profile/createAddress')
const { updateAddressValidation } = require('../requests/Profile/updateAddress')
const { updatePersonalDataValidation } = require('../requests/Profile/updatePersonalData')

const basketRouter = express.Router()

basketRouter.use(authenticateUser)

basketRouter.get('/', index)
basketRouter.post('/createAddress', createAddressValidation(), createAddress)
basketRouter.put('/updateAddress', updateAddressValidation(), updateAddress)
basketRouter.put('/updatePersonalData', updatePersonalDataValidation(), updatePersonalData)

module.exports = basketRouter