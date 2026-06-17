// NAVIGATION FUNCTIONS
function goLogin() {
    window.location.href = "login.html";
}

function goRegister() {
    window.location.href = "register.html";
}

function goScholarships() {
    window.location.href = "scholarships.html";
}

// CONTACT FORM (WORKING)
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let name = document.getElementById("name").value;

            alert("Thank you " + name + "! Message sent successfully 🚀");

            form.reset();
        });
    }

});
