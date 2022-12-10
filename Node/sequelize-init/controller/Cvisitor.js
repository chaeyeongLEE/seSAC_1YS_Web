//const Visitor = require("../model/Visitor");
const { Visitor } = require("../model"); //index.js이기때문에 폴더까지만 접근해도 된다.

exports.visitor = async(req, res) => {
    let result = await Visitor.findAll()
    res.render("visitor", {data: result});
}
//await는 무조건 async와 함께 사용되어야한다.

//    Visitor.findAll()
//     .then((result)=> {
//         console.log(result);
//         console.log("id : " , result[0].id);
//         res.render("visitor", {data: result});
//     })
// }
// select * from visitor; = Visitor.findAll()
/**  Visitor.get_visitor(function(result){
     console.log(result);
     res.render("visitor", {data: result});
    })
}**/

exports.register = async (req, res) => {
    let data = {
        name : req.body.name,
        Comment : req.body.Comment
    } 

    // Visitor.create(data)
    // .then((result)=>{
    //     console.log(result);
    //     res.send(String(result.id));
    // });

    let result = await Visitor.create(data);
    console.log(result);
    res.send(String(result.id));
}


// Visitor.create(data)
//     .then((result)=>{
//         console.log(result);
//         res.send(String(result.id));
//     })

//     //insert into visitor(name, comment) values 
//     Visitor.register_visitor( req.body, function(id){
//         console.log(id);
//         res.send(String(id));
//     })
// }

// exports.delete = (req, res) => {
//     Visitor.destroy({
//         where: { id: req.body.id } 
//     })
//     .then((result)=>{
//         console.log(result);
//         res.send(true);
//     })
// }

exports.delete = async(req, res) => {
    Visitor.destroy({
        where: { id: req.body.id } 
    })
    let result = await Visitor.delete(id);
        console.log(result);
        res.send(true);
    }


    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
//     Visitor.delete_visitor(req.body.id, function(){
//         res.send(true);
//     })

// exports.get_visitor_by_id = (req, res) => {
//     // req.query.id 에 해당하는 데이터를 조회
//     // 서버 응답 > 조회한 데이터
//exports.get_visitor_by_id=(req, res) => {
// select id, name, comment from visitor
// select id, name, comment from visitor order by id DESC limit 1
// Visitor.findOne({
//         attributes: ["id","name","comment"] ,
//          where : { id: req.query.id }
         
//      })
//      .then((result)=> {
//               res.send(result);
//                })
//             }        

            exports.get_visitor_by_id = (req, res) => {
                // req.query.id 에 해당하는 데이터를 조회
                // 서버 응답 > 조회한 데이터
                // Visitor.findAll({
                //     where : { id: req.query.id },
                //     limit : 1
                // })
                Visitor.findOne({
                    where : { id: req.query.id }
                })
                .then((result) => {
                    res.send(result);
                })            }

//     exports.get_visitor_by_id = async(req, res) => {
//         let result = await Visitor.findOne({
//         where : { id: req.query.id }
//     })
// }
    //     res.render("visitor", {data: id})
    //     }

            
    // Visitor.findAll({
    //     where : { id: req.query.id },
    //     limit : 1
    // })
    // .then((result)=> {
    //     res.send(result);
    // })

    //  select * from visitor where id = req.query.id; 
    //Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //  res.send(rows);
    // });

exports.update_visitor = (req, res) => {
    let data ={
        name : req.body.name,
        Comment : req.body.Comment
    }
    Visitor.update(data,{
        where: {id: req.body.id}
    })
    .then((result)=> {
        console.log(result);
        res.send(true);
    })
}


    // `update visitor set name='${req.body.name}', comment='${req.body.comment}' where id=${req.body.id}`;
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
//     Visitor.update_visitor(req.body, function(){
//         res.send(true);
//     });

