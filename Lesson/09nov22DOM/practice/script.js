// let button = document.querySelector('.myButton');
// let input = document.querySelector('#input');

// button.addEventListener('click', changeText);

// function changeText(event) {
//     input.value = 'thank u'
//     button.removeEventListener('click', changeText)
// }


// [ 2 ]

let actionButton = document.querySelector('.action');
let takeButton = document.querySelector('.take') 
let input = document.querySelector('#input');

actionButton.addEventListener('click', transferText);

function transferText(event) {
    if(!input.value){
        takeButton.textContent = 'Fill it!';
    } else {
        takeButton.textContent = input.value;
        input.value = '';
    }
};