// ==================================
// CHALLENGE DAY 6: PRODUCT INVENTORY SYSTEM
// ==================================

// ======================
// INITIAL DATA
// ======================
const products = [
    {id: 1, name: "Laptop", price: 15000000, stock: 5, category: "electronics"},
    {id: 2, name: "Mouse", price: 150000, stock: 20, category: "electronics"},
    {id: 3, name: "Keyboard", price: 500000, stock: 15, category: "electronics"},
    {id: 4, name: "Monitor", price: 2000000, stock: 8, category: "electronics"},
    {id: 5, name: "Desk", price: 1500000, stock: 3, category: "electronics"}
];

const addProduct = (productsArray, newProduct) => {
    productsArray.push(newProduct);
};

// Test task 1
console.log("=== TASK 1: ADD PRODUCT ===\n");
const newProduct = {id: 6, name: "Chair", price: 800000, stock: 10, category: "furniture"};
addProduct(products, newProduct);
console.log("Products after adding:", products);
console.log("Total products:", products.length);

// ===========================
// TASK 2: Calculate total inventory value
// ===========================

const calculateTotalValue = (productsArray) => {
    return productsArray.reduce((total, product) => {
        // Calculate
        const productValue = product.price * product.stock;
        return total + productValue;
    }, 0);
};

// Test task 2
console.log("\n=== TASK 2: Total Inventory Value ===");
const totalValue = calculateTotalValue(products);
console.log("Total inventory value: Rp", totalValue.toLocaleString('id-ID'));

// ============================
// TASK 3: Find product by ID
// ============================

const findProductById = (productsArray, id) => {
    return productsArray.find(product => product.id === id); 
};

// Test task 3
console.log("\n=== TASK 3: FIND PRODUCT ===");
const foundProduct = findProductById(products, 3);
console.log("Found product:", foundProduct);

const notFound = findProductById(products, 999);
console.log("Product with ID 999:", notFound);

// =============================
// TASK 4: Update product stock
// =============================

const updateStock = (productsArray, productId, newStock) => {
    const product = productsArray.find(p => p.id === productId);
    if (!product) {
        return "Product not found";
    }

    product.stock = newStock;
    return `Stock updated: ${product.name} now has ${newStock} units`;
};

// Test task 4
console.log("\n=== TASK 4: UPDATE STOCK ===");
console.log(updateStock(products, 2, 25));
console.log(updateStock(products, 999, 10));

// Verify the update
console.log("Mouse after update:", findProductById(products, 2));