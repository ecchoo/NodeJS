const { StatusCodes } = require("http-status-codes")

exports.guestUser = async (req, res, next) => {
    if (req.session.user) {
        return res.status(StatusCodes.FORBIDDEN).json({ error: 'Access forbidden' })
    } 

    next()
}