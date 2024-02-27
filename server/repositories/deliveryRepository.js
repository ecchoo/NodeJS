const { Delivery } = require('../models')

exports.createDelivery = async (delivery) => {
    return await Delivery.create(delivery)
}