const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('Password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInpus();
})

function checkInpus() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const password = password.value; 

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be emoty');
    } else {
        setSuccessFor(firstName);
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