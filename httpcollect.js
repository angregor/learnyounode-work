var bl = require('bl');
var http = require('http');

http.get(process.argv[1], function callback(response) {
	response.on("data", response.pipe(bl(function (err, data) {
		var data = data.toString();
		console.log(data.length);
		console.log(data);
	})););
	response.on("error", function callback(error) {
		console.log(error);
	})
});