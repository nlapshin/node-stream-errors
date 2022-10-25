const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(__dirname + 'streams-read-file', { encoding: 'utf8' })

  let data = ''

  for await (const chunk of readStream) {
    data += chunk
  }

  console.log(data)
})()
