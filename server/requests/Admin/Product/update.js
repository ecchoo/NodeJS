const { body } = require("express-validator");

exports.updateProductValidation = () => {
    return [
        body('id').notEmpty().isInt().withMessage('Price is required and should be a number integer'),
        body('name').notEmpty().withMessage('Name is required'),
        body('price').notEmpty().isNumeric().withMessage('Price is required and should be a number'),
        body('photo').notEmpty().isString().withMessage('Photo is required and should be a string'),
        body('composition').notEmpty().isString().withMessage('Composition is required and should be a string'),
        body('category').notEmpty().isString().withMessage('Category is required and should be a string'),
    ]
};