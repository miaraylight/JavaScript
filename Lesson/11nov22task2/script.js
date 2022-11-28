const main = document.querySelector('main')

//[--1--]

// const book = { 
//     author : "Пушкин", 
//     name : "Капитанская дочка", 
//     count : 500 
// }

// // innerHTML

// main.innerHTML = `
//     <div class='book'>
//         <h1>Название: ${book.name}</h1>
//         <p>Автор: ${book.author}</p>
//         <p>Количество страниц: ${book.count}</p>
//     </div>    
// `

//[--2--]
// const books = [
//     {
//         author: "Пушкин",
//         name: "Капитанская дочка",
//         count: "500"
//     },
//     {
//         author: "Толстой",
//         name: "Война и мир",
//         count: "1000"
//     },
//     {
//         author: "Достоевский",
//         name: "Преступление и наказание",
//         count: "700"
//     }
// ] 

// main.innerHTML = `
//     <div>
//         <h1>Название: ${books[0].name}</h1>
//         <p>Автор: ${books[0].author}</p>
//         <p>Количество страниц: ${books[0].count}</p>
//     </div>
//     <div>
//         <h1>Название: ${books[1].name}</h1>
//         <p>Автор: ${books[1].author}</p>
//         <p>Количество страниц: ${books[1].count}</p>
//     </div>
//     <div>
//         <h1>Название: ${books[2].name}</h1>
//         <p>Автор: ${books[2].author}</p>
//         <p>Количество страниц: ${books[2].count}</p>
//     </div>
// `

//[--3--]
const books = [
    {
        id: 1,
        author: "Пушкин",
        name: "Капитанская дочка",
        count: 500
    },
    {
        id: 2,
        author: "Толстой",
        name: "Война и мир",
        count: 1000
    },
    {
        id: 3,
        author: "Достоевский",
        name: "Преступление и наказание",
        count: 700
    }
] 
//вывести все объекты с соот-й разметкой
// books.map(book => {
//     main.innerHTML += `
//         <div>
//             <h1>Название: ${book.name}</h1>
//             <p>Автор: ${book.author}</p>
//             <p>Количество страниц: ${book.count}</p>
//         </div>
//     `
// })

//вывести только те книги, количество страниц которых >600

// books.filter(book => {
//     return book.count > 600
// }).map(book => {
//     main.innerHTML += `
//         <div>
//             <h1>Название: ${book.name}</h1>
//             <p>Автор: ${book.author}</p>
//             <p>Количество страниц: ${book.count}</p>
            
//         </div>
//     `
// })


//[--4--]
function showBooks() {
    books.map(book => {
    main.innerHTML += `
        <div class='book book-${book.id}'>
            <h1>Название: ${book.name}</h1>
            <p>Автор: ${book.author}</p>
            <p>Количество страниц: ${book.count}</p>
            <button class='delete-btn' id='${book.id}'>Удалить</button>
        </div>
    `
})
}
showBooks()

//  Удаление
const buttons = document.querySelectorAll('.delete-btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const idAtr = button.getAttribute('id');
        console.log(idAtr);
        const delBook = document.querySelector(`.book-${idAtr}`)
        // console.log(delBook);
        delBook.remove()
    })
})