var http = require ('http');
var fs = require('fs');


var server = http.createServer(function(req , res){
	console.log('request was made by :- '+req.url);
	res.writeHeader(200,{'Content-Type':'application/json'});
    var obj = {
			  "array": [
				1,
				2,
				3
			  ],
			  "boolean": true,
			  "color": "#82b92c",
			  "null": null,
			  "number": 123,
			  "object": {
				"a": "b",
				"c": "d",
				"e": "f"
			  },
			  "string": "Hello World"
   }
    res.end(JSON.stringify(obj));
	});

	server.listen(8001,'127.0.0.1');
	
	console.log('application is listning to port 8001')