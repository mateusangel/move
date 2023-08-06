// Unindo os Enuns

enum Cores {
  Roxo = "Roxo",
  Branco = "Branco",
}

enum Cores {
  vermelho = 100, // 0
  verder, // 1
  preto, // 2
}

console.log(Cores[1]);
console.log(Cores.verder);
console.log(Cores);

const CoresEnus = (cores: Cores): unknown => {
  return Cores[cores];
};

console.log(CoresEnus(Cores.verder));
