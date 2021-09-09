
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
var uploadRouter = require('./routes/upload')
var datas = require('./routes/datas')

var app = express();

//跨域
app.all('*',function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader('Access-Control-Allow-Headers', "content-type")
  next();
})

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   //解析post请求的body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/uploads'))   //服务器端建立uploads文件夹用来接受上传的文件，并将uploads文件夹托管为静态文件

//修改上传文件大小限制
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 
//使用路由
app.use('/', indexRouter);
app.use('/login',loginRouter)
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/datas', datas);

//图片加载,存储在uploads下的所有图片
app.get('/uploads/*', function (req, res) {
  res.sendFile( __dirname + "/" + req.url );

})





module.exports = app;
