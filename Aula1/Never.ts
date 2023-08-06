function Never(): never {
  throw new Error("Error!");
}

function throwError(): never {
  throw new Error("Ocorreu um erro inesperado.");
}

function infiniteLoop(): never {
  while (true) {
    // executa indefinidamente
  }
}

function showMessage(): void {
  console.log("Olá, mundo!");
}
