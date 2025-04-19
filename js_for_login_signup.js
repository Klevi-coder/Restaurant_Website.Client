


function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
}

function togglePassword(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const icon = passwordField.nextElementSibling.querySelector('i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.replace('bx-low-vision', 'bx-show');
    } else {
        passwordField.type = 'password';
        icon.classList.replace('bx-show', 'bx-low-vision');
    }
}

function login() {
    // Implement your login functionality here
    console.log("Login function called");
}

function signup() {
    // Implement your signup functionality here
    console.log("Signup function called");
}