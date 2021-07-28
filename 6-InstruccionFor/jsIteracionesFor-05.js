function mostrar()
{
	
	let numero;


	for (numero ; ; ) {

	numero = parseInt(prompt("ingrese un numero"));

	while (isNaN(numero)) {
		numero = parseInt(prompt("eso no es un numero, otra vez"));
	}
	if (numero == 9) {
		alert("9 es igual a autodestrucccion, evacuar, peligro inminente");
		break;
	}
	
}



}//FIN DE LA FUNCIÓN