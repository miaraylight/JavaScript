//Создайте массив arr = ['a', 'b', 'c', 'd'] 
//и с его помощью выведите на экран строку 'a+b, c+d' 

// let arr = ['a', 'b', 'c', 'd'];

// let concatting = '${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}';





// console.log(concatting); // заполнение строки символами

// let arrayToStringConcat = arr => {
//     let str = "";
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         str = str + element;
        
//     }
//     return str;
// }

// let even = num => num % 2 == 0; //функция проверки крастности трем

// let arrayToStringConcat = arr => {
//     let str = "";

//     for (let i = 0; i < arr.length; i++) {

//         const element = arr[i];
        
//         if (even(i+1)) {
//             //console.log(element);
//             str += `, $(element)`;
//         } else {
//             str += element;
//         }
        
//     }
//     return str;
// }



// console.log(even(9));

// console.log(arrayToStringConcat(['a', 'b', 'c', 'd', 'e', 'g']));



// let strArr = ['a','b','c','d','b','c','d','b','c','d'];

// let even = num => num%2==0;
// let multThree = num => num%3==0;

// let arrToStrConcat = function(arr){
// let str = '';

// for(let i = 0; i<arr.length;i++){
// const element = arr[i];



// if(even(i+1)){
// str+=`${element}, `;
// }else{
// str+=element;
// }
// }

// return str;

// }

// console.log(arrToStrConcat(strArr)); 

// Создайте массив arr с элементами 2, 5, 3, 9. 
//Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result. 
//Выведите на экран значение этой переменной. 

// let arr = [2, 5, 3, 9];

// let res = (arr[0] * arr[1]) + (arr[2] * arr[3])
// console.log(res)
// let arrToCalc = arr => {
//     let acum = 0;
//     let arr1 = [];
//     let arrToMult = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 !== 0) {
//             arr1.push([arr[i - 1], arr[i]])
//         }
//     }
//     console.log(arr1)
//     for (let i = 0; i < arr1.length; i++) {
//         arrToMult.push(arr1[i][0] * arr1[i][1])
//     }
//     console.log(arrToMult)
//     for (let i = 0; i < arrToMult.length; i++) {
//         acum += arrToMult[i]
//     }
//     return acum;
// }
// //[[2,5],[3,9]] 
// arrToCalc([2, 5, 3, 9])
// console.log(arrToCalc([2, 5, 3, 9, 2, 3])) 




//В переменной date лежит дата в формате '2025-12-31'. 
//Преобразуйте эту дату в формат '31/12/2025'.

// let date = '2025-12-31';

// let dateArray = date.split("-");

// console.log(dateArray);

// let newFormat1 = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;

// console.log(newFormat1);



// //2 через методы

// let date = '2025-12-31';

// let dateArray = date.split("-");

// dateArray.reverse();
// let dateUpdate = dateArray.join("/")


// console.log(dateUpdate);

// //3 создаем форматирующую функцию

// let formateDate = (str) => {
//     let dateArray = str.split("-");
//     dateArray.reverse();
//     let dateUpdate = dateArray.join("/")
//     return dateUpdate;
// }

// console.log(formateDate('2025-12-31'));


// //4 коротко о цепочке методов
// let formateDate = (str) => str.split("-").reverse().join("/");

// console.log(formateDate('2025-12-31'));

// //5 при необходимости менять какое либо значение
function formatDateAndChangeData(string, detailForUpd) {
  let reversedArrayDate = string.split("-").reverse();
  let newArrayDate = [];
  for (let i = 0; i < reversedArrayDate.length; i++) {
    if (detailForUpd[i]) {
      newArrayDate.push(detailForUpd[i]);
    } else {
      newArrayDate.push(reversedArrayDate[i]);
    }
  }
  return newArrayDate.join("/");
}
console.log(formatDateAndChangeData("2012-10-21", [false, 08, false]));
console.log(formatDateAndChangeData("2012-10-21", [false, false, 2013]));
console.log(formatDateAndChangeData("2012-10-21", [11, 11, 2013])); 


// Дана переменная str, в которой хранится какой-либо текст. // Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, // то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. // В противном случае в переменную result запишем содержимое переменной str. 

// let cutString = (string, max) => {
//     if (string.length <= max) {

//         return string;
        
//      }

//     return string.slice(0, max) + "...";
// }

// console.log(cutString("hello world with", 13));





