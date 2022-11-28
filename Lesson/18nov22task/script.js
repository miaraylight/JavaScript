//parseInt('1') = 1

// const randomColor = getRandomColor2();
// function getRandomColor2() {
//   const rndByte = () => Math.floor(Math.random() * 256);
//   return `rgb(${rndByte()},${rndByte()},${rndByte()})`;
// }

/*
    rgb([0-256], [0-256], [0-256])
    Math.random - (0, 1] * 256 - [0, 256)
    Math.floor() - округляет до меньшего
    HEX - 16ричное. 16*16
    "16000" - parseInt("16000") - 16000
    "string" - method String->Int - integer
*/

const cars = [ 
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 }, 
    { mark : "BMW", model : "M3", year : "2002", price : 18000 }, 
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 }, 
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 }, 
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 }, 
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 }, 
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 }, 
] 

// 1. Вернуть массив с маркой и моделью машины. ["Mercedes-Benz S600", "BMW M3"] 

// const res1 = cars.map(item => `${item.mark} ${item.model}`)
// console.log(res1);
// const res1a = cars.map(({mark, model}) => `${mark} ${model}`)
// console.log(res1a);
// const res1b = cars.map( item => item.mark + " " + cars.model)
// console.log(res1b);

// 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет // объединенная строка `Марка Модель` и все остальные свойства // [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 }, // { markModel : "BMW M3", year : "2002", price : 18000 } ] 

// const res2 = cars.map(item => (
//     {
        
//         markModel : `${item.mark} ${item.model}`,
//         ...item,
//     }
//         ))

// console.log(res2);

// const res2a = cars.map(({...item}) => {
//     return {
//         markModel : `${mark} ${model}`,
//         price,
//         year
//     }
// })

// console.log(res2a);

// const res2b = cars.map(({mark, model, ...rest}) =>{
//     return {
//         markModel : `${mark} ${model}`,
//         ...rest
//     } 
    
// })


// Задача2. Посчитать среднюю цену всех автомобилей // средняя цена = сумма всех цен / количество автомобилей 

// const avgPrice = cars.reduce((prev, car) => prev + car.price,0) / cars.length

//math.round - округление числа до ближайщего целого
//toFixed(2) - убирает числа после запятой

// console.log(avgPrice.toFixed(2));
// console.log(Math.round(avgPrice));

// let sum = 0; // initialValue from reduce
// for (let i = 0; i < cars.length; i++) {
//     sum += cars[i].price;   
// }
// console.log(sum/cars.length);



// Задача 3. Вернуть массив машин, которым меньше 20 лет. 

// const res3 = cars.filter(elem => 2022 - elem.year < 20)

// //moment.js - библиотека
// const date = new Date('11/18/2005') // UTC
// const today = Date.now() // seconds from 1 jan 1970

// const actualYear = new Date().getFullYear()
// const res3b = cars.filter(({year}) => actualYear - year < 20)
// console.log(date);
// console.log(actualYear);
// console.log(today);
// console.log(res3b);



const users = [
    { name: "Arsen", bDay: "03/03/1998" }, 
    { name: "Ivan", bDay: "10/25/1990" }, 
    { name: "Alex", bDay: "07/05/1995" }, 
    { name: "Kostya", bDay: "02/12/2005" }, 
    { name: "Max", bDay: "05/07/2001" }, 
    { name: "Ann", bDay: "01/15/2002" }, 
    { name: "Julia", bDay: "09/13/2003" }, 
    { name: "Oksana", bDay: "10/25/2001" },
] 

// Кто из пользователей старше 20? Для след. года тоже должно работать 


// const adult = users.filter(({bDay}) => new Date().getFullYear() - new Date(bDay).getFullYear() > 20)

// console.log(adult);


// Задача4. Отсортировать массив с машинами по цене (от меньшей к большей) 

const sortByPrice = cars.sort((a, b) => 
a.price - b.price)
console.log(sortByPrice);

/*
    sort(cb) - позволяет отсортировать массив 
    если вызывать без коллбека, отсортирует по алфавиту
*/
// const names = ['max', 'arsen', 'andrey', 'julia']
// const sorted = names.sort()
// //console.log(sorted);

// const nums = [40, 15, 28] //побитовая сортировка
// const sortedNums = nums.sort()
// //console.log(sortedNums)

// const res = nums.sort((a, b) => a-b)
// console.log(res);

/*
    sort(cb) - позволяет отсортировать массив
    если вызывать без коллбэка, отсортирует по лингвистическим правилам 
*/

// const names = ["Max", "Arsen", "Julia", "Andrey"]

// const sortedNames = names.sort() //
// console.log(sortedNames) // 

// const nums = [1, 20, 5, 15, 32]

// const sortedNums = nums.sort((a, b) => a - b) // если хотим отсортировать числа от меньшего к большему a -b
// // const sortedNums = nums.sort((a, b) => b - a) // если хотим отсортировать от большего к меньшему b - a
// сonsole.log(sortedNums)

// const nums1 = [5, 3, 4]
// const sortedNums1 = nums1.sort((a, b) => {
//     console.log(`Сравнение ${a} ${b}`)
// })
// console.log(sortedNums1)
/*
    1. a = 5, b = 3
    if(a > b) - меняем местами a и b
    if(a == b) - все остается на своих местах
    if(a < b) - 
    2. a = 3, b = 1
    if(a > b) - меняем местами b и a 
*/

/*
 nums.sort((a,b) => {
    if(a > b) - b встает на первое место, иначе все остается так же //  1 > 20
    if(a == b) - порядок не меняется
    if(a < b) - a встает на первое место, 1 < 20 [1, 20]
    a - b // > 0  
 })
*/

// [100, 200, 5, 300, 400]

// [1, 15, 20, 32, 5]

// 1 > 15. 
// 2 >
// 3 > 
// 4
// 5
