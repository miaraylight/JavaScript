// const arr = {
//     data: [12, 5]
// }
// //localStorage.setItem('test_item', JSON.stringify(arr));

// console.log(JSON.parse(localStorage.getItem('item_item')));

//реализовать процесс в js, который при отправке формы выводит 
//содержимое поля ввода в консоль 
//let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

// доработать js таким образом, что бы указанное значение
// добавлялось в массив в localStorage 

// write_local - получает в качестве аргумента массив и записывает
// его в localStorage под ключем tasks

// read_local - не получает аргументов и возвращает из localStorage
// значение, преобразованное в массив 

// написать функцию rerender которая
// 1) очищает содержимое ".tasks" 
// 2) выводит параграфы с текстом задачи в элемент ".tasks" 

// if (tasks === null) {
//     tasks = [];
// }


function write_local(tasks) {
    localStorage.setItem('task', JSON.stringify(tasks))
}

function read_local() {
    return JSON.parse(localStorage.getItem('task')) ?? [];
}

// let tasks =  read_local();

const form = document.querySelector(".addTask");
const tasks_container = document.querySelector('.tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    
    // tasks.push({id: Date.now(), task});
    write_local([...read_local(), {id: Date.now(), task}]);
    // localStorage.setItem('tasks', JSON.stringify(tasks))
    e.target.task.value = "";
    rerender();
});



function rerender() {
    tasks_container.innerText = "";
    if (read_local().length === 0) {
        const p = document.createElement('p');
        p.innerText = 'Никаких дел нет!';
        tasks_container.append(p);
    }else{
        read_local().forEach(({task, id}) => {
        // const p = document.createElement('p');
        // p.innerText = item.task;
        // tasks_container.append(p);
        tasks_container.append(createCard(task, id));
    });
    }  
}
rerender();

// вынести процесс создания карточки с делом в функцию createCard

// данная функция получает в качестве аргумента название дела и возвращает
// параграф с названием дела внутри

// createCard('выучить гриды') -> <p>выучить гриды</p> 

function createCard(task, id) {
    const taskDiv = document.createElement('div');
    const title = document.createElement('p');
    const delBtn = document.createElement("button");
    

    delBtn.addEventListener("click", (e) => {
        deleteCard(id);

        // доработать процесс таким образом, чтобы при нажатии на кнопку "Удалить"
        // в консоль выводилась строка "Удалить"
        console.log(`"Удалить" ${id}`);
    })

    delBtn.innerText = "Удалить"
    title.innerText = task;

    taskDiv.append(title, delBtn);
    return taskDiv; 
}


// создать функцию, которая удаляет дело из карточки
// функция получает id карточки в качестве аргумента

// 1) используя метод filter формируем новый массив
// со значениями, у которых id не равен переданному

// 2) вызываем write_local и передаем массив из 1 пункта

// 3) вызвать rerender 
function deleteCard(idCard) {
    write_local(read_local().filter(({id}) => id !== idCard));
    rerender();
}

