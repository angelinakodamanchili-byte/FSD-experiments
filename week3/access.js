class Person {
    name = "Angelina";
    age = 19;
    city = "Bhimavaram";
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}
let p = new Person();
p.display();
export {};
