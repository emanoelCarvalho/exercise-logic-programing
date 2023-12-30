// Implementar um subprograma que dado um vetor, inverte a ordem do seu conteúdo
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function vetorInvertidoSemPush(array) {
    const novoArray = []; // Cria um novo vetor vazio para armazenar os elementos invertidos.
    
    // Loop para percorrer o vetor original de trás para frente.
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray[array.length - 1 - i] = array[i]; // Coloca cada elemento na posição inversa.
    }
    
    return novoArray; // Retorna o novo vetor com os elementos invertidos.
}

const array = [1, 2, 3];
const resultado = vetorInvertidoSemPush(array);

console.log(resultado); // Imprime o resultado no console.
