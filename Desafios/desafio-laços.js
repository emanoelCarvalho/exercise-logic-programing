var numero = 5;
var fatorial = 1;

// Calcula o fatorial
for (var i = numero; i > 0; i--) {
    fatorial *= i;
}

// Verifica se o fatorial é primo
var cont = 0;
for (var j = 1; j <= fatorial; j++) {
    if (fatorial % j == 0) {
        cont++;
    }
}

if (cont == 2) {
    console.log('fatorial : ' + fatorial + '\n' + cont + ' É primo');
} else {
    console.log('fatorial : ' + fatorial + '\n' + cont + ' Não é primo');
}
