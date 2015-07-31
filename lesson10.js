var net = require('net');
var server = net.createServer(function(socket) {
    var myDate = new Date();
    var myMonth = "";
    var myDay = "";
    var myHour = "";
    var myMinute = "";
    if(myDate.getMonth() < 10) {
      myMonth = "0" + (myDate.getMonth() + 1);
    }
    else {
      mmyMonth = (myDate.getMonth() + 1);
    }
    if(myDate.getDate() < 10) {
      myDay = "0" + myDate.getDate();
    }
    else {
      myDay = myDate.getDate();
    }
    if(myDate.getHours() < 10) {
      myHour = "0" + myDate.getHours();
    }
    else {
      myHour = myDate.getHours();
    }
    if(myDate.getMinutes() < 10) {
      myMinute = "0" + myDate.getMinutes();
    }
    else {
      myMinute = myDate.getMinutes();
    }
    var data = myDate.getFullYear() + "-" + myMonth + "-" + myDay + " " + myHour + ":" + myMinute + "\n";
    socket.end(data)
});
server.listen(process.argv[2]);
