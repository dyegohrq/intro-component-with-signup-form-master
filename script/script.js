const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('Password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value; 

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be emoty');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email,'Looks like this is not an email');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email.');
    } else{
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'Password must be at least 7 characters long');
    } else{
        setSuccessFor(password);
    }


    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [... formControls].every((formControl) => {
        return (formControl.class === 'form-control success');
    });
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Adicionar a mensagem de erro
    small.innerText = message;

    // Adicionar a classe de sucesso
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a class de sucesso 
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}