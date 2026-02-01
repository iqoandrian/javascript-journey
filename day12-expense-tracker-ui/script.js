// ================================
// DAY 12-13: EXPENSE TRACKER UI
// ================================

console.log("Expense tracker UI loaded");

// ===============================
// DATA & STATE
// ===============================
/*
Expense object structure:
{
    id: timestamp,
    category: "food",
    amount: 50000,
    desscription: "Lunch",
    date: "2025-01-29"
}
*/

let expenses = [];

// Categories with their display info
const categories = {
    food: { name: "Food", color: "#e74c3c" },
    transport: { name: "transport", color: "#3498db" },
    entertainment: { name: "entertainment", color: "#9b59b6" },
    bills: { name: "Bills", color: "#f39c12" },
    shopping: { name: "Shopping", color: "#e91e63" },
    health: { name: "Health", color: "#27ae60" },
    other: { name: "Other", color: "#95a5a6" }
};

// Monthly budget (same as day 7)
const budget = {
    monthly: 5000000,
    categories: {
        food: 2000000,
        transport: 1000000,
        entertainment: 500000,
        bills: 800000,
        shopping: 500000,
        health: 200000,
        other: 200000
    }
};

// =================================
// DOM ELEMENT
// =================================

const expenseForm = document.getElementById('expenseForm');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const dateInput = document.getElementById('date');

const expensesBody = document.getElementById('expensesBody');
const emptyState = document.getElementById('emptyState');
const totalAmount = document.getElementById('totalAmount');

const filterCategory = document.getElementById('filterCategory');
const filterMonth = document.getElementById('filterMonth');
const clearAllBtn = document.getElementById('clearAll');

const budgetGrid = document.getElementById('budgetGrid');

// =================================
// LOCALSTORAGE FUNCTION
// =================================

function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    console.log("Expenses saved!");
}

function loadExpenses() {
    const saved = localStorage.getItem('expenses');
    if (saved) {
        expenses = JSON.parse(saved);
        console.log("Load expenses:", expenses.length);
    }
}

// ================================
// HELPER FUNCTIONS
// ================================

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

function getMonthYear(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

// ===============================
// SET TODAY'S DATE AS DEFAULT
// ===============================

function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
}

setDefaultDate();

