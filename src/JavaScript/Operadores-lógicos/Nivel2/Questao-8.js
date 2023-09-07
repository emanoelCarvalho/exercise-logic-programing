/*Identificar quando exatamente uma entre duas variáveis booleanas é verdadeira (conhecido como ou exclusivo);*/

// Duas variáveis booleanas
let variavel1 = true;
let variavel2 = false;

// Verifique se exatamente uma entre as duas variáveis é verdadeira (ou exclusivo)
if (variavel1 ^ variavel2) {
    console.log('Uma variável é verdadeira.'); // Se exatamente uma das variáveis for verdadeira, imprima "Uma variável é verdadeira."
} else {
    console.log('Ambas as variáveis ou são verdadeiras ou falsas'); // Se ambas as variáveis forem verdadeiras ou ambas forem falsas, imprima "Ambas as variáveis ou são verdadeiras ou falsas"
}
