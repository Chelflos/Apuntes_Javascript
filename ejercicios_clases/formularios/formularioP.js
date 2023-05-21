
/*let formulario = document.getElementById("formulario");
let boton = document.getElementById("enviar");
let nombre = document.getElementById("nombre").value;
let password = document.getElementById("password").value;
let email = document.getElementById("email").value;
let sexo="";
let sexo1 = document.getElementById("sexo1");
let sexo2 = document.getElementById("sexo2");
let condiciones = document.getElementById("condiciones");

//objeto que contiene todos los atributos del formulario
const verificado = {
    nombre: false,
    password: false,
    email: false,
    sexo: false,
    terminos: false,
}

const validarFormulario = () =>{

    const valores = Object.values(verificado);
    const validado = valores.findIndex(value => value == false);
    if (validado == -1) {
        formulario.submit();    
    }
    else alert('El formulario no es valido');
}
formulario.addEventListener('submit', e => {
    e.preventDefault();
    validarFormulario();
    

})

//verificar nombre
nombre.addEventListener('change',(e)=>{
    console.log(e.target);
    if(e.target.value.trim().length > 3)verificado.nombre = true;
})

//Verificar password
password.addEventListener('change',(e)=>{
    console.log(e.target);
    if(e.target.value.trim().length >= 6)verificado.password = true;
})

//Verificar mail
email.addEventListener('change',(e)=>{
    let expresionMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    console.log(e.target);
    if(e.target.value.trim().length >= 6 && email.test(expresionMail))verificado.email = true;

})

//verificar sexo

    if(sexo1.checked==true){
        verificado.sexo=true;
        sexo = sexo1.value;
    }else if(sexo2.checked==true){
        verificado.sexo=true;
        sexo=sexo2.value;
}

//Verificar check condiciones legales
    condiciones.addEventListener('change', (e)=>{
    console.log(e.target);
    if(condiciones.checked == true){
        verificado.terminos=true;
        enviar.removeAttribute('disabled')  
}
else (enviar.setAttribute('disbled', true))
})

//validar Datos
*/

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const password = document.getElementById('password');
const email = document.getElementById('email');
const sexo1 = document.getElementById('sexo1');
const sexo2 = document.getElementById('sexo2');
const enviar = document.getElementById('enviar');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validarCampos()) {
    enviarFormulario();
  }
});

function validarCampos() {
  const nombreValor = nombre.value.trim();
  const passwordValor = password.value.trim();
  const emailValor = email.value.trim();

  if (nombreValor === '') {
    alert('Por favor, introduce un nombre válido.');
    return false;
  }

  if (passwordValor === '') {
    alert('Por favor, introduce una contraseña válida.');
    return false;
  }

  if (passwordValor.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return false;
  }

  if (emailValor === '') {
    alert('Por favor, introduce un email válido.');
    return false;
  }

  if (!emailValido(emailValor)) {
    alert('Por favor, introduce un email válido.');
    return false;
  }

  if (!sexo1.checked && !sexo2.checked) {
    alert('Por favor, selecciona tu sexo.');
    return false;
  }

  if (!condiciones.checked) {
    alert('Por favor, acepta los términos y condiciones.');
    return false;
  }

  return true;
}

function emailValido(email) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(email);
}

function enviarFormulario() {
  formulario.submit();
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validarCampos()) {
    enviarFormulario();
  }
});

function validarCampos() {
  const nombreValor = nombre.value.trim();
  const passwordValor = password.value.trim();
  const emailValor = email.value.trim();

  if (nombreValor === '') {
    alert('Por favor, introduce un nombre válido.');
    return false;
  }

  if (passwordValor === '') {
    alert('Por favor, introduce una contraseña válida.');
    return false;
  }

  if (passwordValor.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return false;
  }

  if (emailValor === '') {
    alert('Por favor, introduce un email válido.');
    return false;
  }

  if (!emailValido(emailValor)) {
    alert('Por favor, introduce un email válido.');
    return false;
  }

  if (!sexo1.checked && !sexo2.checked) {
    alert('Por favor, selecciona tu sexo.');
    return false;
  }

  if (!condiciones.checked) {
    alert('Por favor, acepta los términos y condiciones.');
    return false;
  }

  return true;
  if(condiciones.checked){
    enviar.removeAttribute('disabled');
  }
}

function emailValido(email) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(email);
}

function enviarFormulario() {
  formulario.submit();
}