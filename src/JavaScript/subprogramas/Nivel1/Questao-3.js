// Receber como parâmetro a aresta de um cubo e retornar volume do cubo;

// Função para calcular o volume de um cubo
function volumeCubo(aresta) {
    let volume;
    volume = aresta ** 3;
    return volume;
}

// Chamada da função com um valor de exemplo
console.log(volumeCubo(3));
