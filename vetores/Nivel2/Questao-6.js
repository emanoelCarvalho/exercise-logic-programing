// Implementar um subprograma que dado um vetor de booleans, 
// retorna true se todos os elementos do vetor forem verdadeiros ou
//  false, caso contrário


function todosElementosTrue(array) {
    let verdadeiro = true; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            verdadeiro = false;
            break;
        }
    }
    return verdadeiro;
}

const  array = [true, true, false, true, true];
console.log(todosElementosTrue(array));