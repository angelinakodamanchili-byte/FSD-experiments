function greet(name, city) {
    if (city) {
        console.log("Hello", name, "from", city);
    }
    else {
        console.log("Hello", name);
    }
}
greet("Angelina");
greet("Angelina", "Hyderabad");
export {};
