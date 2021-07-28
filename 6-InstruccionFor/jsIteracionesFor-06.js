function mostrar()
{
	let numero,
	contador = 0;
	numero=parseInt(prompt("ingrese un numero"));
	if (isNaN(numero)|| numero <0) {
		numero=parseInt(pormpt("eso no es un numero"));
	}
	for (let i = 1;i <= numero;i++) {
		if (i % 2) {
			continue;
		}
		contador ++;
		document.write(i + "<br>");
	}
	document.write("su numero es " + numero + "<br>" + "y la cantidad de pares encontrados fue " + contador + "<br>");




}