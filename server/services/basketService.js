const { checkProductInBasket, changeCountProductBasket, addProductToBasket } = require("../repositories/basketRepository")

exports.addToBasket = async (userId, productId, count) => {
    const isExistingProduct = await checkProductInBasket(userId, productId)

    if (!isExistingProduct) {
        return await addProductToBasket(userId, productId, count)
    }

    return await changeCountProductBasket(userId, productId, 1)
}