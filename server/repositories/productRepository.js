const { Product } = require('../models')

exports.getAllProducts = async (category) => {
    let whereClause = {};
    if (category) {
        whereClause.category = category;
    }

    const products = await Product.findAll({
        where: whereClause
    });

    return products;
}