const { Product } = require('../models')

exports.getAllProducts = async () => {
    const products = await Product.findAll({
        order: [['createdAt', 'DESC']]
    })

    return products
}

exports.getProductById = async (id) => {
    return await Product.findOne({ where: { id } })
}

exports.getProductsByCategory = async (category) => {
    return await Product.findAll({
        where: {
            category
        }
    });
}

exports.createProduct = async (product) => {
    return await Product.create(product)
}

exports.updateProduct = async (product) => {
    return await Product.update({
        ...product
    }, {
        where: {
            id: product.id
        }
    })
}

exports.deleteProduct = async (productId) => {
    return await Product.destroy({ where: { id: productId } })
}