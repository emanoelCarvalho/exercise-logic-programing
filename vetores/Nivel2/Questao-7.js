// Implementar um subprograma que dado um vetor de booleans, 
// retorna true se ao menos um dos elementos do vetor for verdadeiro ou
//  false, caso contrário

function contarVerdadeirosDoVetor(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return true;
        }
    }
    return false
}

let array = [false, false, false];
console.log(contarVerdadeirosDoVetor(array));