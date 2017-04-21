exports.fetchNews = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("SELECT * FROM `newsinfos` WHERE deleted IS null", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addNews = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()
		console.log(json.title,json.detail,json.link,json.image)

		connection.query("INSERT INTO `newsinfos` (title,detail,link,image) VALUES (?,?,?,?)",[json.title,json.detail,json.link,json.image], function (err, result){
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

exports.deleteNews = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()

		connection.query("UPDATE `newsinfos` SET `deleted`='Yes' WHERE id = ?",[json.id], function (err, result){
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