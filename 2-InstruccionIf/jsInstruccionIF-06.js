function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);


	if (edad >= 13 && edad <= 17) {
		alert("es un adolescente");
	}
	else if (edad < 13) {
		alert("es un niño");
	}

	else if (edad <= 65) {
		alert("es adulto");
	} else {
		alert("es adulto mayor");
	}







}//FIN DE LA FUNCIÓN