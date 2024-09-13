document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Validate Name
    if (name === '') {
        showError('nameError', 'Name is required.');
        valid = false;
    }

    // Validate Email
    if (email === '') {
        showError('emailError', 'Email is required.');
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email address.');
        valid = false;
    }

    // Validate Message
    if (message === '') {
        showError('messageError', 'Message is required.');
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        // Form submission logic here
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}
