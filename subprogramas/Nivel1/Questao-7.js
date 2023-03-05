// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;
function calcularHipotenusa(catetoA, catetoB) {
    return Math.sqrt(catetoA ** 2 + catetoB ** 2);
  }
  
  let catetoA = 3;
  let catetoB = 4;
  
  let hipotenusa = calcularHipotenusa(catetoA, catetoB);
  
  console.log(hipotenusa);