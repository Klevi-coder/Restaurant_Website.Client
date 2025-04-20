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
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    fetch("https://localhost:7177/api/Login/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if (result.Message === "Login successful.") {
            alert("Login successful!");
            window.location.href = "menu.html";
        } else {
            alert(result.Message || "Login failed.");
        }
    })
    .catch(error => {
        alert("An error occurred while logging in.");
    });
}

function signup() {
    const username = document.getElementById("signup-fullname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("signup-error-message").style.display = "block";
        document.getElementById("signup-error-message").textContent = "Passwords do not match!";
        return;
    }

    fetch("https://localhost:7177/api/Signup/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.Message === "User registered successfully.") {
            alert("Registration successful!");
            showLogin();
        } else {
            document.getElementById("signup-error-message").style.display = "block";
            document.getElementById("signup-error-message").textContent = result.Message || "Registration added.";
        }
    })
    .catch(error => {
        document.getElementById("signup-error-message").style.display = "block";
        document.getElementById("signup-error-message").textContent = "An error occurred while registering.";
    });
}