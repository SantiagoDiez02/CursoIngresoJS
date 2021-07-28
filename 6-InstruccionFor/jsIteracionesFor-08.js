function mostrar() {
	let contador = 0;

	let numero;
	numero = parseInt(prompt("ingrese un numero"));
  
	while (isNaN(numero) || numero < 0) {
	  numero = parseInt(prompt("ingrese un numero"));
	}
  
	for (let i = 1; i <= numero; i++) {
	  if (numero % i == 0) {
		//significa que es divisible
		contador += 1;
	  }
	}
  
	if (contador === 2) {
	  alert("Es primo");
	} else {
	  alert("No es primo");
	}
  




}
	