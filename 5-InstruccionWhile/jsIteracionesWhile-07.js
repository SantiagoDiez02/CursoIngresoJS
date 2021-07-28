/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numero;
	let contador = 0;
	let acumulador = 0;
let respuesta;
	do {
		numero = parseInt(prompt("ingrese un numero"));
		acumulador += numero;
		contador += 1;
respuesta = prompt("quiere seguir agregando numeros? (s/n)").toLowerCase();
	} while (respuesta == 's');


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN