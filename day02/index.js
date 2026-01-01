// Day 2: Conditional & Logical Operators

// 1. BASIC IF
let age = 18;

if(age >= 18) {
    console.log("Lo udah dewasa");
}

// 2. IF / ELSE
let score = 75;

if (score >= 80) {
    console.log("Nilai: A");
} else {
    console.log("Nilai: B atau kurang");
}

// 3. ELSE IF (Multiple Conditions)
let nilai = 85;

if (nilai >= 90) {
    console.log("Grade: A");
} else if (nilai >= 80) {
    console.log("Grade: B");
} else if (nilai >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D")
}

// 4. LOGICAL OPERATORS - AND (&&)
let umur = 20;
let punyaSIM = true;

if (umur >= 17 && punyaSIM === true) {
    console.log("Boleh Nyetir");
} else {
    console.log("Belum Boleh Nyetir");
}

// 5. LOGICAL OPERATORS - OR (||)
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Libur! Bisa santai");
} else {
    console.log("Hari Kerja");
}

// 6. LOGICAL OPERATORS - NOT (!)
let isRaining = false;

if (!isRaining) {
    console.log("Cuaca cerah! bisa jalan-jalan");
} else {
    console.log("Hujan, stay at home");
}

// 7. COMBINING CONDITION
let temprature = 35;
let humidity = 80;

if (temprature > 30 && humidity > 70) {
    console.log("Panas dan lembab banget");
} else if (temprature > 30) {
    console.log("Panas tapi kering");
} else {
    console.log("Adem");
}

// 8. TERNARY OPERATOR
let member = true;
let discount = member ? "Dapat diskon 20%" : "Tidak dapat diskon";
console.log(discount);

// 9. NESTED IF
let login = true;
let isAdmin = false;

if (login) {
    if (isAdmin) {
        console.log("Welcome Admin!");
    } else {
        console.log("Welcome User!");
    }
} else {
    console.log("Silahkan login dulu");
}