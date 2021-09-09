var express = require('express');
var router = express.Router();
let mysql = require('../mysql')
const jwt  = require('jsonwebtoken');



let secret = 'zhangjielun';


// let payload2 = jwt.verify(token,secret)
// console.log(payload2)

router.post('/', function(req, res, next) {
  let sql = 'select * from userinfo where username=?'
  let uname = req.body.username
  let pwd = req.body.password
  mysql.base(sql,uname,(results)=>{
    if(results == ''){
        res.send({"msg":'用户名不存在'})
    }else{
        if(pwd != results[0].password){
          res.send({"msg":'密码错误'})
        }else{
          res.status(200)
          let payload = results[0].password
          let token = jwt.sign(payload,secret);
          res.send({msg:'ok',token:token,data:results[0].id})
        }
    }  
  })
});

module.exports = router;