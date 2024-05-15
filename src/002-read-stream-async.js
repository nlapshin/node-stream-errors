const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + '/data/input-number', { encoding: 'utf8' })

  let data = ''

  for await (const chunk of readStream) {
    console.log('chuck', chunk);

    data += chunk
  }

  console.log(data)
})();
