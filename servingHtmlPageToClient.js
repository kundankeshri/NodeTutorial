var http = require ('http');
var fs = require('fs');


var server = http.createServer(function(req , res){
	console.log('request was made by :- '+req.url);
	res.writeHeader(200,{'Content-Type':'text/html'});
	var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(res);
	});

	server.listen(8001,'127.0.0.1');
	
	console.log('application is listning to port 8001')