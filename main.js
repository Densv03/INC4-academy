const url = new URL('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/');


let newStr;
function showHost(obj) {
    console.log(obj.host);
}
function splitStr ( str ) {
    newStr = str.pathname.split('-');
}


function strToCamelCase( str) {
     const res = str.map( item => {
         if( item[0] === '/') {
             return item[1].toUpperCase() + item.substring(2);
         } else{
            return item[0].toUpperCase() + item.substring(1);
         }
     });
     console.log(res.join(''));
}

showHost(url)
splitStr(url);
strToCamelCase(newStr);









// Есть строка ‘’https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/' - вытянуть из этой строки домен, вытянуть название статьи, убрать дефис и каждое слово сделать с заглавной буквы