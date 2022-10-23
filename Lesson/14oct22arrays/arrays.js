// let fruits = ['apple', 'birne', 'orange'];
// let shopingCart = fruits;
// shopingCart.push('banana');
// console.log(fruits.length);




// let sumArray = function (array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             result = result + array[i];
//         }
        
//     }
//     return result;
// }

// let arr = [
//     1, 2, 3, 'mia', 1
// ]
// console.log(sumArray(arr));


// let sumArray = function (array) {

//     let result = 0;

//     for (let i = 0; i < array.length; i++) {

//         let arrayElement = array[i];

//         if (!isNaN(Number(arrayElement))) { //typeof Number(arrayElement) === 'number' && !isNaN(Number(arrayElement
//             result += Number(arrayElement);
//         }
        
//     }
//     return result;
// }


// let arr = [
//     1, 2, 3, '1', 1
// ]
// console.log(sumArray(arr));



let sumArray = function (array) {

    let result = 0;
    let counter = o;

    for (let i = 0; i < array.length; i++) {

        let arrayElement = array[i];

        if (!isNaN(Number(arrayElement))) { //typeof Number(arrayElement) === 'number' && !isNaN(Number(arrayElement
            result += Number(arrayElement);
            counter++;
        }
        
    }
    return [
        result,
        array.length,
        counter
    ];

}


let arr = [1, 2, 3, '1', 1];

console.log(sumArray(arr));






// function inArr(textElement, arr){
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];

//         if(element === textElement){
//             return true;
//         } 
//     }
//     return false;
    
// }

// let arr1 = [
//     'Mia',
//     542,
//     '1',
//     true
// ]

// console.log(inArr('Mia', arr1));
