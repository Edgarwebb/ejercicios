//Escribe un programa que pregunte una y otra vez si desea terminar el programa, salvo si se contesta exactamente SI  (en mayusculas y sin tilde)

 
var mayusculas   
do { 
    mayusculas = prompt("desea terminar con el programa? (por favor ingrese solo mayusculas y sin tildes)","") 
} while (mayusculas != "SI")