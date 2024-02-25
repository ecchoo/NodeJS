const { Basket } = require('../models')

exports.checkProductInBasket = async (userId, productId) => {
    const product = await Basket.findOne({ where: { productId, userId } })
    
    return product != null
}

exports.addProductToBasket = async (userId, productId, count) => {
    return await Basket.create({ userId, productId, count })
}

exports.changeCountProductBasket = async (userId, productId, value) => {
    const result = await Basket.increment('count', { by: value, where: { productId, userId } });
    const [changedRows] = result;
    const changedRow = changedRows[0][0];
    
    return changedRow
}

exports.removeProductBasket = async (userId, productId) => {
    return await Basket.destroy({ where: { userId, productId } })
}