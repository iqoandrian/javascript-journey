// Challenge Day 2

let studentName = "Iqo";
let mathScore = 85;
let englishScore = 90;
let attendance = 80;

let average = (mathScore + englishScore) / 2;
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B"
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "E"
}

let status = (average >= 70 && attendance >= 75) ? "Lulus" : "Tidak lulus";
let bonusMessage = "";
if (grade === "A" && attendance >= 90) {
    bonusMessage = "Perfect student";
} else if (grade === "E") {
    bonusMessage = "Perlu bimbingan ekstra";
}

console.log("=== STUDENT REPORT ===");
console.log("Nama:", studentName);
console.log("Nilai Math:", mathScore);
console.log("Nilai English", englishScore);
console.log("Rata-rata", average);
console.log("Grade:", grade);
console.log(`Kehadiran: ${attendance}%`);
console.log("Status", status);
console.log(bonusMessage);