// function ar(str: string[]): Array<string> {
//   let novo = str.map((valor) => {
//     return valor;
//   });
//   return novo.toString().split("");
// }

// let nom: string[] = ["mateus"];

// console.log(ar(nom));
type mapCallafn = (item: string) => string;

function ar(str: string, callback: mapCallafn): string {
  return callback(str);
}

let nom: string = "mateus";

let fn = ar(nom, (item) => item.toUpperCase());

console.log(fn);
