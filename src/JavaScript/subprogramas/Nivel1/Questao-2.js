// Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

// Função para verificar se um número é divisível por 7
function divisivelOuNao(numero) {
    let verificar = false;
    if (numero % 7 === 0) {
        verificar = true;
    }
    return verificar;
}

// Chamada da função com um valor de exemplo
console.log(divisivelOuNao(3));
 