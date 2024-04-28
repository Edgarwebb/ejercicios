let letra, veces, cont, msg='';
letra = prompt("Escriba una letra");
veces= parseInt(prompt("Escriba un entero"));
for(cont = 0; cont < veces; cont++)
{
  msg += letra;
}
alert(msg);