let mysql = require('mysql')

exports.base = (sql,data,callback) => {

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '1052177381',
      database : 'system',
      timezone : "08:00"      //格式化时间
    });
    
    connection.connect((err)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("数据库链接成功...");
            
        }
    });
    
    connection.query(sql,data, function (error, results, fields) {
      if (error) throw error;
      callback(results)
    });  
    //关闭数据库
    connection.end();
}
