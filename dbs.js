exports.fetchDbs = function(callback){
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		  host     : '158.108.48.254',
		  user     : 'mobileapp',
		  password : 'mobileapp',
		  database : 'test'
		});

	connection.connect()

	connection.query("SELECT * FROM `dbsinfos` WHERE deleted IS null", function (err, result){
	  if (err) {
		callback(err,null);
	  }
	  else{
	  	callback(null,result);
	  }
	})
	connection.end()	
}

exports.addDbs = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()

		connection.query("INSERT INTO `dbsinfos` (name,url_pic,link,intro) VALUES (?,?,?,?)",[json.name,json.url_pic,json.link,json.intro], function (err, result){
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

exports.deleteDbs = function(json){
	return new Promise( (resolve,reject)=>{
		var mysql = require('mysql')
		var connection = mysql.createConnection({
			  host     : '158.108.48.254',
			  user     : 'mobileapp',
			  password : 'mobileapp',
			  database : 'test'
			});

		connection.connect()

		connection.query("UPDATE `dbsinfos` SET `deleted`='Yes' WHERE id = ?",[json.id], function (err, result){
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