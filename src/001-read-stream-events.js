// У нас есть файл
// Readable stream - только на чтение
// Writable - только на запись.
// Duplex - чтение/запись
// Transform - используется для преобразования.

const fs = require('fs');
const path = require('path');

// '../path-to-file'
// './path-to-file'

// console.log(__dirname) // /home/nik/projects/webinar/node-stream-errors/src

// fs - file system. Пакет который работает с файловой.

// Я хочу прочитать файл как стрим fs.createReadStream(pathToFile, options?); endcoding.
// data - получение данных
// end - когда данные закончили
// error - если что-то пошло не так.

// Создай стрим. Создаем стрим и вычивает чанк и кладет в буфер. highWaterMark.
// Буфер достиг максимума и ждет.
const readStream = fs.createReadStream(__dirname + '/data/input-number')
let data = ''

readStream.setEncoding('UTF8')

// Ждет пока кто-то вычитает.
// Можно вычитывать по байту через highWaterMark.
readStream.on('data', function(chunk) {
  data += chunk;
});

readStream.on('end',function() {
  console.log(data);

  console.log("Program Ended");
});

readStream.on('error', function(err) {
  console.log(err.stack);
});
