// Day 3: Loops

// 1. FOR LOOP - Basic
console.log("=== FOR LOOP BASIC ===");
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-", + 1);
}

// 2. FOR LOOP - Countdown
console.log("\n=== COUNTDOWN ===");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("BOOM!");

// 3. FOR LOOP - Skip (increment by 2)
console.log("\n=== BILANGAN GENAP 1-10 ===");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 4. WHILE LOOP
console.log("\n=== WHILE LOOP ===");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}

// 5. DO-WHILE (jalan minimal 1x)
console.log("\n=== DO-WHILE LOOP ===");
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 3);

// 6. DO-WHILE vs WHILE (kondisi false dari awal)
console.log("\n=== PERBEDAAN WHILE vs DO-WHILE ===")

let x = 10;
while (x < 5) {
    console.log("While: ini gak bakal muncul");
}

let y = 10;
do {
    console.log("Do-while: ini teteap muncul 1x meski kondisi false");
} while (y < 5);

// 7. BREAK - Keluar dari loop
console.log("\n=== BREAK ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Ketemu 5, stop loop!");
        break;
    }
    console.log(i);
}

// 8. CONTINUE - Skip iterasi
console.log("\n=== CONTINUE ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skip angka 3");
        continue;
    }
    console.log(i);
}

// 9. NESTED LOOP (Loop dalam loop)
console.log("\n=== NESTED LOOP ===");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// 10. MULTIPLICATION TABLE (Tabel perkalian)
console.log("\n=== TABEL PERKALIAN 5 ===");
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * 1}`);
}

// 11. SUM dengan LOOP
console.log("\n=== JUMLAH 1-100 ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += 1;
}
console.log("Total:", sum);

// 12. WHILE LOOP dengan INPUT VALIDATION (simulasi)
console.log("\n=== WHILE untuk VALIDASI ===");
let password = "salah";
let attempt = 0;
let maxAttempt = 3;

while (password !== "1234" && attempt < maxAttempt) {
    attempt++;
    console.log(`Attempt ${attempt}: Password salah`)
    
    // Simulasi input (di real case pake prompt atau readline)
    if (attempt === 2) {
        password = "1234"; // simulasi user input benar
    }
}

if (password === "1234") {
    console.log("Login berhasil!");
} else {
    console.log("Terlalu banyak percobaan!");
}