/* Lista de Quadrados */

class ListaDeQuadrados {
    constructor (lado, cores) {
        this.lado = lado;
        this.cores = cores;
    }
}

let listaDeQuadrados = new ListaDeQuadrados(10, ["azul", "black", "verde"]);
let listaDeQuadrados2 = new ListaDeQuadrados(20, ["azul", "vermelho", "verde"]);

function contarCoresIguais(listaDeQuadrados, listaDeQuadrados2) {
    let coresIguais = 0;
    for (let i = 0; i < listaDeQuadrados.cores.length; i++) {
        for (let j = 0; j < listaDeQuadrados2.cores.length; j++) {
            if (listaDeQuadrados.cores[i] === listaDeQuadrados2.cores[j]) {
                coresIguais++;
            }
        }
    }
    console.log('O número de cores iguais é: ' + coresIguais);
}

contarCoresIguais(listaDeQuadrados, listaDeQuadrados2);