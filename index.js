/* โหลด Express มาใช้งาน */
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors')


var users = require('./users');
var mysqltest = require('./mysqltest');
var intro = require('./intro');
var news = require('./news');
var dbs = require('./dbs');

var app = express()
app.use(cors())
app.use(cors({origin: '*'}));
app.use(bodyparser.urlencoded({extened:true}));
app.use(bodyparser.json());
/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;
 
/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/user', function (req, res) {
    res.json(users.findAll());
});

app.get('/com', function (req, res) {
	mysqltest.queryComplain(function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	})
	// res.json(cosmetic.searchByName(name));
});

////////////////////////Intro////////////////////////

app.get('/fetchIntro', function (req, res) {
	intro.fetchIntro(function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	})
});

app.post('/addIntro', function(req, res){
	let json = req.body;
	// console.log(json)
	intro.addIntro(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});

app.post('/deleteIntro', function(req, res){
	let json = req.body;
	// console.log(json)
	intro.deleteIntro(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});


// app.post('/deleteIntro', function(req, res){
// 	let json = req.body;
// 	intro.deleteIntro(json,function(err,result){
// 		if (err){
// 			console.log(err);
// 		}
// 		else{
// 			console.log(result)
// 			res.json(result);
// 		}
// 	})
// });

//////////////////////////////////////////////
///////////////////News///////////////////////

app.get('/fetchNews', function (req, res) {
	news.fetchNews(function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	})
});

app.post('/addNews', function(req, res){
	let json = req.body;
	// console.log(json)
	news.addNews(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});

app.post('/deleteNews', function(req, res){
	let json = req.body;
	// console.log(json)
	news.deleteNews(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});

//////////////////////////////////////////////
///////////////////Dbs///////////////////////

app.get('/fetchDbs', function (req, res) {
	dbs.fetchDbs(function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}	
	})
});

app.post('/addDbs', function(req, res){
	let json = req.body;
	// console.log(json)
	dbs.addDbs(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});

app.post('/deleteDbs', function(req, res){
	let json = req.body;
	// console.log(json)
	dbs.deleteDbs(json).then( (data)=>{
		res.json(data)
	}).catch( err => console.log(err))
});

//////////////////////////////////////////////

app.get('/byBarcode/:barcode', function(req, res){
	var barcode = req.params.barcode;
	mysqltest.queryItemsBarcode(barcode,function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	});
	// res.json(cosmetic.searchByName(name));
});

app.get('/LoginbyBarcode/:barcode', function(req, res){
	var barcode = req.params.barcode;
	mysqltest.queryLoginBarcode(barcode,function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	});
	// res.json(cosmetic.searchByName(name));
});

app.get('/chkLogin/:user/:pass', function(req, res){
	var user = req.params.user;
	var pass = req.params.pass;
	mysqltest.queryUser(user,pass,function(err,result){
		if (err){
			console.log(err);
		}
		else{
			console.log(result)
			res.json(result);
		}
		
	});
	// res.json(cosmetic.searchByName(name));
});

app.post('/createRequest', function(req, res){
	// console.log("IN REQUEST")
	let json = req.body;
	mysqltest.addRequest(json,function(err,result){
		if (result){
			console.log(result)
			res.jon(result)
		}
	})
});

app.post('/createRecom', function (req, res) {
	let json = req.body;
	mysqltest.addRecom(json,function(err,result){
		if (result){
			console.log(result)
			res.jon(result)
		}
		
	})
}); 

app.post('/createDeli', function (req, res) {
	let json = req.body;
	mysqltest.addDeli(json,function(err,result){
		if (result){
			console.log(result)
			res.jon(result)
		}
		
	})
}); 
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

