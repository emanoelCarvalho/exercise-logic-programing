// Receber como parâmetro a aresta de um cubo e retornar volume do cubo;

function  volumeCubo(aresta) {
    let volume;
    volume = aresta ** 3;
    return volume;
}

console.log(volumeCubo(3));