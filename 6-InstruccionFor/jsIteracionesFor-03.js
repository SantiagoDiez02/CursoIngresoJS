function mostrar() {
	let cantidad;



	cantidad = parseInt(prompt("ingrese la cantidad de repeticiones"));

	while (isNaN(cantidad) || cantidad < 0) {
		cantidad = parseInt(prompt("eso no es un numero, otra vez"));
	}
for (let contador =0; contador < cantidad; contador++) {
	
	
	document.write("hola UTN FRA <br>");
}
	
		



	}//FIN DE LA FUNCIÓN