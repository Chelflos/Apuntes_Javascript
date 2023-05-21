let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let email = document.getElementById("mail");
let sexo = document.getElementById("sexo");
let terminos = document.getElementById("condiciones");
let boton = document.getElementById("enviar");
//Una forma de validar los datos de un formulario es crear un objeto con las propiedades del formulario

const verificado = {
    nombre: false,
    email: false,
    sexo: false,
    terminos: false,
}


//se anulan los valores por defecto para impedir dentro de lo posible que se envie un formulario vacio
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})
//para comrobar que se han cambiado los campos independientemente de la forma en quie lo hayan hecho
nombre.addEventListener('change', (e) => {
    console.log(e.target);
    if (e.target.value.trim().length > 0) verificado.nombre = true;
})
//utiliza .trim para saltar caracteres en blanco
email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) verificado.email = true;

})
sexo.addEventListener('change', (e) => {
    if (e.target.checked == 'true') verificado.sexo = true;

})
terminos.addEventListener('change', (e) => {
    verificado.terminos = e.target.checked;
    //si es false                                           si es true
    e.target.checked ? boton.removeAttribute('disabled') : boton.setAttribute('disabled', true);

})

const validarFormulario = () => {
    const valores = Object.values(verificado);
    const validado = valores.findIndex(value => value == false);
    if (validado == -1) formulario.submit()
    else alert('El formulario no es valido');
}