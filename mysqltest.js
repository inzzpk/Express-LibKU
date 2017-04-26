
exports.queryComplain = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'recom'
		});

	connection.connect()

	connection.query("SELECT * FROM `rec`", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.queryIntro = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("SELECT * FROM `intros` WHERE deleted_at IS null", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addRecom = function(json,callback){
	console.log(json)
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("INSERT INTO `rec` (r_name,r_tel,r_mail,r_date, r_time, r_b, r_z, r_rec) VALUES (?,?,?,?,?,?,?,?)",[json.r_name,json.r_tel,json.r_mail,json.r_date,json.r_time,json.r_b,json.r_z,json.r_rec], function (err, result){
		if (err)
			console.log(err)
		if (result){
			console.log(result)

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
	connection.end()	
}

exports.addDeli = function(json,callback){
	console.log(json)
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("INSERT INTO `delivery` (date, time, name, barcode,fac,email1,email2,phone,b_title1,b_author1,b_call1,a_author1,a_title1,a_journal1,a_vol1,a_no1,a_year1,a_fp1,a_tp1,a_ttp1,destination) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[json.date,json.time,json.name,json.barcode,json.fac,json.email,json.email,json.phone,json.b_title1,json.b_author1,json.b_call1,json.a_author1,json.a_title1,json.a_journal1,json.a_vol1,json.a_no1,json.a_year1,json.a_fp1,json.a_tp1,json.a_ttp1,json.destination], function (err, result){
		if (err)
			console.log(err)
		if (result){
			console.log(result)

		}
	})
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

exports.queryFineBook = function(barcode,callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("select * from `fine` where cardnumber = ? ",[barcode], function (err, result){
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