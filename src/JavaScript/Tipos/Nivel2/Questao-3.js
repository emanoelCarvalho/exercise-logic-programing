/*Lista de Cubos */

class ListaDeCubos {
    constructor (lado, cores) {
        this.lado = lado;
        this.cores = cores;
    }
}

let listaDeCubos = new ListaDeCubos(10, ["azul", "black", "verde"]);
let listaDeCubos2 = new ListaDeCubos(20, ["azul", "vermelho", "verde"]);

function contarCoresIguais(listaDeCubos, listaDeCubos2) {   
    let coresIguais = 0;
    for (let i = 0; i < listaDeCubos.cores.length; i++) {
        for (let j = 0; j < listaDeCubos2.cores.length; j++) {
            if (listaDeCubos.cores[i] === listaDeCubos2.cores[j]) {
                coresIguais++;
            }
        }
    }
    console.log('O número de cores iguais é: ' + coresIguais);
}

contarCoresIguais(listaDeCubos, listaDeCubos2);