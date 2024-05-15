const fs = require('node:fs');
const { Transform } = require("node:stream");

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-string', { 
    encoding: 'utf8',
    highWaterMark: 2
  })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-uppercase-string', { encoding: 'utf8' });

  const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      // chuck - это не строка, а buffer
      console.log('Buffer chunk', chunk);
      console.log('String chunk', chunk.toString());

      // callback - first error подход
      callback(null, chunk.toString().toUpperCase());
    },
  });

  readStream.pipe(uppercaseTransform).pipe(writeStream);
})()

// highWaterMark
