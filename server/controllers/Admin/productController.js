const { StatusCodes } = require('http-status-codes')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductById } = require('../../repositories/productRepository')
const { validationResult } = require('express-validator')

exports.list = async (req, res) => {
    try {
        const products = await getAllProducts()
        res.status(StatusCodes.OK).json(products)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.index = async (req, res) => {
    try {
        const product = await getProductById(req.query.id)
        res.status(StatusCodes.OK).json(product)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.create = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const {
            name,
            price,
            composition,
            photo,
            category
        } = req.body

        const newProduct = await createProduct({ name, price, composition, photo, category })

        res.status(StatusCodes.CREATED).json(newProduct)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.update = async (req, res) => {
    try {
        const errorsValidation = validationResult(req)
        if (!errorsValidation.isEmpty()) {
            res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: errorsValidation.array() })
        }

        const {
            id,
            name,
            price,
            composition,
            photo,
            category
        } = req.body

        const updatedProduct = await updateProduct({ id, name, price, composition, photo, category })

        res.status(StatusCodes.OK).json(updatedProduct)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}

exports.remove = async (req, res) => {
    try {
        const { productId } = req.body

        const removedProduct = await deleteProduct(productId)
        res.status(StatusCodes.NO_CONTENT).json(removedProduct)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message })
    }
}