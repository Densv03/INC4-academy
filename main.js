const url1 = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/asdasd';
const url2 = 'https://www.altcoinbuzz.io/cryptocurrency-news/spotlight/binance-ceo-says-defi-will-replace-cefi/';
const url3 = 'http://localhost';
const url4 = 'google.com';

const removeProtocol = link => {
    const regex = /\/\/(.*)\/?/;
    return link.match(regex) ? link.match(regex)[1].replace(/[\.www]/g, '') : link.replace(/[\.www]/g, '');
}

const getDomain = link => removeProtocol(link).split('/')[0];

const getPathname = link => link = removeProtocol(link).split('/').filter((el, index) => index && el);

const strToCamelCase = str => str.map((el, index) => index ? el[0].toUpperCase() + el.substring(1) : el).join('');

const printPaths = pathsArr => {
    if (pathsArr.length === 1) {
        console.log(pathsArr[0]);
    } else {
        pathsArr.forEach((el, index) => {
            console.log(`${index + 1} level path: ${el}`);
        });
    }

}

const pathsArray1 = getPathname(url1).map(el => strToCamelCase(el.split('-')));
const pathsArray2 = getPathname(url2).map(el => strToCamelCase(el.split('-')));


// Paths
console.log(printPaths(pathsArray1))
console.log(printPaths(pathsArray2))


// Domains
console.log(getDomain(removeProtocol(url1)));
console.log(getDomain(removeProtocol(url2)));

//===================================================================

// const str = '   what-can-Cedefi-bring-to-The-crypto-Industry/';
// // Get string length
// console.log(str.length);
// // Remove spaces at the beginning and at the end of string
// console.log(str.trim());
// // Return true or false depends on ends string with substring or not
// console.log(str.endsWith('/'));
// // Find last index of substring in string
// console.log(str.lastIndexOf('-'));
// // Does string includes substring or not
// console.log(str.includes('defi'));
// // String to upper case
// console.log(str.toUpperCase());
// // String to lower case
// console.log(str.toLowerCase());
// // Returns value of string
// console.log(str.valueOf());
// // Split string by substring
// console.log(str.split('-'));
// // Returns a shallow copy of a portion of an array into a new array object selected from start to end
// console.log(str.slice(14,18));
// // Returns a part of a given string
// console.log(str.substring(14,18));
// // Returns a new string which contains the specified number of copies of the string
// console.log(str.repeat(2));

//===================================================================

// const number = 1372.357;

// // Formats a number using fixed-point notation
// console.log(number.toFixed(1));
// // Returns a string representing the specified Number object
// console.log( number.toString());
// // Returns the primitive value of a String object
// console.log(number.valueOf());
// // Determines whether the passed value is an integer
// console.log(Number.isInteger(number));
// // Determines whether the passed value is a finite number
// console.log(Number.isFinite(number));
// // Returns a string representing the Number object in exponential notation.
// console.log(number.toExponential());
// // Returns a string representing the Number object to the specified precision
// console.log(number.toPrecision(5));
// // Determines whether a value is NaN or not
// console.log(Number.isNaN(number));
// // Determines whether the provided value is a number that is a safe integer.
// console.log(Number.isSafeInteger(number));