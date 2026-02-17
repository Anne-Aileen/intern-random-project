// Form validation and submission handling
function handleSignup(event) {
    event.preventDefault();

    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // Clear previous errors
    document.getElementById('fullnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('termsError').textContent = '';

    // Validation
    let isValid = true;

    // Full name validation
    if (!fullname) {
        document.getElementById('fullnameError').textContent = 'Full name is required';
        isValid = false;
    } else if (fullname.length < 3) {
        document.getElementById('fullnameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }

    // Email validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Username validation
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
        isValid = false;
    }

    // Password validation
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // Terms validation
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms';
        isValid = false;
    }

    // If valid, proceed with signup
    if (isValid) {
        console.log('Signup with:', { fullname, email, username });
        alert('Account created successfully! Welcome ' + fullname);
        // Redirect to login page
        window.location.href = 'index.html';
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time validation feedback
document.getElementById('fullname').addEventListener('blur', function () {
    const fullnameError = document.getElementById('fullnameError');
    if (this.value.trim().length > 0 && this.value.trim().length < 3) {
        fullnameError.textContent = 'Name must be at least 3 characters';
    } else {
        fullnameError.textContent = '';
    }
});

document.getElementById('email').addEventListener('blur', function () {
    const emailError = document.getElementById('emailError');
    if (this.value.trim() && !isValidEmail(this.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
    } else {
        emailError.textContent = '';
    }
});

document.getElementById('username').addEventListener('blur', function () {
    const usernameError = document.getElementById('usernameError');
    if (this.value.trim().length > 0 && this.value.trim().length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
    } else {
        usernameError.textContent = '';
    }
});

document.getElementById('password').addEventListener('blur', function () {
    const passwordError = document.getElementById('passwordError');
    if (this.value && this.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});

document.getElementById('confirmPassword').addEventListener('blur', function () {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const password = document.getElementById('password').value;
    if (this.value && this.value !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.textContent = '';
    }
});
