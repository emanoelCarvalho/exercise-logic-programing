// Receber como parâmetro quatro números e retornar o maior entre eles.

// Função para encontrar o maior valor entre quatro números
function maiorEntreQuatroNumeros(numero1, numero2, numero3, numero4) {
    let maior = numero1; // Suponha que o primeiro número seja o maior inicialmente

    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }
    if (numero4 > maior) {
        maior = numero4;
    }

    return maior;
}

// Chamada da função com valores de exemplo
console.log(maiorEntreQuatroNumeros(1, 1, 1, 1));
