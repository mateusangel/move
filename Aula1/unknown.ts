// Funcinaria porque o any não é seguro
let z: any;
z = 100;
z = "oi";
z = "100";
let p = 800;

console.log(z * p);

// Não Funcionaria porque o unknown é seguro

let x: unknown;
x = 100;
x = "oi";
x = "100";
let y = 800;

console.log(x * y);
