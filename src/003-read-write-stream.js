const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-number', { encoding: 'utf8' });

  for await (const chunk of readStream) {
    writeStream.write(chunk)
  }

  writeStream.write('100\n')
})()

// Вместо stdout пишу в файл
