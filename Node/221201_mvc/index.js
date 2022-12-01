const express = require('express');
const app = express(); 
const port = 8000;

const id= 1;
const pw= 1234;

app.set("view engine", "ejs")

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes");
// localhost:8000
// localhost:8000/djflsdk

app.use('/',router)

app.get("*", (req,res) => {
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});


app.get("/login", function(req, res){
    res.render("")
})


app.post("/practice1", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
})

app.listen( port, ()=>{
    console.log("server open : ", port)
})
