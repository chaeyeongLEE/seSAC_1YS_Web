module.exports = ( Sequelize, DataTypes ) => {
    return Sequelize.define( 
        'user',
        {
            id : { 
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { 
                type: DataTypes.STRING(10),
                allowNull: false,
            }, 
            pw: { 
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        {
            tableName: 'user',
            freezeTableName: true, 
            timestamps: false,
        }
    );
} 