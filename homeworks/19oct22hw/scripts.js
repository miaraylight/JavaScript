//First level: 1. Напишите следующую функцию, которая принимает некий массив данных. 

//     если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве

//     если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

//     во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

function getElementTypes(arr) { //функция для проверки типа элементов в массиве
  if (typeof arr[0] == 'string') {
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] != 'string') {
        return 'undefined';
      }
    }
    return 'string';
  } else if (typeof arr[0] == 'number') {
    
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] != 'number') {
        return 'undefined';
      }
    }
    return 'number';
  }

  return 'undefined';
}

console.log(getElementTypes(['1', '2', '5']));  //string
console.log(getElementTypes([1, 2, 5]));       //number
console.log(getElementTypes([1, '2', '5']));  //undefined





let checkHighestValue = (smthg) => {
  let max = 0;
  let count;
  let str;

  if (getElementTypes(smthg) == "string") {
    for (let i = 0; i < smthg.length; i++) {
      max = smthg[0].length;
      if (smthg[i].length > max) {
        max = smthg[i].length;
        str = smthg[i];
        count = i;
      }
    }
    return [str, max, count];
  } else if (getElementTypes(smthg) == "number") {
    for (let i = 0; i < smthg.length; i++) {
      if (smthg[i] > max) {
        max = smthg[i];
        count = i;
      }
    }
    return [max, count];
  } else {
    return ["неверный тип данных в массиве", smthg.length];
  }
};

console.log( checkHighestValue(['mia', 'sirokko', '1234567']));  //["1234567", 7, 2 ]
console.log(checkHighestValue([1, 178, 999, 62]));  //[ 999, 2 ]
console.log(checkHighestValue(['0', ['rose', 001], 55555])); //[ "неверный тип данных в массиве", 3 ]



//     (Необязательная задача) Напишите функцию которая будет принимать три массива с любыми данными и объединять их в один, новый массив и возвращать его. В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте только строки, затем цифры, затем булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее.


// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

let toHardThreeOrder = (arr1, arr2, arr3) => {

    let newArr = [].concat(arr1, arr2, arr3);

    let resultString =[];
    let resultNumber = [];
    let resultBoolean = [];
    let resultOthers = [];

    for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i] == 'string') {
            resultString.push(newArr[i])
        } else if (typeof newArr[i] == 'number') {
            resultNumber.push(newArr[i])
        } else if (typeof newArr[i] == 'boolean') {
            resultBoolean.push(newArr[i])
        } else {
            resultOthers.push(newArr[i])
        }
        
    }

    return resultString.concat(resultNumber, resultBoolean, resultOthers)
}

let result = toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])

console.log(result); //[ "привет", "js", "java", "script", "redButton", 65, 3, true, false, [] ]

