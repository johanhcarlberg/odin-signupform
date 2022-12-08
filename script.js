const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");

passwordInput.addEventListener('focusout', checkPasswords);
passwordRepeatInput.addEventListener('focusout', checkPasswords);

function checkPasswords(event) {
    const pwString = passwordInput.value;
    const pwRepeatString = passwordRepeatInput.value;
    const pwErrorSpan = document.querySelector("#password~span")
    if (passwordInput.validity.valueMissing) {
        passwordInput.classList.add("error");
        pwErrorSpan.textContent = "*Password is empty";
    } else if (pwString !== pwRepeatString) {
        passwordInput.classList.add("error");
        passwordRepeatInput.classList.add("error");
        pwErrorSpan.textContent = "*Passwords do not match";
    }

    if (passwordInput.validity.valid && passwordRepeatInput.validity.valid) {
        passwordInput.classList.remove("error");
        passwordRepeatInput.classList.remove("error");
        pwErrorSpan.textContent = "";
    }
}