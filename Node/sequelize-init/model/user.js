const user = (Sequelize, DataTypes ) => {
    return Sequelize.define(
        "user", 
        {
            id: {  
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            name : { 
                type: DataTypes.STRING(5),
                allowNull: false 
            },
            pw : { 
                type: DataTypes.STRING(20),
                allowNull: false
            }    
        },
        {
            tableName: "user", 
            freezeTableName: true, 
            timestamps: false // default 값은 true createAt modifyAt (데이터가 생성되거나 수정될때마다 타임스템프를 찍어서 수정하려함)
            //위는 복수형태로 바꾸지않고 그대로 사용하겠다는 모델옵션 정의
            // collate, charset : "UTF-8" 
        }
        );
    }
    
    module.exports = user;