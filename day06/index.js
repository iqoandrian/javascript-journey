// ===================================
// DAY 6: OBJECT AND OBJECT METHODS
// ===================================

// ===================================
// SECTION 1: OBJECT BASICS
// ===================================
// Objects store data in key-value pairs
// Syntax: {key: value, key2: value2}

console.log("=== SECTION 1: OBJECT BASICS ===");

// Creating an object
const person = {
    name: "Iqo",
    age: 30,
    isStudent: false,
    hobbies: ["Music", "Coding"]
};

console.log("Person object:", person);

// Accessing properties DOT NOTATAION (most common)
console.log("\nAccessing with dot notation:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("First hobby:", person.hobbies[0]);

// Accesing properties BRACKET NOTATION (for dynamic keys)
console.log("\nAccessing with bracket notation:");
console.log("Name:", person["name"]);
console.log("Age:", person["age"]);

// when use bracket notation?
// 1. when key is in a variable
const key = "name";
console .log("Dynamic access:", person[key]);

// 2. when key has a space or special character
const car = {
    "car model": "Tesla",
    "max-speed": 250
};
console.log("Car model:", car["car model"]);

// ===============================
// SECTION 2: MODIFYING OBJECTS
// ===============================
// Object are MUTABLE (can't be change

console.log("\nSECTION 2: MODIFYING OBJECTS ===\n");

const user = {
    username: "iqo",
    email: "iqo@email.com"
};

console.log("Original user:", user);

// Adding new properties
user.age = 30;
user.country = "Indonesia"
console.log("After adding properties", user);

// Modifying wxisting properties
user.email = "newmail@email.com";
console.log("After modifying properties:", user);

// Deleting properties
delete user.country;
console.log("After deleting properties", user);

// WARNING: const doesn't prevent modification of object properties
// const means you can't REASSIGN the variable, but you CAN modify the object
const product = {name: "Laptop"};
product.price = 15000000;       // return true
// product = {name: "Mouse"}    // yhis would be error

// =================================
// SECTION 3: OBJECT METHODS
// =================================
// Object can have FUNCTIONS as properties (called method)

console.log("\n=== SECTION 3: OBJECT METHODS ===\n")

const calculator = {
    // properties
    brand: "Casio",

    // Methods (function inside objects)
    add: function(a, b) {
        return a + b;
    },

    // Modern shorthand syntax (same as above)
    subtract(a, b) {
        return a - b;
    },

    // arrow function as method
    multiply: (a, b) => a * b
};

// Calling methods
console.log("Add:", calculator.add(5, 3));
console.log("Subtract:", calculator.subtract(10, 4));
console.log("Multiply:", calculator.multiply(6, 7));

// Real world example: user object with methods
const account = {
    username: "iqo",
    balance: 1000000,

    // Method to deposit money
    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount}, new balance: ${this.balance}`;
    },
    // Method to withdraw money method
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance!";
        }
        this.balance -= amount;
        return `Withdraw ${amount}. New balance: ${this.balance}`;
    },
    // Method to check balance
    checkBalance() {
        return `Current balance: ${this.balance}`;
    }
};

console.log("\nAccount operations:");
console.log(account.checkBalance());
console.log(account.deposit(500000));
console.log(account.withdraw(300000));
console.log(account.checkBalance());

// ================================
// SECTION 4: THE 'THIS' KEYWORD
// ================================
// 'this' refers to the object that owns the method

console.log("\n=== SECTION 4: THIS KEYWORD ===\n");

const student = {
    name: "Iqo",
    score: 85,

    // Method using 'this' to access object properties
    getInfo() {
        // 'this' = student object
        return `${this.name}scored ${this.score}`;
    },
    // Method to update score
    updateScore(newScore) {
        this.score = newScore;
        return `${this.name}'s score updated to ${this.score}`;
    }
};

console.log(student.getInfo());
console.log(student.updateScore(90));
console.log(student.getInfo());

// WARNING: arrow functions DON'T have their own 'this'!
const broken ={
    name: "Test",
    // Arrow function - 'this' doesn't work as expected
    greet: () => {
        return `Hello ${this.name}`;
    },
    // Regular function - 'this' works correctly
    greetCorrect() {
        return `Hello ${this.name}`;
    }
};

console.log("\nArrow vs Regular function:");
console.log(broken.greet());
console.log(broken.greetCorrect());

// ==============================
// SECTION 5: NESTED OBJECTS
// ==============================
// Objects can contain other objects (very common)
console.log('\n=== SECTION 5: NESTED OBJECTS ===\n');

const company = {
    name: "Tech Corp",
    founded: 2020,

    // Nested object for address
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta",
        country: "Indonesia"
    },

    // Nested objects for CEO
    ceo: {
        name: "John Doe",
        age: 45,
        email: "john@techcorp.com"
    }
};

