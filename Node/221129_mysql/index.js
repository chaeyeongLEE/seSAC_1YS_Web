const express = require("express");
const mysql = require("mysql");
const app = express(); 
const port = 8000;

const cnn = mysql.createConnection({
    host : 'localhost', //'127.0.0.1'으로 적어도된다.
    user : 'user',
    password: '1234',
    database: 'sesac_test' 
})

app.set("view engine", "ejs")

app.get('/',(req,res)=>{
    cnn.query('select * from user', (err, result)=>{
        if (err) throw err;
      
        console.log(result);
        res.render("index", { rows : result });
    });
});

app.listen( port, ()=>{
    console.log("open : ", port)
})
