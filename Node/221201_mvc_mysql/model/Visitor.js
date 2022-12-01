const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac_test'
})

exports.get_visitor = (cb) => {
    var sql ='SELECT * FROM visitor';

    cnn.query(sql, (err, rows)=> {
        if(err) throw err;
        console.log("visitor:", rows);
        cb(rows);

        // console.log(result);
        //res.render("visitor",{ data: result}); 이게 위의 콜백함수 cb(rows)를 뜻함
    })
}

exports.register_visitor = (info, cb) => {
    //info = req.body; {name : , comment: }

    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`

    cnn.query(sql, (err, result)=> {
        if(err) throw err;

        console.log("insert result:", result);
        cb(result.insertId);
    })
}