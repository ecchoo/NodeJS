const { body } = require("express-validator");

exports.loginValidation = () => {
    return [
        body('email').isEmail().withMessage('Invalid email'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}$/)
            .withMessage('Password must contain at least one digit, one uppercase and one lowercase letter'),
    ];
};