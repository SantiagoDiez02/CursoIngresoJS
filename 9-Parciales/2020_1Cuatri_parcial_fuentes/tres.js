/*En el ingreso a un viaje en avion nos solicitan nombre , edad,
 sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y
  temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) ,
 tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
------------------------------------------------------------------------------






*/
function mostrar() {
	let nombre,
		edad,
		sexo,
		estadoCivil,
		temperatura,
		nombreMaxTemp,
		maxTemp,
		contHombreFelices = 0,
		contHombresViudos = 0,
		contHombresSolteros = 0,
		contViejosFiebre = 0,
		acumHombresSolteros = 0,
		flag = 1,
		seguir,
		promedio = 0;
	do {
		nombre = prompt("ingrese un nombre");

		sexo = prompt("ingrese su sexo, (m/f)").toLowerCase();
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("sexo no valido, (m/f)").toLowerCase();
		}
		edad = parseInt(prompt("ingrese la edad"));
		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("porfavor, ingrese una edad"));
		}
		estadoCivil = prompt("ingrese estado civil,soltero/ casado/viudo ").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("ingrese estado civil,soltero/ casado/viudo ").toLowerCase();
		}

		temperatura = parseInt(prompt("ingrese la temperatura (entre 30 y 40"));
		while ( temperatura < 30 && temperatura > 40) {
			temperatura = parseInt(prompt("temperatura no valida"));
		}
		if (flag || temperatura > maxTemp) {
			maxTemp = temperatura;
			nombreMaxTemp = nombre;
			flag = 0;
		}
		if (sexo == "m" && estado != "casado") {
			contHombreFelices++;
		}
		if (edad > 60 && temperatura > 38) {
			contViejosFiebre++;
		}
		if (edad > 18 && estadoCivil == "viudo") {
			contHombresViudos++;
		}
		if (sexo == "m" && estadoCivil == "vsoltero") {
			contHombresSolteros++;
			acumHombresSolteros += edad
		}
		promedio = acumHombresSolteros / contHombresSolteros;


		seguir = prompt("desea continuar? (s/n)").toLowerCase();
	} while (seguir == "s");

	document.write("la persona con mas temperatura es " + nombreMaxTemp + " y tiene " + maxTemp + " grados <br>");
	document.write("mayores de edad viudos: " + contHombresViudos + "<br>");
	document.write("hombres solteros o viudos: " + contHombreFelices + "<br>");
	document.write("personas de la tercera edad con fiebrre " + contViejosFiebre + "<br>");
	document.write("y el promedio de edad entre los hombres solteros es " + promedio);
}
