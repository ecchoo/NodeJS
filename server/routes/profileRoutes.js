const express = require('express')
const { authenticateUser } = require('../middlewares/auth')
const { updateAddress, index, createAddress, updatePersonalData } = require('../controllers/profileController')
const { updateAddressValidation, createAddressValidation, updatePersonalDataValidation } = require('../requests/profile')

const basketRouter = express.Router()

basketRouter.use(authenticateUser)

basketRouter.get('/', index)
basketRouter.post('/createAddress', createAddressValidation(), createAddress)
basketRouter.put('/updateAddress', updateAddressValidation(), updateAddress)
basketRouter.put('/updatePersonalData', updatePersonalDataValidation(), updatePersonalData)

module.exports = basketRouter