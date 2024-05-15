
// a();

// a -> b -> c -> выбрасывает ошибку

// function a() {
//   return b()
// }

// function b() {
//   return c()
// }

// function c() {
//   throw new Error('error c')
// }

;(async() => {
  await aAsync(); // ошибка здесь произошла
})()

async function aAsync() {
  return await bAsync()
}

async function bAsync() {
  return await cAsync()
}

async function cAsync() {
  await delay();

  throw new Error('error c async')
}

function delay() {
  return new Promise(res => {
    setTimeout(res, 1000)
  })
}

// 1-d, 2-b, 3-e, 4-a, 5-b, 6-c

// var a = undefinedVariable  // ReferenceError
// throw new EvalError('error') // EvalError
// decodeURIComponent('%') // URIError
// eval('hoo bar') // SyntaxError
// undefined.not() // TypeError
// [].length = 'Wat?' // RangeError


// /*a*/ var a = undefinedVariable // ReferenceError
// /*b*/ throw new EvalError('error') // EvalError
// /*c*/ decodeURIComponent('%') // URIError
// /*d*/ eval('hoo bar') // SyntaxError
// /*e*/ undefined.not() // TypeError
// /*f*/ [].length = 'Wat?' // RangeError

// try - код выполнения
// / 
// catch - все ошибки из try блока туда падают
// / finally

// {
//   data: {} //
//   error: new Error('test')
// }

// const {}

// const [ data, error ] = someCode();

// console.log(data, error);


// function someCode() {
//   try {
//     // throw new Error()

//     // это уже не выполнится

//     return ['result', null];
//   } catch(error) {
//     return [ null, error ]
//   } finally {
//     console.log('always');
//   }
// }

// console.log(new Error('Some message').message);
// Описание:
// Используйте модуль streams для программы простой индексации текста.
// Она должна:
// - Читать текстовый файл переданный в аргументах к скрипту
// - Разделять входные данные на отдельные слова, разделенные разделителем (пробел, символ новой строки)
// - Фильтровать не-текстовые символы (например, ',')
// - Индексировать текст в вектор - массив чисел. Позиция в массиве представляет порядок всех входных слов, отсортированных в алфавитном порядке. Значение - это количество появлений определенного слова в тексте.
// - Вывести результирующий вектор в файл.

// Примеры:
// - `a c b b` -> потенциальное промежуточное представление `{ a: 1, b: 2, c: 1 } -> [1, 2, 1]`
// - `ab cb bss b` -> `[1, 1, 1, 1]`
// - `ab, cb, bss, cb, b, cb` -> `[1, 1, 1, 3]`
// - `alex, alex, juan, dima` -> `[2, 1, 1]`

// Желательно использовать потоки для всех шагов программы.
