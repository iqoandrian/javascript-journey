// Day 5: Array & Array Methods

// =============================
// 1. ARRAY BASICS
// =============================
console.log("=== ARRAY BASICS ===\n");

// Cara bikin array
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "Hello", true, null, {name : "Iqo"}];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

// Akses Element
console.log("\nAkses Element:");
console.log("Fruits[0]:", fruits[0]); // Apple
console.log("Fruits[1]:", fruits[1]); // Banana
console.log("Fruits[2]:", fruits[2]); // Orange

// Array Length
console.log("\nArray Length:");
console.log("fruits.length", fruits.length);

// Akses element terakhir
console.log("Last Fruits:", fruits[fruits.length - 1]);

// ================================
// 2. ARRAY METHODS - BASIC
// ================================
console.log("\n=== ARRAY METHODS BASIC ===");

let colors = ["Red", "Green", "Blue"];

// Push - tambah di akhir
colors.push("Yellow");
console.log("After push:", colors);

// Pop - hapus dari akhir
const removed = colors.pop();
console.log("Removed:", removed);
console.log("After pop:", colors);

// unshift - tambah dari awal
colors.unshift("Purple");
console.log("After unshift:", colors);

// shift - hapus dari awal
const removedFirst = colors.shift();
console.log("Removed First:", removedFirst);
console.log("After shift:", colors);

// splice - hapus/tambah dari tengah
colors.splice(1, 1, "Pink", "Orange"); // mulai index 1, hapus 1 item, tambah 2 item
console.log("After splice:", colors);

// slice - potong array (tidak mengubah original)
const sliced = colors.slice(1, 3);
console.log("Sliced (1,3)", sliced);
console.log("Original colors:", colors);

// ==================================
// 3. FOREACH - Loop through array
// ==================================
console.log("\n=== FOREACH ===\n");

const names = ["Iqo", "Budi", "Siti", "Andi"];

//cara lama (for loop)
console.log("For loop:");
for (let i = 0; i < names.length; i++) {
    console.log(i + ":", names[i]);
}

// cara modern (forEach)
console.log("\nforEach\n");
names.forEach((name, index) => {
    console.log(index + ":", name);
});

// forEach dengan function
names.forEach(name => {
    console.log("Hallo", name);
});

// =================================
// 4. MAP - transform array
// =================================
console.log("\n=== MAP ===\n");

const nums = [1, 2, 3, 4, 5];

