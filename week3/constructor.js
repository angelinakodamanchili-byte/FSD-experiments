class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    show() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
let e = new Employee("Nicy", 50000);
e.show();
export {};
