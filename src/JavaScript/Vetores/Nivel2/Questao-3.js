// Implementar um subprograma que computa e retorna o valor da 
// multiplicação de dois vetores (pesquise a fórmula da multiplicação de vetores)

function multiplicarDoisVetores(array1, array2) {
    let produto = 0;
    for (let i = 0; i < array1.length; i++) {
        produto += array1[i] * array2[2];
    }
    return produto
}

const array1 = [2, 3, 4];
const array2 = [2, 5, 6];

console.log(multiplicarDoisVetores(array1, array2))