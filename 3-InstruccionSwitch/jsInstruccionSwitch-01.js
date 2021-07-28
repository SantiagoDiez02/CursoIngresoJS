function mostrar() {
	/* let mes;
	mes = document.getElementById("txtIdMes").value;
	if (mes == "Enero") {
		alert ("que comienze bien el año!!!!");
	} else if (mes == "Marzo") {
		alert("a clases!!!");
	} else if (mes == "Julio") {
		alert("se vienen las vacaciones");
	} else if (mes == "Diciembre") {
		alert("felices fiestas!!!");
	}*/

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("que comienze bien el año");
			break;

		case "Marzo":
			alert("a clases");
			break;
		case "Julio":
			alert("se vienen las vacaciones");
			break

		case "Diciembre":
			alert("felices fiestas");
			break;
	}

}