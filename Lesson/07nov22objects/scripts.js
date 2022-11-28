// DOM (Document Object Model), DOM-дерево

// let customWindow = {
// 	BOM: {
// 		location: {},
// 		screen: {},
// 		history: {},
// 	},
// 	JS: {
// 		Object: {},
// 		Array: {},
// 		String: {},
// 		Number: {},
// 	},
// 	document:{}
// }


// document – объект входа. 

// console.log(document)
// console.log(document.body.children)
// console.log(document.body.style)
// document.body.style.backgroundColor = "red";
// console.log(document.body.style)
// document.body.style.background = "red";
// document.body.style.cssText = 'color: red; font-size: 40px;';










// Методы поиска (получить элемент)
// querySelector и querySelectorAll // НУЖНО ЗАПОМНИТЬ
// document.querySelectorAll(css) - возвращает все элементы по css селектору.


// let elements = document.querySelectorAll('.todo-list li'); // возвращает массив
// console.log(elements)
// for (let elem of elements) {
//   console.log(elem.textContent);
// }


// querySelector
// elem.querySelector(css) возвращает первый элемент по css селектору.

// let todoList = document.querySelector('.todo-list'); // возвращает первый элемент по селектору
// let firstLiOnPage = document.querySelector('.todo-list li');
// подразумеваем, что элемент у нас на странице такой один
// console.log(todoList.children[3].textContent)







// Реакция на действия пользователя
// let todoList = document.querySelector('.todo-list');

// todoList.onclick = function(event) {
// 	console.log(this)
// 	console.log(event.target)
// };

// this VS event.target






// event.stopPropodation()




// addEventListener и removeEventListener // НУЖНО ЗАПОМНИТЬ
// element.addEventListener('eventName', functionName) - прослушка события

// let todoList = document.querySelector('.todo-list');

// todoList.addEventListener('click', showThisAndEventTarget);
// todoList.addEventListener('click', showHello);

// function showThisAndEventTarget(event) {
// 	console.log(this);
// 	console.log(event.target);
// };

// function showHello(event) {
// 	console.log('Hello');
// 	todoList.removeEventListener('click', showHello);
// };


// element.removeEventListener('eventName', functionName) - удаление прослушки события



// Для управления классами:
// className – строковое значение, удобно для управления всем набором классов.
// classList – объект с методами add/remove/toggle/contains, 
// удобно для управления отдельными классами.

// let todoList = document.querySelector('.todo-list');
// todoList.classList.add('blablabla');
// console.log(todoList.classList.contains('blablabla'));
// console.log(todoList.classList) // имеет blablabla
// todoList.classList.remove('blablabla');
// console.log(todoList.classList) // blablabla удален
// console.log(todoList.classList.contains('blablabla'));

// element.classList.toggle('active'); // add, remove, toggle

// function validatorEmail(isValid, inputElement) {
// 	if (isValid && inputElement.classList.contains('someChange')) {
// 		inputElement.classList.add('greenGood')
// 		inputElement.classList.remove('redError')
// 	}

// 	if (!isValid && inputElement.classList.contains('someChange')) {
// 		inputElement.classList.remove('greenGood')
// 		inputElement.classList.add('redError')
// 	}
// 	inputElement.classList.toggle('someChange');
// }






// Можно запомнить className (все классы элемента как строка)
// Так же можно запомнить classList (все классы как массив)
// И очень удобен classList.toggle('someClass') очень удобен
// чтобы не мучится с флагами и доп.функции


// function psevdoToggle(someClass) { // псевдо код
// 	if (this.hasClass(someClass)) {
// 		this.removeClass(someClass)
// 	} else {
// 		this.addClass(someClass)
// 	}
// }



// let todoList = document.querySelector('.todo-list');
// console.log(todoList.classList[1]);
// todoList.classList.toggle('active');
// console.log(todoList.className);
// todoList.classList.toggle('active');
// console.log(todoList.className);





// показать - спрятать
// 1) Получаем все элементы и сохраняем их в переменные
// let todoList = document.querySelector('.todo-list');
// let showHideBtn = document.querySelector('.button-show-hide');
// let testItem = document.querySelector('.test');

// // 2) Прикрепляем прослушку событий
// showHideBtn.addEventListener('click', showHideBlock); // что делает эта функция callback? эта прячет и показывает блок
// testItem.addEventListener('click', changeText); // это меняет текст например


// // 3) Описали функции для событий
// function showHideBlock(event) {
// 	todoList.classList.toggle('hidden-block'); // скрыть-показать список

// 	showHideBtn.classList.toggle('show-btn'); // изменить стиль кнопки
// 	showHideBtn.classList.toggle('hide-btn'); // изменить стиль кнопки
// }

// function changeText(event) {
// 	console.log('Смена текста');
// 	testItem.textContent = 'Уже купили';
// 	testItem.removeEventListener('click', changeText);
// }


// 1) querySelector - поиск элемента
// 2) addEventListener - прослушка
// 3) Описание callback обработчика события

// show-btn
// hide-btn

// стилизовать - убрать стиль
// поменять текст
