module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        alt: {
            type: dataTypes.STRING,
        },
        category: {
            type: dataTypes.STRING,
        },
        ingredients: {
            type: dataTypes.STRING,
        },
        cooking: {
            type: dataTypes.STRING,
        },
        infoNutricional: {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: 'product',
        timestamps: false
    };
    
    const Product = sequelize.define(alias, columns, config);

    /* Product.associate = (models) => {
        Product.belongsTo(models.CategoryProduct, {
            foreignKey: 'categoryProduct_id',
            as: 'category'
        })
    } */

    return Product;
}