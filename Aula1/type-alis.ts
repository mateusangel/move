// type-Alias
type idade = number;

type person = {
  nome: string;
  idade: idade;
  cor: string;
};

//Types literais

type cor = "Vermelho" | "Preto" | "Roxo";

type maisCor = "Branco" | "Amarelo";

type TodoAsCores = cor | maisCor;

const pess: person = {
  nome: "Matues",
  idade: 24,
  cor: "preto",
};

const PersonCor = (pessoa: person, cor: TodoAsCores) => {
  return { ...pessoa, Cores: cor };
};

console.log(PersonCor(pess, "Preto"));
