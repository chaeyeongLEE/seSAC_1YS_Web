const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost', //'127.0.0.1'으로 적어도된다.
    user : 'user',
    password: '1234',
    database: 'sesac_test' 
})

cnn.query('select * from user', (err, result)=>{
    if (err) throw err;
  
    console.log(result);
})