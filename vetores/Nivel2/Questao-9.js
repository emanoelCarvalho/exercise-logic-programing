// Implementar um subprograma que dado um vetor, inverte a ordem do seu conteúdo
// Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]

function vetorInvertido(array) {
    let novoArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }
    return novoArray;
}

let array = [1, 2, 3];
console.log(vetorInvertido(array));
