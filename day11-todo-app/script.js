// ===================================
// DAY 11: TODO APP with localStorage
// ===================================

console.log("Todo app loaded");

// =============================
// STATE
// =============================
/*
each todo is an object:
{
    id: unique timestamp,
    text: "Buy milk".
    completed: false
}
*/
let todos = [];
let currentFilter = 'all';

// =============================
// DOM ELEMENTS
// =============================

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearCompleteBtn = document.getElementById('clearCompleted');

// =============================
// LOCALSTORAGE FUNCTION
// =============================
/*
localStorage only store STRINGS
so we need to convert:
- Array > String: JSON.stringify()
- String > Array: JSON.parse()
*/

function saveTodos() {
    // Convert todos array to string and save
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("Todos saved to localStorage!");
}

function loadTodos() {
    // Get todos from localStorage
    const savedTodos = localStorage.getItem('todos');

    // If exist, parse and load
    if(savedTodos) {
        todos = JSON.parse(savedTodos);
        console.log("Todos loaded from localStorage", todos);
    } else {
        todos = [];
        console.log("No saved todos found");
    }
    renderTodos();
}

// =============================
// ADD TODO
// =============================

function addTodo(text) {
    // Create new todo object
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    // Add to array
    todos.push(newTodo);

    // Save to localStorage
    saveTodos();

    // Update display
    renderTodos();

    console.log("Todo added:", newTodo);
}

// Form submit event
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const text = todoInput.value.trim();

    if (text) {
        addTodo(text);
        todoInput.value = ''; // Clear input
        todoInput.focus(); // Focus back input
    }
});

// =============================
// TOGGLE COMPLETE
// =============================

function toggleComplete(id) {
    // Find todo and toggle complete status
    const todo = todos.find(t => t.id === id);

    if(todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        console.log("Todo toggled:", todo);
    }
}

// =============================
// DELETE TODO
// =============================

function deleteTodo(id) {
    // Filter out the todo with this id
    todos = todos.filter(t => t.id !== id);

    saveTodos();
    renderTodos();

    console.log("Todo deleted, remaining:", todos.length);
}

// =============================
// CLEAR COMPLETED
// =============================

function clearCompleted() {
    // Keep only incomplete todos
    todos = todos.filter(t => !t.completed);

    saveTodos();
    renderTodos();

    console.log("Completed todos cleared!")
}

clearCompleteBtn.addEventListener('click', clearCompleted);

// ==============================
// FILTER TODOS
// ==============================

function getFilteredTodos() {
    if (currentFilter === 'active') {
        return todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        return todos.filter(t => t.completed);
    } else {
        return todos; // all
    }
}

// Filter button clicks
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));

        // Add active to clicked button
        btn.classList.add('active');

        // Set current filter
        currentFilter = btn.dataset.filter;

        // Re-render with filter
        renderTodos();

        console.log("Filter changed to:", currentFilter);
    });
});

// =============================
// RENDER TODOS
// =============================

function renderTodos() {
    // Get filtered todos
    const filteredTodos = getFilteredTodos();

    // Clear list
    todoList.innerHTML = '';

    // If no todos, show empty state
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<div class="empty-state>No todos yet! add one above</div>';
    } else {
        // Render each todo
        filteredTodos.forEach(todo => {
            const todoItem = createTodoElement(todo);
            todoList.appendChild(todoItem);
        });
    }

    // Update count
    updateCount();
}

// ===============================
// CREATE TODO ELEMENT
// ===============================

function createTodoElement(todo) {
    // Create <li>
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) {
        li.classList.add('completed');
    }

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo=checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleComplete(todo.id));

    // Create text span
    const textSpan = document.createElement('span');
    textSpan.className = 'todo-text';
    textSpan.textContent = todo.text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    // Append all to li
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    return li;
}

// =============================
// UPDATE COUNT
// =============================

function updateCount() {
    // Count incomplete todos
    const activeCount = todos.filter(t => !t.completed).length;

    // Update text
    const itemText = activeCount === 1 ? 'item' : 'items';
    todoCount.textContent = `${activeCount} ${itemText} left`;
}

// ============================
// INITIALIZE APP
// ============================
loadTodos();

console.log("Todo app ready! Add some todos and refresh the page - they'll still be there!");

// ===================================
// KEY CONCEPTS
// ===================================

/*
1. LOCALSTORAGE:
   - localStorage.setItem(key, value) - Save
   - localStorage.getItem(key) - Load
   - JSON.stringify() - Object → String
   - JSON.parse() - String → Object

2. CRUD OPERATIONS:
   - CREATE: addTodo()
   - READ: loadTodos(), getFilteredTodos()
   - UPDATE: toggleComplete()
   - DELETE: deleteTodo()

3. STATE MANAGEMENT:
   - Single source of truth (todos array)
   - All changes go through functions
   - Functions update state → save → render

4. DYNAMIC DOM:
   - createElement()
   - appendChild()
   - Clear & rebuild on changes

5. EVENT DELEGATION:
   - Attach events to dynamically created elements

6. FILTERING:
   - Array.filter() for different views

THIS APP PERSISTS DATA! 🔥
*/