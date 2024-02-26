const { body } = require("express-validator")

exports.updatePersonalDataValidation = () => {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email is invalid'),
    ]
}