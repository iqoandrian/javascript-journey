// ================================
// DAY 9: EVENTS & FORMS
// ================================

console.log("Day 9: Events & Forms loaded");

// ==============================
// SECTION 1: INPUT EVENTS
// ==============================
/*
Input events fire as user types:
- input - fires on every change (recommended for real-time)
- change - fires when input loses focus
- keyup - fire when key is released
*/

const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const charCount = document.getElementById('charCount');

// Real-time input tracking
textInput.addEventListener('input', function(e){
    // e = event object, contains info about the event
    // e.target = element that triggered the event
    // e.target.value = current value of input

    const value = e.target.value;

    // update output
    output.textContent = value;

    // update character count
    charCount.textContent = value.length;

    // Change color based on length
    if (value.length > 10) {
        charCount.style.color = '#e74c3c';
    } else {
        charCount.style.color = '#27ae60';
    }

    console.log("Input value:", value);
});

// ============================
// SECTION 2: KEYBOARD EVENTS
// ============================
/*
Keyboard events:
- keydown - fires when key is pressed down
- keyup - fires when key is released
- keypress - deprecated, use keydown instead

Event properties:
- e.key - The actual key pressed (e.g., "a", "enter")
- e.code - physical key code (eg., "KeyA", "enter")
- e.keycode - numeric code (deprecated but still used)
*/

const keyInput = document.getElementById('keyInput');
const keyName = document.getElementById('keyName');
const keyCode = document.getElementById('keyCode');
const eventType = document.getElementById('eventType');

// detect keydown
keyInput.addEventListener('keydown', function(e) {
    // Display key information
    keyName.textContent = e.key;
    keyCode.textContent = e.code;
    eventType.textContent = 'keydown';

    console.log("Key pressed:", e.key, "code:", e.code);

    // Spesial keys detection
    if (e.key === "Enter") {
        console.log("Enter key pressed!");
    }

    if (e.key === "Escape") {
        console.log("Escape key pressed!");
        keyInput.value = '';
    }
});

// Detect keyup
keyInput.addEventListener('keyup', function(e) {
    eventType.textContent = 'keyup';
});

// ===============================
// SECTION 3: FORM VALIDATION
// ===============================
/*
Form events:
- submit - fires when form is submitted
- e.preventDefault - Prevents default form submission (page reload)

Validation strategy:
1. Listen for input events (real-time validation)
2. Listen for submit event (final validation)
3. Show error messages
4. Prevent submission if invalid
*/
const form = document.getElementById('userForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const formResult = document.getElementById('formResult');

// Validation functions
function validateUsername() {
    const value = username.value.trim();
    const error = document.getElementById('usernameError');

    if (value.length === 0) {
        error.textContent = 'Username is required';
        username.classList.add('invalid');
        username.classList.remove('valid');
        return false;
    } else if (value.length < 3){
        error.textContent = 'Username must be at least 3 characters';
        username.classList.add('invalid');
        username.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        username.classList.remove('invalid');
        username.classList.add('valid');
        return true;
    }
}

function validateEmail() {
    const value = email.value.trim();
    const error = document.getElementById('emailError');

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
        error.textContent = 'Email is required';
        email.classList.add('invalid');
        email.classList.remove('valid');
        return false;
    } else if (!emailRegex.test(value)) {
        error.textContent = 'Please enter a valid email';
        email.classList.add('invalid');
        email.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        email.classList.remove('invalid');
        email.classList.add ('valid');
        return true;
    }
}

function validatePassword() {
    const value = password.value;
    const error = document.getElementById('passwordError');

    if (value.length === 0) {
        error.textContent = 'Password is required';
        password.classList.add('invalid');
        password.classList.remove('valid');
        return false;
    } else if (value.length < 6) {
        error.textContent = 'Password must be at least 6 characters';
        password.classList.add('invalid');
        password.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        password.classList.remove('invalid');
        password.classList.add('valid');
        return true;
    }
}

function validateAge() {
    const value = parseInt(age.value);
    const error = document.getElementById('ageError');

    if (isNaN(value)) {
        error.textContent = 'Please enter a valid age';
        age.classList.add('invalid');
        age.classList.remove('valid');
        return false;
    } else if (value < 18 || value > 100) {
        error.textContent = 'Age must be between 18 and 100';
        age.classList.add('invalid');
        age.classList.remove('valid');
        return false;
    } else {
        error.textContent = '';
        age.classList.remove('invalid');
        age.classList.add('valid');
        return true;
    }
}

