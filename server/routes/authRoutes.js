const express = require('express')
const { login, register, logout } = require('../controllers/authController')
const { guestUser } = require('../middlewares/guest')
const { authenticateUser } = require('../middlewares/auth')
const { registerValidation } = require('../requests/Auth/register')
const { loginValidation } = require('../requests/Auth/login')

const authRouter = express.Router()

authRouter.post('/register', guestUser, registerValidation(), register)
authRouter.post('/login', guestUser, loginValidation(), login)
authRouter.post('/logout', authenticateUser, logout)


module.exports = authRouter