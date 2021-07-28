function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("calor");
	}

}//FIN DE LA FUNCIÓN