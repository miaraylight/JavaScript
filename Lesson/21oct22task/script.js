// // [__1__] Вывести приветсвующее модальное окно

// let name1 = prompt('Enter your name')
// alert('Hello ' + name1 + '!'); 


// // [__2__] Сделать так чтобы имя всегда начиналась с заглавной

// let name = prompt('Как вас зовут') 
// let newName = name[0].toUpperCase() + name.slice(1); 
// alert('Hello ' + newName + '!')


// // [__3__] Если в массиве arr уже существует имя newName,
// // то в alerte возвращаем 'This name exist'
// // иначе добавляем имя newName в конец массива

// let arr = ['Ivan', 'Anya', 'Mia']
// let newName = prompt('Какое имя вы хотите добавить?')

// function checkName(name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() == name.toLowerCase()) {
//       return alert("This name exist");
//     }
//   }
//   arr.push(name)
// }

// console.log(arr)

// checkName(newName)


// // Функцию выше переделать с помщью includes

// let arr = ['Ivan', 'Anya', 'Mia']
// let newName = prompt('Какое имя вы хотите добавить?')

// function checkNameIncludes(name) {
//     if (arr.includes(name)) {
//         return alert('This name exist')
//     }
//     arr.push(name)
// }

// console.log(arr)

// checkNameIncludes(newName)



// // [__4__] Добавление элементов к массиву 

// let nums = [2, 4, 6, 8]//add 10 to arr
// // nums.push(10)//мутирует массив
// let newArr = nums.concat(10)
// console.log(nums);
// console.log(newArr);



// // [__5__] Как добавить в начала массива элемент с помощью concat

// let nums = [2, 4, 6, 8]//add 10 to arr
// let newArr = [10];
// let array = newArr.concat(nums);
// console.log(array);


// [__6__] Удалить буквы b c d использую метод splice

// let arr = ['a', 'b', 'c', 'd', 'e']
// let deleted = arr.splice(1, 3)
// console.log(deleted);
// console.log(arr);

// // [__7__] Удалить буквы b c d использую метод splice. 
// //Вместо букв были цифры 2 34

// let arr = ['a', 'b', 'c', 'd', 'e']
// let deleted = arr.splice(0, 2, 1,2,3) //splice(с какого места начинать дейсвие, со сколькими элементами возпроизвести действие)

// console.log(deleted);
// console.log(arr);

// [__8__] Из элементов собрать предложение

// let message = ['Hello!', 'My', 'name', 'is', 'Mia']
// let name = message.splice(4, 1, "Arsen")
// let str = message.join(' ')
// console.log(str);


// [__9__] // Выводить пользователю строку из массива. Спрашивать какое слово 
//по очереди он хочет удалить. 
// Спрашивать какое слово он хочет добавить вместо удаленного и в итоге выводить полученную строку из массива. 

// let message = ['Hello!', 'My', 'name', 'is', 'Mia']

// let index = +prompt('Какое слово по очереди хотите удалить?' + message.join(' '))
// index--

// let str = prompt('Какое слово вы хотите использовать вместо удаленного?')

// message.splice(index, 1, str)

// console.log(message.join(' '));