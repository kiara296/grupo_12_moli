module.exports = (sequelize, dataTypes) => {
let alias = 'Users';

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
        lastname:{
            type: dataTypes.STRING,
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER,

        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
    };

    let config = {
        tableName: 'user',
        timestamps: false
    };
    
    let User = sequelize.define(alias, columns, config);

    User.associate= function(models){
    User.belongsToMany (models.Category, {
        as: 'categoryuser',
        foreingKey: 'user_id',
        timestamps: false
        });

    } 

    return User;
}