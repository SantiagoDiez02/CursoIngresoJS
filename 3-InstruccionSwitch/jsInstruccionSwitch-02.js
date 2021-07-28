function mostrar() {
	/*let mes;

	mes = document.getElementById("txtIdMes").value;

	if (mes == "Enero" || mes == "Febrero" || mes == "Marzo" || mes == "Abril" || mes == "Mayo" || mes == "Junio") {
		alert("falta para el imnvierno");
	} else if (mes == "Julio" || mes == "Agosto") {
		alert("estamos en ninvierno");
	} else {
		alert("ya paso el frio, ahora calor");

	}*/

	let mes ;

	mes=document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero" :
		case "Febrero":	 
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("falta para el frio");
			break;		
		case "Julio":
		case "Agosto":
			alert("abrigate hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("ya pasamos el frio, ahora calor");
			break;		


	}
}