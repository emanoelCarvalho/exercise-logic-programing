// Implementar um subprograma que dados três vetores, 
// guarda no terceiro a soma dos índices equivalentes no dois primeiros
// Exemplo: c[0] = a[0] + b[0] // e assim por diante

function somaVetores(array1, array2, array3) {
    // Loop para percorrer os elementos dos vetores.
    for (let i = 0; i < array1.length; i++) {
        // Soma os elementos correspondentes dos vetores array1 e array2 e armazena em array3.
        array3[i] = array1[i] + array2[i];
    }
    console.log(array3); // Imprime o vetor resultante após a soma.
}

const array1 = [1, 2, 6];
const array2 = [1, 2, 3];
const array3 = []; // Vetor onde armazenaremos o resultado da soma.

somaVetores(array1, array2, array3); // Chamada da função para realizar a soma.
