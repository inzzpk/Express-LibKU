/* โหลด Express มาใช้งาน */
var express = require('express');
var bodyparser = require('body-parser');

var users = require('./users');
var mysqltest = require('./mysqltest');

var app = express()
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

app.get('/deli', function (req, res) {
	mysqltest.queryDelivery(function(err,result){
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
	// res.json(cosmetic.searchByName(name));
});

app.get('/eieiei', function (req, res) {
	mysqltest.addItems(function(err,result){
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
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});



// app.get('/createRequest/:r_title/:r_type/:r_author/:r_isbn/:r_pub/:r_name/:r_mail/:r_tel/:r_fac/:r_year/:r_date' , function(req, res){

// 	var r_title = req.params.r_title;
// 	var r_type = req.params.r_type;
// 	var r_author = req.params.r_author;
// 	var r_isbn = req.params.r_isbn;
// 	var r_pub = req.params.r_pub;
// 	var r_name = req.params.r_name;
// 	var r_mail = req.params.r_mail;
// 	var r_tel = req.params.r_tel;
// 	var r_fac = req.params.r_fac;
// 	var r_year = req.params.r_year;
// 	var r_date =  req.params.r_date;
// 	mysqltest.addRequest(r_title,r_type,r_author,r_isbn,r_pub,r_name,r_mail,r_tel,r_fac,r_year,r_date,function(err,result){
// 		if (err){
// 			console.log(err);
// 		}
// 		else{
// 			console.log(result)
// 			res.json(result);
// 		}
		
// 	});
// 	// res.json(cosmetic.searchByName(name));
// });