/* 1- declaracion de variables: tipo, cantidad, precio, seguir,
descuento, importeBruto, importeNeto, acumBolsas, mayorPrecio, mayorTipo,
 contadorA, contadorCal,contadorCem, acumCal, acumA, acumCem, tipoMasBolsas, cantidadBolsas,
2- generar bucle del tipo mientras el usuraio quiera (do while).
3-cosas dentro del bucle:
3.1- pido y valido tipo
3.2- pido y valido cantidad (numero positivo)
3.3- pido yt valido precio (numero positivo)
3.4- acumular la cantidad de bolsas
3.5- acumular importeBruto
3.6- me fijo el tipo de producto y acumulo la cantidad de bolsas segun corresponda
3.7- para el primer producto guardo el tipo precio (es el unico, por ende es el mas caro),
para los siguientes comparo y si es mayor actualizo los valores.

fuera del bucle.
4- me fijo los descuentos correspondientes
4.1- calculo los descuentos
4.2-calculo el importeNeto
4.3- me fijo cual es el mayuor acumulador de bolsas para informar el
 tipo con mas cantidad de bolsas.
*/
function mostrar() {
  let tipo,
    cantidad,
    precio,
    seguir,
    descuento = 0,
    importeBruto = 0,
    importe,
    importeNeto,
    acumBolsas = 0,
    mayorPrecio,
    mayorTipo,
    flag = 1,
    acumCal = 0,
    acumA = 0,
    acumCem = 0,
    tipoMasBolsas,
    cantidadMasBolsas = 0;

  do {
    tipo = prompt("ingrese un tipo (arena, cal, cemento)").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("tipo no valido, reingrese un tipo (arena, cal, cemento)").toLowerCase();
    }
    cantidad = parseInt(prompt("ingrese cuantos productos quiere"));
    while (isNaN(cantidad) || cantidad < 0) {
      cantidad = parseInt(prompt("porfavor, ingrese cuantos productos quiere"));
    }
    precio = parseInt(prompt("ingrese el precio"));
    while (isNaN(precio) || precio < 0) {
      precio = parseInt(prompt("su numero es invalido, reingrese el precio"));
    }
    acumBolsas += cantidad;
    importe = precio * cantidad;
    importeBruto += importe;

    if (tipo == "arena") {
      acumA += cantidad;
    } else if (tipo == "cal") {
      acumCal += cantidad;
    } else {
      acumCem += cantidad;
    }
    if (flag || precio > mayorPrecio) {
      mayorPrecio = precio;
      mayorTipo = tipo;
      flag = 0;
    }


    seguir = prompt("usted desea seguir? (s/n").toLowerCase();
  } while (seguir == "s");

  if (acumBolsas > 30) {
    descuento = importeBruto * 0.25;
  } else if (acumBolsas > 10) {
    descuento = importeBruto * 0.15;
  }
  importeNeto = importeBruto - descuento;
  if (acumCal > acumCem && acumCal > acumA) {
    cantidadMasBolsas = acumCal;
    tipoMasBolsas = "cal";
  } else if (acumCem > acumCal && acumCem > acumA) {
    cantidadMasBolsas = acumCem;
    tipoMasBolsas = "cemento";
  } else {
    cantidadMasBolsas = acumA;
    tipoMasBolsas = "arena";

  }
  document.write("importe total a pagar es " + importeBruto + "<br>");
  if (descuento > 0) {
    document.write("importe total a pagar (con descuetno) " + importeNeto + "<br>");
  }
  document.write("tipo con mas cantidad de bolsas " + tipoMasBolsas + " con " + cantidadMasBolsas + "bolsas <br>");

  document.write("tipo mas caro " + mayorTipo + " precio: " + mayorPrecio + "<br>");


}


