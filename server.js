var express = require('express');
var app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

var server = app.listen(8080, function() {
  console.log('frontend listening on port 8080');
  _resolve();
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
};
