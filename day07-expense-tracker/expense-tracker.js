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
        transport: 1000000,
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
    if (expenses.length === 0) {
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

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    console.log("-----------------------------------------------------------------");
    console.log(`Total: ${formatRupiah(total)}`);
};

// ==============================
// TASK 3: CALCULATE TOTAL
// ==============================

const calculateTotal = (expensesList = expenses) => {
    return expensesList.reduce((sum, expense) => sum + expense.amount, 0);
};

// ==============================
// TASK 4: FILTER BY CATEGORY
// ==============================

const filterByCategory = (category) => {
    // Step 1: validate category
    if (!categories.includes(category)) {
        console.log("Invalid category!");
        return;
    }

    // Step 2: filter expenses
    const filtered = expenses.filter(expense => expense.category === category);

    // Step 3: check if empty
    if (filtered.length === 0) {
        console.log(`No expenses in category: ${category}`);
        return;
    }
    // Step 4: Display (similar to viewAllExpenses)
    console.log(`\n=== EXPENSES: ${category.toUpperCase()} ===`);
    console.log("ID | Date      | Amount      | Description");
    console.log("--------------------------------------------------------");

    filtered.forEach(expense => {
        const formattedAmount = formatRupiah(expense.amount);
        console.log(`${expense.id} | ${expense.date}    | ${formattedAmount} |  ${expense.description}`);
    });
    // Step 5: calculate total
    const total = filtered.reduce((sum, expense) => sum + expense.amount, 0);
    console.log("--------------------------------------------------------");
    console.log(`Total (${category}): ${formatRupiah(total)}`);
};

// ==============================
// TASK 5: FILTER BY MONTH
// ==============================
const filterByMonth = (month, year) => {
    // Step 1: Format month (pad with 0 if needed)
    const formattedMonth = String(month).padStart(2, '0');

    // Step 2: Create search string
    const searchString = `${year}-${formattedMonth}`;

    // Step 3: Filter expenses
    const filtered = expenses.filter(expense => {
        return expense.date.startsWith(searchString);
    });

    // Step 4: check if empty
    if (filtered.length === 0) {
        console.log(`No expenses in ${getMonthName(searchString + "-01")} ${year}`);
        return;
    }

    // Step 5: Display (reuse task 2/4 logic)
    console.log(`\n=== EXPENSES: ${getMonthName(searchString + "-01")} ${year} ===`);
    console.log("ID | Date      | Amount    | Description");
    console.log("--------------------------------------------------------------------");

    filtered.forEach(expense => {
        const formattedAmount = formatRupiah(expense.amount);
        console.log(`${expense.id}  | ${expense.date}   | ${formattedAmount}    | ${expense.description}`);
    });

    // Step 6: Calculate total
    const total = filtered.reduce((sum, expense) => sum + expense.amount, 0);
    console.log("--------------------------------------------------------");
    console.log(`Total (${getMonthName(searchString + "-01")}): ${formatRupiah(total)}`);
};

// ==============================
// TASK 6: DELETE EXPENSE
// ==============================
const deleteExpense = (id) => {
    // Step 1: Find index of expense with this ID
    const index = expenses.findIndex(expense => expense.id === id);

    // Step 2: Check if found
    if (index === -1) {
        return "Expense not found!";
    }

    // Step 3: Get expense name before deleting (for message)
    const deletedExpense = expenses[index];

    // Step 4: Remove from array using splice
    expenses.splice(index, 1);

    // Step 5: Return success message
    return `Deleted: ${deletedExpense.description} (ID: ${id})`;
};

// ==============================
// TASK 7: MONTHLY SUMMARY
// ==============================

const getMonthlySummary = (month, year) => {
    // Step 1: Get expense for this month (reuse task 5 logic!)
    const formattedMonth = String(month).padStart(2, '0');
    const searchString = `${year}-${formattedMonth}`;
    const monthExpenses = expenses.filter(e => e.date.startsWith(searchString));

    // Step 2: check if empty
    if (monthExpenses.length === 0) {
        console.log(`No expenses in ${getMonthName(searchString + "-01")} ${year}`);
        return;
    }

    // Step 3: Group by category and sum amounts
    const categoryTotals = monthExpenses.reduce((acc, expense) => {
        const cat = expense.category;
        acc[cat] = (acc[cat] || 0) + expense.amount;
        return acc;
    }, {});

    // Step 4: Display header
    console.log(`\n=== MONTHLY SUMMARY: ${getMonthName(searchString + "-01")} ${year} ===`);
    console.log("\nCategory Breakdown:");
    console.log("-------------------");

    //Step 5: Loop through each category and display
    Object.entries(categoryTotals).forEach(([category, spent]) => {
        const budgetForCategory = budget.categories[category] || 0;
        const percentage = Math.round((spent / budgetForCategory) * 100);
        // Format output
        const spentFormatted = formatRupiah(spent).padEnd(15);
        const budgetFormatted = formatRupiah(budgetForCategory).padEnd(15);
        // Warning if over 80%
        const warning = percentage >= 80 ? "⚠️" : "✅";

        console.log(`${category}: ${spentFormatted} / ${budgetFormatted} (${percentage}%) ${warning}`);
    });

    //Step 6: Calculate overall total
    const totalSpent = calculateTotal(monthExpenses);
    const totalBudget = budget.monthly;
    const overallPercentage = Math.round((totalSpent / totalBudget) * 100);
    const remaining = totalBudget - totalSpent;

    //Step 7: Display totals
    console.log("---------------");
    console.log(`Total spending: ${formatRupiah(totalSpent)} / ${formatRupiah(totalBudget)} (${overallPercentage}%)`);
    console.log(`Remaining budget: ${formatRupiah(remaining)}`);

    // Step 8: show warning for categories over 80%
    console.log("\n⚠️ Warnings:");

    let hasWarnings = false;
    Object.entries(categoryTotals).forEach(([category, spent]) => {
    const budgetForCategory = budget.categories[category] || 0;
    const percentage = Math.round((spent / budgetForCategory) * 100);
    
    if (percentage >= 80) {
        console.log(`- ${category} at ${percentage}% of budget`);
        hasWarnings = true;
    }
    });

    if (!hasWarnings) {
    console.log("✅ All categories within budget!");
    };
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

// TEST TASK 3: Calculate total
console.log("=== TEST: CALCULATE TOTAL");
const total = calculateTotal();
console.log("Total spending:", formatRupiah(total));
console.log("");

// TEST TASK 4: Filter by category
console.log("=== TEST: FILTER BY CATEGORY ===");
filterByCategory("food");
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
getMonthlySummary(1, 2025);
console.log("");
/*
// TEST TASK 8: Budget alerts
console.log("=== TEST: BUDGET ALERTS ===");
checkBudgetAlerts();
*/