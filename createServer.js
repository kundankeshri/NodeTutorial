//To create a server we use http module present in node 
var http = require ('http');
//create a server using http
//req object is loaded about the request hat has been made
//res object is used to send the response back to the client 
var server = http.createServer(function(req , res){
	console.log('request was made by :- '+req.url);
	res.writeHeader(200,{'Content-Type':'text/plain'})
    res.end('kundan keshri');
	});

	server.listen(8001,'127.0.0.1');
	
	console.log('application is listning to port 8001')
