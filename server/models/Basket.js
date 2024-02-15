const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Basket extends Model {
        static associate(models) {
        }
    }

    Basket.init({
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        count: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Basket',
        timestamps: true,
        tableName: 'Basket'
    });

    return Basket;
};