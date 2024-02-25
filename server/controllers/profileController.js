const { validationResult } = require("express-validator")
const { updateUserAddress, createUserAddress } = require("../repositories/addressRepository")
const { getUserById, updatePersonalDataUser } = require("../repositories/userRepository")
const { StatusCodes } = require("http-status-codes")
const { getUserInfo } = require("../services/profileService")

exports.index = async (req, res) => {
    try {
        const user = await getUserInfo(req.userId)

        res.status(StatusCodes.OK).json(user)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.createAddress = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const {
            city,
            street,
            numberHouse,
            building,
            structure,
            fraction,
            numberApartament
        } = req.body

        const createdAddress = await createUserAddress({
            userId: req.userId,
            city,
            street,
            numberHouse,
            building,
            structure,
            fraction,
            numberApartament
        })

        res.status(StatusCodes.CREATED).json(createdAddress)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.updateAddress = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const {
            id,
            city,
            street,
            numberHouse,
            building,
            structure,
            fraction,
            numberApartament
        } = req.body

        const updatedAddress = await updateUserAddress({
            addressId: id,
            city,
            street,
            numberHouse,
            building,
            structure,
            fraction,
            numberApartament
        })

        res.status(StatusCodes.OK).json(updatedAddress)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.updatePersonalData = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if(!errorsValidation.isEmpty()){
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const { name, email } = req.body
        const updatedUser = await updatePersonalDataUser({
            userId: req.userId, 
            name, 
            email
        })

        res.status(StatusCodes.OK).json(updatedUser)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}