// Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

function divisivelOuNao(numero) {
    let verificar = false;
    if (numero % 7 === 0) {
        verificar = true;
    }
    return verificar
}

console.log(divisivelOuNao(3));