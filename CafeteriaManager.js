// ----------------------------------------------------
class Cafeteria {
    // (Encapsulation) ป้องกันการเข้าถึงตัวแปรของ Class โดยการใช้ static และ private
    static #listCafeterias = []; // เก็บรายชื่อของ Cafeteria ทั้งหมดเป็น static และเป็น private เพื่อป้องกันการเข้าถึงโดยตรงจากภายนอก

    constructor(name) {
        Cafeteria.#listCafeterias.push(name); // เพิ่มชื่อ Cafeteria ลงใน listCafeterias
        this.name = name;
        this.restaurants = [];
    }
    
    createRestaurant(name) {
        this.restaurants.push(new Restaurant(name)); // (Abstraction) สร้าง ร้านอาหาร ใน โรงอาหาร
    }

    static displayTotalCafeterias() {
        console.log("Total Cafeterias: ", Cafeteria.#listCafeterias.length, '\n');
    }

    display(){
        console.log("Total Restaurant in ", this.name,": ", this.restaurants.length);
        for (const restaurant of this.restaurants) {
            restaurant.display(); // (Polymorphism) เรียกใช้เมธอด display() ระหว่างคลาส Cafeteria และ Restaurant โดยที่มีการสิบทอดความสามารถมาจากคลาส Menu
            console.log();
        }
        console.log();
    }
}
// ----------------------------------------------------


// ----------------------------------------------------

// (Abstraction) สร้างคลาส Menu เพื่อแยกการจัดการเมนูอาหารออกจากการจัดการ ร้านอาหาร
class Menu{
    constructor(name){
        this.name = name;
        this.menu = [];
    }

    display(){
        console.log("Restaurant Name: ", this.name);
    }
}

// คลาส Restaurant ได้สืบทอดจากคลาส Menu
class Restaurant extends Menu { // (Inheritance) สืบทอดคุณสมบัติจาก Menu
    constructor(name) {
        super(name);
    }

    AddFood(name, cost) {
        this.menu.push(new Food(name, cost));
    }

    display(){
        console.log("Restaurant Name: ", this.name);
        for (const FoodName of this.menu) {
            console.log(FoodName);
        }
    }
}

class Food {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
// ----------------------------------------------------


// ----------------------------------------------------
// สร้างโรงอาหารที่ 1 2 และ 3
const C1 = new Cafeteria("Diamond Hall");
const C2 = new Cafeteria("Bamboo Cafeteria");
const C3 = new Cafeteria("Engineering Cafeteria");

// สร้างร้านอาหารในโรงอาหารที่ 1 ทั้งหมด 3 ร้านอาหาร
for (let i = 1; i <= 3; i++) {
    let name = "Restaurant "+i;
    C1.createRestaurant(name);
}

// สร้างร้านอาหารในโรงอาหารที่ 2 ทั้งหมด 2 ร้านอาหาร
for (let i = 1; i <= 2; i++) {
    let name = "Restaurant "+i;
    C2.createRestaurant(name);
}

// C1 เพิ่มรายการอาหาร
C1.restaurants[0].AddFood("Water", 15.00);
C1.restaurants[1].AddFood("Padthai", 65.00);
C1.restaurants[2].AddFood("Tomato", 30.00);

// C2 เพิ่มรายการอาหาร
C2.restaurants[0].AddFood("Nomsod", 30.00);
C2.restaurants[0].AddFood("Chanom", 25.00);
C2.restaurants[1].AddFood("Kaowpad", 60.00);
C2.restaurants[1].AddFood("Vitamin Water", 30.00);

// แสดงผล
Cafeteria.displayTotalCafeterias();
C1.display();
C2.display();
C3.display();
// ----------------------------------------------------
