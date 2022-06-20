const formulario = document.querySelector('form');
console.log(formulario);

const inputNumero = document.querySelector('input[type="number"]');
const inputNome = document.querySelector('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputSenha = document.querySelector('input[type="password"]');
const inputSubmit = document.querySelector('input[type="submit"]');

console.log(inputNumero, inputNome, inputEmail, inputSenha, inputSubmit);

inputSubmit.disabled = true;

    
    document.addEventListener('click', () => {

        console.log('Hello')
        console.log(inputNumero.value, inputNome.value, inputEmail.value, inputSenha.value)

        if(inputNumero.value = '', inputNome.value = '', inputEmail.value = '', inputSenha.value = '') {
            inputSubmit.disabled = true;
        }
    })

    if (inputNumero.value, inputNome.value, inputEmail.value, inputSenha.value) {
        inputSubmit.disabled = false;
    }