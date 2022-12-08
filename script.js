const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");
const form = document.querySelector("form.signup-form");

passwordInput.addEventListener('focusout', checkPasswords);
passwordRepeatInput.addEventListener('focusout', checkPasswords);
form.addEventListener('submit', onSubmit)

function onSubmit(e) {
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
    }
}