/*
JavaScript aporta un objeto global llamado JSON que permite manipular los datos en este formato. 
Este objeto posee dos métodos:*/
const musico={
    nombre:"Jose luis",
    apellido:"Rodriguez",
    fechaNacimiento:{
        dia:24,
        mes:5,
        año:1965
    },
    discos:['patraña 1','patraña 2','patraña 3','patraña4, el regreso']
}
/*Stringify. Sirve para convertir un objeto JavaScript a un string que contiene el formato JSON equivalente:*/
console.log(JSON.stringify(musico));
/*Parse. Recibe un texto en formato JSON y evalúa su corrección. Si es correcto, retorma el objeto equivalente 
y si no, devuelve una excepción de tipo SyntaxError. Ejemplo:*/
console.log(JSON.parse(musico));