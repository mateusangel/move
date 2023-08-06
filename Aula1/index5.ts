// Array
// Generiqui
// Array<T> ou normal : T[]

const Multi = (...arg: Array<Number>): Number => {
  return arg.reduce((acc: number, valor: any): number => {
    return acc * valor;
  }, 1);
};

function concatenaString(...arg: string[]): string {
  return arg.reduce((acc, string) => {
    return acc + string;
  });
}
function topUpperCase(...arg: string[]): string[] {
  return arg.map((string) => string.toUpperCase());
}

console.log(Multi(1, 2, 3));
console.log(concatenaString("a", "b", "c"));
console.log(topUpperCase("a", "b", "c"));

function srt(number: number): number {
  return number;
}
