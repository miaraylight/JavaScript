// написать скрипт, который формирует массив из только четных чисел 
const numbers = [12, 4, 3, 2, 5, 43, 2, 34, 4, 100]; 

// const res = numbers.filter(elem => elem % 2 === 0);
// console.log(res);

// метод REDUCE

// используя reduce найти сумму чисел массива

// const result = numbers.reduce((prev, item) => prev + item);
// // (12, 4) => 16
// // (16, 3) => 19
// // (19, 2) => 21 ...

// console.log(result);

// используя reduce найти сумму четных чисел 

// const res1 = numbers.filter(elem => elem % 2 === 0).reduce((prev, item) => prev + item)

// console.log(res1);

// const res2 = numbers.reduce(
//     (prev, item) => prev + ((item % 2 === 0) ? item : 0), 
//     0
// );
// console.log(res2);

// используя reduce найти наибольшее число в массиве и вывести его 

// const res3 = numbers.reduce((prev, item) => 
//     (prev > item ? prev : item)
// );

// console.log(res3);

// function reduce(array, callback, initial) {
//     let last_call = initial;

//     for (let i = 0; i < array.length; i++) {
//         last_call = callback(last_call, array[i]);      
//     }

//     return last_call;
// }

// const result = reduce(numbers, (prev, item) => 
// (prev > item ? prev : item), 0)

// console.log(result);



// Объекты

const products = [
    {
    id: 1,
    title: 'велосипед',
    price: 45000,
    marks: [4, 3, 5, 3]
    },
    {
    id: 2,
    title: 'ролики',
    price: 25000,
    marks: [4, 3, 5, 5]
    },
    {
    id: 3,
    title: 'самокат',
    price: 15000,
    marks: [3, 5, 3]
    },
    {
    id: 4,
    title: 'сноуборд',
    price: 270000,
    marks: [4, 3, 5]
    },
    {
    id: 5,
    title: 'лыжи',
    price: 30000,
    marks: [4]
    }
    ]; 

    // используя методы массивов создайте массив из названий товаров 

    // [--1--]
// let res = products.map(item => item.title)
// console.log(res);

// // [--2--]деструктуризация 
// const titles = products.map(product => {
//     const {title} = product;
//     return title;
// })
// console.log(titles);

// //[--2a--] 
// const titles1 = products.map(({title}) => {
//     return title
// })
// console.log(titles1);

// //[--2b--]
// const titles2 = products.map(({title}) => title)
// console.log(titles2);

// const titlesPrice = products.map(({title, price}) => `${title} - ${price}`)
// console.log(titlesPrice);




// const {id} = products; //проверить
// console.log(id);


// написать скрипт, который формирует массив из объектов с товарами
// которые стоят дешевле 26000 

// let lowerPrice = products.filter(({price}) => price < 26000)
// console.log(lowerPrice);



//найти общую сумму товаров используя методы массивов 

// let sum = products.reduce((prev, product) => prev + product.price, 0);
// // (0, {1}) => 0 + product.price
// // (45000, {2}) => 45000 + product.price...
// console.log(sum);

// let count = products.reduce((prev) => prev+1, 0)
// console.log(count);



// используя методы массивов найти самый дорогой товар 

// const res = products.reduce((prev, item) => 
//     prev.price > item.price ? prev : item 
// )
// console.log(res);


// используя методы массивов 
// написать процесс, который позволит сформировать массив
// из объектов с названием, ценой и средней оценкой 

// let res = products.map(({title, price, marks}) => ({
//     title, price,
//     avg_mark: marks.reduce((a, b) => a + b) / marks.length
// }))

//console.log(res);

// без деструктуризации
// let res = products.map(product => (
//     {
//         title: product.title,
//         price: product.price,
//         avg_mark: marks.reduce((a, b) => a + b) / marks.length
//     }
// )) 


// еще короче запись
// const result = products.map(({marks, ...product}) => (
//     {
//     ...product,
//     avg_mark: marks.reduce((a, b) => a + b) / marks.length
//     }
//     )); 






const product = [
    {
    id: 1,
    title: 'велосипед',
    price: 45000,
    count: 3,
    marks: [4, 3, 5, 3]
    },
    {
    id: 2,
    title: 'ролики',
    price: 25000,
    count: 5,
    marks: [4, 3, 5, 5]
    },
    {
    id: 3,
    title: 'самокат',
    price: 15000,
    count: 2,
    marks: [3, 5, 3]
    },
    {
    id: 4,
    title: 'сноуборд',
    price: 270000,
    count: 0,
    marks: [4, 3, 5]
    },
    {
    id: 5,
    title: 'лыжи',
    price: 30000,
    count: 1,
    marks: [4]
    }
    ]; 

// используя методы массивов найти общую стоимость всех товаров 

const all = product.reduce((prev, item) => prev + (item.count * item.price), 0)
console.log(all);

const allDestr = product.reduce((prev, {price, count}) => prev + price * count, 0)
console.log(allDestr);