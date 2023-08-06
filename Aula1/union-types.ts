const fuc = (a: number | string, b: number | string): number | string => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
};

console.log(fuc(2, 2));
