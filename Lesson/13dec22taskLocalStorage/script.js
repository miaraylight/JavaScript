// После отправки формы добавлять в корзину
//Переменные
const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector('.product-wrapper')
const notification = document.querySelector('.notification')
const submitBtn = document.querySelector('.submit-btn')


let editMode = false
let editingProductName = ''

const deleteProduct = (e) => {
    
    const productElement = e.target.parentElement.parentElement
    console.log(productElement);
    const id = productElement.id
    console.log(id);
    productsWrapper.removeChild(productElement)
    removeFromLocalStorage(id)
    showNotification("Deleted", "danger")
}

const createProducts = (id, name) => {
    const element = document.createElement('div')
    element.setAttribute('id', id)
    element.classList.add('product')

    element.innerHTML = `
            <h5 class="product-name">${name}</h5>
            <div class="product-actions">
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </div>
        `
    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')
    editBtn.addEventListener('click', editProduct)
    deleteBtn.addEventListener('click', deleteProduct)
    productsWrapper.appendChild(element)
}

const showProducts = () => {
    const products = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    if (products.length > 0) {
        products.forEach(product => {
            createProducts(product.id, product.name)
        });
    }
    
}
showProducts()

const addProduct = (e) => {
    e.preventDefault()
    const currProduct = productName.value;
    const id = new Date().getTime().toString()

    if (currProduct && !editMode) {
        // Создание элемента в html 
        createProducts(id, currProduct)
        // const element = document.createElement('div')
        // element.setAttribute('id', id)
        // element.classList.add('product')

        // element.innerHTML = `
        //     <h5 class="product-name">${currProduct}</h5>
        //     <div class="product-actions">
        //         <button class="delete-btn">Delete</button>
        //         <button class="edit-btn">Edit</button>
        //     </div>
        // `
        // const deleteBtn = element.querySelector('.delete-btn')
        // deleteBtn.addEventListener('click', deleteProduct)
        // productsWrapper.appendChild(element)
        // add in localStorage
        addtoLocalStorage(id, currProduct)
        showNotification("Added", "success")
        resetOptions()
    }else if(currProduct && editMode){
        console.log(editingProductName);
        
    }
}

function getLocalStorage() {
    return localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
}

const addtoLocalStorage = (id, name) => {
    const products = getLocalStorage()
    const newProduct = { id, name }    
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))
}

const removeFromLocalStorage = (id) => { 
    const products = getLocalStorage()
    // id - айди продукта на который нажали, который хотим удалить const products = getLocalStorage() // из массива products удалить элемент, id которого совпадает с id продукта, который мы получили аргуемтом // [{id : 1}, {id : 2}, {id : 3}, {id : 4}]. id = 3 - продукт который хотим удалить 
    const newProducts = products.filter(product => product.id !== id) 
    localStorage.setItem("products", JSON.stringify(newProducts)) } 
// function removeFromLocalStorage(id) {
//     const products = getLocalStorage()
//     const newProducts = products.filter(({id}) => !id == id )
//     localStorage.setItem('products', JSON.stringify(newProducts))
// }

const resetOptions = () => {
    // clear input
    productName.value = ""
}

const showNotification = (text, className) => {
    //notification.classList.add(`${className}`)
    notification.querySelector('.notification-text').innerText = `${text}`
    notification.style.display ="block"

    setTimeout(() => {
        // notification.innerText = "Added"
        notification.style.display = "none"
    }, 2000);
    notification.classList.toggle(`${className}`)
}
// delete product


function editProduct(e) {
    editMode = true
    const oldProductName = e.target.parentElement.previousElementSibling
    editingProductName = e.target.parentElement.previousElementSibling.innerText
    submitBtn.value = 'Save'
    productName.value = oldProductName.innerText
}





addForm.addEventListener('submit', addProduct)

/*
[
    {
        id: 324,
        name: "Milk"
    },
    {
        id: 324,
        name: "Sugar"
    },
]

 <div class="product">
                <h5 class="product-name">Название продукта</h5>
                <div class="product-actions">
                    <button class="delete-btn">Delete</button>
                    <button class="edit-btn">Edit</button>
                </div>
            </div>
            
 */