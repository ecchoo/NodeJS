const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')
const { ROLES } = require("../constants/roles")
const { getUserById } = require('../repositories/userRepository')

exports.admin = async (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    console.log(token)
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await getUserById(decoded.id)

        if(user.role != ROLES.ADMIN){
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Forbidden' })
        }

        next()
    } catch (error) {
        return res.status(StatusCodes.FORBIDDEN).json({ error: 'Forbidden' })
    }
}