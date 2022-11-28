const customers = [
    { id: 1, firstName: "Ivan", lastName: "Alekseev" },
    { id: 2, firstName: "Arsen", lastName: "Iusupov" },
    { id: 3, firstName: "Sam", lastName: "Tyler" },
    { id: 4, firstName: "Jack", lastName: "Rocky" },
    { id: 5, firstName: "Kendrick", lastName: "Lamaar" },
    { id: 6, firstName: "John", lastName: "Lennon" },
    { id: 7, firstName: "Paul", lastName: "McCartney" },
];


const orders = [
    {
        id: 1,
        customerId: 3,
        date: "02/03/2022",
        delivered: true,
        products: [
            { productId: 567, price: 2000 },
            { productId: 789, price: 3000 },
        ],
    },
    {
        id: 2,
        customerId: 5,
        date: "05/08/2022",
        delivered: false,
        products: [
            { productId: 413, price: 2500 },
            { productId: 124, price: 1000 },
        ],
    },
    {
        id: 3,
        customerId: 1,
        date: "05/12/2021",
        delivered: true,
        products: [
            { productId: 500, price: 1500 },
            { productId: 213, price: 1500 },
        ],
    },
    {
        id: 4,
        customerId: 6,
        date: "10/07/2022",
        delivered: true,
        products: [
            { productId: 531, price: 1000 },
            { productId: 231, price: 2500 },
        ],
    },
    {
        id: 5,
        customerId: 6,
        date: "10/08/2022",
        delivered: false,
        products: [
            { productId: 912, price: 5000 },
            { productId: 942, price: 500 },
        ],
    },
    {
        id: 6,
        customerId: 2,
        date: "10/08/2022",
        delivered: true,
        products: [
            { productId: 545, price: 2300 },
            { productId: 942, price: 800 },
        ],
    },
    {
        id: 7,
        customerId: 7,
        date: "05/09/2022",
        delivered: true,
        products: [
            { productId: 600, price: 2000 },
            { productId: 849, price: 900 },
        ],
    },
    {
        id: 8,
        customerId: 4,
        date: "10/10/2022",
        delivered: true,
        products: [
            { productId: 575, price: 2400 },
            { productId: 248, price: 850 },
        ],
    },
];


// вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь 
// У одного пользователя может быть несколько заказов.

// const currentCustomerId = customers.find(customer => customer.firstName == "Sam" && customer.lastName == 'Tyler').id
// console.log( currentCustomerId ); // получили id

// const currentCustomerProducts = orders.find(order => order.customerId == currentCustomerId).products

// console.log( currentCustomerProducts );

findCustomerProducts = (name, surname) => {
    const currentCustomerId = customers.find(customer => customer.firstName == name && customer.lastName == surname).id

    const currentCustomerProducts = orders.filter(order => order.customerId == currentCustomerId).map(item => item.products)// сделать один массив из обьеков

    return currentCustomerProducts
}

console.log(findCustomerProducts('John', 'Lennon')); // метод flat

/* метод find похож на filter, но возвращает только один элемент из массива. метод find возвращает первый найденный элемент, который соответсвтует нашему запросу orders.find(order => order.customerId == currentCustomerId).products[0].productId // { id: 8, customerId: 4, date: "10/10/2022", delivered: true, products: [ {productId: 575, price: 2400}, {productId: 248, price: 850} ] } */





// [--2--]
// Добавить к каждому объекту заказов(orders) свойства firstName и lastName пользователя и вернуть новый массив // , котрый сделал заказ. // В новом массиве будут объекты с заказами, в которых будет указаны имя и фамилия пользователя, // который сделал заказ 

const result = orders.map(order => {
    const {firstName, lastName} = customers.find(customer => customer.id == order.customerId)
    return {
        ...order,
        firstName,
        lastName
    }
})

//console.log(result);





//  [--3--]
 // Задача. Вернуть массив заказов, сумма заказанных продуктов которых больше чем 2000. 
 fun// Если сумма заказанных продуктов больше 2000, то возвращаем объект в новый массив // filter(), reduce() //

const ordersMore2000 = orders.filter(order => { 
    return order.products.reduce((sum, current) => sum + current.price, 0) > 2000 }) 
    //console.log(ordersMore2000); 

const res = orders.filter(order => 
    order.products.reduce((prev, item)=> prev + item.price, 0) > 5000)

console.log(res);








// У всех ли заказов, сумма заказанных товаров больше чем 2000.
//  Если больше 2000 - true, если меньше false
const isMore = orders.every(order => order.products.reduce((prev, item)=> prev + item.price, 0) > 2000)

console.log(isMore);

/*
    Метод every() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт ложное значение (значение, становящееся равным false при приведении его к типу Boolean). Если такой элемент найден, метод every() немедленно вернёт false. В противном случае, если callback вернёт true для всех элементов массива, метод every() вернёт true. Функция callback вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

Функция callback вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.
*/



// Заказал ли пользователь с id 4 хоть что-то. Есть ли заказ в массиве orders, который заказал юзер с id 4. 
const checkOrder = (userId) => {
    return orders.some(order => order.customerId === userId)
}

console.log(checkOrder(4));

// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает // true, если пользователь с таким именем делал заказ // false, если пользователь с таким именем ничего не заказывал 

// ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь // Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов, // которые заказал этот пользователь. У одного пользователя может быть несколько заказов. // Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов. 

// ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали. 