// ================================
// ADD EXPENSE
//=================================
 function addExpense(category, amount, description, date) {
    const expense = {
        id: Date.now(),
        category,
        amount: parseInt(amount),
        description,
        date
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();
    updateTotal();
    updateBudgetSummary();
    populateMonthFilter();

    console.log("Added expense:", expense);
 }

 // Form submit
 expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addExpense(
        categoryInput.value,
        amountInput.value,
        descriptionInput.value,
        dateInput.value
    );

    // Reset form
    expenseForm.reset();
    setDefaultDate();

    // Show success feedback (optional)
    categoryInput.focus();
 });

 // ==============================
 // DELETE EXPENSE
 // ==============================

 function deleteExpense(id) {
    if (confirm('Delete this expense?')) {
        expenses = expenses.filter(e => e.id !== id);
        saveExpenses();
        renderExpenses();
        updateTotal();
        updateBudgetSummary();
        populateMonthFilter();

        console.log("Deleted expense:", id);
    }
 }

 // ==============================
 // CLEAR ALL EXPENSES
 // ==============================

 clearAllBtn.addEventListener('click', () => {
    if (confirm('Delete ALL expenses? This cannot be undone!')) {
        expenses = [];
        saveExpenses();
        renderExpenses();
        updateTotal();
        updateBudgetSummary();
        populateMonthFilter();

        console.log("All expenses cleared!");
    }
 });

 // =============================
 // FILTER EXPENSES
 // =============================

 function getFilteredExpenses() {
    let filtered = [...expenses];

    // Filter by category
    const selectedCategory = filterCategory.value;
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(e => e.category === selectedCategory);
    }

    // Filter by month
    const selectedMonth = filterMonth.value;
    if (selectedMonth !== 'all') {
        // FIX: Compare dates correctly
        filtered = filtered.filter(e => {
        const expenseMonth = getMonthYear(e.date);
        console.log("Comparing:", expenseMonth, "===", selectedMonth); // Debug
        return expenseMonth === selectedMonth;
        });
    }
    
    console.log("Filtered expenses:", filtered.length); // Debug
    return filtered;
}
 // Filter change events
 filterCategory.addEventListener('change', () => {
    renderExpenses();
    updateTotal();
 });

 filterMonth.addEventListener('change', () => {
    renderExpenses();
    updateTotal();
    updateBudgetSummary();
 });

 // ==============================
 // POPULATE MONTH
 // ==============================

 function populateMonthFilter() {
    // Get unique months from expenses
    const months = [...new Set(expenses.map(e => getMonthYear(e.date)))];
    months.sort().reverse();

    // Clean and rebuild options
    filterMonth.innerHTML = '<option value="all">All time</option>';

    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;

        // Format display (e.g., "January 2025")
        const [year, monthNum] = month.split('-');
        const date = new Date(year, monthNum - 1);
        option.textContent = date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });

        filterMonth.appendChild(option);
    });
 }

 // ==============================
 // RENDER EXPENSE TTRACKER
 // ==============================

 function renderExpenses() {
    const filtered = getFilteredExpenses();

    // Clear table
    expensesBody.innerHTML = '';

    // Show/hide empty state
    if (filtered.length === 0) {
        emptyState.classList.add('show');
        return;
    } else {
        emptyState.classList.remove('show');
    }

    // Render each expense (newest first)
    filtered
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(expense => {
            const row = createExpenseRow(expense);
            expensesBody.appendChild(row);
        });
 }

 // ==============================
 // CREATE EXPENSE ROW
 // ==============================

 function createExpenseRow(expense) {
    const tr = document.createElement('tr');

    // Date column
    const tdDate = document.createElement('td');
    tdDate.textContent = formatDate(expense.date);

    // Category column with badge
    const tdCategory = document.createElement('td');
    const categoryBadge = document.createElement('span');
    categoryBadge.className = `category-badge category-${expense.category}`;
    categoryBadge.textContent = categories[expense.category].name;
    tdCategory.appendChild(categoryBadge);

    // Description column
    const tdDescription = document.createElement('td');
    tdDescription.textContent = expense.description;

    // Amount column
    const tdAmount = document.createElement('td');
    tdAmount.className = 'amount';
    tdAmount.textContent = formatRupiah(expense.amount);

    // Action column (delete button)
    const tdAction = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteExpense(expense.id));
    tdAction.appendChild(deleteBtn);

    // Append all column to row
    tr.appendChild(tdDate);
    tr.appendChild(tdCategory);
    tr.appendChild(tdDescription);
    tr.appendChild(tdAmount);
    tr.appendChild(tdAction);

    return tr;
 }

 // ==============================
 // UPDATE TOTAL AMOUNT
 // ==============================

 function updateTotal() {
    const filtered = getFilteredExpenses();

    // Calculate total
    const total = filtered.reduce((sum, expense) => sum + expense.amount, 0);

    console.log("total from", filtered.length, "expenses:", total);
    // Update display
    totalAmount.textContent = formatRupiah(total);
 }

 // =============================
 // UPDATE BUDGET SUMMARY
 // =============================

 function updateBudgetSummary() {
    // Get current month expenses only
    const selectedMonth = filterMonth.value;

    let monthExpenses;
    if (selectedMonth === 'all') {
        // If "all time" selected, use current month
        const currentMonth = getMonthYear(new Date().toISOString());
        monthExpenses = expenses.filter(e => getMonthYear(e.date) === currentMonth);
    } else {
        // Use selected month
        monthExpenses = expenses.filter(e => getMonthYear(e.date) === selectedMonth);
    }

    // Group expenses by category
    const categoryTotals = {};
    monthExpenses.forEach(expense => {
        categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });

    // Clear budget grid
    budgetGrid.innerHTML = '';

    // If no expenses this month, show message
    Object.keys(budget.categories).forEach(category => {
        const spent = categoryTotals[category] || 0;
        const budgetAmount = budget.categories[category];
        const percentage = Math.round((spent / budgetAmount) * 100);

        const budgetItem = createBudgetItem(category, spent, budgetAmount, percentage);
        budgetGrid.appendChild(budgetItem);
    });
 }

 // ==============================
 // CREATE BUDGET ITEM
 // ==============================

 function createBudgetItem(category, spent, budgetAmount, percentage) {
    const div = document.createElement('div');
    div.className = 'budget-item';

    // Add warning/danger class based on percentage
    if (percentage >= 100) {
        div.classList.add('danger');
    } else if (percentage >= 80){
        div.classList.add('warning');
    }

    // Header(category name &percentage)
    const header = document.createElement('div');
    header.className = 'budget-item-header';

    const categoryName = document.createElement('h3');
    categoryName.textContent = categories[category].name;

    const percentSpan = document.createElement('span');
    percentSpan.textContent = `${percentage}%`;
    percentSpan.style.color = percentage >= 100 ? '#e774c3c' :
                            percentage >= 80 ? '#f39c12' : '#27ae60';

    header.appendChild(categoryName);
    header.appendChild(percentSpan);

    // Progress bar
    const barContainer = document.createElement('div');
    barContainer.className = 'budget-bar';

    const barFill = document.createElement('div');
    barFill.className = 'budget-bar-fill';
    barFill.style.width = `${Math.min(percentage, 100)}%`;

    if (percentage >= 100) {
        barFill.classList.add('danger');
    } else if (percentage >= 80) {
        barFill.classList.add('warning');
    }

    barContainer.appendChild(barFill);

    // Text (spent/budget)
    const text = document.createElement('div');
    text.className = 'budget-text';
    text.textContent = `${formatRupiah(spent)} / ${formatRupiah(budgetAmount)}`;

    // Append all to budget item
    div.appendChild(header);
    div.appendChild(barContainer);
    div.appendChild(text);

    return div;
 }

 // ==============================
 // INITIALIZE APP
 // ==============================

 function init() {
    // Load expense from localStorage
    loadExpenses();

    // Populate month filter
    populateMonthFilter();

    // Initial render
    renderExpenses();
    updateTotal();
    updateBudgetSummary();

    console.log("Expense tracker initialized!");
    console.log("Total expenses loaded:", expenses.length);
 }

 // Run initializeation

init();