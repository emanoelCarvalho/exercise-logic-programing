// Implementar um subprograma que dados dois vetores, retorna
//  true caso todos os elementos de ambos sejam iguais, ou false, caso contrário
function vetoresIguais(array1, array2) {
    let verificar = true;
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            verificar = false;
            break;
        }
    }
    return verificar;
}

const array1 = [2,1,1,1];
const array2 = [8,3,4,5];

console.log(vetoresIguais(array1, array2));