const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            // define association here
        }
    }

    Category.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Category',
        timestamps: true,
        tableName: 'Categories'
    });

    return Category;
};
