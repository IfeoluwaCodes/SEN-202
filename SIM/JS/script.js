// ===============================
// Security Incident Mapping (SIM)
// script.js
// ===============================

// Incident Report Form
const incidentForm = document.getElementById("incidentForm");

if (incidentForm) {
    incidentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Incident report submitted successfully!");

        incidentForm.reset();
    });
}


// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        alert("Login Successful!");

        loginForm.reset();
    });
}
