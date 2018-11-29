// stream is faster than write file
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/readableStream.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writableStream.txt','utf8');

myReadStream.on('data',function(chunk){
	console.log('new chunk received');
	myWriteStream.write(chunk);
})
