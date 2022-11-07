// // Frontend
// // rec9IwaOTtTC3Vodt

// // First level: 02.11.2022

// // 1)
// // Напишите функцию, которая поверхностно сравнивает два объекта.


// //     Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

// let isEqualOrientFirst = (obj1, obj2) => {
//        for (const key in obj1) {
//               if (key in obj2) {
//                 if (obj1[key] !== obj2[key]) {
//                         return false
//                 }
//               } else {
//                      return false
//               }
//         }
//        return true
// }

// let isEqual = (obj1, obj2) => {
//        return isEqualOrientFirst(obj1, obj2) && isEqualOrientFirst(obj2, obj1) 
// }

// const data = { a: 1, b: 1 };
// const data1 = { a: 1, b: 1, c: 34 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false
// console.log(isEqual(data, data1)); // false

// 2)
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

// let intersection = (obj1, obj2) => {
//        let result = {};

//        for (const key in obj1) {
//               if (key in obj2 && obj1[key] === obj2[key]) {
//                      result[key] = obj1[key];
                     
//               }
//        }
//        return result;
// }

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }



// необязательная задача с урока

// функция которая принимает объект и вторым аргументом массив ключей которых надо удалить
// из этого объекта
 // { a: 1, b: 2 }
        // ({ a: 1, b: 2 }, 'b') => { a: 1 }
        //deletedProps - это сколько угодно ключей которые нужно удалить из объекта 
        
        
let without = (obj, deletedProps) => { //[b, c]
       let newObject = {};

       for (let key in obj) {
              if (!deletedProps.includes(key)) {
                     newObject[key] = obj[key];
              }
       }

       return newObject;
};

console.log(without({ a: 1, b: 2 }, ["b"])); 

//