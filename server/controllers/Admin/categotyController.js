const { StatusCodes } = require('http-status-codes')
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../../repositories/categoryRepository')
const { validationResult } = require('express-validator')

exports.list = async (req, res) => {
    try {
        const categories = await getAllCategories()

        res.status(StatusCodes.OK).json(categories)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.index = async (req, res) => {
    try {
        const category = await getCategoryById(req.query.id)

        res.status(StatusCodes.OK).json(category)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.create = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        console.log('req body', req.body)
        const { name } = req.body
        console.log('Name category', name)
        const newCategory = await createCategory({ name })

        res.status(StatusCodes.CREATED).json(newCategory)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.update = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const { id, name } = req.body

        const updatedProduct = await updateCategory({ id, name })

        res.status(StatusCodes.OK).json(updatedProduct)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.remove = async (req, res) => {
    try {
        const { categoryId } = req.body

        const removedCategory = await deleteCategory(categoryId)
        
        res.status(StatusCodes.NO_CONTENT).json(removedCategory)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}