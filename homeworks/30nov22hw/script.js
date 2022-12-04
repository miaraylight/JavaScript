// First level: Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода. 

// Реализуйте данное приложение через textarea и событие input.

const textArea = document.querySelector('#comment');

if (localStorage.getItem('value')) {
    textArea.value = localStorage.getItem('value')
}

textArea.addEventListener('input', () => 
localStorage.setItem('value', textArea.value)
)