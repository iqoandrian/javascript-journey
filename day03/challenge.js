// ===================================
// CHALLENGE DAY 3
// ===================================

console.log("=== PROGRAM 1: FIZZBUZZ ===");
console.log("Print angka 1-30 dengan aturan FizzBuzz:\n");

for (let i = 1; i <= 30; i++) {
  // Cek jika habis dibagi 3 DAN 5 (harus dicek dulu)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Cek jika habis dibagi 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Cek jika habis dibagi 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Jika tidak memenuhi semua kondisi di atas
  else {
    console.log(i);
  }
}

console.log("\n=== PROGRAM 2: PATTERN PRINTER ===");
console.log("Pattern segitiga bintang:\n");

// Versi 1: Segitiga bintang biasa
const rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

console.log("\n--- Variasi Pattern ---");

// Versi 2: Segitiga terbalik
console.log("\nPattern segitiga terbalik:");
for (let i = rows; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Versi 3: Segitiga dengan angka
console.log("\nPattern segitiga angka:");
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += j;
  }
  console.log(pattern);
}


console.log("\n=== PROGRAM 3: PRIME NUMBER CHECKER ===");
console.log("Mencetak bilangan prima 1-50:\n");

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  // Cek dari 3 sampai akar kuadrat num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Bilangan prima 1-50:");
let primes = [];
for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}
console.log(primes.join(", "));
