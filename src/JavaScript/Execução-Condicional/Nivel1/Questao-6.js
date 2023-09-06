/* Dividir dois números inteiros e verificar se o resultado é divisível por 10;*/

let numero1 = 100;
let numero2 = 2;
let dividir = numero1 / numero2;

/*Declarei as variáveis*/

if (dividir % 10 === 0) {
    console.log(true);
} else {
    console.log(false);
}