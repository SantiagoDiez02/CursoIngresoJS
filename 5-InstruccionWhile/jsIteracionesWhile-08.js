/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero,
		acumuladorP = 0,
		acumuladorN = 1,
		respuesta,
		flag = 0

	

	do {
		respuesta = prompt("quiere seguir agregasndo numeros? (s/n)").toLowerCase();
		if (numero >= 0) {
			acumuladorP += numero;
		} else {
			acumuladorN *= numero;
		} flag = 0;
	} while (respuesta == 's')
	if (flag) {
		acumuladorN = 0
	}
	document.getElementById("txtIdSuma").value = acumuladorP;
	document.getElementById("txtIdProducto").value = acumuladorN;
}//FIN DE LA FUNCIÓN