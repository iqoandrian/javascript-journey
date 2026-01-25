// ================================
// DAY 8: DOM MANIPULATION
// ================================

console.log("DOM Loader!")

/*
There are several way to sekect elements:
1: getElementById() - select by id (return 1 element)
2: querySelector() - selects by css selector (returns first match)
3: querySelectorAll() - select all match (return node list)
4: getElementsByClassName() - select by class (return HTMLCollection)
5: getElementByTagName() - select by tag (returns HTMLCollection)
*/

// Method 1: getElementById (most common for single element)
const demoElement = document.getElementById('demo');
console.log("Selected by ID:", demoElement);

// Method 2: querySelector (flexible, uses CSS selectors)
const firstText = document.querySelector('.text');
console.log("First . text element:", firstText);

//Method 3: querySelectorAll (get all matches)
const allTexts = document.querySelectorAll('.text');
console.log("All .text elements:", allTexts);
console.log('Number of .text elements:', allTexts.length);

// Test: log text content
console.log("Demo text:", demoElement.textContent);

// =================================
// SECTION 2: CHANGING CONTENT
// =================================

const btn2 = document.getElementById('btn2');
const contentDiv = document.getElementById('content');

btn2.addEventListener('click', function() {
    contentDiv.textContent = 'Content changed!🎉';
    console.log("Content changed!");
});

// ================================
// SECTION 3: CHANGING STYLES
// ================================

const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const box = document.getElementById('box');

// Method 1: direct style change
btn3.addEventListener('click', function() {
    box.style.backgroundColor = 'coral';
    box.style.color = 'white';
    box.style.fontSize = '20px';

    console.log("Style changed!");
});

// Method 2: Toggle class (better practice)
btn4.addEventListener('click', function() {
    box.classList.toggle('highlight');

    console.log("Class toggled!");
});

// =======================================
// SECTION 4: CREATING & REMOVING ELEMENTS
// =======================================

/*
Creating elements:
1: document.createElement() - create new element
2: element.appendChild() - add to DOM
3: element.textContent - set text
4: element.remove() - remove from DOM
*/

const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const list = document.getElementById('list');

let itemCount = 2;

btn5.addEventListener('click', function() {
    // Step: Create new <li> element
    const newItem = document.createElement('li');

    // Step 2: set content
    itemCount++;
    newItem.textContent = `Item ${itemCount}`;

    // Step 3: Add to list
    list.appendChild(newItem);

    console.log("Added item:", itemCount);
});

// Remove last list item
btn6.addEventListener('click', function() {
    const lastItem = list.lastElementChild;

    // Check exists
    if (lastItem) {
        lastItem.remove();
        itemCount--;
        console.log("Removed last item");
    } else {
        console.log("No items to remove!");
    }
});

// ==========================================
// SECTION 5: WORKING WITH MULTIPLE ELEMENTS
// ==========================================

/*
whwn working with multiple elements:
1: Use querySelectorAll() to get all
3: Loop through with forEach()
3: Apply changes to each
*/

const btn7 = document.getElementById('btn7');
const cards = document.querySelectorAll('.card');

btn7.addEventListener('click', function() {
    cards.forEach(function(card) {
        card.classList.toggle('active');
    });
    console.log("Toggled all cards!");
});

// =================================
// BONUS: BUTTON 1 DEMO
// =================================

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    // Change the demo to paragraph
    demoElement.textContent = 'You clicked the button!';
    demoElement.style.color = 'green';
    demoElement.style.fontSize = '20px';
});