// Implementar um subprograma que dado um vetor,
//  retorna true se a soma dos seus elementos for positiva ou false, caso contrário

function somaVetorPositivo(array) {
    let soma = 0;
    let verificar;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
        soma > 0 ? verificar = true : verificar = false;
    }
    return verificar;
}

const array = [-1,-1,-1,1];
console.log(somaVetorPositivo(array));