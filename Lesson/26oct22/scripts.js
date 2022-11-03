// // РАЗБОР ДОМАШКИ

// // создаем функцию которая будет проверят значения в масииве на однотипность

//  function checkTypeInArray(array, type) {
//     let flag = true;

//     array.forEach(element => {
//         if (typeof element !== type) {
//             flag = false;
//         }
//     });

//     return flag;
//  }

// // создаем функцию которая будет находить самую длинную строку и возвращать ее

// function findMaxStringInArray(array) {
//     let stringValue = "";
//     let stringIndex = 0;

//     array.forEach(value, index) => {
//         if (value.length > stringValue.length) {
//             stringValue = value;
//             stringIndex = index;
//         }
//     }
//     return [stringValue, stringIndex];
// }

// //  создаем функцию которая будет находить самое большое число и возвращать ее


// function findMaxNumberInArray(array) {
//     let numberValue = 0;
//     let numberIndex = 0;

//     array.forEach(value, index) => {
//         if (value.length > numberValue.length) {
//             numberValue = value;
//             numberIndex = index;
//         }
//     }
//     return [numberValue, numberIndex];
// }

// let massiveWithNewValue = (arr) => {

//     if (checTypeInArray(arr, 'string')) {
//         return findMaxStringInArray(arr);
//     }
//     if (checktypeInArray(arr, 'number')) {
//         return findMaxNumberInArray(arr);
//     }
//     return ["error data", arr.length]

// };

// Методы дальше..

