const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number.gz', { encoding: 'utf8' });

  const gzipTransform = zlib.createGzip();
  const aesTransform = crypto.createCipheriv('aes-256-cbc', crypto.randomBytes(32), crypto.randomBytes(16));

  pipeline(
    readStream, // читаю
    aesTransform, // шифрую
    gzipTransform, // кладу в архив
    writeStream, // пишу в файл.
    (err) => {
      if (err) {
        console.error('Pipeline failed', err);
      } else {
        console.log('Pipeline succeeded');
      }
    }
  );
})()
