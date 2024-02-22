const { User } = require('../models')

exports.getUserByEmail = async (email) => {
    return await User.findOne({ where: { email: email } })
}

exports.getUserById = async (userId) => {
    return await User.findOne({ where: { id: userId } })
}

exports.createUser = async ({ name, password, email, role }) => {
    return await User.create({
        name: name,
        email: email,
        password: password,
        role: role
    })
}

exports.updatePersonalDataUser = async ({ userId, name, email }) => {
    console.log(userId, name, email)
    return await User.update({
        name,
        email
    }, {
        where: {
            id: userId
        }
    })
}