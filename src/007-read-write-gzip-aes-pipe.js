const { pipeline } = require('node:stream');
const fs = require('node:fs');
const zlib = require('node:zlib');
const crypto = require('node:crypto');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number.gz', { encoding: 'utf8' });
  
  // зашифровать
  const aesTransform = crypto.createCipheriv('aes-256-cbc', crypto.randomBytes(32), crypto.randomBytes(16));
  // архивировать
  const gzipTransform = zlib.createGzip();
  
  // pipeline
  pipeline(
    readStream, // читать стрим
    aesTransform, // данные шифровать
    gzipTransform, // архивировать
    writeStream, // записывать
    (err) => { // Если ошибка есть, то выбросит первым аргументов
      if (err) {
        console.error('Pipeline failed', err);
      } else {
        console.log('Pipeline succeeded');
      }
    }
  );
})()
