
function CalcularPrecio() {
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let precioFinal;
    let iibb;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 0.15;

            } else if (marca == "FelipeLamparas") {
                descuento = 0.10;

            } else {
                descuento = 0.05;

            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 0.25;

            } else {
                descuento = 0.20;

            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 0.40;

            } else {
                descuento = 0.30;

            }
            break;

        default:
            descuento = 0.50;

            break;
    }

    precioFinal = precio * cantidad - (precio * cantidad) * descuento;
    if (precioFinal > 120) {

        iibb = precioFinal * 0.10;
        alert("IIBB usted pago " + iibb);
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
