/*Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s);*/

let numero = 12;
let contador = 0;
/*Declarei, variável contador, e numero*/

if (numero % 3 === 0) {
    contador++;
}
if (numero % 4 === 0) {
    contador++;
}
/*Fiz dois if's, para testar se um número é divisível por três, se for contador, incrementa, e se for por 4 ele incrementa também*/

if (contador < 2) {
    console.log('Divisível por 3 mas não por 4');
} else {
    console.log('Divisível por 3 e por 4');
}
/*Fiz um if, para ver se 'contador  < 2', caso seja, o número é divisível por 3 mas não por 4, caso contrário é divisível por 3 e 4*/

/*Observação :  Lógica um pouco, falha, e se caso não for divisível pelos 2 ? */