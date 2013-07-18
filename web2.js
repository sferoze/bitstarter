var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var homepage = fs.readFileSync("index-old.html", "utf-8");
response.send(homepage.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/bootstrap'));
app.use(express.static(__dirname + '/font-awesome'));
app.use(express.static(__dirname + '/bootstrap/js'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
