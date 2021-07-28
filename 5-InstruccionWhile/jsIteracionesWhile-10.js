
function mostrar() {
	let numero,
		acumuladorN = 0,
		acumuladorP = 0,
		contadorP =0,
		contadorN=0,
		contadorC=0,
		contadorPares=0,
		promedioP,
		promedioN,
		diferencia,
		respuesta;

		do {
			numero = parseInt(prompt("ingrese un numero"));
			if (isNaN(numero)) {
				numero = prompt("eso no es un numero, ingrese nuevamente");
			} 
			if (numero > 0) {
				acumuladorP += numero;
				contadorP+= 1;
			} else if (numero < 0) {
				acumuladorN += numero;
				contadorN+=1 ;
			} else {
				contadorC+=1;
			} if (numero %2 ==0) {
				contadorPares +=1;
			}

	
	
			respuesta = prompt("quiere ingresar otro numero? (s/n)").toLowerCase();
		} while (respuesta == "s");

		if (contadorP != 0) {
			promedioP = acumuladorP / contadorP;
		}
		if (contadorN != 0) {
			promedioN = acumuladorN / contadorN;
		}
	
		diferencia = contadorP - contadorP;
		if (diferencia < 0) {
			diferencia *= -1;
		}

		document.write(`
	1. Suma de negativos: ${acumuladorN}.
	<document.write(2. Suma de los positivos: ${acumuladorP}.
	<br>3. Cantidad de positivos: ${contadorP}.
	<br>4. Cantidad de negativos: ${contadorN}.
	<br>5. Cantidad de ceros: ${contadorC}.
	<br>6. Cantidad de números pares: ${contadorPares}.
	<br>7. Promedio de positivos: ${promedioP }.
	<br>8. Promedio de negativos: ${promedioN }.
	<br>9. Diferencia entre positivos y negativos: ${contadorP - contadorP}.`)


}