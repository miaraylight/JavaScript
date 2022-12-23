// используя функцию createPost отображайте данные, пришедшие с сервера, 
// в интерфейсе 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp => resp.json())
//     .then(({title, body}) => createPost(title, body))

// создать функцию, которая получает в качестве аргумента
// получает название поста и добавляет в элемент #root 
// параграф с названием поста

const root = document.querySelector('#root')
const addBtn = document.querySelector('.add-btn')
const form = document.querySelector('.form')
const form2 = document.querySelector('.form2')


// Добавить форму с полями заголовок (input) текст (textarea) и id пользователя (input)
// при отправке формы данные из нее должны выводиться в консоль 

form2.addEventListener("submit", e => {
e.preventDefault()
const {title, text, user_id} = e.target

post(title.value, text.value, user_id.value)

console.log(title.value, text.value, user_id.value)

title.value = ''
text.value = ''
user_id.value = ''

})

// создать функцию, которая получает в качестве аргументов title, body, user_id 
// и отправляет эти данные на сервер для добавления нового поста 

function post(title, text, user_id) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: title,
        body: text,
        userId: user_id,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then(({title, body}) => createPost(title, body));
}


// получив данные с сервера добавьте их в массив posts 
// и вызовите rerender, предварительно создав его 


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => resp.json())
    .then(({title, body, id}) => {
        post(title, body, id)
        rerender(title, body)
    })


function rerender(title, body) {
    createPost(title, body)
}



// function createPost(title) {
//     const titleP = document.createElement('p')
//     titleP.innerText = title
//     root.append(titleP)
// }

// createPost('Mia')






// доработать функцию createPost таким образом, чтобы функция
// получала два аргумента (заголовок и текст поста)
// и формировала следующую верстку

/*
<div>
<p>Заголовок</p>
<p>Текст</p>
</div>
*/ 

function createPost(title, body) {
    const container = document.createElement('div')
    const titleP = document.createElement('p')
    const bodyP = document.createElement('p')

    bodyP.innerText = body
    titleP.innerText = title

    titleP.classList.add('subheader')
    container.classList.add('postContainer')
    container.append(titleP, bodyP)
    root.append(container)
}

// добавить параграфу с заголовком класс subheader и увеличить у него размер текста до 30 px 

// добавить скрипт, который позволит при отправке формы выводить в консоль
// значение указанного id 

// доработайте процесс таким образом, чтобы при отправке формы в интерфейс 
// добавлялся пост с указанным id 

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     const id = e.target.id.value

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(resp => resp.json())
//     .then(({title, body}) => createPost(title, body))

//     e.target.id.value = ''
// })





// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));












