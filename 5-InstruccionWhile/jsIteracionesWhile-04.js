/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt(parseInt("ingrese un número entre 0 y 10."));
	while (numero <0 || numero >9) {
		alert ("numero incorrecto, vuelva a ingresar");
		numero = prompt(parseInt("ingrese nuevamente un numero del 0 al 9"));
	}
	document.getElementById("txtIdNumero").value= numero;
}//FIN DE LA FUNCIÓN