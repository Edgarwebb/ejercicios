/* Crea una estructura if que contemple seis posibles colores que pueda escribir el usuario y una opcion extra para
decir si un color no es uno de los seis posibles,
Esta estructura estara formada por un solo if else  con sus necesarios else if. Los colores son rojo, anaranjado, amarillo, verde, celeste y azul
El color a evaluar con el condicional se debe guardar en una variable con un prompt(). La evaluacion se hara con este color
 */

//ELEGIR EL COLOR DE FONDO
 var cuerpo=document.getElementById("cuerpo");
var colores=prompt("introduce azul/rojo/verde/anaranjado/amarillo/celeste por favor").toLowerCase();

if(colores!="azul" && colores!="rojo" && colores!="verde"  && colores!="anaranjado"  && colores!="celeste"  && colores!="amarillo"){

  alert("el color no esta disponible")
}

else if(colores=="azul"){

cuerpo.style.backgroundColor="blue";

}


else if(colores=="rojo"){

cuerpo.style.backgroundColor="red";

}

else if(colores=="verde"){

cuerpo.style.backgroundColor="green";

}


else if(colores=="anaranjado"){

    cuerpo.style.backgroundColor="orange";
    
    }

    else if(colores=="amarillo"){

        cuerpo.style.backgroundColor="yellow";
        
        }

        else if(colores=="celeste"){

            cuerpo.style.backgroundColor="skyblue";
            
            }

