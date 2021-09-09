var express = require('express');
var router = express.Router();
let mysql = require('../mysql')
/* GET users listing. */

//获取用户列表
router.get('/page/:page', function(req, res, next) {
  let page = req.params.page
  let sql1 = 'SELECT COUNT(*) as count FROM userinfo'
  mysql.base(sql1,null,(results)=>{
    let current_page = (page - 1)*5           //当前页
    let count = results[0].count          //总条数
    let totalpage = Math.ceil(count/5);   //总页数
    let sql2 = 'SELECT * FROM userinfo limit ?,5'
    mysql.base(sql2,current_page,(results)=>{
      if(results != ''){
        res.json({code:200,
                  currentpage:page,
                  count:count,
                  totalpage:totalpage,
                  perpage:5,
                  data:results
                })
      };
      
    })
  })
});
//获取用户信息
router.get('/userinfo/:id', function(req, res, next) {
  let id = req.params.id
  let sql = 'select * from userinfo where id = ?'
  mysql.base(sql,id,(results)=>{
    res.json(results)
  })
});

//搜索
router.get('/search/:username/:page', function(req, res) {
  let data_ = req.params.username
  let page = req.params.page
  let sql1 = "SELECT COUNT(*) as count FROM userinfo where username like '%"+data_+"%'"
  mysql.base(sql1,null,(results)=>{
    let current_page = (page - 1)*5           //当前页
    let count = results[0].count          //总条数
    let totalpage = Math.ceil(count/5);   //总页数
    let sql2 = "SELECT * FROM userinfo where username like '%"+data_+"%' limit ?,5"
    mysql.base(sql2,current_page,(results)=>{
      if(results != ''){
        res.json({code:200,
                  currentpage:page,
                  count:count,
                  totalpage:totalpage,
                  perpage:5,
                  data:results
                })
      };
      
    })
  })
});

//修改用户状态
router.post('/state/:id/:state', function(req, res) {
  let data = [req.params.state,req.params.id]
  let sql = "update userinfo set ismanag = ? where id = ?"
  mysql.base(sql,data,(results)=>{
    if(results.affectedRows == 1) {
      res.send({msg:'更新成功'})
    }
  })
});


//删除用户
router.delete('/delete/:id',function(req,res){
  let data = req.params.id
  let sql = "delete from userinfo where id = ?"
  mysql.base(sql,data,(results)=>{
    if(results.affectedRows == 1) {
      res.send({msg:'删除成功'})
    }
  })
})

//添加用户
router.post('/creatUser',function(req,res){
  let data_ = req.body.data
  let sql1 = "SELECT * from userinfo WHERE username = ?"
  let sql2 = "insert into userinfo(username,password,phone,mail,img,ismanag) value (?,?,?,?,?,?) "
  let data = [data_.username,data_.password,data_.phone,data_.email,data_.img,data_.ismanag]
  mysql.base(sql1,data_.username,(results)=>{
    if(results == '') {
      mysql.base(sql2,data,(results)=>{
        if(results.affectedRows == 1) {
          res.send({
            code:200,
            msg:'添加成功'
          })
        }
      })
    }else {
      res.send({msg:'用户名已存在'})
    }
  })
})

//修改用户
router.post('/editUser',function(req,res){
  let data_ = req.body.data
  let sql = "UPDATE userinfo set username=?,password=?,phone=?,mail=?,img=? where id ="+data_.id
  let data = [data_.username,data_.password,data_.phone,data_.email,data_.img]
  mysql.base(sql,data,(results)=>{
    if(results.affectedRows == 1) {
      res.send({
        code:200,
        msg:'修改成功'
      })
    }
  })
})

module.exports = router;
