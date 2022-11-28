

// 1)
// Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// // Заблокировать Разблокировать - 
// // Какой-то текст! - input 


const blockBtn = document.querySelector('.block');
const unblockBtn = document.querySelector('.unblock');
const input = document.querySelector('#input')


const blockUnblock = () => {
    // if (input.disabled) {
    //     input.disabled = false
    // } else {
    //     input.disabled = true
    // }

    input.disabled = !input.disabled;  
}
blockBtn.addEventListener('click', blockUnblock);
unblockBtn.addEventListener('click', blockUnblock);


// 2)
// Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent

// Заголовок, не поменяется.

// Абзац, поменяется.

// Абзац, поменяется.

// Абзац, поменяется.

const paragraph = document.querySelectorAll('p')

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].textContent = i;
    
}