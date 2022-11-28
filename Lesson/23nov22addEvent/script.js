// const btn_elem = document.querySelector('.btn');
// const p_elem = document.querySelector('.text')



// p_elem.addEventListener('click', ()=>console.log('Привет из параграфа'))


// // function random_color(){
//     // создать функцию, которая возвращает случайный цвет
//     //return `...`
//     //}

// function randomColor() {
//     const r = Math.round(Math.random()*255) 
//     const g = Math.round(Math.random()*255) 
//     const b =  Math.round(Math.random()*255) 
//     return `rgb(${r}, ${g}, ${b})`
// }

// function randomColorX() {
//     const r = Math.round(Math.random()*255) 
//     const g = Math.round(Math.random()*255) 
//     const b =  Math.round(Math.random()*255) 
//     const color = `#` + r.toString(16)+g.toString(16)+b.toString(16)
//     return color;
// }


// btn_elem.addEventListener('click', ()=> btn_elem.style.backgroundColor = randomColor());






// // создать программу, которая имитирует работу игральных костей
// // при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6 



// function game() {
//     const num1 = Math.ceil(Math.random()*6)
//     const num2 = Math.round(Math.random()*5+1)
//     return `${num1} and ${num2}`
// }

// btn_elem.addEventListener('click', ()=> p_elem.innerText = game())




// Формы 
const products = document.querySelector('.products')
const add_form = document.querySelector('.add_form');

const data = [];

add_form.addEventListener('submit', (event)=>{
    event.preventDefault(); // не отправляет дданные в форме на сервер
    const title = add_form.title.value;
    const price = add_form.price.value;
    data.push({title, price});
    add_form.price.value = "";
    add_form.title.value = "";
    rerender()
});


// создать функцию, которая для каждого элемента массива data
// создает div с названием и ценой товара и добавляет в 
// div с классом products

/*
<div>
<p>Название товара</p>
<p>Цена</p>
</div>
*/ 

function rerender() {
    products.innerText = ''
    data.forEach(({title, price}) => {
        const container = document.createElement('div')
        const title_p = document.createElement('p')
        const price_p = document.createElement('p')
        title_p.innerText = title;
        price_p.innerText = price;

        container.append(title_p, price_p)
        products.append(container)
    });
}

