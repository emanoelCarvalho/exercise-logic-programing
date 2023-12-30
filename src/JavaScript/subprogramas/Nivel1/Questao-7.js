// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;

// Função para calcular a hipotenusa de um triângulo retângulo
function calcularHipotenusa(catetoA, catetoB) {
  return Math.sqrt(catetoA ** 2 + catetoB ** 2);
}

// Valores dos catetos
let catetoA = 3;
let catetoB = 4;

// Calcula a hipotenusa
let hipotenusa = calcularHipotenusa(catetoA, catetoB);

// Imprime o valor da hipotenusa
console.log("O valor da hipotenusa é:", hipotenusa);
