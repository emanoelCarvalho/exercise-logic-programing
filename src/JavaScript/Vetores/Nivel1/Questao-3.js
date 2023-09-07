// Implementar um subprograma que dados dois vetores, copia
//  o conteúdo do primeiro para o segundo vetor (elemento por elemento)

// Função para copiar elementos de um vetor para outro
function copiarVetor(arrayOrigem, arrayDestino) {
    for (let i = 0; i < arrayOrigem.length; i++) {
        arrayDestino[i] = arrayOrigem[i]; // Copia cada elemento da origem para o destino
    }
    console.log(arrayDestino); // Imprime o vetor destino após a cópia
}

// Vetores de exemplo
let array1 = [1, 2, 3];
let array2 = [];

// Chamada da função para copiar array1 para array2
copiarVetor(array1, array2);
