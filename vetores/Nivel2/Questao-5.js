// Implementar subprograma que dados dois inteiros a e b cria um 
// vetor contendo todos os elementos entre a e b
// Exemplo: entrada: 2 e 6, saída: [3, 4, 5]


function pushParalelo(a, b) {
    let vazio = []

    for (let i = a + 1, j = 0; i < b; i++, j++) {
        vazio[j] = i
    }
    console.log(vazio)
}

pushParalelo(1, 7)
