var fs = require('fs');

//Non Blocking code b/c its async
fs.readFile('readMe.txt','utf8',function(err , data ){
	console.log(data);
	fs.writeFile('writeMe.txt',data,function(){
		
	});
})

console.log('test');
