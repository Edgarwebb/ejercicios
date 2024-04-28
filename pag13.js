var intentos = 0;

do {
    var clave1 = prompt("Por favor, introduzca su Pin");
    var clave2 = prompt("Por favor, introduzca su Pin");

    if (clave1 != clave2) {
        alert("sus claves no coinciden, vuelva a intraducirlas")
        intentos++;
    } else {
        alert("Usted se ha logado correctamente");
    }

} while (clave1 !== clave2 && intentos < 3);