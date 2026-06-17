// Form validation helpers

function isEmail(email) {
    return email.includes("@") && email.includes(".");
}

function isEmpty(value) {
    return value.trim() === "";
}

function validatePassword(password) {
    return password.length >= 6;
}
