document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Password length check
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Simulate login process and redirect
        console.log(`Logging in user: ${email}`);
        window.location.href = "index3.html";
    });
});


