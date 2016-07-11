var AWS = require('aws-sdk');
var fs = require('fs');
var zlib = require('zlib');

var body = fs.createReadStream('LessPass-v1.0.0.linux-x64.tar.gz').pipe(zlib.createGzip());
var s3obj = new AWS.S3({
  region: 'eu-west-1',
  maxRetries: 0,
  httpOptions: {
    timeout: 360000
  },
  params: {
    Bucket: 'lesspass',
    Key: 'LessPass-v1.0.0.linux-x64.tar.gz'
  }
});
s3obj.upload({Body: body})
  .on('httpUploadProgress', function (evt) {
    console.log(evt);
  })
  .send(function (err, data) {
    console.log(err, data)
  });
