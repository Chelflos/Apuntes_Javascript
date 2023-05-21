//Crear un objeto fecha es usar el constructor de objetos date.
//En la constuccion mas simple, la funcion DFate no requiere paramentros:
let hoy=new Date();
console.log(hoy);   //Nos daria la fecha y hora actual.

/*Tambien podemos crear un objeto Date indicando una decha concreta de la siguiente manera:
new Date(año,mes,dia,hora,minutos,segundo,ms)*/
let fecha = new Date(2013,5,25,16,12,0,0)
console.log(fecha);

/*
METODOS DATE
TIPO GET
permiten extraer de una fecha un dato en partivular.

*/
alert(hoy.getDay()+"/ "+ hoy.getDate()+" /"+hoy.getMonth()+" /"+ hoy.getFullYear());//muestra los atributos de fecha
alert(hoy.getHours(),": "+ hoy.getMinutes()+": "+ hoy.getSeconds()+": "+hoy.getMilliseconds()); //Muestra todos los atributos de hora
alert("Ms desde 1/1/1970: "+ fecha.getTime());