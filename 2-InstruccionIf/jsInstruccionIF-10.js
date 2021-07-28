function mostrar()
{
	
	let nota;
	
	nota = Math.floor(Math.random() * 10 + 1);
	
	if (nota >=9) {
		alert ("excelente, tu nota: " + nota);
	} else if (nota >=4) {
		alert ("aprobado, tu nota: " + nota);
	} else {
		alert ("buen intento, la proxima sera, tu nota: " + nota);
		
	}
	



}//FIN DE LA FUNCIÓN