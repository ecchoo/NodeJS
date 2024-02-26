const { body } = require("express-validator")

exports.updateAddressValidation = () => {
    return [
        body('id').notEmpty().isInt().withMessage('Address id value must be an integer'),
        body('city').notEmpty().withMessage('City is required'),
        body('street').notEmpty().withMessage('Street is required'),
        body('numberHouse').notEmpty().withMessage('Number house is required'),
        body('building').optional().custom(value => value === null || validator.isInt(value)).withMessage('Building value must be an integer'),
        body('structure').optional().custom(value => value === null || validator.isInt(value)).withMessage('Structure value must be an integer'),
        body('fraction').optional().custom(value => value === null || validator.isInt(value)).withMessage('Fraction value must be an integer'),
        body('numberApartament').optional().custom(value => value === null || validator.isInt(value)).withMessage('Number apartament value must be an integer'),
    ]
}