var fs = require('fs');
fs.readdir(dirname, extname, function callback(err, list) {
	if(err)
	{
		return callback(err);
	}
	else
	{
		var ext = "." + extname;
		var lists = [];
		for(var i = 0; i < list.length; i++)
		{
			var lengthofext = extname.length + 1;
			if(list[i].substring(list[i].length - lengthofext, list[i].length) === ext)
			{
				lists.push(list[i]);
			}
		}
	}
	return lists;
});