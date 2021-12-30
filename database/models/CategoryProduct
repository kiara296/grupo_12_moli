module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryProduct';

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
        }
    };

    let config = {
        tableName: 'categoryproduct',
        timestamps: false
    };
    
    const CategoryProduct = sequelize.define(alias, columns, config);
    
    CategoryProduct.associate= models => {
        CategoryProduct.hasMany (models.Product, {
        as: 'product',
        foreingKey: 'categoryProduct_id'
        })
    }
    return CategoryProduct;
}