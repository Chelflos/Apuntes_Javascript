let pagina = new Object();//crear un objeto vacio
let tapas = {}              //otra manera de crear un objerto vacio
let libro={
    titulo:"Manual de UFOlogía",
    "n-serie":"23F452",           //Las propiedades pueden llevan comillas,guiones etc, en esos casos se usan comillas.
    autores :["Jose Maria Bahillo", "Jose luis Cabano"], //Esta propiedad es un array
    editorial:{//La editorial es otro objeto
        nombre: "Editorial falsa s.l.",
        pais : "España"
    },
}
libro.isbn="4578x"; //Esta es otra manera de declarar e inicializar un propiedad.

papel.gramaje="200";
papel.color="beige";

/*JavaScript nos permite crear objetos a través de una función y el operador new. A estas funciones se les denomina funciones 
constructoras. El operador new genera nuevos objetos a partir de esa función. 
A este proceso se le conoce como instanciar objetos.*/
function Punto(coordX,coordY){
    this.x=coordX;
    this.y=coordY;
    this.mostrarcoordenadas=()=>`($(this.x),$(this.y))`;
}

let a = new Punto(10,20);
let b = new Punto(-3,6);

console.log(a.mostrarcoordenadas());
console.log(b.mostrarcoordenadas());
console.log(b instanceof Punto);
console.log(b instanceof Object);
console.log(b.constructor.name);//devuelve el nombre del constructor



console.log(libro.titulo);           //Manual de UFOLOGIA
console.log(libro.autores);          //Escribe 23F452
console.log(libro.editorial.nombre); //Escribe Editorial falsa s.l.

console.log(libro instanceof libro);
console.log(libro instanceof Object);

/*
PROTOTIPOS
Denominamos proptotipo a la parte común de los objetos del mismo tipo. Lo interesante en JavaScript es que podemos modificar
 el prototipo sobre la marcha, y los objetos que enlazan con ese prototipo inmediatamente estarán al día porque el enlace con su prototipo es dinámico. 

El acceso al prototipo de un objeto se puede hacer con la propiedad __proto__ (hay dos guiones ante y después de proto).*/
console.log(a.__proto__);
//O equivalentemente:
console.log(Object.getPrototypeOf(a));
//O bien:
console.log(Punto.prototype);

/*MODIFICAR PREOTOTIPOS

Para modificar prototipos basta con indicar la propiedad prototype y después definir propiedades y métodos a voluntad. 
Para definir, por ejemplo, un nuevo método y una nueva propiedad podemos indicarlos y darles valor. Por ejemplo:*/

Punto.prototype.sumaXY=function(){
    return this.x+this.y;
}
Punto,prototype.z=0;
/*Ahora el prototipo de Punto ya tiene un método y una propiedad. Lo interesante es que todos los objetos basados en Punto 
disponen de esa propiedad y método. Un detalle importante es lo que ocurre si modificamos en un objeto la propiedad heredada.*/
a.z=7;
/*En este caso, la variable a ya no coge la propiedad z del prototipo, tiene un valor propio de esa propiedad. Aunque modifiquemos 
la propiedad z a través del prototipo, la variable a no lo reflejará. Sin embargo, todos los demás objetos usarán la propiedad z del prototipo. */