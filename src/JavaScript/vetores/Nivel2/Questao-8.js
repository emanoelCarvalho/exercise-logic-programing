// Implementar um subprograma que dados dois vetores, retorna
//  true caso todos os elementos de ambos sejam iguais, ou false, caso contrário

function vetoresIguais(array1, array2) {
    let verificar = true;

    // Verifica se os vetores têm comprimentos diferentes; se sim, retorna false imediatamente.
    if (array1.length != array2.length) {
        return false;
    }

    // Loop para comparar elementos dos dois vetores.
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) { // Se encontrar elementos diferentes, define verificar como false.
            verificar = false;
            break; // Sai do loop, pois já foi determinado que os vetores não são iguais.
        }
    }

    return verificar; // Retorna true se não foram encontrados elementos diferentes.
}

const array1 = [2, 1, 1, 1];
const array2 = [8, 3, 4, 5];

console.log(vetoresIguais(array1, array2)); // Chamada da função e impressão do resultado no console.
