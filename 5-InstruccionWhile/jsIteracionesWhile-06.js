function mostrar() {
	let numero;
	let contador = 0;
	let acumulador = 0;

	while (contador < 5) {
		numero = parseInt(prompt("ingrese un numero"));
		acumulador += numero;
		contador += 1;

	}


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN