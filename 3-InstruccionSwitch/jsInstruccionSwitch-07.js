function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	/*switch (destino) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		default:
			alert("este");
	} */
       
	if (destino == "Bariloche") {
		alert ("Oeste");
	} else if (destino == "Cataratas") {
		alert ("Norte");
	} else if (destino == "Mar del plata") {
		alert ("Estew");
	} else {
		alert("Sur");
	}
}//FIN DE LA FUNCIÓN