

//En un restaurante los clientes pueden pedir menu de carne. Pescado o verdura. Si pide carne se le ofrecera como bebida vino tinto, 
//si se pide pescado se le ofrecera vino blanco y si pide verdura se le ofrecera agua
//si no elije el menu de la lista aparecera la frase elija carne, pescado o verdura


let menu, bebida;
menu = prompt("Titpo de menu: carne, pescado, verdura")
switch (menu){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija carne pescado o verdura";
    }
alert(bebida);