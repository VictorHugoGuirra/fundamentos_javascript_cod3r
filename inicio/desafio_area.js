// PI * raio * raio

let raio = 10;
const PI = 3.14;
let areaCirc = PI * (raio * raio);

console.log("O valor da área é: " + areaCirc + "m².")
console.log(Math.PI); // PI da biblioteca do JavaScript.

let raioNovo = 8;
areaCirc = Math.PI * (raioNovo * raioNovo);

console.log("O resultado da nova área é: " + areaCirc);