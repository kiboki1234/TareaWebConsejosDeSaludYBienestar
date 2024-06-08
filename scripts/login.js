document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login");
    const registerForm = document.querySelector(".register");
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if (loginForm.classList.contains("active-form")) {
                loginForm.classList.remove("active-form");
                registerForm.classList.add("active-form");
            } else {
                registerForm.classList.remove("active-form");
                loginForm.classList.add("active-form");
            }
        });
    });

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            console.log('Eye icon clicked'); // Para verificar si el evento se dispara

          
            const passwordField = this.closest('.form-group').querySelector('input[type="password"], input[type="text"]');
            console.log('Password field:', passwordField); 
            if (passwordField.type === "password") {
                passwordField.type = "text";
                this.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                passwordField.type = "password";
                this.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    });
});

document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();  // mensaje error

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Credenciales
    const validUsername = 'admin';
    const validPassword = 'admin';

    // Verificar las credenciales
    if (username === validUsername && password === validPassword) {
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
