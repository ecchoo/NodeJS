const { createUser, getUserByEmail } = require("../repositories/userRepository")
const { ROLES } = require('../constants/roles')
const bcrypt = require('bcrypt')

exports.registerUser = async ({ name, password, email }) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    return await createUser({
        name: name,
        password: hashedPassword,
        email: email,
        role: ROLES.USER
    })
}

exports.loginUser = async ({ password, email }) => {
    const user = await getUserByEmail(email)
    console.log(user)
    const isCorrectPassword = bcrypt.compare(password, user.password)

    if(isCorrectPassword){
        return user
    }

    return null
}