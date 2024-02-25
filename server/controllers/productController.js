const { getProductsByCategory } = require('../repositories/productRepository')

exports.index = async (req, res) => {
    try {
        const category = req.query.category
        console.log(category)
        const filteredProducts = await getProductsByCategory(category)

        res.json(filteredProducts)
    } catch (err) {
        res.json(err)
    }
}