// Real-time validation on input
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
age.addEventListener('input', validateAge);

// Form submit event
form.addEventListener('submit', function(e) {
    //IMPORTANT: pevent default from submission (prevents page reload)
    e.preventDefault();

    console.log("Form submitted!");

    // Validate all fields
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();

    // Check if all valid
    if (isUsernameValid && isEmailValid && isPasswordValid && isAgeValid) {
        // Form is valid - show success
        formResult.className = 'success';
        formResult.textContent = `✅ Form submitted successfully! Welcome, ${username.value}!`;

        console.log("Form data:", {
            username: username.value,
            email: email.value,
            password: password.value,
            age: age.value
        });

        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            formResult.style.display = 'none';
            // Remove validation classes
            username.classList.remove('valid');
            email.classList.remove('valid');
            password.classList.remove('valid');
            age.classList.remove('valid');
        }, 3000);
    } else {
        // Form is invalid - show error
        formResult.className = 'error';
        formResult.textContent = '❌ Please fix the error above';

        console.log("Form has errors!");
    }
});

// ===================================
// SECTION 4: SELECT & RADIO EVENTS
// ===================================
/*
Select (dropdown) event: 'change'
Radio button event: 'change'
*/

const countrySelect = document.getElementById('country');
const countryOutput = document.getElementById('countryOutput');

countrySelect.addEventListener('change', function(e) {
    const selected = e.target.value;

    if (selected) {
        countryOutput.textContent = selected;
    } else {
        countryOutput.textContent = 'None';
    }

    console.log("Selected country:", selected);
});

// Radio buttons
const radioButtons = document.querySelectorAll('input[name="favorite]');
const favoriteOutput = document.getElementById('favoriteOutput');

radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function(e) {
        favoriteOutput.textContent = e.target.value;
        console.log("Selected favorite:", e.target.value);
    });
});

// =================================
// SECTION 5: CHECKBOX EVENTS
// =================================
/*
Checkbox event: 'change'
Multiple checkbox: Loop and check which are checked
*/

const checkboxes = document.querySelectorAll('.skill');
const skillsOutput = document.getElementById('skillsOutput');

function updateSkills() {
    // get all checked checkboxes
    const checkedSkills = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedSkills.push(checkbox.value);
        }
    });

    // Update output
    if (checkedSkills.length > 0) {
        skillsOutput.textContent = checkedSkills.join(', ');
    } else {
        skillsOutput.textContent = 'None';
    }

    console.log("Selected skills:", checkedSkills);
}

// Listen to each checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateSkills);
});

// ===============================
// SECTION 6: MOUSE EVENTS
// ===============================
/*
Mouse events:
- 'click' - Single click
- 'dblclick' - Double click
- 'mouseenter' - Mouse enters element
- 'mouseleave' - Mouse leave element
- 'mousemove' - Mouse move over element
*/

const mouseBox = document.getElementById('mouseBox');
const mouseEvent = document.getElementById('mouseEvent');
const clickCountSpan = document.getElementById('clickCount');

let clickCount = 0;

// Click event
mouseBox.addEventListener('click', function() {
    clickCount++;
    clickCountSpan.textContent = clickCount;
    mouseEvent.textContent = 'Clicked!';
    console.log("Box clicked! Count:", clickCount);
});

// Mouse enter (hover)
mouseBox.addEventListener('mouseenter', function() {
    mouseEvent.textContent = 'Mouse entered'
    console.log("Mouse entered box");
});

// Mouse leave
mouseBox.addEventListener('mouseleave', function() {
    mouseEvent.textContent = 'Mouse left';
    console.log("Mouse left box");
});

// Double click
mouseBox.addEventListener('dblclick', function() {
    mouseEvent.textContent = 'Double clicked!';
    mouseBox.style.background = 'linear-gradien(135deg, #f093fb 0%, #f5576c 100%)';
    console.log("Box double clicked!");

    // Reset color after 1 second
    setTimeout(() => {
        mouseBox.style.background = 'linear-gradient(13deg, #667eea 0%, #764ba2 100%)';
    }, 1000);
});