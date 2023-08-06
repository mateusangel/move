type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const poossoa: Pessoa = {
  nome: "Mateus",
  sobrenome: "Angel",
  idade: 24,
};

console.log(poossoa);
