const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use('/visitor', router);
// localhost:8000/visitor~~~~

const routery = require("./routes/user");
app.use('/user', routery);

app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});


// loginPage = {
//     res.render ('/loginPage')
// }
// // ejs 
// //파일에 정의된 CSS와 내가 정의한 CSS가 다를 수 있으니 