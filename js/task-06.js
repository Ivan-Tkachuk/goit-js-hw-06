const input = document.getElementById('validation-input');

input.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
   
    const {value, dataset} = event.currentTarget;
    if (value.length != dataset.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}

