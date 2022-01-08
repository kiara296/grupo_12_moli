module.exports = (sequelize, dataTypes) => {
let alias = 'User';

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

    User.associate = function(models){
        User.belongsTo(models.CategoryUser, {
            as: 'category_user',
            foreignKey: 'user_id',
        });
        User.hasMany(models.Transaction, {
                as: 'transaction',
                foreignKey: 'user_id'
        });
    } 

    return User;
}