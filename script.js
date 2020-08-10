
const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')


//Agregar EventListener para enviar formulario
form.addEventListener('submit', e => {
   // Evita el envío de formulario cancelando
    e.preventDefault();
    checkInput();

})

//El método trim () elimina los espacios 
//en blanco de ambos extremos de una cadena. 
//Los espacios en blanco en este contexto 
//son todos los caracteres de espacio en blanco 
//(espacio, tabulación, espacio sin interrupciones, etc.) 
//y todos los caracteres de terminación de línea (LF, CR, etc.).
// Función para verificar entradas en formularios
function checkInput(){
   // Recortar el espacio en blanco
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Checa las condiciones para los Input
    if (firstNameValue === '') {
      setErrorMsg(firstName);
  } else {
      setSuccess(firstName);
  }
  if (lastNameValue === '') {
      setErrorMsg(lastName);
  } else {
      setSuccess(lastName);
  }
  if (emailValue === '') {
      setErrorMsg(email);
  } else {
      setSuccess(email);
  }
  if (passwordValue === '') {
      setErrorMsg(password);
  } else {
      setSuccess(password);
  }
}

// mensaje de error function
function setErrorMsg(input) {
  const formControl = input.parentElement;
  const image = formControl.querySelector('.error');
  const warning = formControl.querySelector('.errorMessage');

  image.style.display = 'block';
  warning.style.display = 'block';

}

// Success function
function setSuccess(input) {
  const formControl = input.parentElement;
  const image = formControl.querySelector('.error');
  const warning = formControl.querySelector('.errorMessage');

  image.style.display = 'none';
  warning.style.display = 'none';
}

// Checa la validación del email
function isEmail(email) {
  return emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
}


