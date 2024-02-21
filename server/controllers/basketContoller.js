const { StatusCodes } = require('http-status-codes');
const { getBasketByUserId, changeCountProductBasket, removeProductBasket } = require('../repositories/basketRepository');
const { addToBasket } = require('../services/basketService');

exports.index = async (req, res) => {
    try {
        const userId = req.userId
        const basket = await getBasketByUserId(userId)

        res.status(StatusCodes.OK).json(basket)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.store = async (req, res) => {
    try {
        const { productId, count } = req.body
        const userId = req.userId

        const addedProductBasket = await addToBasket(userId, productId, count)

        res.status(StatusCodes.CREATED).json(addedProductBasket)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }

}

exports.update = async (req, res) => {
    try {
        const { productId, value } = req.body
        const userId = req.userId

        const changedProductBasket = await changeCountProductBasket(userId, productId, value)

        res.status(StatusCodes.OK).json(changedProductBasket)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.remove = async (req, res) => {
    try {
        const { productId } = req.body
        const userId = req.userId
    
        const remevedProductBasket = await removeProductBasket(userId, productId)
    
        res.status(StatusCodes.NO_CONTENT).json(remevedProductBasket)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}