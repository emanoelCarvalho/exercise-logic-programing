/*Testar se um número não é primo
Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio;
*/

let numero = 23;

let contador = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contador++;
    }
}

(contador > 2 || contador < 2) ? console.log('Não é primo') : console.log('É primo');