// To read and write file we need some modules that is present in the node core modules name fs

var fs = require ('fs');
// we can read file Sync
//UTF8 is for character encoding otherwise result will be in 0 and 1 combitions
//var readFile = fs.readFileSync('readMe.txt','utf8');
var readFile = fs.readFileSync('readMe.txt','utf8');
console.log(readFile);
console.log('test sync');

//write to a file
fs.writeFileSync('writeMe.txt',readFile);
