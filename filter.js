var fs = require('fs');
var lists = [];
var lengthofext = 0;
var ext = "." + process.argv[3];
fs.readdir(process.argv[2], function callack(err, list) {
	if(err)
	{
		console.log("");
	}
	else
	{
		for(var i = 0; i < list.length; i++)
		{
			lengthofext = process.argv[3].length + 1;
			if(list[i].substring(list[i].length - lengthofext, list[i].length) === ext)
			{
				console.log(list[i]);
			}
		}
	}
});