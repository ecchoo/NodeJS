const { validationResult } = require("express-validator")
const { registerUser, loginUser } = require("../services/authService")
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

exports.register = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const { name, password, email } = req.body
        const user = await registerUser({ name, password, email })
        
        const payload = {
            id: user.id
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
        req.session.user = user
        console.log('User id session', req.session.user.id)
        res.status(StatusCodes.CREATED).json({...user.dataValues, token})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const { password, email } = req.body
        const user = await loginUser({ password, email })

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid data' })
        }
        const payload = {
            id: user.id
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })

        req.session.user = user
        res.status(StatusCodes.OK).json({...user.dataValues, token})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.logout = async (req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Logout successful' });
}