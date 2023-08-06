// Opcional ?
//Tuple
const tupla: [string, number, boolean?, ...string[]] = [
  "Mateus",
  24,
  true,
  "Angel",
  "Silva",
];
const tupla1: [string, number, boolean?] = ["Mateus", 24];

// Readonly Array

const tupla2: readonly [string, number, boolean?] = ["Mateus", 24];
const tupla3: readonly string[] = ["Matues", "Angel", "Silva", "Cruz"];
const tupla4: ReadonlyArray<string> = ["Mateus", "Angel"];
console.log(tupla3);
