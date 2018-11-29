var fs = require('fs');
//var myReadStream = fs.createReadStream(__dirname+'/readableStream.txt');
var myReadStream = fs.createReadStream(__dirname+'/readableStream.txt','utf8');

myReadStream.on('data',function(chunk){
	console.log('new chunk received');
	console.log(chunk);
})
