// const items = document.querySelector(".items");
// const addForm = document.querySelector(".someform");



// const totalSum = document.querySelector("#t_sum");
// const totalAmmount = document.querySelector("#t_ammount");

// const data = [];

// addForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const title = addForm.title.value;
//     const price = addForm.price.value;
//     const count = addForm.count.value;

//     data.push({ title, price, count });

//     addForm.title.value = "";
//     addForm.price.value = "";
//     addForm.count.value = "";

//     rerender();
//     countTotal();
// });

// function rerender() {
//     const container = document.createElement("div");
//     const title_h1 = document.createElement("h1");
//     const price_p = document.createElement("p");
//     const count_p = document.createElement("p");

//     data.forEach(({ title, price, count }) => {
//         title_h1.innerText = title;
//         price_p.innerText = price;
//         count_p.innerText = `${price} x ${count} = ` + price * count;

//         container.append(title_h1, price_p, count_p);
//     });
    
//     localStorage.setItem('card', JSON.stringify(data))
//     items.append(container);

//     container.classList.add("product");
//     price_p.classList.add("price");
//     count_p.classList.add("count");
//     title_h1.classList.add("title");
// }

// function countTotal() {
//     const sum = data.reduce((prev, item) => prev + +item.price * item.count, 0);
//     const ammount = data.reduce((prev, item) => prev + +item.count, 0);

//     totalSum.innerText = sum;
//     totalAmmount.innerText = ammount;  
// }




// сохранить данные карточек в localStorage и считать их с него

const items = document.querySelector(".items");
const addForm = document.querySelector(".someform");

const totalSum = document.querySelector("#t_sum");
const totalAmmount = document.querySelector("#t_ammount");

let data = JSON.parse(localStorage.getItem('card'));

function initData() {
  if (data == null) {
    data = [];
  } else {
    data.forEach((item) => {
      addItem(item);
    });
  }
}

initData();

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const new_data = {
        'title': addForm.title.value,
        'price': addForm.price.value,
        'count': addForm.count.value
        };

    data.push(new_data);
    localStorage.setItem('card', JSON.stringify(data));

    addItem(new_data);

    addForm.title.value = "";
    addForm.price.value = "";
    addForm.count.value = "";
});

function addItem(new_data) {
    const container = document.createElement("div");
    const title_h1 = document.createElement("h1");
    const price_p = document.createElement("p");
    const count_p = document.createElement("p");

    title_h1.innerText = new_data.title;
    price_p.innerText = new_data.price;
    count_p.innerText = `${new_data.price} x ${new_data.count} = ` + new_data.price * new_data.count;

    container.append(title_h1, price_p, count_p);
    
    items.append(container);

    container.classList.add("product");
    price_p.classList.add("price");
    count_p.classList.add("count");
    title_h1.classList.add("title");

    updateTotal();
}

function updateTotal() {
    const sum = data.reduce((prev, item) => prev + +item.price * item.count, 0);
    const ammount = data.reduce((prev, item) => prev + +item.count, 0);

    totalSum.innerText = sum;
    totalAmmount.innerText = ammount;
}

