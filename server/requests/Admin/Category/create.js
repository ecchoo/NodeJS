const { body } = require("express-validator")

exports.createCategoryValidation = () => {
    return [
        body('name').notEmpty().withMessage('Name is required')
    ]
}