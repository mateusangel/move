// function createPerson(
//   fistName: string,
//   lastName?: string
// ): {
//   fistName: string;
//   lastName?: string;
// } {
//   return {
//     fistName,
//     lastName,
//   };
// }

// console.log(createPerson("Mateus"));

const squadX = (x: any) => {
  return typeof x === "number" ? x * x : null;
};

console.log(squadX(3));
