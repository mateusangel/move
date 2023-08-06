// Tipos Básicos
const nome: string = "oi";
const boll: boolean = true;

console.log(nome);
console.log(boll);

// Array

const arr1: Array<number | string> = [1, 2, 3, "Mateus"];
const arr2: Array<number> = [1, 2, 3];
const arr3: number[] = [123];
const arr4: string[] = ["123"];

//  Object
const pessoas: {
  nome: string;
  idade?: number;
  M: boolean;
} = {
  nome: "Angel",
  M: true,
};
// function

const func = (a: number, b: number): number => {
  return a + b;
};

const func2 = (a: number, b: number): void => {
  console.log(a, b);
};

const fun3: (x: number, b: number) => number = (x, b) => x * b;
