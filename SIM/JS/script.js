// ===============================
// Security Incident Mapping (SIM)
// script.js
// ===============================

// -------------------------------
// LOGIN
// -------------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const userType = document.getElementById("userType").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(userType === "" || email === "" || password === ""){
            alert("Please fill in all fields.");
            return;
        }

        // Save login information
        localStorage.setItem("userType", userType);

        alert("Login Successful!");

        if(userType === "admin"){
            window.location.href = "reports.html";
        }else{
            window.location.href = "report.html";
        }

    });
}


// -------------------------------
// REPORT INCIDENT
// -------------------------------
const incidentForm = document.getElementById("incidentForm");

if (incidentForm) {

    incidentForm.addEventListener("submit", function(event){

        event.preventDefault();

        const report = {

            name: document.getElementById("name").value,
            role: document.getElementById("role").value,
            incident: document.getElementById("incident").value,
            location: document.getElementById("location").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            description: document.getElementById("description").value,
            status: "Pending"

        };

        let reports = JSON.parse(localStorage.getItem("reports")) || [];

        reports.push(report);

        localStorage.setItem("reports", JSON.stringify(reports));

        alert("Incident submitted successfully!");

        incidentForm.reset();

    });

}


// -------------------------------
// DISPLAY REPORTS
// -------------------------------
const reportTable = document.getElementById("reportTable");

if(reportTable){

    const userType = localStorage.getItem("userType");

    if(userType !== "admin"){

        alert("Access Denied! Admin Only.");

        window.location.href = "index.html";

    }else{

        const reports = JSON.parse(localStorage.getItem("reports")) || [];

        reportTable.innerHTML = "";

        reports.forEach(function(report,index){

            reportTable.innerHTML += `

            <tr>

                <td>${index + 1}</td>
                <td>${report.incident}</td>
                <td>${report.location}</td>
                <td>${report.date}</td>
                <td>${report.status}</td>

            </tr>

            `;

        });

    }

                }
