// const elem = document.querySelector('p')
// const elem_list = document.querySelectorAll('p')

//console.log(elem);

//console.log(elem_list);

//const textList = [...elem_list].map(elem => elem.innerText)
//console.log(textList);

// console.log(elem.innerText); // только текст
// console.log(elem.innerHTML); // внутренние вложенности
// console.log(elem.textContent); // только текст с отступами вложенностей


// лучше пользоваться querySelector
// const main_elem = document.getElementById('main')
// const p_list = document.getElementsByTagName('p')

// console.log(main_elem);
// console.log(p_list);




// spreat operator
// const a = [12, 5, 4, 5, 7]
// function func(a1, a2, a3) {
//     return a1+a2+a3
// }

// console.log(func(...a));

// const b = [4, 3, ...a];
// console.log(b);



// 1. вывести в консоль текст из параграфа, который находится в 
// div с классом main 

// const mainText = document.querySelector('.main p')
// console.log(mainText.innerText);

// 2.
// вывести параграф с классом info из div с идентификатором main 

// const p_list = document.querySelector('#main .info')
// console.log(p_list.innerText);

// 2a.
// найти параграф с классом main, который находится в div, который находится в div с идентификатором info
// const pElem = document.querySelector('#info div .main')
// console.log(pElem.innerText);


const rootElem = document.querySelector('#root')

// const words = ['house', 'travel', 'love']

// words.forEach(word => {
//     const pElem = document.createElement('p');
//     pElem.innerText = word;
//     rootElem.append(pElem)
// }
// )

// const p_Elem = document.createElement('p'); //создаем элемент
// p_Elem.innerText = "I am Groot" // составляющее элемента прописываем
// rootElem.append(p_Elem) // добавляем созданный элемент куда нужно

// console.log(rootElem);

const products = [
    {
    title: 'велосипед',
    price: 45000,
    count: 1,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg '
    },
    {
    title: 'самокат',
    price: 25000,
    count: 2,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg '
    },
    
    {
    title: 'лыжи',
    price: 30000,
    count: 5,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg '
    
    }
    ]; 

// products.forEach(product => {
//     const pElem = document.createElement('p');
//     pElem.innerText = product.title;
//     rootElem.append(pElem)
// }
// )

// в случае, если кол-во товара равно нулю выведите фразу "Товар закончился" 

products.forEach(({title, price, count, link, img} ) => {
    

    const container = document.createElement('div');
    const title_p = document.createElement('p')
    const price_p = document.createElement('p')
    const count_p = document.createElement('p')
    const link_a = document.createElement('a')
    const img_img = document.createElement('img')

    container.append(title_p, price_p, count_p, link_a, img_img)
    rootElem.append(container)
    
    container.classList.add('item')

    img_img.src = img;
    link_a.innerText = 'подробнее...';
    link_a.href = link;
    link_a.target = '_blank'; // чтобы ссылка открывалась в новой вкладке
    title_p.innerText = title;
    price_p.innerText = price;

    count_p.innerText = count === 0 ? 'Товар закончился' : count;

    // if (product.count === 0) {
    //     count_p.innerText = 
    // }

}
)


console.log(rootElem);


