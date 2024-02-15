const { getBasketByUserId, changeCountProductBasket, removeProductBasket } = require('../repositories/basketRepository');
const { addToBasket } = require('../services/basketService');

exports.index = async (req, res) => {
    const userId = req.query.userId
    const basket = await getBasketByUserId(userId)

    res.json(basket);
}

exports.store = async (req, res) => {
    const { productId, count } = req.body
    const addedProductBasket = await addToBasket(2, productId, count)

    res.json(addedProductBasket)
}

exports.update = async (req, res) => {
    const { productId, value } = req.body
    const changedProductBasket = await changeCountProductBasket(2, productId, value)

    res.json(changedProductBasket)
}

exports.remove = async (req, res) => {
    const { productId } = req.body
    const remevedProductBasket = await removeProductBasket(2, productId)

    res.json(remevedProductBasket)
}