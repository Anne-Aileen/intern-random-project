// Form validation and submission handling
function handleLogin(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous errors
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validation
    let isValid = true;

    // Email validation
    if (!email) {
        emailError.textContent = 'Username/Email is required';
        isValid = false;
    } else if (email.includes('@') && !isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Password validation
    if (!password) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // If valid, proceed with login
    if (isValid) {
        // Here you would typically send the credentials to a server
        console.log('Login attempt with:', { email, password });
        alert('Login Successful! Welcome ' + email);
        // Uncomment to redirect after successful login:
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Social login handlers
document.querySelector('.google-btn').addEventListener('click', function () {
    alert('Google login would be implemented here');
});

document.querySelector('.github-btn').addEventListener('click', function () {
    alert('GitHub login would be implemented here');
});

document.querySelector('.apple-btn').addEventListener('click', function () {
    alert('Apple login would be implemented here');
});

// Real-time validation feedback
document.getElementById('email').addEventListener('blur', function () {
    const emailError = document.getElementById('emailError');
    const email = this.value.trim();
    if (email && email.includes('@') && !isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
    } else {
        emailError.textContent = '';
    }
});

document.getElementById('password').addEventListener('blur', function () {
    const passwordError = document.getElementById('passwordError');
    const password = this.value;
    if (password && password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});