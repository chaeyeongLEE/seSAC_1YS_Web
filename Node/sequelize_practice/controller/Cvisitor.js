// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");



exports.visitor = async (req, res) => {
    let result = await Visitor.findAll();
    res.render("visitor", {data: result});

    // Visitor.findAll()
    // .then((result)=>{
    //     console.log(result);
    //     console.log("id : ", result[0].id);
    //     res.render("visitor", {data: result});
    // })

    // select * from visitor;

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }

    Visitor.create(data)
    .then((result)=>{
        console.log(result);
        res.send(String(result.id));
    })


    // insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}');
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = (req, res) => {
    Visitor.destroy({
        where: { id: req.body.id }
    })
    .then((result)=>{
        console.log(result);
        res.send(true);
    })

    // delete from visitor where id = ${req.body.id}
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

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
    })


    // select * form visitor where id = req.query.id;
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    })
    .then((result)=>{
        console.log(result);
        res.send(true);
    })


    // update visitor set name='${req.body.name}', comment='${req.body.comment}' where id=${req.body.id}
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}