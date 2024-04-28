/*     Un comerciante hace descuentos a sus clientes de la siguiente forma:
    Si ha comprado menos de 100 euros no hay descuento
    Si la compra esta entre 100 y 300 euros le descuenta 5%
    Si la compra esta por encima de 300 hasta 500 euros le descuenta un 10%
    Si la compra supera los 600 euros le descuenta un 15%

     */


    
    let factura, total;
    factura = parseInt(prompt('¿Cuánto ha comprado?') );
    switch (true){
        case (factura >=100 && factura <= 300):
            descuento = 5;
            break
        case (factura >300 && factura <=400):
            descuento = 10;
            break
        case (factura >400):
            descuento = 15;
            break
        default:
            descuento = 0;
       }
    total = factura*(1 - descuento/100);
    alert("Debe pagar: " + total + "€");