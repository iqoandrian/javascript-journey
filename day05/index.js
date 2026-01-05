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
colors.unshipt("Purple");
console.log("After unshift:", colors);

// shift - hapus dari awal
const removedFirst = color.shift();
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

const name = ["Iqo", "Budi", "Siti", "Andi"];

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