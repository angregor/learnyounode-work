var http = require('http');
var url = require('url');

function parsetime (time) {
  timeObj = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds()};
  return timeObj;
}

function unixtime (time) {
  timeObj = { unixtime : time.getTime() };
  return timeObj;
}

var server = http.createServer(function callback(req, res) {
  var myUrl = url.parse(req.url, true);
  var myTime = new Date(myUrl.query.iso);
  var formattedJson;

    if(/^\/api\/parsetime/.test(req.url)) {
    formattedJson = parsetime(myTime);
    console.log("parse");
  }
  else if(/^\/api\/unixtime/.test(req.url)) {
    formattedJson = unixtime(myTime);
  }

  if(formattedJson) {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(formattedJson));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
