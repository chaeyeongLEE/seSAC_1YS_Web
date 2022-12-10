const { User } = require("../model");
const user = require("../model/user");


// exports.user = async(req,res) => {
//     let result = await user.findAll()
//         res.render("user", {data: result});
//     }

exports.signup = (req, res)=> {
    res.render("signup");
    User.create({
            id: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }).then((result)=>{
            console.log(result);
        res.render("signup");
        })
    
    }
        
    
exports.post_signup = (req,res) => {
    User.create({
        id: form.id.value,
        pw: form.pw.value,
        name: form.name.value
    }).then((result)=>{
        console.log(result);
        res.send(true);
    })
        // User.post_signup(req.body, function(){
        //     res.send(true);
        // });
    }
    
exports.signin = (req,res) => {
        res.render("signin");
    }
exports.post_signin = (req,res) => {
        User.post_signin(req.body.id, req.body.pw, function(result){
            if ( result.length > 0 ) res.send(true);
            else res.send(false);
        });
    }
    
    exports.profile = (req,res) => {
        User.get_user(req.body.id, function(result){
            if ( result.length > 0 ) res.render("profile", {data: result[0]});
            else res.redirect("/user/signin");
        })
    }
    
    exports.profile_edit = (req,res) => {
        User.update_user({
            id: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }).then((result)=>{
            console.log(result);
            res.send(true);
        })
    }


    exports.profile_delete = (req,res) => {
        User.destroy({
            id: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }).then((result)=>{
            console.log(result);
            res.send(true);
        })
    }
