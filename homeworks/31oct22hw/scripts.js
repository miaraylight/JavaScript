// First level: 31.10.2022

// 1)
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
   name: 'John',
   age: 30,
   gender: 'M'
};


let countProp = object => {
    let counter = 0;
    for (let key in object) {
        key = 1;
        counter += key;
    }
    return counter;
}
console.log( countProp(user) ); // 3

// Second level: 

// Максимальная зарплата
// У нас есть объект salaries с зарплатами:

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.

let topSalary = (salaries) => {
    let top = null;
    let max = 0;
    for (const key in salaries) {
        
        if (salaries[key] > max) {
            max = salaries[key]
            top = key;
        }
    }
    return top;
}

console.log(topSalary(salaries));
