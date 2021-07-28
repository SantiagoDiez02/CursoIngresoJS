
function mostrar() {
	let tipo,
		cantidad,
		precio,
		marca,
		fabricante,
		precioMinAl,
		contAlBarato,
		fabAlBarato,
		flagA = 1,
		contadorB = 0,
		contadorJ = 0,
		contadorA = 0,
		acumA = 0,
		acumB = 0,
		acumJ = 0,
		MaxUnidades,
		promedio;
	for (let i = 0; i < 5; i++) {
		tipo = prompt("ingrese un tipo (barbijo/alcohol/jabon)").toLowerCase();
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt("porfavor, ingrese un tipo valido (barbijo/alcohol/jabon)").toLowerCase();
		}
		cantidad = parseInt(prompt("ingrese la cantidad de productos (MAX 1000"));
		while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
			cantidad = parseInt(prompt("usted ingreso una cantidad no valida, reingrese la cantidad (MAX 1000"));

		}
		precio = parseInt(prompt("ingrese el precio entre 100 y 300"));
		while (isNaN(precio) || precio > 300 || precio < 100) {
			precio = parseInt(prompt("su precio no es valido, ingrese uno nuevo entre 100 y 300"));
		}
		marca = prompt("ingrese marca: ");
		while (marca.lenght == 0) {
			marca = prompt("por favor, ingrese marca: ");
		}
		fabricante = prompt("ingrese fabricante: ");
		while (fabricante.lenght == 0) {
			fabricante = prompt("por favor, ingrese fabricante: ");
		}
		if (tipo == "alcohol") {
			acumA += cantidad;
			contadorA++;
			if (flagA || precio < precioMinAl) {
				precioMinAl = precio;
				contAlBarato = cantidad;
				fabAlBarato = fabricante
				flagA = 0
			}

		} else if (tipo == "barbijo") {
			acumB += cantidad;
			contadorB++;
		} else {
			acumJ += cantidad;
			contadorJ++;
		}




	}
	if (acumA > acumB && acumA > acumJ) {
		MaxUnidades = "alcohol";
		promedio = acumA / contadorA
	}
	else if (acumB > acumA && acumB > acumJ) {
		MaxUnidades = "barbijo";
		promedio = acumB / contadorB
	}
	else {
		MaxUnidades = "jabon";
		promedio = acumJ / contadorJ;
	}

	document.write("el alcohol mas barato es " + precioMinAl + " ,la cantidad es " + contAlBarato + " y el fabricante es " + fabAlBarato + "<br>");
	document.write("el tipo con mas unidades es " + MaxUnidades + " y el promedio es " + promedio + "<br>");
	document.write("hay " + acumB + " jabones");

}



