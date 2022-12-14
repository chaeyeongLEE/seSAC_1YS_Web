// const Sequelize = require("sequelize");
// Sequelize.INTEGER
// const config = require("../config/config.json")["development"];
// /**json파일은 확장명을 적어주어야한다.
//  config = {
//     "development" : {
//         "host": "localhost",
//         "database": "sesac_test",
//         "username":"user",
//         "password":"1234",
//         "dialect": "mysql"
//     },
//     //위는 개발환경의 
//     "production" : {
//         "host": "localhost",
//         "database": "sesac_test",
//         "username":"user",
//         "password":"1234",
//         "dialect": "mysql"
// }
//     //위는 배포환경
// }
// **/
// const db = {};
// const sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
// ); 
// //데이터베이스 연결하는 코드. 마지막 config는 데이터베이스 전체 정보

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.User = require("./user")(sequelize, Sequelize);
// db.Procuct = require("./Product")(sequelize, Sequelize);
// db.Procuct = require("./Payment")(sequelize, Sequelize);

// db.User.hasmany(db.Payment, {
//     foreignKey : "user_id",
//     sourceKey : "user_id",
//     onDelete : "cascade"
// });

// db. Payment.belongsTo(db.User,{
//     foreignKey : "user_id",
//     sourceKey : "user_id",
//     onDelete : "cascade"
// });

// db.Procuct.hasmany(db.Payment, {
//     foreignKey : "user_id",
//     sourceKey : "user_id",
//     onDelete : "cascade"
// });

// db. Payment.belongsTo(db.Payment,{
//     foreignKey : "product_id",
//     sourceKey : "product_id",
//     onDelete : "cascade"
// });

/**db = {
    "Sequelize" : Sequelize,
    "sequelize" : sequelize,
    "Visitor" : "Visitor.js에서 return받은 값:"
}**/

// 모델정의 ./Visitor에서 끝나면 안되고, Sequelize.define으로 정의해두었기때문에 옆에 잇따라 작성해야함.
// Sequelize는 두번쨰인자로 변수 호출임.-> 얘는 visitor.js에서 id,column정의내용
//Visitor을 실행해야 sequelize가 실행됨.
//module.exports = Visitor;

//module.exports = db;