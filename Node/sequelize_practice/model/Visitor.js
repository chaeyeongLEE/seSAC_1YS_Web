module.exports = ( Sequelize, DataTypes ) => {
    
    return Sequelize.define( 
        'visitor',
        {
            id : { 
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { 
                type: DataTypes.STRING(10),
                allowNull: false,
            }, 
            comment: { 
                type: DataTypes.TEXT('medium')
            }
        },
        {
            tableName: 'visitor',
            freezeTableName: true, 
            timestamps: false,
        }
    );
} 