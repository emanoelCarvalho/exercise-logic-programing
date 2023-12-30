// Implementar subprograma que dados dois inteiros a e b cria um 
// vetor contendo todos os elementos entre a e b
// Exemplo: entrada: 2 e 6, saída: [3, 4, 5]

function pushParalelo(a, b) {
    let vazio = []; // Cria um vetor vazio para armazenar os elementos entre a e b.

    // Loop para percorrer os elementos entre a (exclusive) e b (exclusive).
    for (let i = a + 1, j = 0; i < b; i++, j++) {
        vazio[j] = i; // Armazena o elemento i no vetor vazio na posição j.
    }
    console.log(vazio); // Imprime o vetor contendo os elementos entre a e b.
}

pushParalelo(1, 7); // Chamada da função com os valores a = 1 e b = 7.
