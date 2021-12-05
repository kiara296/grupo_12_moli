module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        /* price: ,
        discount: ,
        description:
        image:
        alt:
        category
        ingredients
        cooking
        infoNutricional */
    };

    let config = {
        tableName: 'product',
        timestamps: false
    };
    
    const Producto = sequelize.define();

    return Producto;
}