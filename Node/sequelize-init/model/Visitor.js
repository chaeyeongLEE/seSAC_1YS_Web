// 실제 데이터베이스에 저장되어있는 테이블정보를 자바스크립트 언어로 정의를 해주어야 sequelize가 움직임.
// sequelize모델 정의를 위해 라이브 문법사용하기
const Visitor = (Sequelize, DataTypes ) => {
    return Sequelize.define(
        "visitor", // create table visitor ()
        {
            id: {  // id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name : { //name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,   //allowNull은 true가 dafault
            },
        
            comment : { // comment medium text
                type: DataTypes.TEXT('medium')
            }    
        },
        {
            tableName: "visitor", //select * from visitor ;
            freezeTableName: true, 
            timestamps: false // default 값은 true createAt modifyAt (데이터가 생성되거나 수정될때마다 타임스템프를 찍어서 수정하려함)
            //위는 복수형태로 바꾸지않고 그대로 사용하겠다는 모델옵션 정의
            // collate, charset : "UTF-8" 
        }
        );
        
    
}
module.exports = Visitor;

//아래의 내용들을 exports 함. 그리고 model _ index.js에서 require 받으러 가기

/**Sequelize.define(
    "visitor", // create table visitor ()
    {
        id: {  // id int not null primary key auto_increment
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        }
        name : { //name varchar(10) not null
            type: DataTypes.STRING(10),
            allowNull: false,   //allowNull은 true가 dafault
        }
    
        comment : { // comment medium text
            type: DataTypes.TEXT('medium')
        }    
    },
    {
        tableName: "visitor", //select * from visitor ;
        freezeTableName: true 
        timestamp: false // default 값은 true createAt modifyAt (데이터가 생성되거나 수정될때마다 타임스템프를 찍어서 수정하려함)
        //위는 복수형태로 바꾸지않고 그대로 사용하겠다는 모델옵션 정의
        // collate, charset : "UTF-8" 
    }
    );
    **/

    // const Visitor = async(Sequelize, DataTypes ) => {
    //     let result = await Visitor.findAll()
    //     res.render("visitor", {data : result});
    // }

  