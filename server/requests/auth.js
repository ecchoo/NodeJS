const { body } = require('express-validator')

exports.registerValidation = () => {
    return [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email'),
        body('password')
            .notEmpty().withMessage('Password is required')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}$/)
            .withMessage('Password must contain at least one digit, one uppercase and one lowercase letter'),
        body('passwordConfirm').notEmpty().withMessage('Password confirmation is required')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match');
                }

                return true;
            }),
    ];
};

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