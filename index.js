/* โหลด Express มาใช้งาน */
var app = require('express')();

var users = require('./users');

var mysqltest = require('./mysqltest');
 
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