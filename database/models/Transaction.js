module.exports = (sequelize, dataTypes) => {
    let alias = 'Transaction';
    
        let columns = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            }
        };
    
        let config = {
            tableName: 'transactions',
            timestamps: false,
            underescore: true
        };
        
        let Transaction = sequelize.define(alias, columns, config);
    
        Transaction.associate = function(models) {
            Transaction.belongsTo(models.User, {
                as: 'user',
                foreignKey: 'user_id',
            });
            Transaction.belongsToMany(models.Product, {
                    as: 'product',
                    through: 'product_transaction',
                    foreignKey: 'product_id',
                    otherKey: 'transaction_id', 
                    timestamps: false
            });
        } 
    
        return Transaction;
    }