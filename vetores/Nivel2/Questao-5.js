// Implementar subprograma que dados dois inteiros a e b cria um 
// vetor contendo todos os elementos entre a e b
// Exemplo: entrada: 2 e 6, saída: [3, 4, 5]

function entreVetor(array, inteiro1, inteiro2) {
    for (let i = inteiro1; i < inteiro2; i++) {
       array.push(i);
    }
    console.log(array);
}

let array = [];
let inteiro1 = 6;
let inteiro2 = 6;

entreVetor(array, inteiro1, inteiro2);