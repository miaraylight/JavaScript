// 1) написать скрипт, который получает через promt число и выводит в консоль 
// его в квадрат

// 2)написать скрипт, который получает два числа через promt (два вызова) 
//и выводит в консоль наибольшее

// const val_1 = +prompt('fill');
// const val_2 = +prompt('fill');

// if (val_1 > val_2) {
//     console.log(val_1);
// }else{
//     console.log(val_2);
// }

// if (val_1 > val_2) console.log(val_1);
// else if ( val_1 < val_2) console.log(val_2);

// 3) напишите функцию, которая принимает аргумент (число) и 
// возвращает true, если число четное и false в ином случае 


// let checkEven = (value) => {
//     if (value % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// // const check = value => value % 2 === 0; // как можно было сократить
// // const check = value =>!(value % 2);


// console.log(checkEven(15));

// 4) написать скрипт, который формирует массив из цифр от 0 до 9.
// массив вывести в консоль 

// let array = [];

// for (let i = 0; i < 10; i++) {
//     array.push(i)
    
// }
// console.log(array);

// const result = [...new Array(10)].map((_, index) => index); // сократили

// 5) написать цикл, который проходится по массиву numbers 
// и находит сумму четных чисел
// результат необходимо вывести в консоль 

// const numbers = [12, 4, 3, 34, 3, 1, 5, 34]; 

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] % 2 === 0 ? numbers[i] : 0;
//     // if (numbers[i] % 2 === 0) {
//     //     sum += numbers[i]
//     // }
    
// }
// console.log(sum);

// // второе решение
// numbers.forEach(elem => sum += numbers[i] % 2 === 0 ? elem : 0)

// Методы массивов 
const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27]

// метод forEach
//arr.forEach((elem, index, arr) => console.log(elem, index, arr));

// arr.forEach((elem, index, arr) => 
// console.log(`Elem = ${elem}, index = ${index}, arr = ${arr}`));

// function forEach(array, callback) { // метод под капотом
//     for (let i = 0; i < array.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// forEach(arr, (elem, index, arr) => console.log(elem, index, arr));

// метод map
//  const result = arr.map(elem => elem ** 2);
//  console.log(result);

// вызвать метод map и все отрицательные числа
// преобразовать в положительные 
// const result = arr.map(elem => elem > 0 ? elem : -elem);
// console.log(result);

// метод filter

// const result = arr.filter(elem => elem > 0);
// console.log(result);
// используя метод filter сформируйте массив, состоящий только
// из чисел от -10 до 10 

// const res = arr.filter(elem => elem >= -10 && elem <= 10);
// console.log(res);


// Метод find

// const resu  =arr.find(elem => elem < 0);
// console.log(resu);

// const arr1 = ['велосипед', 'самокат', 'коньки', 'лыжи']; 

// // вызвать метод find, который возрващает первое слово,
// // которое короче 7 символов 

// const res = arr1.find(elem => elem.length < 7)
// console.log(res);


// Объекты
// const user = {
//     name: 'Anatoliy',
//     lastname: 'Ushanov',
//     age: 29
// };
// console.log(user.name);
// console.log(user.age);

const products = [
    {
    id: 1,
    title: 'велосипед',
    price: 45000
    },
    {
    id: 2,
    title: 'самокат',
    price: 15000
    },
    {
    id: 3,
    title: 'лыжи',
    price: 25000
    },
    {
    id: 4,
    title: 'скейт',
    price: 13000
    },
    {
    id: 5,
    title: 'коньки',
    price: 7000
    }
    ]; 

//products.forEach(product => console.log(product.title))

// вызвать метод массива, который сформирует новый массив с 
// товарами, дешевле 20 тысяч 

// const arr123 = products.filter(product => product.price < 20000)
// console.log(arr123);

// вызвать метод массива и сформировать новый массив, который состоит из 
// объектов со свойствами title, price; 

const res = products.map(product => (
    {
        title: product.title, 
        price: product.price
    }
))
console.log(res);
