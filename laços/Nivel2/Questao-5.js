/*Testar se um número é primo
*/

let numero = 1;
let contador = 0;


for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        contador++;
    }
}
contador === 2 ? console.log('É primo') : console.log('Não e primo');