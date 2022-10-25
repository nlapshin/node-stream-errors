const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number', { encoding: 'utf8' });

  // метод pipe как аргумент принимает другой стрим
  readStream.pipe(writeStream)
})()
