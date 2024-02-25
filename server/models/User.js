const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsToMany(models.Product, { 
                through: 'Basket', 
                as: 'BasketProducts', 
                foreignKey: 'userId', 
                otherKey: 'productId' 
            });
            User.belongsToMany(models.Product, { 
                through: 'Delivery', 
                as: 'DeliveryProducts', 
                foreignKey: 'userId', 
                otherKey: 'productId' 
            });
            User.hasOne(models.Address, { foreignKey: 'userId' })
        }
    }

    User.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        timestamps: true,
        tableName: 'Users'
    });

    return User;
};