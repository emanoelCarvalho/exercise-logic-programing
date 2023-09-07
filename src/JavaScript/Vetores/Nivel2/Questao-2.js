// Implementar um subprograma que dados dois vetores, copia o conteúdo
//  do primeiro no segundo vetor (elemento por elemento) na ordem inversa
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function vetorAoInverso(array1, array2) {
    let j = 0; // Inicializa uma variável j para rastrear a posição em array2.
    
    // Começa a iterar de trás para frente em array1 (do último elemento para o primeiro).
    for (let i = array1.length - 1; i >= 0; i--) {
        // Copia o elemento atual de array1 para array2 na posição j.
        array2[j] = array1[i];
        j++; // Move j para a próxima posição em array2.
    }
    
    console.log(array2); // Imprime array2, que agora contém o conteúdo de array1 invertido.
}

const array1 = [1, 3, 5, -2];
const array2 = [];

vetorAoInverso(array1, array2);