// Accessing nested properties
console.log("Company name:", company.name);
console.log("City:", company.address.city);
console.log("CEO name:", company.ceo.name);
console.log("CEO email:", company.ceo.email);

// Modifying nested properties
company.address.city = "Bandung";
console.log("Updated city:", company.address.city);

// =================================
// SECTION 6: OBJECT DESTRUCTURING
// =================================

// Extract properties into variables (SUPER USEFUL)
console.log("\n=== SECTION 6: OBJECT DESTRUCTURING ===\n");

const laptop = {
    brand: "Apple",
    model: "Macbook Pro",
    price: 25000000,
    specs: {
        ram: "16GB",
        storage: "512GB"
    }
};

// Old way (repetitive)
const brand = laptop.brand;
const model = laptop.model;
const price = laptop.price;

console.log("Old way:", brand, model, price);

// New way (destructuring) - extract multiple properties at once!
const {brand: laptopBrand, model: laptopModel, price: laptopPrice} = laptop;
console.log("Destructuring:", laptopBrand, laptopModel, laptopPrice);

// even shorter (use same variable name as keys)
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 12000000
};

const {brand: phoneBrand, model: phoneModel, price: phonePrice} = phone;
console.log("Phone:", phoneBrand, phoneModel, phonePrice);

// Destructuring with default value
const tablet = {
    brand: "iPad",
    price: 80000000
    // No 'model' property
};

const {brand: tabletBrand, model: tabletModel = "Unknown", price: tabletPrice} = tablet;
console.log("Tablet:", tabletBrand, tabletModel, tabletPrice);

// Nested destructuring
const {specs: {ram, storage}} = laptop;
console.log("RAM:", ram);
console.log("Storage:", storage);

// ===================================
// SECTION 7: OBJECT UTILITY METHODS
// ===================================
// Built-in methods to work with objects

console.log("\n=== OBJECT UTILITY METHODS ===\n");

const inventory = {
    laptops: 10,
    mice: 50,
    keyboards: 30,
    monitors: 15
};

// Object.keys() - Get all keys as array
const keys = Object.keys(inventory);
console.log("Keys:", keys);

// Object.values() - Get all values as array
const values = Object.values(inventory);
console.log("Values:", values);

// Object.entries() - Get key-value pairs as array of arrays
const entries = Object.entries(inventory);
console.log("Entries:", entries);

// PRACTICAL USE: Loop through object properties
console.log("\nLooping through object:");

// Using Object.keys()
Object.keys(inventory).forEach(key => {
    console.log(`${key}: ${inventory[key]} units`);
});

// Using Object.entries() - cleaner
console.log("\nUsing entries:");
Object.entries(inventory).forEach(([key, value]) => {
    console.log(`${key}: ${value} units`);
});

// Object.assign() - Copy/merge objects
const defaults = {theme: "dark", fontSize: 14};
const userSettings = {fontSize: 16, notifications: true};

// Merge: userSettings overide defaults
const settings = Object.assign({}, defaults, userSettings);
console.log("\nMerged settings:", settings);
// {theme: dark, fontSize: 16, notifications: true}

// Spred operator (modern way to merge)
const mergedSettings = {...defaults, ...userSettings};
console.log("Spread merge:", mergedSettings);

// ==============================
// SECTION 8: PRACTICAL EXAMPLE
// ==============================

console.log("\n=== PRACTICAL EXAMPLE ===\n");

// Example 1: Product catalog
const products = [
    {id: 1, name: "Laptop", price: 15000000, stock: 5},
    {id: 2, name: "Mouse", price: 150000, stock: 20},
    {id: 3, name: "Keyboard", price: 500000, stock: 15}
];

// Calculate total inventory value
const totalValue = products.reduce((sum, product) => {
    return sum + (product.price * product.stock);
}, 0);

console.log("Total inventory value: Rp", totalValue);

// Find expensive product (> 1 million)
const expensiveProducts = products.filter(p => p.price > 1000000);
console.log("\nExpensive products:", expensiveProducts);

// Example 2: user management
const users = [
    {id: 1, name: "Iqo", role: "admin", active: true},
    {id: 2, name: "Budi", role: "user", active: true},
    {id: 3, name: "Siti", role: "user", active: false}
];
// Get all active users
const activeUsers = users.filter(user => user.active);
console.log("\nActive users:", activeUsers);

// Get all admin names
const adminNames = users
    .filter(user => user.role === "admin")
    .map(user => user.name);
console.log("Admin names:", adminNames);

// Example 3: object transformation
const rawData = [
    {firstName: "Iqo", lastName: "Andrian", age: 30},
    {firstName: "Budi", lastName: "Santoso", age: 25}
];

// Transform to full name
const fullNames = rawData.map(person => ({
    fullName: `${person.firstName} ${person.lastName}`,
    age: person.age
}));

console.log("\nTransform data:", fullNames);