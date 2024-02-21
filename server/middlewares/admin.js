const { StatusCodes } = require("http-status-codes")
const { ROLES } = require("../constants/roles")

exports.authenticateUser = async (req, res, next) => {
    if (!req.session.user || req.session.user.role !== ROLES.ADMIN) {
        return res.status(StatusCodes.FORBIDDEN).json({ error: 'Access forbidden' })
    } 

    next()
}