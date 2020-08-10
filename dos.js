/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 
*/function mostrar() {

  let respuesta;
  let marca;
  let precio;
  let peso;
  let acumuladorpeso = 0;
  let tipo;
  let flagLiq = 0;
  let marcaLiqCaro;
  let precioMarcaLiqCara
  let flagSol = 0;
  let precioMasBaratoSolido;
  let marcaMasCaroLiq;
  let marcaBaratoSol;

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
      acumuladorpeso += peso
    }
    while (isNaN(peso));

    // tipo
    do {
      tipo = prompt("Ingrese el tipo: Sólido o líquido");
    }
    while (!(tipo == "Sólido" || tipo == "líquido"));

    //a) informar el peso total de la compra. En el acumulador "acumuladorpeso"

    // b) la marca del más caro de los líquidos

    if (tipo == "líquido") {

      if (flagLiq == 0) {
        marcaLiqCaro = marca;
        precioMarcaLiqCara = precio;
        flagLiq = 1;

      } 
       else if (precioMarcaLiqCara > precio) {
        precioMarcaLiqCara = precio;
        marcaMasCaroLiq=marca
      }
       } else if (tipo == "Sólido") {

        if (flagSol == 0) {
          marcaSolidoBarata = marca;
          precioMasBaratoSolido = precio;
          flagSol = 1;

        } else if (precioMasBaratoSolido < precio) {
          precioMasBaratoSolido = precio;
          marcaBaratoSol=marca;
        }

      }

      respuesta= confirm("Desea continuar??");

    
    
    } while (respuesta == true);



  document.write(" El peso total de la compra es de " + acumuladorpeso + "<br/>");
  document.write("La marca del más caro de los líquidos es " + marcaMasCaroLiq + "<br/>");
  document.write("la marca del más barato de los sólidos " + marcaBaratoSol + "<br/>");
}