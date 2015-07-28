var fs = require('fs');
var stringer = (fs.readFileSync(process.argv[2])).toString();
var arr = stringer.split('\n');
console.log(arr.length - 1);