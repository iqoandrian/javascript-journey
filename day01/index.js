// Day 1: Variables, Data Types & Basic Output

// 1. VARIABLES
let name = "Budi";
let age = 26;
const birthYear = 1999;

console.log("Nama:", name);
console.log("Umur:", age);
console.log("Tanggal Lahir:", birthYear);

// 2. DATA TYPES
let myString = "Hello Worrld";
let myNumber = 100;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(typeof myString);       //string
console.log(typeof myNumber);       //number
console.log(typeof myBoolean);      //boolean
console.log(typeof myUndefined);    //undefined
console.log(typeof myNull);         //null

// 3. ARITHMETIC OPERATORS
let a = 10;
let b = 3;

console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian", a * b);
console.log("Pembagian:", a / b);
console.log("Modulus:", a % b);

// 4. STRING CONCATENATION
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

// 5. TEMPLATE LITERALS (modern way)
let product = "Laptop";
let price = 15000000;

console.log(`Produk: ${product}, Harga: Rp${price}`);