// Double setiap angka
const doubled = nums.map(num => nums * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

// Square tiap angka
const squared = nums.map(num => nums ** 2);
console.log("Squared:", squared);

// Transform objects
const users = [
    {name: "Iqo", age: 30},
    {name: "Budi", age: 25},
    {name: "Siti", age: 28}
];

const userName = users.map(user => users.name);
console.log("\nUser Names:", userName);

const userInfo = users.map(user => `${users.name} (${users.age} tahun)`);
console.log("User Info:", userInfo);

// ==============================
// 5. FILTER - Filter Array
// ==============================
console.log("\n=== FILTER ===\n");

const scores = [45, 78, 92, 55, 88, 34, 95];

// Filter nilai >= 70
const passed = scores.filter(score => score >= 70);
console.log("All Scores:",scores);
console.log("Passed:", passed);

// Filter nilai >= 70
const failed = scores.filter(score => score <= 70);
console.log("Failed (<= 70)", failed);

// Filter genap
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log("\n Numbers:", nums);
console.log("Even numbers:", evenNumbers);

// Filter Objects
const adults = users.filter(user => user.age >= 18);
console.log("\nAdults:", adults);

// ==============================
// FIND - Cari 1 element
// ==============================
console.log("\n=== FIND ===\n");

// find - return element yang pertama match
const firstPassed = scores.find(score => score >= 70);
console.log("First score >= 70:", firstPassed);

// findIndex - return index
const indexPassed = scores.findIndex(score => score >= 70);
console.log("Index of first score >= 70:", indexPassed);

// find object
const iqo = users.find(user => user.name === "iqo");
console.log("\nFind iqo:", iqo);

// find yang gak ketemu
const notFound = users.find(user => user.name === "Zoro");
console.log("Find Zoro:",notFound); // undefined

// ====================================
// 7. REDUCE - reduce to single value
// ====================================
console.log("\n=== REDUCE ===\n");

const values = [10, 20, 30, 40, 50];

// Sum semua angka
const sum = values.reduce((total, num) => total + num, 0);
console.log("Values:", values);
console.log("Sum:", sum);

// Multiply semua angka
const product = values.reduce((total, num) => total * num, 1);
console.log("Product:", product);

// Max value dengan reduce
const max = values.reduce((maxVal, num) => num > maxVal ? num : maxVal, values[0]);
console.log("Max:", max);

// count occurrences
const letters = ["a", "b", "c", "c", "b", "a"];
const count = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log("\nLetters:", letters);
console.log("Count:", count);

// ==========================
// 8. SOME & EVERY
// ==========================
console.log("\n=== SOME & EVERY ===");

const testScores = [45, 78, 92, 55, 88];

// Some - apakah ada yang memenuhi kondisi?
const hasHighScore = testScores.some(score => score >= 90);
console.log("Score:", testScores);
console.log("Ada yang >=. 90?", hasHighScore); // true

// every - apakah semua memenuhi kondisi?
const allPassed = testScores.every(score => score >= 70);
console.log("Semua >= 70?", allPassed); // false

const allPositive = testScores.every(score => score > 0);
console.log("Semua positif?", allPositive); // true

// ===========================
// 9. SORT - urutkan array
// ===========================
console.log("\n=== SORT ===\n");

// Sort strings
const animals = ["dog", "cat", "elephant", "ant", "bear"];
animals.sort();
console.log("Sorted Animals:", animals);

// Sort numbers (HATI-HATI)
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", unsorted);

// SALAH - sort default untuk string
const wrongSort = [...unsorted].sort();
console.log("Wrong sort:", wrongSort); // [1, 1, 2, 3, 4, 5, 6, 9] kebetulan benar, tapi...

const wrongSort2 = [10, 5, 40, 25, 1000, 1].sort();
console.log("wrong sort [10, 5, 40...]:", wrongSort2); // [1, 5, 10, 1000, 25, 40, 5] SALAH!

// BENAR - pake compare function
const correctSort = [...unsorted].sort((a, b) => a - b);
console.log("Correct sort:", correctSort);

// Sort descending 
const descending = [...unsorted].sort((a, b) => b - a);
console.log("Descending:", descending);

// Sort objects
const students = [
    {name: "iqo", score: 85},
    {name: "Budi", score: 92},
    {name: "Siti", score: 78}
];

const sortedByScore = [...students].sort((a, b) => b.score - a.score);
console.log("\nSorted by score:", sortedByScore);

// =================================
// 10. CHAINING METHODS
// =================================
console.log("\n=== CHAINING METHODS ===\n");

const data = [12, 5, 8, 130, 44, 3, 15];

// filter genap, double terus sum
const result = data
    .filter(num => num % 2 === 0)       // [12, 8, 130, 44]
    .map(num => num * 2)                // [24, 16, 260, 88]
    .reduce((sum, num) => sum + num, 0); // 388

console.log("Data:", data);
console.log("Filter even > double > sum:", result);

// Real world example
const products = [
    {name: "Laptop", price: 15000000, category: "electronics"},
    {name: "Mouse", price: 150000, category: "electronics"},
    {name: "Shirt", price: 200000, category: "clothing"},
    {name: "Phone", price: 8000000, category: "electronics"}
];

// Cari elektronik dibawah 10jt, ambil namanya
const affordableGadgets = products
    .filter(p => p.category === "electronics" && p.price < 10000000)
    .map(p => p.name);

console.log("\nAffordable electronics:", affordableGadgets);

// =============================
// 11. DESTRUCTURING & SPREAD
// =============================
console.log("\n=== DESTRUCTURING & SPREAD ===\n");

// Array destructuring
const [first, second, third] = fruits;
console.log("First:", first);
console.log("Second:", second);

// Skip elements
const [, , thirdFruit] = fruits;
console.log("Third Fruit", thirdFruit);

// Rest operator
const [head, ...tail] = numbers;
console.log("Head:", head);
console.log("Hail:", tail);

// Spread operator - copy array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log("\nOriginal:", originalArray);
console.log("Copied:", copiedArray);

// Spread - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log("Merged", merged);

// Spread - add elements
const withExtra = [...arr1, 99, ...arr2];
console.log("With extra:", withExtra);