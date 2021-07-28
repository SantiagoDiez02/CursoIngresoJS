/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo;
	sexo = prompt("ingrese f ó m .").toLowerCase();
	while (sexo != "f" && sexo != "m") {
		alert("su sexo no existe, vuelva a ingresar").toLowerCase();
		sexo = prompt("ingrerse f o m");
	}


	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN