/* 1. Ищем каждую кнопку по ее id 
2. На каждую вешаем слушатель события - клика 
3. В обработчике события создаем действие, которое позволит изменить цвет */ 

//[--1--]

// let redButton = document.querySelector('#red');
// let greenButton = document.querySelector('#green');
// let blueButton = document.querySelector('#blue');
// let imageButton = document.querySelector('#img');

// redButton.addEventListener('click', () => {
//     document.body.style.background = 'red'
// });

// greenButton.addEventListener('click', () => {
//     document.body.style.background = 'green'
// });

// blueButton.addEventListener('click', () => {
//     document.body.style.background = 'blue'
// });

// imageButton.addEventListener('click', () => {
//     document.body.style.background = 'url(./media/img.jpg'
// });


// [--2--]

// const buttons = document.querySelectorAll('.item');
// console.log(buttons); //массивоподобный список узлов

// const buttonsArr = Array.from(buttons) // создаем массив с помощью Array.from()

// buttonsArr.map(buttons => {
//     buttons.addEventListener('click', () => {
//         let id = buttons.getAttribute('id')
//         document.body.style.background = id;
//     })
// });

// buttons.forEach(buttons => { // forEach работает с массивоподобными узлами
//     buttons.addEventListener('click', () => {
//         let id = buttons.getAttribute('id')
//         document.body.style.background = id;
//     })
// });

// [--3--] 
// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный. 

