

  function cuentaRegresiva(numero) {
    let listaNumeros = [];
    for (let i = numero; i >= 0; i--) {
      listaNumeros.push(i);
    }
    const resultado = listaNumeros.join(", ");
    document.write(`Cuenta regresiva: ${resultado}`);
  }
  
  // Ejemplo de uso:
  const numeroInicial =prompt("ingresa un numero");
  cuentaRegresiva(numeroInicial);