/* pipes
   - no need to manually  wait for data event 
   
   
*/

var fs = require('fs');
//var myReadStream = fs.createReadStream(__dirname+'/readableStream.txt');
var myReadStream = fs.createReadStream(__dirname+'/readableStream.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/pipe.txt','utf8');

myReadStream.pipe(myWriteStream)