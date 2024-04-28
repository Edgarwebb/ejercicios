
let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0

function iniciar() {
    cronometrar = true
}

function pausar() {
    cronometrar = false
}

function reiniciar() {
    acumulado = 0
}

setInterval(() => {
    let tiempo = document.getElementById("tiempo")
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(acumulado)
}, 1000 / 60);

function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000
    

    
    let St = Math.floor(((tiempo_ms - MS) / 1000))
    
    let S = St%60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St/60 / 60))
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
        + "." + MS.ceros(3)
}
















/* function horaInicio(){
    var hoy = new Date();
    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundo = hoy.getSeconds();


    var ap = (hora < 12) ? "<span> AM</span>" : "PM"
    hora = (hora == 0) ? 12 : hora;
    hora = (hora > 12) ? hora - 12 : hora;

    document.getElementById("reloj").innerHTML = hora + ":" + minuto + ":" + segundo + "" + ap;
    hora = revisionHora(hora);
    minuto = revisionHora(minuto);
    segundo = revisionHora(segundo);

    var tiempo = setTimeout(function () {
        horaInicio();
    }, 500);
}


function revisionHora(i) {
    if (i < 10) {
        i = "0" + i;
    }
}
return i  */


