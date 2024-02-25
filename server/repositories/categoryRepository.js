const { Category } = require('../models')

exports.getAllCategories = async () => {
    return await Category.findAll()
}

exports.getCategoryById = async (id) => {
    return await Category.findOne({ where: { id } })
}

exports.createCategory = async (category) => {
    return await Category.create(category)
}

exports.updateCategory = async (category) => {
    return await Category.update({
        ...category
    }, {
        where: {
            id: category.id
        }
    })
}

exports.deleteCategory = async (categoryId) => {
    return await Category.destroy({ where: { id: categoryId } })
}