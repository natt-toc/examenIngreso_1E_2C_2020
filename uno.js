/*
1)De 5  personas que ingresan al hospital se deben tomar y 

pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {


	let nombre;
	let contadorPersonas=1;
	let sexo;
	let edad;
	let acumuludaroEdad=0;
	let peso;
	let acumuladorpeso=0;
	let promedioEdadTotal;
	let contadorFem=0;
	let contadorMasc=0;
	let flagMasc=0;
	let hombreMasPesado;

	do {
		// validar los siguientes datos: nombre ,peso, sexo y edad.

		//nombre
		do {
			nombre = prompt("ingrese nombre")
			contadorPersonas++

		} while (!(isNaN(nombre)));

		//peso
		do {
			peso = parseFloat(prompt("ingrese el peso"))
			acumuladorpeso+=peso
			
		} while (isNaN(peso));
		
		//sexo  
		do {
			sexo = prompt("Ingrese el sexo ").toLowerCase()

		} while (sexo != "f" && sexo != "m")
	
		//edad
		do {
			edad = parseInt(prompt("Ingrese la edad de la persona"))
			acumuludaroEdad += edad

		} while (!(edad > 0 && edad < 110));
		
		//  a)informar la cantidad de mujeres.
		 if (sexo=="f") {
			 contadorFem++;

		// c)El hombre mas pesado es	 			 
		 } else if (sexo=="m") {
			 contadorMasc++;
			 if (flagMasc==0) {
				hombreMasPesado=peso;
				flagMasc=1;
			 }
		
		 }
		// b)Le edad del promedio:

		promedioEdadTotal=parseFloat(acumuludaroEdad /contadorPersonas).toFixed(2)

		
		

	} while (contadorPersonas <= 5);

document.write(" la cantidad de mujeres es de "+contadorFem+ "<br/>");
document.write(" la edad promedio en total es de " +promedioEdadTotal + "<br/>");
document.write(" EL hombre con mas peso es " + hombreMasPesado+ "<br/>");

}





