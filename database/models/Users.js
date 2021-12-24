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
    
    let Users = sequelize.define(alias, columns, config);

    Users.associate= function(models){
    User.belongsToMany (models.Category, {
        as: 'categoryusers',
        foreingKey: 'user_id',
        timestamps: false
        });

    } 

    return Users;
}