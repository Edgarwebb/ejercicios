//Elaborar un programa que le ayude. El programa pide al usuario si va a viajar con auto, tren, bicicleta,
//motocicleta o autobus. Si va en tren o autobus le recordara que lleve dinero para transporte.

var transporte=prompt("Elija un transporte por favor: auto, tren, bicicleta, motocicleta o autobus.").toLocaleLowerCase();

if(transporte=="tren" || transporte=="autobus"){

    alert("por favor lleve dinero")

}
else{
    alert("que tenga un buen viaje!")
}


