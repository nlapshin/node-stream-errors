// 1. Читает файл
// 2. Шифрует его
// 3. Архивирует его
// 4. Записывает его в другой файл.

// Сделать такую задачу.
// Почему нам надо читать файл как поток, а не нельзя прочитать его целиком и с ним поработать.

// Если файл большой и его надо полностью прочитать и тогда всё это будет в память

// 1. Читает файл
// 2. Шифрует его
// 3. Архивирует его
// 4. Записывает его в другой файл.


// EventEmitter

// Сначала читают файл полностью, а потом что-то с ним делают.
// fs.readFileSync - это ещё блокирует EventLoop
// fs.readFile
// fs.promises.readFile

// fs.createReadStream

const fs = require('node:fs');

// подключаем пакет.
const readStream = fs.createReadStream(__dirname + '/data/input-number');

let data = ''

readStream.setEncoding('UTF8')

// Возможности EventEmitter
readStream.on('data', (chunk) => {
  console.log('chunk', chunk);

  data += chunk;
});

readStream.on('end', () => {
  console.log('end', data);
});

readStream.on('error', (err) => {
  console.log(err.stack);
});

console.log("Program Ended");









// Создай стрим на этот файл


// Поставим задачу вычитать данные файл
// Зашифровать
// Заархивировать
// Записать в другой файл

// fs.readFileSync() // это не очень хорошо
// fs.readFile() // это лучше
// fs.createReadStream() // это отлично

// fs.readFileSync хуже, чем вот это readFile
// fs.readFileSync читаем файл 100 МБ и занимает время 10 секунд
// Event loop - когда выполняются синхронные операции, то все ждут.
// fs.readFile - файл 100 МБ. Сколько NodeJS памяти оперативной под процесс выделяется?
// 20 пользователей который вычитывают файл просто крашут наш сервер.

// Нам не нужно весь файл целиком, мы можем кусочками(чанками chunk)
