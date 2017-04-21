exports.fetchIntro = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("SELECT * FROM `intros` WHERE deleted IS null", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addIntro = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()
		console.log(json.title,json.detail,json.callno,json.link,json.image)

		connection.query("INSERT INTO `intros` (title,detail,callno,link,image) VALUES (?,?,?,?,?)",[json.title,json.detail,json.callno,json.link,json.image], function (err, result){
			  if (err) {
				// callback(err,null);
				reject(err)
				console.log(err)
			  }
			  if(result){
			  	// callback(null,result);
			  	console.log(result)
			  	resolve(result)
			  }
		})
		connection.end()

		})
		
}

exports.deleteIntro = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()

		connection.query("UPDATE `intros` SET `deleted`='Yes' WHERE id = ?",[json.id], function (err, result){
			  if (err) {
				// callback(err,null);
				reject(err)
				console.log(err)
			  }
			  if(result){
			  	// callback(null,result);
			  	console.log(result)
			  	resolve(result)
			  }
		})
		connection.end()

		})
		
}

// exports.deleteIntro = function(json,callback){
// 	console.log(json)
// 	var mysql = require('mysql')
// 	var connection = mysql.createConnection({
// 		  host     : '158.108.48.254',
// 		  user     : 'mobileapp',
// 		  password : 'mobileapp',
// 		  database : 'test'
// 		});

// 	connection.connect()

// 	connection.query("UPDATE `intros_copy` SET `deleted`='Yes' WHERE id = ?",[json.id], function (err, result){
// 	  if (err) {
// 		callback(err,null);
// 	  }
// 	  else{
// 	  	callback(null,result);
// 	  }
// 	})
// 	connection.end()	
// }