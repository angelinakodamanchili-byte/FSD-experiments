class Student {
    name: string = "Angelina";

    display(): void {
        console.log("Student Name:", this.name);
    }
}

let s = new Student();
s.display();

export {};