function mostrar() {
	let precio;
	let destino;
	let estacion;

	precio = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;


	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {

				alert("el precioo es " + precio * 1.20);
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				alert("el precio es " + precio * 0.90);
			} if (destino == "Mar del plata") {
				alert("el precio es " + precio * 0.80);
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				alert("el precio es " + precio * 0.80);
			} else if (destino == "Cataratas" || destino == "Cordoba") {
				alert("el precio es " + precio * 1.10);
			} if (destino == "Mar del plata") {
				alert("el precio es " + precio * 1.20);
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
				alert("el precio es" + precio * 1.10)
			} else {
				alert("el precio es " + precio);
			}
	}


}//FIN DE LA FUNCIÓN

