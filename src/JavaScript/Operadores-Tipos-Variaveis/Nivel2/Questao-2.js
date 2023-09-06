/*Imprimir média ponderada de quatro números (pesos 3, 1, 4 e 2);*/

let numero1 = 5; 
let numero2 = 5; 
let numero3 = 5; 
let numero4 = 5; /*Declarei variáveis números*/

let peso1 = 3; 
let peso2 = 1; 
let peso3 = 4; 
let peso4 = 2; /* Declarei variáveis pesos */

let mediaPonderada = ((numero1 * peso1) + (numero2 * peso2) + (numero3 + peso3) + (numero4 + peso4)) / (peso1 + peso2 + peso3 + peso4);
/*Declarei a variável mediaPonderada, para realizar a operação*/

console.log(mediaPonderada); /*/*Chamei a função do console, para imprimir a variável mediaPonderada*/