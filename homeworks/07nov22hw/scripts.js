// First level: 1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

let greatingButton = document.querySelector('#greatingButton');

let sayHello = () => {
    console.log('Мяу!');
}

greatingButton.addEventListener('click', sayHello)




// Second level: 2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

let button = document.querySelector('.button')
let image = document.querySelector('.changeImage')

let changeImage = (event) => {
    image.classList.toggle('image')
    image.classList.toggle('changed')
}

button.addEventListener('click', changeImage)

