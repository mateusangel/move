const arg = (...arg: Array<string>): void => {
  console.log(arg.join(" "));
};

const pessoa = {
  nome: "Mateus",
  Sobrneome: "Angel",
  falar(): void {
    console.log(this.nome, this.Sobrneome);
  },
};
