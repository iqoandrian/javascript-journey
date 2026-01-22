// ==============================
// DAY 7: EXPENSE PROJECT
// ==============================

// ==============================
// DATA STORAGE
// ==============================

// Array to store expense
let expenses = [];

// Counter for generating unique IDs
let nextId = 1;

// Available categories
const categories = ["food", "transport", "entertainment", "bills", "shopping", "health", "other"];

// Monthly budget limits
const budget = {
    monthly: 5000000,
    categories: {
        food:2000000,
        transport: 10000000,
        entertainment: 500000,
        bills: 800000,
        shopping: 500000,
        health: 200000,
        other: 200000
    }
};

// ===============================
// HELPER FUNCTION
// ===============================

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Format number to rupiah
const formatRupiah = (amount) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
};

// Get month name from string
const getMonthName = (dateString) => {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "Desember"];
    const date = new Date(dateString);
    return months[date.getMonth()];
};

// et year from date string
const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
};

// =============================
// TASK 1: ADD EXPENSE
// =============================

const addExpense = (category, amount, description, date = getCurrentDate()) => {
    // Step 1: Validate category
    if (!categories.includes(category)) {
        return "Invalid category! Use: " + categories.join(", ");
    }
    // Step 2: Validate amount
    if (amount <= 0) {
        return "Amount must be positive!";
    }
    // Step 3: Create expense object
    const expense = {
        id: nextId,                 // Use current nextId
        category: category,         // Parameter value
        amount: amount,             // Parameter value
        date: date,                 // Parameter value (or default today)
        description: description    // Parameter value
    };
    // Step 4: Add to expense array
    expenses.push(expense);
    // Step 5: Increment nexId
    nextId++;
    // Step 6: Return success message
    return `Expense added! ID: ${expense.id}`;
};

// ===========================
// TASK 2: VIEW ALL EXPENSES
// ===========================

const viewAllExpenses = () => {
    if (viewAllExpenses.length ===0) {
        console.log("No expenses yet!");
        return;
    }
    console.log("\n=== ALL EXPENSES ===");
    console.log("ID | Date        | Category        | Amount      | Description");
    console.log("-----------------------------------------------------------------");

    expenses.forEach(expense => {
        const formattedAmount = formatRupiah(expense.amount);
        console.log(`${expense.id} | ${expense.date} | ${expense.category} | ${formattedAmount} | ${expense.description}`);        
    });

    const total = expenses.reduce((sum, expense) => sum + expense.anount, 0);

    console.log("-----------------------------------------------------------------");
    console.log(`Total: ${formatRupiah(total)}`);
};



// ==============================
// SAMPLE DATA (For testing)
// ==============================

const loadSampleData = () => {
    // Add some sample expenses for testing
    addExpense("food", 50000, "Lunch at cafe", "2025-01-15");
    addExpense("transport", 25000, "Grab to office", "2025-01-16");
    addExpense("food", 75000, "Dinner with friends", "2025-01-18");
    addExpense("entertainment", 100000, "Movie tickets", "2025-01-18");
    addExpense("food", 35000, "Breakfast", "2025-01-20");
    addExpense("bills", 500000, "Electricity bill", "2025-01-21");
    addExpense("shopping", 250000, "New shirt", "2025-01-21");

    console.log("Sample data loaded!\n");
};

// ==============================
// TESTING AREA
// ==============================

console.log("=== EXPENSE TRACKING - DAY 7 PROJECT ===\n");

// Load sample data
loadSampleData();

// TEST TASK 1: Add expense
console.log("=== TEST: ADD EXPENSE ===");
console.log(addExpense("food", 45000, "Coffee and snack"));
console.log(addExpense("transport", 30000, "Taxi home"));
console.log("");

// TEST TASK 2: View all expenses
console.log("=== TEST: VIEW ALL EXPENSE ===");
viewAllExpenses();
console.log("");
/*
// TEST TASK 3: Calculate total
console.log("=== TEST: CALCULATE TOTAL");
const total = calculateTotal();
console.log("Total spending:", formatRupiah(total));
console.log("");

// TEST TASK 4: Filter by category
console.log("=== TEST: FILTER BY CATEGORY ===");
filterbyCategory("food");
console.log("");

// TEST TASK 5: Filter by month
console.log("=== TEST: FILTER BY MONTH ===");
filterByMonth(1, 2025);
console.log("");

// TEST TASK 6: Delete expense
console.log("=== TASK: DELETE EXPENSE ===");
console.log(deleteExpense(3));
viewAllExpenses();
console.log("");

// TEST TASK 7: Monthly summary
console.log("=== TASK: MONTHLY SUMMARY ===");
getMonthlySummary();
console.log("");

// TEST TASK 8: Budget alerts
console.log("=== TEST: BUDGET ALERTS ===");
checkBudgetAlerts();
*/