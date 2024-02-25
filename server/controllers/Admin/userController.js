const { StatusCodes } = require("http-status-codes")
const { getAllUsers } = require("../../repositories/userRepository")

exports.list = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(StatusCodes.OK).json(users)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}