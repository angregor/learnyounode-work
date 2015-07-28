var fs = require('fs');
var string = "";
fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
	if(err)
	{
		console.log("");
	}
	else
	{
		string = data.toString();
	}
});
var arr = string.split("\n");
console.log(arr.length-1);