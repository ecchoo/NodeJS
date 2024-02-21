const { User } = require('../models')

exports.getUserByEmail = async (email) => {
    return await User.findOne({ where: { email: email } })
}

exports.createUser = async ({ name, password, email, role }) => {
    return await User.create({
        name: name,
        email: email,
        password: password,
        role: role
    })
}