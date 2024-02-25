const { checkProductInBasket, changeCountProductBasket, addProductToBasket } = require("../repositories/basketRepository")
const { getUserById } = require("../repositories/userRepository")

exports.getBasket = async (userId) => {
    const user = await getUserById(userId)
    const productsBasket = await user.getBasketProducts()

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

exports.addToBasket = async (userId, productId, count) => {
    const isExistingProduct = await checkProductInBasket(userId, productId)

    if (!isExistingProduct) {
        return await addProductToBasket(userId, productId, count)
    }

    return await changeCountProductBasket(userId, productId, 1)
}