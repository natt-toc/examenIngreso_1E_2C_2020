/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “Verano,”Primaver”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en Invierno
*/
function mostrar() {
	let respuesta;
	let sexotitular;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let acumuladorPersonas=0;
	

	do {

		/* validando los datos ingresados. 
		sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
		temporada(“otoño”,”invierno, “Verano,”Primaver”),
		cantidad de personas que viajan.*/
		//sexo
		do {
			sexotitular = prompt("Ingrese el sexo del titular")
			

		} while (!(isNaN(sexotitular)));

		// temporada

		do {
			temporada = prompt("Ingrese temporada");
		}
		while (temporada != "Primaver" || temporada != "Verano" || temporada != "Invierno" || temporada != "Otoño"));
		
		//cantidad personas
		do {
			cantidadPersonas=parseInt("ingrese la cantidad de personas que viajan")
			acumuladorPersonas++
		} while (!(isNaN(cantidadPersonas)));

		// lugar

		do {
			lugar = prompt("Ingrese destino: Bariloche - Cataratas - Salta)");
		}
		while (lugar != "Bariloche" || lugar != "Cataratas" || lugar != "Salta");


		respuesta = confirm("Desea continuar??");

	} while (respuesta == true);




}
