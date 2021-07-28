/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave = prompt("ingrese la clave");
	while (clave != "utn750") {
		clave = prompt("clave invalida, ingrese nuevamente la clave");
	}
	alert("clave correcta");
}//FIN DE LA FUNCIÓN
