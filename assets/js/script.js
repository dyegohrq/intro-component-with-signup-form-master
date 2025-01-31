const form = document.getElementById('form');
const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput()
})

function checkInput() {
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const passwordValue = password.value

    const regex = /^[a-zA-Z]/
    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    const min = 3

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty')
    } else if (firstNameValue.length < min) {
        setErrorFor(firstName, 'first name must contain more than 3 characters')
    } else if (!regex.test(firstNameValue)) {
        setErrorFor(firstName, 'The field must contain only letters!')
    } else{
        setSuccessFor(firstName)
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty')
    } else if (lastNameValue.length < min) {
        setErrorFor(lastName, 'Last Name must contain more than 3 characters')
    } else if (!regex.test(lastNameValue)) {
        setErrorFor(lastName, 'The field must contain only letters!')
    } else{
        setSuccessFor(lastName)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Fill in this field!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty')
    } else if (!regexPassword.test(passwordValue)) {
        setErrorFor(password, 
            `
            Your password must contain at least: <br/>
            8 digits <br/>
            1 lowercase letter <br/>
            1 uppercase letter <br/>
            1 number </br>
            1 special character!
            `)
    } else {
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');

    formControl.classList.add('invalid')
    span.innerHTML = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('invalid')
    formControl.classList.add('valid')
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}