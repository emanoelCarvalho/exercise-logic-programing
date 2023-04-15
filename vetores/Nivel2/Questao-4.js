// Implementar um subprograma que dados três vetores, 
// guarda no terceiro a soma dos índices equivalentes no dois primeiros
// Exemplo: c[0] = a[0] + b[0] // e assim por diante

function  somaVetores(array1, array2, array3) {
    for ( let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] + array2[i];
    }
    console.log(array3);
}

const array1 = [1,2,6];
const array2 = [1,2,3];
const array3 = [];

somaVetores(array1, array2, array3);