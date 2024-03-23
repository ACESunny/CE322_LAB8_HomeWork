// โปรแกรมจัดการโรงอาหาร
// Class Cafeteria 
// Class Restaurant extend Cafereriac

class Cafeteria {
    constructor() {
        if (typeof Cafeteria.numCafeterias === 'undefined') {
            Cafeteria.numCafeterias = 0;
        }
        Cafeteria.numCafeterias++;
        this.restaurants = [];
    }

    createRestaurant(name) {
        this.restaurants.push(new Restaurant(name));
    }

    display(){
        console.log("Total Restaurant in C1: ", this.restaurants.length);
        for (const restaurant of this.restaurants) {
            console.log("Restaurant Names: ", restaurant.name);
        }
    }
}

class Menu{
    constructor(name){
        this.name = name;
        this.menu = [];
    }

    display(){
        console.log("Restaurant Names: ", this.name);
    }
}

class Restaurant extends Menu {
    constructor(name) {
        super(name);
    }

    AddFood(name, cost) {
        this.menu.push(new Food(name, cost));
    }
}

class Food {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

// สร้างโรงอาหารที่ 1 และ 2
const C1 = new Cafeteria();
const C2 = new Cafeteria();

// สร้างร้านอาหารในโรงอาหารที่ 1 ทั้งหมด 10 ร้านอาหาร
for (let i = 1; i <= 10; i++) {
    let name = "Restaurant "+i;
    C1.createRestaurant(name);
}

// console.log("Total Cafeteria: ", Cafeteria.numCafeterias);
console.log("Total Cafeteria: ", Cafeteria.numCafeterias);
console.log(C1.display());
console.log(C2.display());





