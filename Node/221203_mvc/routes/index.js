var express = require("express");
var controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.register);

router.post("/register",(req, res, next)=>{
    const param = [req.body.id, req.body.pw,req.body.name]
    res.end()
})


module.exports = router;

