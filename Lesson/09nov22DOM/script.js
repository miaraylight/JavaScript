// Другие атрибуты:
// element.getAttribute(attrName); // получить атрибут
// getAttribute - можно запомнить

// let link = document.querySelector('.link');
// let linkHref = link.getAttribute('href');
// console.log(linkHref);
// console.log(link.textContent)
// console.log(link.getAttribute('href'))
// console.log(link.getAttribute('class'))
// псевдокод
// let aTag = {
// 	href: "https://www.w3schools.com",
// 	getAttribute: attrName => this[attrName]
// } 




// let link = document.querySelector('.link');
// link.setAttribute('href', '#test'); 

// 1 аргумент какое свойство объекта
// 2 каким значением заменить
// console.log(link.getAttribute('href'))

// element.getAttribute(attrName);
// element.hasAttribute(attrName);
// element.removeAttribute(attrName);











// innerHTML и outerHTML

// let todoList = document.querySelector('.todo-list');
// console.log(todoList.children)

// for (item of todoList.children) {
// 	item.textContent = 'привет'
// }




// console.log(todoList.innerHTML)
// console.log(todoList.textContent)
// todoList.innerHTML = '<div>привет</div>'; // заменит вложенный в элемент html
// todoList.outerHTML = '<div>привет</div>'; // элемент html и всё вложенное в него





// button disabled and input value

// Присваиваем элементы переменным
// let clickMeBtn = document.querySelector('.clickMe');
// let importantInput = document.querySelector('.importantInput');

// // Вешаем события
// clickMeBtn.addEventListener('click', toggleDisabled);
// clickMeBtn.addEventListener('click', resetInputValue);

// // Описываем функции для событий
// function toggleDisabled(event) {
// 	if (importantInput.hasAttribute('disabled')) {
// 		importantInput.removeAttribute('disabled');
// 	} else {
// 		importantInput.setAttribute('disabled', true);
// 	}
// }
// аналогично
	// if (importantInput.disabled) {
	// 	importantInput.disabled = false
	// } else {
	// 	importantInput.disabled = true
	// }
// }

// function resetInputValue(event) {
// 	importantInput.value = 'sad';
// }















// tabs

// let list = document.querySelector('.tabs ul'); // здесь сам элемент ul, содержащий cписок
// const listElements = document.querySelectorAll('.tabs ul li'); // здесь массив <li>
// const infos = document.querySelectorAll('.info'); // здесь массив divs c классом info

// list.addEventListener('click', function(event) {
// 	console.log(event.target)
// 	if (event.target.dataset.index) {
// 		console.log(event.target.dataset.index)
// 	}
// 	// showInfo(event.target.dataset.index)
// })

// listElements.forEach((item, index) => {
// 	item.addEventListener('click', (event) => {
// 		console.log(event.target.dataset.index) // data-что угодно...
// 		// showInfo(event.target.dataset.index)
// 	});
// });




// функция showInfo должна
// выбирать активный tab и выделять его через active класс
// так же она должна показывать соотвествующий табу ей контент
// остальное нужно деактивировать active и скрывать контент соотвественно
