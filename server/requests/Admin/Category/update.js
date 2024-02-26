const { body } = require("express-validator")

exports.updateCategoryValidation = () => {
    return [
        body('name').notEmpty().withMessage('Name is required')
    ]
}