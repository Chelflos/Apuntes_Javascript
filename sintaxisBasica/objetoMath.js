function Circulo(r){
    this.radio=r;
    this.calcularCircunferencia = () => (2*Math.PI*this.radio);
}
let c = new Circulo(10);
console.log(c.calcularCircunferencia);