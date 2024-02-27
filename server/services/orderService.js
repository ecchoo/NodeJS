const { removeProductBasket } = require('../repositories/basketRepository')
const { createDelivery } = require('../repositories/deliveryRepository')
const { getUserById } = require('../repositories/userRepository')

exports.placeOrder = async (userId) => {
    const user = await getUserById(userId)

    const basketProducts = await user.getBasketProducts()

    for (const product of basketProducts) {
        const deliveryDate = new Date()
        deliveryDate.setMinutes(deliveryDate.getMinutes() + 30)
        console.log(deliveryDate)
        await createDelivery({
            productId: product.Basket.productId,
            userId: product.Basket.userId,
            count: product.Basket.count,
            deliveryDate: deliveryDate
        })

        await removeProductBasket(product.Basket.userId, product.Basket.productId)
    }

    return true
}
