var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ancho = 5;
var altura = 50;
var separacion = 5;
var rectangulos = [];
var tiempo = 100; // en milisegundos

//Crea los 10 rectángulos de color gris
for (var i = 0; i < 10; i++) {
    rectangulos.push({ x: i *(ancho+separacion), y: 0, color: 'gray' });
}

//Dibuja los rectángulos en el lienzo
function dibujarRectangulos() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < rectangulos.length; i++) {
        var rect = rectangulos[i];
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, ancho, altura);
    }
}

//Cambia el color del primer rectángulo a negro y el segundo a gris
function cambiarColores() {
    var rect1 = rectangulos[1];
    var rect2 = rectangulos[0];
    rect1.color = 'black';
    rect2.color = 'gray';
    rectangulos.shift();
    rectangulos.push(rect2);
}

dibujarRectangulos();
setInterval(function () {
    cambiarColores();
    dibujarRectangulos();
}, tiempo);