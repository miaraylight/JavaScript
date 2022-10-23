// //Function declaration
// function typeOfSomeValue (someValue) {
//     console.log(typeof someValue);
//     let result;
//     if (typeof someValue == 'string') {
        
//         return someValue.length;

//     } else if (typeof someValue == 'number') {
        
//         result = String(someValue);
        
//         return result.length;

//     } else if (typeof someValue == 'boolean') {
        
//         result = String(someValue);
        
//         return result.length;

//     } else {
//         return 'incorrect type of value'
//     }
// }

// //Function expression
// let typeOfSomeValue = function(someValue) {

//     console.log(typeof someValue);
//     let result;
//     if (typeof someValue == 'string') {
        
//         return someValue.length;

//     } else if (typeof someValue == 'number') {
        
//         result = String(someValue);
        
//         return result.length;

//     } else if (typeof someValue == 'boolean') {
        
//         result = String(someValue);
        
//         return result.length;

//     } else {
//         return 'incorrect type of value'
//     }
// }

//Arrow function
let typeOfSomeValue = (someValue) => {if(typeof someValue == 'string' || typeof someValue == 'number' || typeof someValue == 'boolean'){
     result = String(someValue); 
     return result.length; 
 } else { 
    return 'incorrect type of value';
}
}


console.log(typeOfSomeValue([]));

// 2) Замените код Function Expression стрелочной функцией:
// let answer = true;
// function ask(question, yes, no) {
// if (answer) yes()
// else no();
// }
// ask(
// "Вы согласны?",
// function () { alert("Вы согласились."); },
// function () { alert("Вы отменили выполнение."); }
// ); 


