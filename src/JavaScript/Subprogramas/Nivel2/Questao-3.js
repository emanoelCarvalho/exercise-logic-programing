// Receber dois parâmetros e retornar true se o primeiro ou o segundo forem negativos, e false, caso contrário

function testeNegativo(numero1, numero2) {
    let teste = false;
    if (numero1 < 0 || numero2 < 0) {
        teste = true;
    } 
    return teste;
}

console.log(testeNegativo(6,-1))