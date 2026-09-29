// LocalStorage and Dynamic Handling Code
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Handle User Register Form
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("regName").value;
            const email = document.getElementById("regEmail").value;
            
            // Save User to LocalStorage
            localStorage.setItem("user", JSON.stringify({ name, email }));
            alert("Account registered successfully!");
            
            // Close Modal
            const registerModalEl = document.getElementById('registerModal');
            if (registerModalEl) {
                const registerModal = bootstrap.Modal.getInstance(registerModalEl);
                if (registerModal) registerModal.hide();
            }
            registerForm.reset();
        });
    }

    // 2. Handle User Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            
            // Fetch User from LocalStorage
            const savedUser = JSON.parse(localStorage.getItem("user"));
            if (savedUser && savedUser.email === email) {
                alert("Login successful! Welcome " + savedUser.name);
                
                // Close Modal
                const loginModalEl = document.getElementById('loginModal');
                if (loginModalEl) {
                    const loginModal = bootstrap.Modal.getInstance(loginModalEl);
                    if (loginModal) loginModal.hide();
                }
                loginForm.reset();
            } else {
                alert("Invalid Credentials or User Not Registered!");
            }
        });
    }

});