const express = require('express');
const app = express(); 
const port = 8000;

const id= 1;
const pw= 1234;

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req,res){
    res.render("index");
})
app.get("/form", function(req,res) {
    console.log(req.query);
    res.send({msg: "get - 이름은 : " + req.query.name});
})

app.get("/app1", function(req,res) {
    res.render("app1");
});


app.post("/login", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
})

app.get("/home1",(req, res)=>{
    res.render("home1");
})

app.get("/home2", function(req,res) {
    console.log(req.query);
    res.send("이름은 : " + req.query.name + "성별은 : " + 
    req.query.gender + "생년월일은 : " + 
    req.query.year + req.query.month + req.query.date);
})


app.listen( port, ()=>{
    console.log("server open : ", port)
})

