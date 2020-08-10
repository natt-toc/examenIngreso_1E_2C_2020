/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorpeso = 0;


  do {


    //  validar os siguientes datos: marca, precio, peso en kilogramos, tipo(sólido o líquido)
    do {
      // marca
      marca = prompt("Ingrese la marca deseada ")

    } while (!(isNaN(marca)));

    // precio
    do {
      precio = parseInt(prompt("Ingrese el precio"));
    }
    while (isNaN(precio));

    //peso en Kg

    do {
      peso = parseInt(prompt("ingrese el peso"));
    }
    while (isNaN(peso));

    // tipo

    do {
      tipo = prompt("Ingrese el tipo: Sólido o líquido");
    }
    while (!(tipo == "Sólido" || tipo == "líquido"));


  }


}