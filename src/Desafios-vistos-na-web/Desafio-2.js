// Este código gera uma lista de senhas aleatórias e as armazena em um array.

// Função para gerar uma senha aleatória
function generatePassword() {
    // Gera um número decimal aleatório entre 0 e 1
    // Converte o número em uma string usando base 20
    // Pega os últimos 10 caracteres da string para criar uma senha de 10 caracteres
    return Math.random().toString(20).slice(-10);
}

// Cria um array vazio com 5 posições e preenche cada posição com uma senha gerada
let testPassword = Array.apply(null, Array(5)).map(generatePassword);

// Imprime as senhas geradas no console
console.log(testPassword);
