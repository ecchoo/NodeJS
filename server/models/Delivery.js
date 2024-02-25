const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Delivery extends Model {
        static associate(models) {
        }
    }

    Delivery.init({
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        count: DataTypes.INTEGER,
        deliveryDate: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Delivery',
        timestamps: true,
        tableName: 'Delivery'
    });

    return Delivery;
};