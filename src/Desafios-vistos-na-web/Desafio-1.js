// O objetivo deste código é calcular o fatorial de um número dado e verificar se o resultado desse fatorial
// é um número primo.

var numero = 5;       // O número para o qual queremos calcular o fatorial
var fatorial = 1;    // Variável para armazenar o resultado do fatorial

// Calcula o fatorial
for (var i = numero; i > 0; i--) {
    fatorial *= i;   // Multiplica fatorial pelo valor atual de 'i' para calcular o fatorial
}

// Verifica se o fatorial é primo
var cont = 0;         // Contador para contar os divisores do fatorial

// Este loop verifica quantos divisores o fatorial tem
for (var j = 1; j <= fatorial; j++) {
    if (fatorial % j == 0) {
        cont++;        // Se 'j' é um divisor de fatorial, incrementa o contador
    }
}

// Verifica se o contador de divisores é igual a 2 (número primo) e exibe a mensagem correspondente
if (cont == 2) {
    console.log('fatorial : ' + fatorial + '\n' + cont + ' É primo'); // Exibe a mensagem se for primo
} else {
    console.log('fatorial : ' + fatorial + '\n' + cont + ' Não é primo'); // Exibe a mensagem se não for primo
}
