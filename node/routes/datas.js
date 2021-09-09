var express = require('express');
var router = express.Router();
let mysql = require('../mysql');
const { log } = require('debug');

//获取余额
router.get('/money',function(req,res) {
  let sql = "select * from balance order by id desc limit 1"
  mysql.base(sql,null,(results)=>{
    res.json({data:results[0].money});   
  })
})

//最后7条余额变化
router.get('/moneyChange',function(req,res) {
  let sql = "select money from balance order by id desc limit 7"
  mysql.base(sql,null,(results)=>{
    res.json({data:results});   
  })
})

//获得数据
router.get('/page/:page', function(req, res) {
  let page = req.params.page
  let sql1 = 'SELECT COUNT(*) as count FROM datalist'
  mysql.base(sql1,null,(results)=>{
    let current_page = (page - 1)*5           //当前页
    let count = results[0].count          //总条数
    let totalpage = Math.ceil(count/5);   //总页数
    let sql2 = 'SELECT * FROM datalist order by id desc limit ?,5'
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


//新增数据
router.post('/addList',function(req, res){
  let data_ = req.body.data
  let sql1 = "select * from balance order by id desc limit 1"
  let sql2 = "insert into datalist(creatTime,type,explains,out_in,remarks,money) value (?,?,?,?,?,?) "
  // let sql3 = "UPDATE balance set money = ?"
  let sql3 = "insert into balance(money) value (?)"
  let data = [data_.time,data_.type,data_.explain,data_.out_in,data_.remarks,data_.money]
  mysql.base(sql1,null,(results)=>{
    let money = results[0].money
    if(data_.out_in == '收入'){         //余额
        var newMoney = Number(money) + Number(data_.money)
    }else{
        var newMoney = (Number(money) - Number(data_.money)).toFixed(2)  
    }   
    mysql.base(sql3,newMoney,(results)=>{
      if(results.affectedRows == 1) {
        mysql.base(sql2,data,(results)=>{
            if(results.affectedRows == 1) {
                res.send({
                    code:200,
                    msg:'添加成功'
                })
            }
        })
      }
    })
 
  })
})
//筛选
router.post('/screen',function(req,res){
  let startTime = req.body[0]
  let endTime = req.body[1]
  let type = req.body[2]
  let out_in = req.body[3]
  let page = req.body[4]
  let current_page = (page - 1)*5           //当前页
  let sql = 'select * from datalist where 1=1'
  let sql1 = 'select count(*) as count from datalist where 1=1'
//拼接sql筛选语句
  //sql筛选
  if (startTime !== null) sql = sql + " and creatTime between '"+startTime+"' and '"+endTime+"'"
  if (type !== '全部') sql = sql + " and type='"+ type+"'"
  if (out_in !== '全部') sql = sql + " and out_in = '"+out_in+"'"
  //sql1查总数
  if (startTime !== null) sql1 = sql1 + " and creatTime between '"+startTime+"' and '"+endTime+"'"
  if (type !== '全部') sql1 = sql1 + " and type='"+ type+"'"
  if (out_in !== '全部') sql1 = sql1 + " and out_in = '"+out_in+"'"
  
  sql = sql + " order by id desc limit ?,5"

  mysql.base(sql1,null,(results)=>{
    let count = results[0].count          //总条数
    let totalpage = Math.ceil(count/5);   //总页数  
    mysql.base(sql,current_page,(results)=>{
        res.json({code:200,
                  currentpage:page,
                  count:count,
                  totalpage:totalpage,
                  perpage:5,
                  data:results
                })   
    })
  })
})


//删除数据
router.delete('/delete/:id',function(req,res){
  let data = req.params.id
  let sql = "delete from datalist where id = ?"
  mysql.base(sql,data,(results)=>{
    if(results.affectedRows == 1) {
      res.send({msg:'删除成功'})
    }
  })
})
module.exports = router;