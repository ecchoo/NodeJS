const { Address } = require('../models')

exports.createUserAddress = async ({
    userId,
    city,
    street,
    numberHouse,
    building,
    structure,
    fraction,
    numberApartament
}) => {
    return await Address.create({
        userId,
        city,
        street,
        numberHouse,
        building,
        structure,
        fraction,
        numberApartament
    })
}

exports.updateUserAddress = async ({
    addressId,
    city,
    street,
    numberHouse,
    building,
    structure,
    fraction,
    numberApartament
}) => {
    return await Address.update({
        city,
        street,
        numberHouse,
        building,
        structure,
        fraction,
        numberApartament
    }, {
        where: {
            id: addressId
        }
    })
}