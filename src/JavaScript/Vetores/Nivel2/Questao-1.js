// Implementar um subprograma que dado um vetor,
//  retorna true se a soma dos seus elementos for positiva ou false, caso contrário

// Função para verificar se a soma dos elementos de um vetor é positiva
function somaVetorPositivo(array) {
    let soma = 0;
    let verificar = false;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    if (soma > 0) {
        verificar = true;
    }

    return verificar;
}

const array = [-1, -1, -1, 1];
console.log(somaVetorPositivo(array));
