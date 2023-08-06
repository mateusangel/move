// array de números e deve retornar o número faltante ou o próximo númer
function nextId(array) {
  // Ordena o array em ordem crescente
  array.sort((a, b) => a - b);

  // Verifica se o menor número do array é maior ou igual a zero
  if (array[0] >= 0) {
    // Verifica se o menor número é maior que zero
    if (array[0] > 0) {
      return 0; // Retorna 0, pois zero é o próximo número ausente
    }

    // Percorre o array em busca de uma lacuna entre números consecutivos
    for (let i = 0; i < array.length - 1; i++) {
      // Verifica se há uma diferença maior que 1 entre o número atual e o próximo número no array
      if (array[i + 1] - array[i] > 1) {
        return array[i] + 1; // Retorna o próximo número ausente encontrado
      }
    }
    // Se não houver lacuna, retorna o último número presente + 1
    return array[array.length - 1] + 1;
  } else {
    // Verifica se o maior número do array é menor ou igual a zero
    if (array[array.length - 1] <= 0) {
      return array[array.length - 1] - 1; // Retorna o último número presente - 1
    }

    // Percorre o array em busca de uma lacuna entre números consecutivos (do final ao início)
    for (let i = array.length - 1; i > 0; i--) {
      // Verifica se há uma diferença maior que 1 entre o número atual e o número anterior no array
      if (array[i] - array[i - 1] > 1) {
        return array[i] - 1; // Retorna o próximo número ausente encontrado
      }
    }

    // Se não houver lacuna, retorna o primeiro número presente - 1
    return array[0] - 1;
  }
}

// Exemplo de uso:

var arrayTest = [-5, -4, -2, -1];
console.log(nextId(arrayTest)); // Saída: -3

var arrayTest2 = [0, 1, 2, 3, 5];
console.log(nextId(arrayTest2)); // Saída: 4
