var http = require("http");
var fs = require("fs");
var port = process.argv[2];

var server = http.createServer(function callback(request, response) {
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(port);
