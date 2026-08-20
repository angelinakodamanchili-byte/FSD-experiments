class Employee {
    constructor(public name: string, public salary: number) {}

    show(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let e = new Employee("Nicy", 50000);
e.show();

export {};