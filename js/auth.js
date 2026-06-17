// Simple frontend auth (demo only)

function register() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    localStorage.setItem("user", JSON.stringify({ email, password }));

    alert("Account created!");
}

function login() {
    let email = document.querySelector("#loginEmail").value;
    let password = document.querySelector("#loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}
