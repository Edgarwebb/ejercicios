/* Realizar un programa que dirige a los clientes a la barra de bebidas o de las comidas. para ello el cliente puede
        pedir vino, cerveza, refresco, agua. Si pide una cerveza o vino se le dirige a la barra y si no se le dirige a
        la tienda */

        var articulo=prompt("elige una de las siguientes bebidas por favor: vino, cerveza, refresco, agua.").toLowerCase();

        if(articulo=="cerveza" || articulo=="vino"){

            alert("ve a la barra por favor")
        }

        else{
            alert("ve a la tienda por favor")
        }