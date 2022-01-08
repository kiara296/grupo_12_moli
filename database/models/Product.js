
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
        ingredients: {
            type: dataTypes.STRING,
        },
        cooking: {
            type: dataTypes.STRING,
        },
        nutritional_info: {
            type: dataTypes.STRING,
        },
    };

    let config = {
        tableName: 'product',
        timestamps: false
    };
    
    const Product = sequelize.define(alias, columns, config);

    Product.associate = function (models) {
        Product.belongsTo(models.CategoryProduct, { 
            as: "product_category",
            foreignKey: "categoryProduct_id"
        });
        Product.belongsToMany(models.Transaction, {
            as: 'transaction',
            through: 'product_transaction',
            foreignKey: 'transaction_id',
            otherKey: 'product_id', 
            timestamps: false
        });
    }

    return Product;
}