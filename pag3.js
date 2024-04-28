/* Realizar un ejercicio el cual se definan las variables necesaria para solicitar una "edad", un "nombre" y "pais".
        Una vez definidas las variables se ha de visualizar un mensaje en la consola que muestre el "nombre introducido
        y si es mayor o menor de edad" */

        
let nombre=prompt("ingrese su nombre");
let pais=prompt("ingrese su pais");

document.write("</br></br> Bienvenido: </br></br></br>  Nombre:" + " " + nombre)
document.write("</br></br> Pais:" + pais)


function mayor_edad() {

    var edad = document.getElementById('edad').value;

    if (edad < 18) {

        document.getElementById("area").value = "Eres menor de edad, tienes" + " " + edad + " " + "anios";
    }

    else {
        document.getElementById("area").value = "Eres mayor de edad, tienes " + " " + edad + " " + "anios"
    }


}






