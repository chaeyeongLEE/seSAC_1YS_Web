const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require("./routes");
app.use('/visitor', router);

const routerUser = require("./routes/user");
app.use('/user', routerUser);

app.get('*', (req,res) =>{
    res.render("404");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});