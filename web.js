var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var homepage = fs.readFileSync("index.html", "utf-8");
// var buf = new Buffer(homepage);
// homepage.toString('utf8', 0, homepage.length);
response.send(homepage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
