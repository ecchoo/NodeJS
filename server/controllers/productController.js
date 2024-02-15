const { getAllProducts } = require('../repositories/productRepository')

exports.index = async (req, res) => {
    try {
        const category = req.query.category
        const filteredProducts = await getAllProducts(category)

        res.json(filteredProducts)
    } catch (err) {
        res.json(err)
    }
}