const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");
const form = document.querySelector("form.signup-form");

passwordInput.addEventListener('focusout', checkPasswords);
passwordRepeatInput.addEventListener('focusout', checkPasswords);
form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    checkFirstname();
    checkLastName();
    checkEmail();
    checkPasswords();
    if(!form.checkValidity()) {
        e.preventDefault();
    }
}

function checkPasswords(event) {
    const pwString = passwordInput.value;
    const pwRepeatString = passwordRepeatInput.value;
    const pwErrorSpan = document.querySelector("#password~span")
    if (passwordInput.validity.valueMissing) {
        passwordInput.classList.add("error");
        pwErrorSpan.textContent = "*Password is empty";
        passwordInput.setCustomValidity("Password is empty");
    } else if (pwString !== pwRepeatString) {
        passwordInput.classList.add("error");
        passwordRepeatInput.classList.add("error");
        pwErrorSpan.textContent = "*Passwords do not match";
        passwordInput.setCustomValidity("Passwords do not match");
    } else {
        passwordInput.classList.remove("error");
        passwordRepeatInput.classList.remove("error");
        pwErrorSpan.textContent = "";
        passwordInput.setCustomValidity("");
    }
}

function checkFirstname(event) {
    const firstNameInput = document.querySelector("#first-name");
    const firstNameErrorSpan = document.querySelector("#first-name~span");
    if (firstNameInput.validity.valueMissing) {
        firstNameInput.classList.add("error");
        firstNameErrorSpan.textContent = "*First name is empty";
        firstNameInput.setCustomValidity("First name is empty");
    } else {
        firstNameInput.classList.remove("error");
        firstNameErrorSpan.textContent = "";
        firstNameInput.setCustomValidity("");
    }
}

function checkLastName(event) {
    const lastNameInput = document.querySelector("#last-name");
    const lastNameErrorSpan = document.querySelector("#last-name~span");
    if (lastNameInput.validity.valueMissing) {
        lastNameInput.classList.add("error");
        lastNameErrorSpan.textContent = "*Last name is empty";
        lastNameInput.setCustomValidity("Last name is empty");
    } else {
        lastNameInput.classList.remove("error");
        lastNameErrorSpan.textContent = "";
        lastNameInput.setCustomValidity("");
    }
}

function checkEmail(event) {
    const emailInput = document.querySelector("#email");
    const emailErrorSpan = document.querySelector("#email~span");
    if (emailInput.validity.valueMissing) {
        emailInput.classList.add("error");
        emailErrorSpan.textContent = "*Email is empty";
        emailInput.setCustomValidity("Email is empty");
    } else {
        emailInput.classList.remove("error");
        emailErrorSpan.textContent = "";
        emailInput.setCustomValidity("");
    }
}