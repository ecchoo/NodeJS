const { Basket, User } = require('../models')

exports.getBasketByUserId = async (userId) => {
    const user = await User.findOne({ where: { id: userId } })
    const productsBasket = await user.getProducts()

    const transformedBasket = productsBasket.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        photo: product.photo,
        composition: product.composition,
        category: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        count: product.Basket.count,
    }));

    return transformedBasket
}

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
    const changedRow = changedRows[0][0]; // Получаем первую измененную строку
    
    return changedRow
}

exports.removeProductBasket = async (userId, productId) => {
    return await Basket.destroy({ where: { userId, productId } })
}