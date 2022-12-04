
// добавление/удаление
const products = document.querySelector('.products');
const add_form = document.querySelector('.add_form');


let data = [
    {
        id: 1,
        title: 'Велосипед',
        price: 45000,
    },
    {
        id: 2,
        title: 'Ролики',
        price: 25000,
    },
    {
        id: 3,
        title: 'Самокат',
        price: 15000,
    },
];

add_form.addEventListener('submit', (event)=>{
    event.preventDefault(); // не отправляет дданные в форме на сервер
    const title = add_form.title.value;
    const price = add_form.price.value;
    const id = Date.now();
    
    data.push({id, title, price});
    add_form.price.value = "";
    add_form.title.value = "";
    
    rerender()
});

// реализовать здесь
// проверку, если массив с данными пустой, то вывести параграф с тектом "Товаров нет"
// в ином случае выводить товары как сейчас 
function rerender() {

    products.innerText = "";

    if (data.length === 0) {
        const emptyP = document.createElement('p');
        emptyP.innerText = 'Товаров нет';
        products.append(emptyP);
    } else {
        data.forEach(({ title, price, id }) => {
            const container = createCard(id, title, price);
            products.append(container);
        })
    }
}
// вынести процесс создания карточки в отдельную функцию
// функция должна получать в качестве аргументов
// id, title, price и возвращать тег div который
// является контейнером карточки

function createCard(id, title, price) {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const delBtn = document.createElement('button');
    

    delBtn.addEventListener('click', () => {
        deleteProduct(id);
    });

    container.addEventListener('mousemove', () => {
        container.style.backgroundColor = randomColor()
    });

    title_p.innerText = title;
    price_p.innerText = price;
    delBtn.innerText = "delete";

    container.append(title_p, price_p, delBtn);
    
    container.classList.add('product');

    return container;
}

function deleteProduct(id) {
    data = data.filter(product => product.id !== id);
    rerender();
}

rerender();

function randomColor() {
    const r = Math.round(Math.random()*255) 
    const g = Math.round(Math.random()*255) 
    const b =  Math.round(Math.random()*255) 
    return `rgb(${r}, ${g}, ${b})`
}




