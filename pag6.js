var aleatorio = Math.round(Math.random() * 100);
var minum, intentos;
minum = 0;
intentos = 0;

var mensaje = document.getElementById("c_mensaje")
var intentosHechos = document.getElementById("c_intentos");

do {

  minum = prompt("introduce un numero entre 0 y 100");


  if (aleatorio > minum) {
    mensaje.value = "Mas alto";
    mensaje.style.fontSize = "18px"
    alert("mas alto")
  }


  
  if (aleatorio < minum) {

    mensaje.value="Mas bajo";
    mensaje.style.fontSize="18px"
    alert("mas bajo")

 }
 intentos++;

   intentosHechos.value=intentos;

   intentosHechos.style.fontSize="18px";
   intentosHechos.style.color="red";
   intentosHechos.style.textAlign="center";

} while (aleatorio != minum);

mensaje.value="Correcto!              Intentos:"
mensaje.style.color="red"
