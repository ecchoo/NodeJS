const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsToMany(models.User, { through: 'Basket', foreignKey: 'productId' });
        }
    }

    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        photo: DataTypes.STRING,
        composition: DataTypes.STRING,
        category: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
        timestamps: true,
        tableName: 'Products'
    });

    return Product;
};