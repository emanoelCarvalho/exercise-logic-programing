// Receber três números como parâmetros e imprimir aqueles que são múltiplos de 2 e de 3 ao mesmo tempo;

function multiplosDeDoisETres(numero1, numero2, numero3) {
    if (numero1 % 2 === 0 && numero1 % 3 === 0) {
        console.log(numero1);
    }
    if (numero2 % 2 === 0 && numero2 % 3 === 0) {
        console.log(numero2);
    }
    if (numero3 % 2 === 0 && numero3 % 3 === 0) {
        console.log(numero3);
    }
}

multiplosDeDoisETres(1,1,1);