// Day 4: Functions

// ==========================
// 1. FUNCTION DECLARATION
// ==========================

console.log("=== FUNCTION DECLARATION ===");

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Iqo"));
console.log(greet("Budi"));

// Function tanpa parameter
function sayHello() {
    return "Hello World!";
}

console.log(sayHello());

// Function tanpa return (void)
function printMessage(message) {
    console.log("Message", message);
    // Tidak ada return, otomatis return undefined
}

printMessage("Ini pesan penting");

// ========================
// 2. FUNCTION EXPRESSION
// ========================
console.log("=== FUNCTION EXPRESSION ===");

const add = function(a, b) {
    return a + b;
};

console.log("5 + 3 =", add(5, 3));

const multiply = function(a, b) {
    return a * b;
};

console.log("5 x 3 =", multiply(5, 3));

// =====================
// 3. ARROW FUNCTION
// =====================
console.log("=== ARROW FUNCTION ===");

// Arrow function biasa
const subtract = (a, b) => {
    return a - b;
};

console.log("10 - 4 =", subtract(10, 4));

// Arrow function shorthand (1 line, auto return)
const divide = (a, b) => a / b;

console.log("10 / 2 =", divide(10, 2));

// Arrow function dengan 1 parameter (bisa skip kurung)
const square = x => x * x;

console.log("5 kuadrat =", square(5));

// Arrow function tanpa parameter
const getRandomNumber = () => Math.floor(Math.random() * 100);

console.log("Random number", getRandomNumber());

// ============================
// 4. PARAMETERS & ARGUMENTS
// ============================
console.log("=== PARAMETERS & ARGUMENTS ===");

// Multiple parameters
function introduce(name, age, hobby) {
    return `Nama: ${name}, Umur: ${age}, Hobi: ${hobby}`;
}

console.log(introduce("Iqo", 30, "Main Musik"));

// Default parameters
function greetUser(name = "Guest") {
    return `Welcome, ${greetUser}!`;
}

console.log(greetUser("Iqo"));
console.log(greetUser()); // Pake default value

// Rest parameters (Multiply arguments jadi array)
function sumAll(...number) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum:", sumAll(1, 2, 3, 4, 5));
console.log("Sum:", sumAll(10, 20, 30));

// ========================
// 5. RETURN VALUES
// ========================
console.log("=== RETURN VALUES ===");

// Return number
function getAge(birthYear) {
    const currentYear = 2026;
    return currentYear - birthYear;
}

console.log("Umur:", getAge(1996));

// Return boolean
function isEven(num) {
    return num % 2 === 0;
}

console.log("4 genap?", isEven(4));
console.log("7 genap?", isEven(7));

// return object
function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

const user = createUser("Iqo", 30);
console.log(user);

// Return array
function getEvenNumbers(max) {
  const result = [];
  for (let i = 2; i <= max; i += 2) {
    result.push(i);
  }
  return result;
}

console.log("Even numbers 1-10:", getEvenNumbers(10));

// ===================================
// 6. FUNCTION SCOPE
// ===================================
console.log("\n=== FUNCTION SCOPE ===");

let globalVar = "Global";

function testScope() {
  let localVar = "Local";
  console.log("Dalam function:", globalVar); // bisa akses global
  console.log("Dalam function:", localVar);  // bisa akses local
}

testScope();
console.log("Luar function:", globalVar); // bisa akses global
// console.log(localVar); // ERROR! localVar tidak ada di luar function

// ===================================
// 7. CALLBACK FUNCTION (Preview)
// ===================================
console.log("\n=== CALLBACK FUNCTION ===");

function calculate(a, b, operation) {
  return operation(a, b);
}

const addFunc = (x, y) => x + y;
const multiplyFunc = (x, y) => x * y;

console.log("Callback add:", calculate(5, 3, addFunc));
console.log("Callback multiply:", calculate(5, 3, multiplyFunc));

// ===================================
// 8. PRACTICAL EXAMPLES
// ===================================
console.log("\n=== PRACTICAL EXAMPLES ===");

// Temperature converter
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("77°F =", fahrenheitToCelsius(77), "°C");

// Discount calculator
function calculateDiscount(price, discountPercent) {
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;
  return {
    originalPrice: price,
    discount: discount,
    finalPrice: finalPrice
  };
}

const result = calculateDiscount(100000, 20);
console.log("Harga asli: Rp", result.originalPrice);
console.log("Diskon: Rp", result.discount);
console.log("Harga final: Rp", result.finalPrice);

// Grade calculator (reusable)
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "E";
}

console.log("Nilai 95:", getGrade(95));
console.log("Nilai 75:", getGrade(75));
console.log("Nilai 55:", getGrade(55));