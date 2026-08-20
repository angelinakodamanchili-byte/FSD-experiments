class Person {
    public name = "Angelina";
    private age = 19;
    protected city = "Bhimavaram";

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}

let p = new Person();
p.display();

export {};