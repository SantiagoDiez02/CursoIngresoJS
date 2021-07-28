/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero = 0,
		maximo,
		minimo,
		contador = 0,
		respuesta;

	do {
		numero = parseInt(prompt("ingrese un numero"));
		if (isNaN(numero)) {
			numero = prompt("eso no es un numero, ingrese nuevamente");
		} if (contador == 0) {

			alert("es la primera vez");
			maximo = numero;
			minimo = numero;
		} else {
			alert("no es la primera vez");


			if (numero < minimo) {
				minimo = numero;
			} else if (numero > maximo) {
				maximo = numero;
			}
		}
		contador += 1;

		respuesta = prompt("quiere ingresar otro numero? (s/n)").toLowerCase();
	} while (respuesta == "s");
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}









