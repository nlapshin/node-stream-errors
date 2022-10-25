const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/data/input-number')
let data = ''

readStream.setEncoding('UTF8')

readStream.on('data', function(chunk) {
  data += chunk;
});

readStream.on('end',function() {
  console.log(data);
});

readStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("Program Ended");
