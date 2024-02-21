const express = require('express')
const { login, register, logout } = require('../controllers/authController')
const { registerValidation, loginValidation } = require('../requests/auth')
const { guestUser } = require('../middlewares/guest')
const { authenticateUser } = require('../middlewares/auth')


const authRouter = express.Router()

authRouter.post('/register', guestUser, registerValidation(), register)
authRouter.post('/login', guestUser, loginValidation(), login)
authRouter.post('/logout', authenticateUser, logout)


module.exports = authRouter