const items = document.querySelector(".items");
const addForm = document.querySelector(".someform");

const totalSumP = document.querySelector(".totalSum");
const totalAmmountP = document.querySelector(".totalAmmount");

const totalSum = document.querySelector("#t_sum");
const totalAmmount = document.querySelector("#t_ammount");

const data = [];

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = addForm.title.value;
    const price = addForm.price.value;
    const count = addForm.count.value;

    data.push({ title, price, count });

    addForm.title.value = "";
    addForm.price.value = "";
    addForm.count.value = "";

    rerender();
    countTotal();
});

function rerender() {
    const container = document.createElement("div");
    const title_h1 = document.createElement("h1");
    const price_p = document.createElement("p");
    const count_p = document.createElement("p");

    data.forEach(({ title, price, count }) => {
        title_h1.innerText = title;
        price_p.innerText = price;
        count_p.innerText = `${price} x ${count} = ` + price * count;

        container.append(title_h1, price_p, count_p);
    });
    
    items.append(container);

    container.classList.add("product");
    price_p.classList.add("price");
    count_p.classList.add("count");
    title_h1.classList.add("title");
}

function countTotal() {
    const sum = data.reduce((prev, item) => prev + +item.price, 0);
    const ammount = data.reduce((prev, item) => prev + +item.count, 0);

    totalSum.innerText = sum;
    totalAmmount.innerText = ammount;

    totalSumP.append(totalSum);
    totalAmmountP.append(totalAmmount);
}
