// const Objeto: {
//   nome: String;
//   idade: Number;
//   M: Boolean;
// } = {
//   nome: "Mateus",
//   idade: 24,
//   M: true,
// };

// const Objeto1: {
//   nome: String;
//   idade: Number;
//   M?: Boolean;
//   [chave: string]: unknown;
// } = {
//   nome: "Mateus",
//   idade: 24,
//   M: true,
// };

// console.log(Objeto);

// const idade: {
//   idade1: Number;
//   idade2: Number;
//   idade3: Number;
//   idade4: Number;
//   idade5: Number;
// } = {
//   idade1: 5,
//   idade3: 6,
//   idade2: 10,
//   idade4: 40,
//   idade5: 40,
// };

// const conversor = (...arg: Array<Number>) => {
//   const ValorNovo = Array.from(..arg);
//   const valorFiltrado = ValorNovo.map((valor: Number, i) => {
//     const list: Array<Number> = [];
//     if (valor > ValorNovo[i]) {
//       list.push(valor);
//     }
//     return list;
//   });
// };

// console.log(conversor(idade));

const perso: {
  readonly nome: string;
  idade: number;
  //   m?: boolean;
  [key: string]: unknown;
} = {
  nome: "Mateus",
  idade: 24,
  //   m: true,
};

perso.idade3 = "Karen";
perso.idade4 = "Sara";

console.log(perso);
