5.Write a MENU DRIVEN program which enter two integer and perform any one of the giveen arthemethical calculatin, depending one of the user choice from menu.
Solve:-let num1 = 10; 
let num2 = 5;  
console.log("Menu:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
let choice = 2; 
if (choice === 1) {
    console.log("Addition:", num1 + num2); 
} else if (choice === 2) {
    console.log("Subtraction:", num1 - num2); 
} else if (choice === 3) {
    console.log("Multiplication:", num1 * num2); 
} else if (choice === 4) {
    console.log("Division:", num1 / num2);
} else {
    console.log("Invalid choice!"); 
}
// OR
Solve:-(2)

let num1 = 10; 
let num2 = 5; 
console.log("Menu:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
let choice = 3; 
switch (choice) {
    case 1:
        console.log("Addition:", num1 + num2);
        break;
    case 2:
        console.log("Subtraction:", num1 - num2);
        break;
    case 3:
        console.log("Multiplication:", num1 * num2);
        break;
    case 4:
        console.log("Division:", num1 / num2);
        break;
    default:
        console.log("Invalid choice!"); // 
}
