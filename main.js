// const url = new URL('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/');
//
// function getHost(obj) {
//     return obj.host;
// }
//
// function strToCamelCase(str) {
//      const res = str.pathname.split('-').map( item => {
//          if( item[0] === '/') {
//              return item[1].toUpperCase() + item.substring(2);
//          } else{
//             return item[0].toUpperCase() + item.substring(1);
//          }
//      });
//      return res.join('');
// }
//
// console.log(getHost(url));
// console.log(strToCamelCase(url));






// const str = '   what-can-Cedefi-bring-to-The-crypto-Industry/';

// //Длинна строки
// console.log(str.length);
// //Обрезаем пробелы
// console.log(str.trim());
// //Заканчивается ли строка символом "/"
// console.log(str.endsWith('/'));
// //Ищем индекс заданного елемента
// console.log(str.lastIndexOf('-'));
// //Содержит ли строка определенный елемент или набор смиволов, слово
// console.log(str.includes('defi'));
// //В верхний регистр
// console.log(str.toUpperCase());
// //В нижний регистр
// console.log(str.toLowerCase());
// //Возвращаем значение строки
// console.log(str.valueOf());
// //Разбивает строку на массив значений по заданному параметру
// console.log(str.split('-'));
// //Возвращает новую строку с извлечением значений начиная с начально заданного
// //индекса и заканчивая конечно заданным индексом
// console.log(str.slice(14,18));
// //Возвращение формы нормализации Юникода данной строки
// console.log(str.normalize('NFC'));
// // Возвращает новую строку с извлечением значений начиная с начально заданного
// // индекса и заканчивая конечно заданным индексом
// console.log(str.substring(14,18));
// //Возвращает новую строку, содержащую указанное количество соединённых  копий строки
// console.log(str.repeat(2));