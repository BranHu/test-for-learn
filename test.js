
var fs = require('fs');

//打开一个文件
// fs.open('test.txt','r+',function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('打开成功');
// })

//获取文件信息
// console.log("准备打开文件！");

// fs.stat('test.txt', function(err, stats){
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
//  })

//读取文件内容
// read较readFile更底层，一般情况用readFile即可,语法为fs.readFile(file[, options], callback)
// fs.readFile('test.txt',function(err,data){
// 	if (err) {
//        return console.error(err);
//    	}

//    	console.log(data.toString());
// })


//写入文件内容，语法为fs.writeFile(filename, data[, options], callback),这里写入的数据会将原
//来的txt内容覆盖
// fs.writeFile('test.txt', '我是通过写入的文件内容！',  function(err) {
//    if (err) {
//        return console.error(err);
//    }

//    fs.readFile('test.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });


//URL模块
// var url = require('url');
// var queryUrl = "http://localhost:8888/bb?name=bigbear&memo=helloworld" ;
// console.log(typeof url.parse(queryUrl)) ;
// console.log(url.parse(queryUrl)) ;

//QueryString模块
// var url = require('url');
// var qs = require('querystring');
// var queryUrl = "http://localhost:8888/bb?name=bigbear&memo=helloworld" ;
// queryUrl = url.parse(queryUrl).query ;
// console.log(queryUrl) ;
// console.log(qs.parse(queryUrl)) ;

//Path模块-----返回路径中的最后一部分，以”/“分割
// var url = require('url');
// var qs = require('querystring');
// var path = require("path") ;
// var queryUrl = "http://localhost:8888/bb?name=bigbear&memo=helloworld" ;
// var root = path.basename(queryUrl) ;
// console.log(root) ; // bb?name=bigbear&memo=helloworld

//mysql模块
var mysql = require('mysql');
var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'hujun',
	database:'node_test'
});

//创建一个连接,这段好像可以不要该段
db.connect(function(err){
	if(err){
		console.log(err);
		return;
	};
	console.log("connect successfully!!");
});

// 执行SQL语句
//插入一个row
// var sql = "insert into node_test value(NULL,'wang','女','18')";
// db.query(sql,function(err,result){
// 	if(err){
// 		console.log(err);
// 		return;
// 	};
// 	console.log(result);
// })

//查询表
var sql = "select * from node_test";
db.query(sql,function(err,result){
	if(err){
		console.log(err);
		return;
	};
	console.log(result);
})

//删除数据
// var sql = "delete from node_test where id=3";
// db.query(sql,function(err,result){
// 	if(err){
// 		console.log(err);
// 		return;
// 	};
// })

// 连接关闭
db.end(function(err){
	if(err){
		console.log(err);
		return;
	};
	console.log("connect end successfully!!");
});