//1. Definir objetos simples usando literales
var persona1 = {
    nombre:"JoseLuis",
    apellido:"bahillo",
    año:1992
};

//2. Definir un objeto simple usando la propiedad new
var persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido="Polo";
persona2.año=1990;
//3.Definir un constructor de objeto y crear objetos del tipo del constructor.
function Persona(nom,ap,an){
    this.nombre=nom;
    this.apellido=ap;
    this.año=an;
}
var javi = new Persona("Javier","Polo",1985);
/*THIS (palabra reservada)
-HAce referncia al propietario de la funcion que se esta invocando
-Hace referencia al objeto donde la funcion es un metodo
*/