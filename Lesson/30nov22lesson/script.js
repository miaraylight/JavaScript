const change = document.querySelector('.change_mode');
const mainText = document.querySelector('.main p');

//mainText.style.fontSize = '15px';
let fontSize;
mainText.style.fontSize = fontSize + 'px';

const large = document.querySelector('.large')
const small = document.querySelector('.small')

//  проверить наличие fontsize в localstorage и если его нет
// задать 12, а если есть, считать в переменную

if (localStorage.getItem('fontsize')) {
    fontSize = +localStorage.getItem('fontSize');
}else{
    fontSize = 12;
    localStorage.setItem('fontSize', fontSize);
    
}





if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark')
}

change.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    }else{
        localStorage.setItem('mode', 'light');
    }
});




large.addEventListener('click', () => {
    //let currentValue = parseInt(mainText.style.fontSize) 
    //mainText.style.fontSize = currentValue + 1 + 'px'
    fontSize++;
    localStorage.setItem('fontSize', fontSize);
    mainText.style.fontSize = fontSize + 'px'
    
})

small.addEventListener('click', () => {
    //let currentValue = parseInt(mainText.style.fontSize) 
    //mainText.style.fontSize = currentValue - 1 + 'px'
    fontSize--;
    localStorage.setItem('fontSize', fontSize);
    mainText.style.fontSize = fontSize + 'px'
    
})
