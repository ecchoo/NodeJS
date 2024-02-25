const { Delivery, User } = require('../models')
const { getUserById } = require("../repositories/userRepository")

exports.getUserInfo = async (userId) => {
    const user = await getUserById(userId)
    const address = await user.getAddress()
    const deliveries = await user.getDeliveryProducts();

    const transformedDeliveries = deliveries.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        photo: product.photo,
        composition: product.composition,
        count: product.Delivery.count,
        deliveryDate: product.Delivery.deliveryDate,
        category: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
    }));


    return { ...user.dataValues, address, deliveries: transformedDeliveries }
}