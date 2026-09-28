let name: string = "Angelina";
let age: number = 20;
let email: string = "angelinakodamanchili@gmail.com";

// Basic validation
if (name === "") {
    console.log("Name is required");
}
else if (age < 18) {
    console.log("Age must be 18 or above");
}
else if (!email.includes("@")) {
    console.log("Invalid email");
}
else {
    console.log("Form submitted successfully");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
}
