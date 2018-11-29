var fs = require('fs');
//delete a file
//fs.unlink('writeMe.txt');
//create a directory using sync method
//fs.mkdirSync('stuff');
// remove directory using sync method
//fs.rmdirSync('stuff');

//----------------------------------
//create and remove directories async

// fs.mkdir('stuff',function(){
// 	fs.readFile('readMe.txt','utf8',function(err , data ){
// 		fs.writeFile('./stuff/writeMe.txt',data)
// 	})
// })

//fs.rmdir('stuff');
// error u cannt remove directory because its nt empty
//use
fs.unlink('./stuff/writMe.txt');
//,function(){
 //	fs.rmdir('stuff');
 //})
