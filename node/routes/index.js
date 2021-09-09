var express = require('express');
var router = express.Router();
var mysql = require('../mysql')
/* GET home page. */
router.get('/', function(req, res) {
 res.send("这是首页")
});

module.exports = router;
