const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            Address.belongsTo(models.User, { foreignKey: 'userId' });
        }
    }

    Address.init({
        city: DataTypes.STRING,
        street: DataTypes.STRING,
        numberHouse: DataTypes.INTEGER,
        building: DataTypes.INTEGER,
        structure: DataTypes.INTEGER,
        fraction: DataTypes.INTEGER,
        numberApartament: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Address',
        timestamps: true,
        tableName: 'Addresses'
    });

    return Address;
};