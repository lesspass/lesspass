var express = require('express');
var app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
  console.log('frontend listening on port 8080');
});
