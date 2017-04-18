
exports.queryComplain = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'recom'
		});

	connection.connect()

	connection.query("SELECT * FROM `complain`", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.queryDelivery = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'libservice'
		});

	connection.connect()

	connection.query("SELECT * FROM `delivery` WHERE id<100", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addItems = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'recom'
		});

	connection.connect()

	connection.query("INSERT INTO `complain` (`c_date`, `c_time`, `c_title`, `c_name`, `c_cp`) VALUES ('2017-04-16', '12.00', 'ทดสอบ3', 'taeyeon', 'ทดสอบทดสอบทดสอบ')", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addRequest = function(json,callback){
	console.log(json)
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()
	connection.query("INSERT INTO `req` (r_title,r_type,r_author,r_isbn,r_pub,r_name,r_mail,r_tel,r_event,r_cam,r_lib,r_fac,r_year,r_date,r_place,r_com,r_price,r_dep,r_pos,r_cnamber) VALUES (?,?,?,?,?,?,?,?,'recommend','Bangkhen','สำนักหอสมุด วิทยาเขตบางเขน',?,?,?,'','','','','','')",[json.r_title,json.r_type,json.r_author,json.r_isbn,json.r_pub,json.r_name,json.r_mail,json.r_tel,json.r_fac,json.r_year,json.r_date],function(err,result){
		if (err)
			console.log(err)
		if (result){
			console.log(result)

		}

	})
	// connection.query("INSERT INTO `req` (r_title,r_type,r_author,r_isbn,r_pub,r_name,r_mail,r_tel,r_event,r_cam,r_lib,r_fac,r_year,r_date) VALUES (?,?,?,?,?,?,?,?,recommend,Bangkhen,สำนักหอสมุด วิทยาเขตบางเขน,?,?,?)"
	// 	,[json.r_title,json.r_type,json.r_author,json.r_isbn,json.r_pub,json.r_name,json.r_mail,json.r_tel,json.r_fac,json.r_year,json.r_date], function (err, result){
	//   if (err) {
	//   	console.log(err)
	// 	callback(err,null);
	//   }
	//   else{
	//   	callback(null,result);
	//   }
	// })
	connection.end()	
}


exports.queryItemsBarcode = function(barcode,callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("select * from `book` where isbn = ? ",[barcode], function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	  
	  ;
	})
	connection.end()	
}

exports.queryLoginBarcode = function(barcode,callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("select * from `member` where barcode = ? ",[barcode], function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	  
	  ;
	})
	connection.end()	
}

exports.queryUser = function(user,pass,callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("select * from `member` where `member_id` = ? and `barcode` = ?",[user,pass], function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	  
	  ;
	})
	connection.end()	
}