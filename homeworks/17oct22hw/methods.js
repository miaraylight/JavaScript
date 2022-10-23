// 1)
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
//потом переделайте всё как нужно и методом join соедините обратно.

// function toUpperCaseFirstChar(string) {
    
//         let first = string[0];
//         let result = first.toUpperCase() + string.substr(1, string.length)
//         return result
    
// }

// let test = 'test'
// console.log(toUpperCaseFirstChar(test));



// let camelize = str => {
//     let splitted = str.split('-')

//     let res = [splitted[0]]

//     for (let i = 1; i < splitted.length; i++) {
//         res.push(toUpperCaseFirstChar(splitted[i]))   
//     }

//     return res.join('');    
// }



//console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));




// 2)
// Задача: написать функцию, принимающую массив чисел
// и возвращающую сумму всех его положительных элементов и отрицательных 
// чисел отдельно в виде нового массива

// например функция принимает как аргумент следующий массив
// arr = [1, -2, 3, 4, -9, 6]

// и должна вернуть [14, -11]



function sumAll(array) {
    let positive  = 0
    let negative = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive += array[i]
        } else if (array[i] < 0) {
            negative += array[i]
        }
        
    }


    return [positive, negative];
    
    
}

console.log(sumAll([1, -2, 3, 4, -9, 6]));
