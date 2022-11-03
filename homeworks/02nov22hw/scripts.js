// Frontend
// rec9IwaOTtTC3Vodt

// First level: 02.11.2022

// 1)
// Напишите функцию, которая поверхностно сравнивает два объекта.


//     Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true


// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

// 2)
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }


// необязательная задача с урока

// функция которая принимает объект и вторым аргументом массив ключей которых надо удалить
// из этого объекта
 // { a: 1, b: 2 }
        // ({ a: 1, b: 2 }, 'b') => { a: 1 }
        //deletedProps - это сколько угодно ключей которые нужно удалить из объекта 
        
        
// let without = (obj, ...deletedProps) => {
//     let newObject = {};

//     for (const key in obj) {
//         if (key !== deletedProps) {
//             newObject[key] = obj[key];
//         }
//         deletedProps.forEach(element => {
//             if (key !== element) {
//                 newObject[key] = obj[key];
//             }
//         });
//     }
//     return newObject;
// };

// console.log(without({ a: 1, b: 2 }, 'b')); 