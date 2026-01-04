// ===================================
// CHALLENGE DAY 4: FUNCTION LIBRARY
// ===================================

// PART 1: MATH UTILITIES
console.log("=== MATH UTILITIES ===\n");

// 1. isPrime(num) - Cek bilangan prima
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

// 2. factorial(n) - Hitung faktorial
const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// 3. fibonacci(n) - Return fibonacci ke-n
const fibonacci = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// 4. gcd(a, b) - Greatest Common Divisor (FPB)
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
};

// Test cases Part 1
console.log("isPrime(7):", isPrime(7)); // true
console.log("isPrime(10):", isPrime(10)); // false
console.log("isPrime(17):", isPrime(17)); // true
console.log("isPrime(1):", isPrime(1)); // false
console.log("");

console.log("factorial(5):", factorial(5)); // 120
console.log("factorial(0):", factorial(0)); // 1
console.log("factorial(7):", factorial(7)); // 5040
console.log("");

console.log("fibonacci(0):", fibonacci(0)); // 0
console.log("fibonacci(1):", fibonacci(1)); // 1
console.log("fibonacci(5):", fibonacci(5)); // 5
console.log("fibonacci(7):", fibonacci(7)); // 13
console.log("");

console.log("gcd(48, 18):", gcd(48, 18)); // 6
console.log("gcd(17, 5):", gcd(17, 5)); // 1
console.log("gcd(60, 45):", gcd(60, 45)); // 15

// PART 2: STRING UTILITIES
console.log("\n=== STRING UTILITIES ===\n");

// 1. reverseString(str) - Balik string
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// 2. isPalindrome(str) - Cek palindrome
const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = reverseString(cleanedStr);
  return cleanedStr === reversed;
};

// 3. countVowels(str) - Hitung huruf vokal
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
};

// 4. capitalize(str) - Capital setiap kata
const capitalize = (str) => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Test cases Part 2
console.log('reverseString("hello"):', reverseString("hello")); // "olleh"
console.log('reverseString("JavaScript"):', reverseString("JavaScript")); // "tpircSavaJ"
console.log("");

console.log('isPalindrome("katak"):', isPalindrome("katak")); // true
console.log('isPalindrome("level"):', isPalindrome("level")); // true
console.log('isPalindrome("hello"):', isPalindrome("hello")); // false
console.log('isPalindrome("A man a plan a canal Panama"):', isPalindrome("A man a plan a canal Panama")); // true
console.log("");

console.log('countVowels("hello world"):', countVowels("hello world")); // 3
console.log('countVowels("JavaScript"):', countVowels("JavaScript")); // 3
console.log('countVowels("AEIOU"):', countVowels("AEIOU")); // 5
console.log("");

console.log('capitalize("hello world"):', capitalize("hello world")); // "Hello World"
console.log('capitalize("jAVAsCRIPT fUNCTIONS"):', capitalize("jAVAsCRIPT fUNCTIONS")); // "Javascript Functions"
console.log('capitalize("i love programming"):', capitalize("i love programming")); // "I Love Programming"

// PART 3: ARRAY UTILITIES
console.log("\n=== ARRAY UTILITIES ===\n");

// 1. findMax(arr) - Cari nilai terbesar
const findMax = (arr) => {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

// 2. findMin(arr) - Cari nilai terkecil
const findMin = (arr) => {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

// 3. average(arr) - Hitung rata-rata
const average = (arr) => {
  if (arr.length === 0) return undefined;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
};

// 4. removeDuplicates(arr) - Hapus duplikat
const removeDuplicates = (arr) => {
  const unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
};

// Test cases Part 3
const numbers = [5, 2, 8, 1, 9, 2, 5];
console.log("Array:", numbers);
console.log("findMax:", findMax(numbers)); // 9
console.log("findMin:", findMin(numbers)); // 1
console.log("average:", average(numbers)); // 4.571...
console.log("removeDuplicates:", removeDuplicates(numbers)); // [5, 2, 8, 1, 9]

const emptyArray = [];
console.log("\nEmpty array tests:");
console.log("findMax([]):", findMax(emptyArray)); // undefined
console.log("average([]):", average(emptyArray)); // undefined

// PART 4: PRACTICAL FUNCTIONS
console.log("\n=== PRACTICAL FUNCTIONS ===\n");

// 1. calculateBMI(weight, height) - Hitung BMI
const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  
  let category;
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  
  return {
    bmi: parseFloat(bmi.toFixed(2)),
    category: category
  };
};

// 2. generatePassword(length) - Generate random password
const generatePassword = (length) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const allChars = uppercase + lowercase + numbers;
  
  let password = "";
  
  // Pastikan minimal ada 1 dari setiap tipe
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  
  // Isi sisanya dengan random karakter
  for (let i = 3; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  // Acak posisi karakter
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

// 3. formatCurrency(amount) - Format ke Rupiah
const formatCurrency = (amount) => {
  return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// 4. calculateAge(birthYear, birthMonth, birthDay) - Hitung umur exact
const calculateAge = (birthYear, birthMonth, birthDay) => {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  
  if (days < 0) {
    months--;
    // Hitung hari di bulan sebelumnya
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return {
    years: years,
    months: months,
    days: days
  };
};

// Test cases Part 4
console.log("calculateBMI(70, 1.75):", calculateBMI(70, 1.75));
console.log("calculateBMI(50, 1.65):", calculateBMI(50, 1.65));
console.log("calculateBMI(90, 1.70):", calculateBMI(90, 1.70));
console.log("");

console.log("generatePassword(8):", generatePassword(8));
console.log("generatePassword(12):", generatePassword(12));
console.log("");

console.log("formatCurrency(1000000):", formatCurrency(1000000));
console.log("formatCurrency(50000):", formatCurrency(50000));
console.log("formatCurrency(1234567):", formatCurrency(1234567));
console.log("");

console.log("calculateAge(1995, 3, 15):", calculateAge(1995, 3, 15));
console.log("calculateAge(2000, 12, 31):", calculateAge(2000, 12, 31));