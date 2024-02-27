const { StatusCodes } = require("http-status-codes")
const { placeOrder } = require("../services/orderService")
const { getBasket } = require("../services/basketService")

exports.create = async (req, res) => {
    try {
        await placeOrder(req.userId)
        const basket = getBasket(req.userId)

        res.status(StatusCodes.OK).json(basket)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}