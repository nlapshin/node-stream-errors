// У нас вебсервер и нам нужно прочитать файл, архивировать
// и отдать клиенту

// В лоб:
// 1. Читаем весь файл в память программы(ОЗУ)
// 2. Архивируем весь файл
// 3. Отдаем клиенту.
// По умолчанию стоит 2ГБ оперативки на процесс.
// Читать данные не все, а по частям(chuck).
// youtube-dl

// Мы организуем Peer-to-peer взаимодействие по сети.
// Нам шлют большое сообщения.
// Организовываем консольные терминалы в вебе.
// Многострочную вывод
/* Вывод построчно
total 16
-rw-rw-r-- 1 nik nik 2603 окт 25 20:36 '1. NodeJS Best practice.'
-rw-rw-r-- 1 nik nik 1072 окт 24 22:48  LICENSE
-rw-rw-r-- 1 nik nik  414 окт 25 19:54  README.md
drwxrwxr-x 3 nik nik 4096 окт 25 20:41  src
*/

// NodeJS: Веб-серверы. HTTP(на базе TCP).
// TCP в nodeJS - это стрим
// r
// throw new Error('stings or something')

//Promise.resolve().then(success).catch(error)
/*
try {

} catch(err) {

} finally {
  
}
*/

/*
process.on('uncaughtException', (err) => {

})

process.on('unhandledRejection', (err) +> {

})
*/
