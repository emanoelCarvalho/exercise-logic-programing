/*Identificar quando exatamente uma entre duas variáveis booleanas é verdadeira (conhecido como ou exclusivo);*/

let variavel1 = true;
let variavel2 = false;

if (variavel1 ^ variavel2) {
    console.log('Uma variável é verdadeira.');
} else {
    console.log('Ambas as variáveis ou são verdadeiras ou falsas');
}