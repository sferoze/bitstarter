var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var homepage = fs.readFileSync("index.html", "utf-8");
response.send(homepage.toString('utf8'));
});

app.use(express.static(images));
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
