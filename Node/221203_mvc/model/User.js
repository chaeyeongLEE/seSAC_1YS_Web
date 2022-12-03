const User = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac_test'
})



exports.get_register = (cb) => {
    var sql ='SELECT * FROM register';}

    cnn.query(sql, (err, rows)=> {
        if(err) throw err;
        console.log("user:", rows);
        cb(rows);
    })

