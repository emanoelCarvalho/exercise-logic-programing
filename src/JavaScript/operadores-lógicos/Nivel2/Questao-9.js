/*Identificar quando exatamente uma entre duas variáveis booleanas é falsa;*/

// Duas variáveis booleanas
let variavel1 = false;
let variavel2 = true;

// Verifique se exatamente uma entre as duas variáveis é falsa (ou exclusivo)
if (variavel1 ^ variavel2) {
    console.log('Uma variável é falsa.'); // Se exatamente uma das variáveis for falsa, imprima "Uma variável é falsa."
} else {
    console.log('Ou ambas as variáveis são falsas, ou ambas são verdadeiras.'); // Se ambas as variáveis forem falsas ou ambas forem verdadeiras, imprima "Ou ambas as variáveis são falsas, ou ambas são verdadeiras."
}
 