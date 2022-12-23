class Dog{

    hi(name){
        console.log(this);
        console.log('hi ' + this.name);
    }

    constructor(name){
        this.name = name;
    }

    // init(name){
    //     this.name = name;
    // }

};

// const dog_1 = new Dog();
// const dog_2 = new Dog();

const dog_1 = new Dog('reks');
const dog_2 = new Dog('bob');

// dog_1.name = "reks"
// dog_2.name = "bob"

// dog_1.init('reks')
// dog_2.init('bob')

// console.log(dog_1.hi());
// console.log(dog_2.hi());



// Создать класс User со свойствами name, username, age. 

class User{

    static _roles = ['manager', 'admin', 'quest'];
    static add_role(newRole){
        this._roles.push(newRole) // this это класс
    }
    constructor(name, username, age, role = 'guest'){
        
        this.name = name;
        this.username = username;
        this.age = age;
        this.changeRole(role)
        
    }
    // Добавить метод b_day которое увеличивает возраст на единицу. 
    birthday(){
        this.age += 1;
        
    }

    hi(){
        const {name, username, age} = this;
        console.log(`hi ${name} ${username} ${role}`);
    }
    // Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его. 
    changeName(newName){
        this.name = newName
    }

    changeRole(role){
        
        if (User._roles.includes(role)) {
            this.role = role;
        }else{
            this.role = null;
        }
    }
}

const user1 = new User("Mia", "miaraylight", 26, 'root' )
const user2 = new User("Aleks", "melifaro", 36, 'manager')

user1.birthday();
user1.birthday();

user2.changeName('racoon')
console.log(user1);
console.log(user2);

// Создать класс Product со свойствами title, price, count. 
// И методами change_price и sale. 

class Product {
    constructor(title, price, count, income){
        this.title = title;
        this.price = price;
        this.count = count;
        this.income = 0;
    }

    // 1) доработать метод change_price таким образом, чтобы цена менялась только в случае, если 
    // указанная новая цена больше 0 
    changePrice(newPrice){
        if (newPrice > 0) {
            this.price = newPrice
        }else{
            console.log('not correct value');
        }
        
    }

    // 2) доработать метод sale таким образом. 
    // Если при вызову count равен нулю, count не уменьшать и вывести в консль "товар закончился" 
    sale(count){
        if (this.count === 0) {
            console.log('Товар закончился');
        }else{ 
            this.income += this.price
            this.count --;
        }
    }

    // 3) добавить свойство income, которая хранит число прибыли с продаж.
    // при каждой успешной продаже свойства income должно увеличиваться на цену товара   


}
const bike = new Product('bike', 45000, 3)

console.log(bike);
bike.changePrice(55550);
bike.sale();
bike.sale();
console.log(bike);
