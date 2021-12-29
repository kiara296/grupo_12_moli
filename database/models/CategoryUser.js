module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryUsers';

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
        tableName: 'categoryuser',
        timestamps: false
    };
    
    const CategoryUser = sequelize.define(alias, columns, config);
    
   
 CategoryUser.associate = models => {
        CategoryUser.hasMany (models.Users, 
        {
        as: 'users',
        foreingKey: 'category_id'
        })
    };

    return CategoryUser;
}
