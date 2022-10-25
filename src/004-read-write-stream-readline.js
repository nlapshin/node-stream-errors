const fs = require('fs');
const readline = require('readline'); // встроенный пакет

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(__dirname + '/data/output-multi-number', { encoding: 'utf8' });

  const rl = readline.createInterface({
    input: readStream
  });

  for await (const chunk of rl) {
    const multiTwo = parseInt(chunk.trim()) * 2;

    writeStream.write(multiTwo.toString() + '\n') // String или Buffer
    // Buffer - для работы с бинарными данными.
  }

  // Что-то открыли - нужно закрыть.
  readStream.close();
  writeStream.close();
})()
