function mostrar() {

	let numero,
		acumulador = 0,
		contador = 0;

	while (acumulador < 1000) {
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero, ingrese un numero"));
		}

		acumulador += numero;
		contador++;


	} document.write("el resultado es " + acumulador + "<br>");
	document.write("el contador es " + contador);
}