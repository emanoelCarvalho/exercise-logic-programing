// Implementar um subprograma que dado um vetor e um número, 
// divide todos os elementos do vetor pelo número

// Função para dividir todos os elementos de um vetor por um número
function dividirVetor(array, numero) {
    for (let i = 0; i < array.length; i++) {
        array[i] /= numero; // Divide cada elemento do vetor pelo número
    }
    console.log(array); // Imprime o vetor após a divisão
}

// Vetor de exemplo e número pelo qual dividir
let array = [100, 200, 300];
let numero = 2;

// Chamada da função para dividir o vetor pelo número
dividirVetor(array, numero);
